"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const PRODUCTS = [
  "Ask EICE (Knowledge Agent)",
  "EICE AIM (Action Agent)",
  "SmartFit",
  "EICE Rise",
  "Easylogy",
  "iSyncDrive / iSyncLite",
  "Verilock",
  "InfraSight",
  "Not sure yet",
];
const SERVICES = [
  "App development",
  "AI / ML and agents",
  "Cloud services",
  "Data analytics",
  "Digital transformation / DevOps / RPA",
  "App consulting",
  "UI/UX consulting",
  "IoT solutions",
  "Not sure yet",
];
const BUDGETS = {
  service: {
    INR: ["Under ₹5 L", "₹5–15 L", "₹15–50 L", "₹50 L–1 Cr", "Above ₹1 Cr", "Not sure yet"],
    USD: ["Under $10K", "$10–25K", "$25–75K", "$75–150K", "Above $150K", "Not sure yet"],
  },
  product: {
    INR: ["Under ₹2 L / yr", "₹2–10 L / yr", "₹10–30 L / yr", "Above ₹30 L / yr", "Not sure yet"],
    USD: ["Under $5K / yr", "$5–15K / yr", "$15–50K / yr", "Above $50K / yr", "Not sure yet"],
  },
};
const TIMELINES = ["Within 1 month", "1–3 months", "3–6 months", "Just exploring"];
const COUNTRY_CODES = ["+91", "+1", "+44", "+971", "+65"];
const ROLES = [
  "Software Engineer",
  "AI / ML Engineer",
  "DevOps / Cloud Engineer",
  "QA Engineer",
  "UI/UX Designer",
  "Business Analyst",
  "Sales / Business Development",
  "Other / open application",
];
const EXPERIENCES = ["Fresher", "1–3 years", "3–6 years", "6–10 years", "10+ years"];
const NOTICES = ["Immediate", "Up to 15 days", "30 days", "60 days", "90 days"];
const NEXT_STEPS = {
  biz: [
    "Your note goes to the team for that product or service.",
    "We reply within one business day to book a discovery call.",
    "We sign an NDA before discussing specifics.",
    "You get a scoped proposal only when you are confident it fits.",
  ],
  job: [
    "HR reviews your resume against the role.",
    "Shortlisted candidates hear from us by email or phone.",
    "Interviews cover technical skills and team fit.",
    "Open applications stay on file for future roles.",
  ],
};

const FREE_EMAIL = /@(gmail|yahoo|hotmail|outlook|live|aol|icloud|proton|protonmail)\./i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

const emptyBiz = {
  kind: "product",
  interest: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
  cc: "+91",
  phone: "",
  currency: "INR",
  budget: "",
  message: "",
  consent: false,
  website: "",
};
const emptyJob = {
  role: "",
  experience: "",
  name: "",
  email: "",
  cc: "+91",
  phone: "",
  location: "",
  notice: "",
  link: "",
  consent: false,
  website: "",
};

// +91 numbers go to the backend as the bare 10 digits (as the form always
// sent them); other country codes keep their prefix.
function phoneForBackend(cc, phone) {
  const digits = phone.replace(/\D/g, "");
  return cc === "+91" ? digits : `${cc}${digits}`;
}

function ContactForm() {
  const [tab, setTab] = useState("biz");
  const [biz, setBiz] = useState(emptyBiz);
  const [job, setJob] = useState(emptyJob);
  const [resume, setResume] = useState(null);
  const [bizErrors, setBizErrors] = useState({});
  const [jobErrors, setJobErrors] = useState({});
  const [done, setDone] = useState(null);
  const [formError, setFormError] = useState("");
  const [busy, setBusy] = useState(false);
  const [otpBox, setOtpBox] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [urlProduct, setUrlProduct] = useState("");
  const resumeRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product") || "";
    setUrlProduct(product);

    // Preselect the product/service when the link says which one it is for.
    const match = [...PRODUCTS, ...SERVICES].find((x) => x.toLowerCase() === product.toLowerCase());
    if (match) {
      setBiz((prev) => ({ ...prev, kind: SERVICES.includes(match) ? "service" : "product", interest: match }));
    }

    if (window.location.hash === "#careers") setTab("job");

    // A refresh in the middle of the OTP step keeps the OTP step.
    if (Cookies.get("name") && Cookies.get("email") && Cookies.get("contact") && Cookies.get("message")) {
      setBiz((prev) => ({ ...prev, name: Cookies.get("name"), email: Cookies.get("email") }));
      setOtpBox(true);
    }
  }, []);

  const switchTab = (next, focus) => {
    setTab(next);
    setDone(null);
    setFormError("");
    try {
      window.history.replaceState(null, "", next === "biz" ? "#business" : "#careers");
    } catch {
      // replaceState can throw in sandboxed frames; the hash is only cosmetic.
    }
    if (focus) document.getElementById(next === "biz" ? "tab-biz" : "tab-job")?.focus();
  };

  const onTabKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      switchTab(tab === "biz" ? "job" : "biz", true);
    }
  };

  const changeBiz = (e) => {
    const { name, value, type, checked } = e.target;
    setBiz((prev) => {
      const next = { ...prev, [name]: type === "checkbox" ? checked : value };
      // Switching product <-> service changes the option lists and budget ranges.
      if (name === "kind") {
        next.interest = "";
        next.budget = "";
      }
      return next;
    });
    if (bizErrors[name]) setBizErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const changeJob = (e) => {
    const { name, value, type, checked } = e.target;
    setJob((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (jobErrors[name]) setJobErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const pickCurrency = (currency) => {
    setBiz((prev) => ({ ...prev, currency, budget: "" }));
  };

  const validateBiz = () => {
    const errors = {};
    if (!biz.interest) errors.interest = "Choose an option.";
    if (!biz.timeline) errors.timeline = "Choose an option.";
    if (!biz.name.trim()) errors.name = "This field is required.";
    if (!biz.email.trim()) errors.email = "This field is required.";
    else if (!EMAIL.test(biz.email.trim())) errors.email = "Enter a valid email, like name@company.com.";
    else if (FREE_EMAIL.test(biz.email.trim())) errors.email = "Use your work email so we can match you with your company.";
    if (!biz.company.trim()) errors.company = "This field is required.";
    if (!biz.phone.trim()) errors.phone = "This field is required.";
    else if (biz.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
    if (!biz.budget) errors.budget = "Pick a range, or choose Not sure yet.";
    if (!biz.consent) errors.consent = "Please confirm to continue.";
    return errors;
  };

  const validateJob = () => {
    const errors = {};
    if (!job.role) errors.role = "Choose an option.";
    if (!job.experience) errors.experience = "Choose an option.";
    if (!job.name.trim()) errors.name = "This field is required.";
    if (!job.email.trim()) errors.email = "This field is required.";
    else if (!EMAIL.test(job.email.trim())) errors.email = "Enter a valid email, like name@company.com.";
    if (!job.phone.trim()) errors.phone = "This field is required.";
    else if (job.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
    if (!job.location.trim()) errors.location = "This field is required.";
    if (!job.notice) errors.notice = "Choose an option.";
    if (job.link.trim() && !/^https?:\/\/.+\..+/.test(job.link.trim())) errors.link = "Start with https://";
    if (!resume) errors.resume = "Attach your resume.";
    else if (resume.size > MAX_RESUME_BYTES) errors.resume = "File is larger than 5 MB.";
    else if (!/\.(pdf|docx?)$/i.test(resume.name)) errors.resume = "Use a PDF or Word file.";
    if (!job.consent) errors.consent = "Please confirm to continue.";
    return errors;
  };

  const focusFirst = (errors, order, prefix) => {
    const first = order.find((key) => errors[key]);
    if (first) document.getElementById(`${prefix}-${first}`)?.focus();
  };

  // ---- Business enquiry: same email-OTP flow the form always used --------

  const sendOtp = async (e) => {
    e.preventDefault();
    setFormError("");
    const errors = validateBiz();
    setBizErrors(errors);
    if (Object.keys(errors).length) {
      focusFirst(errors, ["interest", "timeline", "name", "email", "company", "phone", "budget", "consent"], "biz");
      return;
    }
    if (biz.website) {
      // Spam trap filled in: pretend it worked, send nothing.
      setDone("biz");
      return;
    }

    setBusy(true);
    try {
      const response = await axios.post("/api/otp", { email: biz.email.trim() });
      if (response.data.status == 200) {
        // The backend takes name, email, contact, message and product, so the
        // other answers travel at the top of the message.
        const details = [
          `Looking for: ${biz.kind === "product" ? "A product demo" : "A services project"}`,
          `Interested in: ${biz.interest}`,
          `Expected start: ${biz.timeline}`,
          `Company: ${biz.company.trim()}`,
          `Budget (${biz.currency}): ${biz.budget}`,
        ].join("\n");
        const message = biz.message.trim() ? `${details}\n\n${biz.message.trim()}` : details;
        Cookies.set("email", biz.email.trim(), { expires: 1 });
        Cookies.set("contact", phoneForBackend(biz.cc, biz.phone), { expires: 1 });
        Cookies.set("name", biz.name.trim(), { expires: 1 });
        Cookies.set("message", message, { expires: 1 });
        Cookies.set("product", urlProduct || biz.interest, { expires: 1 });
        setOtpBox(true);
      } else {
        setFormError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setFormError("Something went wrong. Please try again later.");
    }
    setBusy(false);
  };

  const clearBizCookies = () => {
    Cookies.remove("email");
    Cookies.remove("contact");
    Cookies.remove("name");
    Cookies.remove("message");
    Cookies.remove("product");
  };

  const changeEmail = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await axios.post("/api/change-email", { email: Cookies.get("email") });
    } catch (error) {
      console.log(error);
    }
    clearBizCookies();
    setOtpBox(false);
    setOtp("");
    setOtpError("");
    setBiz((prev) => ({ ...prev, email: "" }));
    setBusy(false);
  };

  const submitOtp = async (e) => {
    e.preventDefault();
    setOtpError("");
    setBusy(true);
    try {
      const response = await axios.post("/api/submit", {
        otp,
        name: Cookies.get("name"),
        email: Cookies.get("email"),
        contact: Cookies.get("contact"),
        message: Cookies.get("message"),
        product: Cookies.get("product"),
      });
      if (response.data.status != 200) {
        setOtpError("That OTP is not correct. Please try again.");
        setBusy(false);
        return;
      }
      clearBizCookies();
      setOtpBox(false);
      setOtp("");
      setBiz(emptyBiz);
      setDone("biz");
    } catch (error) {
      console.log(error);
      clearBizCookies();
      setOtpBox(false);
      setOtp("");
      setFormError("Something went wrong. Please fill in the form and try again.");
    }
    setBusy(false);
  };

  // ---- Job application ---------------------------------------------------

  const submitJob = async (e) => {
    e.preventDefault();
    setFormError("");
    const errors = validateJob();
    setJobErrors(errors);
    if (Object.keys(errors).length) {
      focusFirst(
        errors,
        ["role", "experience", "name", "email", "phone", "location", "notice", "link", "resume", "consent"],
        "job",
      );
      return;
    }
    if (job.website) {
      setDone("job");
      return;
    }

    setBusy(true);
    try {
      const data = new FormData();
      data.append("role", job.role);
      data.append("experience", job.experience);
      data.append("name", job.name.trim());
      data.append("email", job.email.trim());
      data.append("phone", phoneForBackend(job.cc, job.phone));
      data.append("location", job.location.trim());
      data.append("notice", job.notice);
      data.append("link", job.link.trim());
      data.append("resume", resume);
      data.append("source", "contact-careers");
      const response = await axios.post("/api/careers", data);
      if (response.data.status == 200 || response.status === 200) {
        setJob(emptyJob);
        setResume(null);
        if (resumeRef.current) resumeRef.current.value = "";
        setDone("job");
      } else {
        setFormError("We could not send your application. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setFormError("We could not send your application. Please try again later.");
    }
    setBusy(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-28 2xl:pt-8 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-4">
        <header className="lg:col-span-2 max-w-3xl">
          <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk py-1">
            Contact EICE Technology
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-2">
            We route your message to the right team. Every engagement starts under NDA.
          </p>
        </header>

        <section aria-label="Contact forms" className="rounded-[18px] border border-[#E6EAF1] bg-white">
          <div role="tablist" aria-label="Reason for contacting us" className="flex border-b border-[#E6EAF1] px-2">
            <button
              type="button"
              role="tab"
              id="tab-biz"
              aria-controls="panel-biz"
              aria-selected={tab === "biz"}
              tabIndex={tab === "biz" ? 0 : -1}
              onClick={() => switchTab("biz")}
              onKeyDown={onTabKeyDown}
              className={`-mb-px border-b-2 px-3.5 py-3 font-inter text-[16px] font-medium transition-colors ${tab === "biz" ? "border-[#012060] text-blackk" : "border-transparent text-blackk/60 hover:text-blackk"}`}
            >
              Business enquiry
            </button>
            <button
              type="button"
              role="tab"
              id="tab-job"
              aria-controls="panel-job"
              aria-selected={tab === "job"}
              tabIndex={tab === "job" ? 0 : -1}
              onClick={() => switchTab("job")}
              onKeyDown={onTabKeyDown}
              className={`-mb-px border-b-2 px-3.5 py-3 font-inter text-[16px] font-medium transition-colors ${tab === "job" ? "border-[#012060] text-blackk" : "border-transparent text-blackk/60 hover:text-blackk"}`}
            >
              Job application
            </button>
          </div>

          {done ? (
            <div role="status" aria-live="polite" className="px-4 py-9 sm:px-6">
              <h2 className="font-general font-semibold text-[24px] leading-[1.2] text-blackk">
                {done === "job" ? "Application received" : "Thanks, we have your request"}
              </h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] leading-[1.6] mt-2">
                {done === "job"
                  ? "We will review your resume and get back to you if there is a match."
                  : "A member of our team will contact you within one business day."}
              </p>
              <button
                type="button"
                onClick={() => setDone(null)}
                className="mt-5 rounded-md bg-[#012060] px-10 py-3 font-inter text-[18px] font-medium text-white transition hover:bg-[#1E40AF]"
              >
                Send another
              </button>
            </div>
          ) : null}

          {/* ---------------- Business enquiry ---------------- */}
          <div id="panel-biz" role="tabpanel" aria-labelledby="tab-biz" hidden={tab !== "biz" || !!done} className="px-4 py-5 sm:px-6">
            <form onSubmit={sendOtp} noValidate className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
                <label>
                  Leave blank
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={biz.website} onChange={changeBiz} />
                </label>
              </div>

              <fieldset className="sm:col-span-2 min-w-0 border-0 p-0">
                <legend className="mb-1 font-inter text-[14px] font-medium text-blackk">What are you looking for?</legend>
                <div className="flex flex-wrap gap-2">
                  <label className="relative">
                    <input type="radio" name="kind" value="product" checked={biz.kind === "product"} onChange={changeBiz} className="peer sr-only" />
                    <span className="inline-block min-h-[34px] cursor-pointer rounded-lg border border-[#CBD5E1] bg-white px-3 py-1.5 font-inter text-[14px] text-blackk peer-checked:border-[#012060] peer-checked:bg-bloo/10 peer-checked:font-medium peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#012060]">
                      A product demo
                    </span>
                  </label>
                  <label className="relative">
                    <input type="radio" name="kind" value="service" checked={biz.kind === "service"} onChange={changeBiz} className="peer sr-only" />
                    <span className="inline-block min-h-[34px] cursor-pointer rounded-lg border border-[#CBD5E1] bg-white px-3 py-1.5 font-inter text-[14px] text-blackk peer-checked:border-[#012060] peer-checked:bg-bloo/10 peer-checked:font-medium peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#012060]">
                      A services project
                    </span>
                  </label>
                </div>
              </fieldset>

              <div>
                <label htmlFor="biz-interest" className="mb-1 block font-inter text-[14px] font-medium text-blackk">
                  {biz.kind === "product" ? "Which product?" : "Which service?"}
                </label>
                <select
                  id="biz-interest"
                  name="interest"
                  value={biz.interest}
                  onChange={changeBiz}
                  aria-invalid={!!bizErrors.interest}
                  aria-describedby={bizErrors.interest ? "biz-interest-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                >
                  <option value="">Select</option>
                  {(biz.kind === "product" ? PRODUCTS : SERVICES).map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {bizErrors.interest && <p id="biz-interest-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.interest}</p>}
              </div>

              <div>
                <label htmlFor="biz-timeline" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Expected start</label>
                <select
                  id="biz-timeline"
                  name="timeline"
                  value={biz.timeline}
                  onChange={changeBiz}
                  aria-invalid={!!bizErrors.timeline}
                  aria-describedby={bizErrors.timeline ? "biz-timeline-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                >
                  <option value="">Select</option>
                  {TIMELINES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {bizErrors.timeline && <p id="biz-timeline-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.timeline}</p>}
              </div>

              <div>
                <label htmlFor="biz-name" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Full name</label>
                <input
                  id="biz-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={biz.name}
                  onChange={changeBiz}
                  aria-invalid={!!bizErrors.name}
                  aria-describedby={bizErrors.name ? "biz-name-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                />
                {bizErrors.name && <p id="biz-name-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="biz-email" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Work email</label>
                <input
                  id="biz-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={biz.email}
                  onChange={changeBiz}
                  disabled={otpBox}
                  aria-invalid={!!bizErrors.email}
                  aria-describedby={bizErrors.email ? "biz-email-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700 disabled:bg-[#F8FAFC]"
                />
                {bizErrors.email && <p id="biz-email-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="biz-company" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Company</label>
                <input
                  id="biz-company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={biz.company}
                  onChange={changeBiz}
                  aria-invalid={!!bizErrors.company}
                  aria-describedby={bizErrors.company ? "biz-company-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                />
                {bizErrors.company && <p id="biz-company-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.company}</p>}
              </div>

              <div>
                <label htmlFor="biz-phone" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Phone</label>
                <div className="grid grid-cols-[96px_1fr] gap-2">
                  <select
                    name="cc"
                    aria-label="Country code"
                    value={biz.cc}
                    onChange={changeBiz}
                    className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060]"
                  >
                    {COUNTRY_CODES.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <input
                    id="biz-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel-national"
                    inputMode="tel"
                    value={biz.phone}
                    onChange={changeBiz}
                    aria-invalid={!!bizErrors.phone}
                    aria-describedby={bizErrors.phone ? "biz-phone-error" : undefined}
                    className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                  />
                </div>
                {bizErrors.phone && <p id="biz-phone-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.phone}</p>}
              </div>

              <fieldset className="sm:col-span-2 min-w-0 border-0 p-0">
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <legend className="font-inter text-[14px] font-medium text-blackk">
                    {biz.kind === "product" ? "Annual budget (licence or subscription)" : "Project budget"}
                  </legend>
                  <div role="group" aria-label="Currency" className="inline-flex overflow-hidden rounded-lg border border-[#CBD5E1]">
                    <button
                      type="button"
                      aria-pressed={biz.currency === "INR"}
                      onClick={() => pickCurrency("INR")}
                      className={`tap-sm px-2.5 py-1.5 font-inter text-[14px] font-medium ${biz.currency === "INR" ? "bg-[#012060] text-white" : "text-blackk/60"}`}
                    >
                      ₹ INR
                    </button>
                    <button
                      type="button"
                      aria-pressed={biz.currency === "USD"}
                      onClick={() => pickCurrency("USD")}
                      className={`tap-sm px-2.5 py-1.5 font-inter text-[14px] font-medium ${biz.currency === "USD" ? "bg-[#012060] text-white" : "text-blackk/60"}`}
                    >
                      $ USD
                    </button>
                  </div>
                </div>
                <div id="biz-budget" tabIndex={-1} className="flex flex-wrap gap-2">
                  {BUDGETS[biz.kind][biz.currency].map((range) => (
                    <label key={range} className="relative">
                      <input type="radio" name="budget" value={range} checked={biz.budget === range} onChange={changeBiz} className="peer sr-only" />
                      <span className="inline-block min-h-[34px] cursor-pointer rounded-lg border border-[#CBD5E1] bg-white px-3 py-1.5 font-inter text-[14px] text-blackk peer-checked:border-[#012060] peer-checked:bg-bloo/10 peer-checked:font-medium peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#012060]">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="mt-1.5 font-inter text-[14px] text-blackk/60">A rough range is fine. It is not a commitment.</p>
                {bizErrors.budget && <p role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.budget}</p>}
              </fieldset>

              <div className="sm:col-span-2">
                <label htmlFor="biz-message" className="mb-1 block font-inter text-[14px] font-medium text-blackk">
                  What are you trying to solve? <span className="font-normal text-blackk/60">(optional)</span>
                </label>
                <textarea
                  id="biz-message"
                  name="message"
                  rows={2}
                  maxLength={600}
                  value={biz.message}
                  onChange={changeBiz}
                  placeholder="A line or two is enough"
                  className="w-full min-h-[64px] resize-y rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk placeholder:text-blackk/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-2.5 font-inter text-[14px] text-blackk/70">
                  <input
                    id="biz-consent"
                    type="checkbox"
                    name="consent"
                    checked={biz.consent}
                    onChange={changeBiz}
                    aria-invalid={!!bizErrors.consent}
                    className="mt-1 h-[18px] w-[18px] shrink-0 accent-[#012060]"
                  />
                  <span>
                    I agree to EICE contacting me, per the{" "}
                    <a href="https://www.eicetechnology.com/privacy-policy" className="text-[#012060] underline">Privacy Policy</a>.
                  </span>
                </label>
                {bizErrors.consent && <p role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{bizErrors.consent}</p>}
              </div>

              {formError && tab === "biz" && (
                <p role="alert" className="sm:col-span-2 font-inter text-[14px] text-red-700">{formError}</p>
              )}

              {!otpBox && (
                <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={busy}
                    className="rounded-md bg-[#012060] px-10 py-3 font-inter text-[18px] font-medium text-white transition hover:bg-[#1E40AF] disabled:cursor-wait disabled:opacity-60"
                  >
                    Request a call
                  </button>
                  <span className="font-inter text-[14px] text-blackk/60">Typical reply: 1 business day</span>
                </div>
              )}
            </form>

            {otpBox && (
              <form onSubmit={submitOtp} className="mt-4 grid grid-cols-1 gap-3.5 border-t border-[#E6EAF1] pt-4 sm:grid-cols-2">
                <p role="status" aria-live="polite" className="sm:col-span-2 font-inter text-[14px] text-[#012060]">
                  An OTP has been sent to your email address: {Cookies.get("email") || biz.email}
                </p>
                <div className="sm:col-span-2">
                  <label htmlFor="biz-otp" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Enter OTP</label>
                  <input
                    id="biz-otp"
                    type="text"
                    name="otp"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Please enter your OTP"
                    required
                    aria-invalid={!!otpError}
                    aria-describedby={otpError ? "biz-otp-error" : undefined}
                    className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                  />
                  {otpError && <p id="biz-otp-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{otpError}</p>}
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={busy}
                    className="rounded-md bg-[#012060] px-10 py-3 font-inter text-[18px] font-medium text-white transition hover:bg-[#1E40AF] disabled:cursor-wait disabled:opacity-60"
                  >
                    Submit OTP
                  </button>
                  <button
                    type="button"
                    onClick={changeEmail}
                    disabled={busy}
                    className="rounded-md border-2 border-[#012060] px-8 py-3 font-inter text-[18px] font-medium text-[#012060] transition hover:bg-blue-50 disabled:cursor-wait disabled:opacity-60"
                  >
                    Change email address
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ---------------- Job application ---------------- */}
          <div id="panel-job" role="tabpanel" aria-labelledby="tab-job" hidden={tab !== "job" || !!done} className="px-4 py-5 sm:px-6">
            <form onSubmit={submitJob} noValidate className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
                <label>
                  Leave blank
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={job.website} onChange={changeJob} />
                </label>
              </div>

              <div>
                <label htmlFor="job-role" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Position</label>
                <select
                  id="job-role"
                  name="role"
                  value={job.role}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.role}
                  aria-describedby={jobErrors.role ? "job-role-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                >
                  <option value="">Select a role</option>
                  {ROLES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {jobErrors.role && <p id="job-role-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.role}</p>}
              </div>

              <div>
                <label htmlFor="job-experience" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Experience</label>
                <select
                  id="job-experience"
                  name="experience"
                  value={job.experience}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.experience}
                  aria-describedby={jobErrors.experience ? "job-experience-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                >
                  <option value="">Select</option>
                  {EXPERIENCES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {jobErrors.experience && <p id="job-experience-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.experience}</p>}
              </div>

              <div>
                <label htmlFor="job-name" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Full name</label>
                <input
                  id="job-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={job.name}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.name}
                  aria-describedby={jobErrors.name ? "job-name-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                />
                {jobErrors.name && <p id="job-name-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="job-email" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Email</label>
                <input
                  id="job-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={job.email}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.email}
                  aria-describedby={jobErrors.email ? "job-email-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                />
                {jobErrors.email && <p id="job-email-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="job-phone" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Phone</label>
                <div className="grid grid-cols-[96px_1fr] gap-2">
                  <select
                    name="cc"
                    aria-label="Country code"
                    value={job.cc}
                    onChange={changeJob}
                    className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060]"
                  >
                    {COUNTRY_CODES.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <input
                    id="job-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel-national"
                    inputMode="tel"
                    value={job.phone}
                    onChange={changeJob}
                    aria-invalid={!!jobErrors.phone}
                    aria-describedby={jobErrors.phone ? "job-phone-error" : undefined}
                    className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                  />
                </div>
                {jobErrors.phone && <p id="job-phone-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.phone}</p>}
              </div>

              <div>
                <label htmlFor="job-location" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Current location</label>
                <input
                  id="job-location"
                  type="text"
                  name="location"
                  autoComplete="address-level2"
                  value={job.location}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.location}
                  aria-describedby={jobErrors.location ? "job-location-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                />
                {jobErrors.location && <p id="job-location-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.location}</p>}
              </div>

              <div>
                <label htmlFor="job-notice" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Notice period</label>
                <select
                  id="job-notice"
                  name="notice"
                  value={job.notice}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.notice}
                  aria-describedby={jobErrors.notice ? "job-notice-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                >
                  <option value="">Select</option>
                  {NOTICES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {jobErrors.notice && <p id="job-notice-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.notice}</p>}
              </div>

              <div>
                <label htmlFor="job-link" className="mb-1 block font-inter text-[14px] font-medium text-blackk">
                  LinkedIn or portfolio <span className="font-normal text-blackk/60">(optional)</span>
                </label>
                <input
                  id="job-link"
                  type="url"
                  name="link"
                  placeholder="https://"
                  value={job.link}
                  onChange={changeJob}
                  aria-invalid={!!jobErrors.link}
                  aria-describedby={jobErrors.link ? "job-link-error" : undefined}
                  className="w-full min-h-[40px] rounded-lg border border-[#CBD5E1] bg-white px-3 py-2 font-inter text-[16px] text-blackk placeholder:text-blackk/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012060] aria-[invalid=true]:border-red-700"
                />
                {jobErrors.link && <p id="job-link-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.link}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="job-resume" className="mb-1 block font-inter text-[14px] font-medium text-blackk">Resume</label>
                <label
                  htmlFor="job-resume"
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-[#CBD5E1] px-3.5 py-2.5 font-inter text-[15px] text-blackk/70 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#012060]"
                >
                  <span className="min-w-0 truncate">{resume ? resume.name : "PDF or Word, up to 5 MB"}</span>
                  <b className="shrink-0 font-medium text-[#012060]">Choose file</b>
                </label>
                <input
                  id="job-resume"
                  ref={resumeRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    setResume(e.target.files[0] || null);
                    if (jobErrors.resume) setJobErrors((prev) => ({ ...prev, resume: "" }));
                  }}
                  aria-invalid={!!jobErrors.resume}
                  aria-describedby={jobErrors.resume ? "job-resume-error" : undefined}
                  className="sr-only"
                />
                {jobErrors.resume && <p id="job-resume-error" role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.resume}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-2.5 font-inter text-[14px] text-blackk/70">
                  <input
                    id="job-consent"
                    type="checkbox"
                    name="consent"
                    checked={job.consent}
                    onChange={changeJob}
                    aria-invalid={!!jobErrors.consent}
                    className="mt-1 h-[18px] w-[18px] shrink-0 accent-[#012060]"
                  />
                  <span>
                    I agree to EICE storing my details for recruitment, per the{" "}
                    <a href="https://www.eicetechnology.com/privacy-policy" className="text-[#012060] underline">Privacy Policy</a>.
                  </span>
                </label>
                {jobErrors.consent && <p role="alert" className="mt-1.5 font-inter text-[14px] text-red-700">{jobErrors.consent}</p>}
              </div>

              {formError && tab === "job" && (
                <p role="alert" className="sm:col-span-2 font-inter text-[14px] text-red-700">{formError}</p>
              )}

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={busy}
                  className="rounded-md bg-[#012060] px-10 py-3 font-inter text-[18px] font-medium text-white transition hover:bg-[#1E40AF] disabled:cursor-wait disabled:opacity-60"
                >
                  Submit application
                </button>
              </div>
            </form>
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px]">
            <h2 className="mb-3 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">What happens next</h2>
            <ul className="list-disc space-y-1.5 pl-5 font-inter text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
              {NEXT_STEPS[tab].map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px]">
            <h2 className="mb-3 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">Reach us directly</h2>
            <p className="mb-3 font-inter text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
              <a href="mailto:info@eicetechnology.com" className="break-all text-[#012060] underline">info@eicetechnology.com</a>
            </p>
            <p className="mb-3 font-inter text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
              <b className="font-medium text-[#373737]">India</b>
              <br />
              6th floor, Platina Heights, C-24, Sector 62, Noida, Uttar Pradesh 201301
            </p>
            <p className="font-inter text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
              <b className="font-medium text-[#373737]">USA</b>
              <br />
              11011 Richmond Ave, Suite 715, Houston, TX 77042
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ContactForm;
