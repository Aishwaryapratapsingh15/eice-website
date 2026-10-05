"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const catalystHeroImg = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/eice_catalyst_hero.png";
const discoverIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/Discover.svg";
const defineIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/Define.svg";
const designIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/design.svg";
const productDevelopmentIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/product-development.svg";
const deliverIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/deliver.svg";

const flow = ["Discover", "Engineer", "Automate", "Modernize", "Govern", "Measure"];

const capabilities = [
  {
    num: "01 / ENGINEERING",
    title: "AI-Enabled Engineering",
    tagline: "Build faster, with less friction, at every stage of the SDLC.",
    desc: "Applying AI across design, development, testing, documentation, and maintenance — including architecture recommendations, pair-programming, code generation, self-healing test suites, AI-generated documentation, and predictive code-health monitoring.",
    value: "Faster delivery cycles, higher developer productivity, better code quality, and less repetitive effort.",
  },
  {
    num: "02 / AGENTIC AI",
    title: "Agentic Delivery",
    tagline: "Digital teammates that plan, reason, and get work done.",
    desc: "Building and deploying intelligent agents that execute multi-step business and technology workflows, with autonomy calibrated to the task and human-in-the-loop checkpoints where oversight matters.",
    value: "End-to-end workflow automation that compresses cycle time without a linear increase in headcount.",
  },
  {
    num: "03 / MODERNIZATION",
    title: "AI-Powered Modernization",
    tagline: "Turn legacy complexity into a modern, cloud-ready estate.",
    desc: "AI-driven legacy code discovery, dependency mapping, automated comprehension and documentation, assisted refactoring and migration, cloud modernization acceleration, and technical debt quantification.",
    value: "Lower modernization effort and cost, reduced technical debt, and a faster path to modern architectures.",
  },
  {
    num: "04 / ENTERPRISE AI",
    title: "Enterprise AI Solutions",
    tagline: "Copilots and agents that know your business.",
    desc: "Designing copilots, knowledge assistants, RAG solutions, and AI agents integrated with enterprise platforms and data for contextual, secure decision support grounded in the organization's own systems.",
    value: "Secure, context-aware enterprise AI grounded in your data, systems, and processes.",
  },
  {
    num: "05 / TRUST",
    title: "Responsible AI & Governance",
    tagline: "AI you can trust, at scale, with proof to show for it.",
    desc: "Embedding security, privacy, compliance, observability, and human oversight into AI adoption — with guardrails, regulatory frameworks, model and agent observability, fairness checks, and governance controls.",
    value: "Controlled, compliant, trusted AI adoption that reduces organizational, operational, and regulatory risk.",
  },
  {
    num: "06 / VALUE",
    title: "AI Value Measurement",
    tagline: "Prove the return, not just the rollout.",
    desc: "Measuring productivity, quality, adoption, risk, and business outcomes with dashboards, defect-impact tracking, AI contribution and ROI attribution models, risk scorecards, and a continuous-improvement feedback loop.",
    value: "Measurable ROI, transparent reporting, and continuous improvement tied to business outcomes.",
    
  },
];

const bullets = [
  {
    title: "Accelerate everyday engineering",
    desc: "Bring AI into the SDLC instead of limiting it to isolated experiments.",
  },
  {
    title: "Modernize with evidence",
    desc: "Understand dependencies and technical debt before transformation work begins.",
  },
  {
    title: "Deploy trustworthy enterprise AI",
    desc: "Ground AI in organizational data and systems with governance active from the start.",
  },
  {
    title: "Prove business value",
    desc: "Replace anecdotal productivity claims with measurable evidence and continuous feedback.",
  },
];

const steps = [
  { step: "01", title: "Discover", desc: "Assess which capabilities matter most for your AI maturity and technology estate.", icon: discoverIcon },
  { step: "02", title: "Define", desc: "Scope a starting point — typically one or two capabilities, not all six.", icon: defineIcon },
  { step: "03", title: "Design", desc: "Architect the specific engineering, governance, or modernization approach.", icon: designIcon },
  { step: "04", title: "Development", desc: "Build and validate against real systems and real data, not a demo environment.", icon: productDevelopmentIcon },
  { step: "05", title: "Delivery", desc: "Deploy with governance and measurement active from day one.", icon: deliverIcon },
];

const whyEice = [
  {
    title: "Certified practices",
    desc: "CMMI Level 3, ISO 9001:2000, ISO 27001, and ISO/IEC 20000 certified — engineering and security practices independently verified, not self-declared.",
  },
  {
    title: "On-time delivery",
    desc: "Agile sprint planning keeps delivery structured and aligned to project schedules.",
  },
  {
    title: "Dedicated teams",
    desc: "Your own developers, designers, and PM — not outsourced generalists.",
  },
  {
    title: "Post-launch support",
    desc: "Ongoing monitoring, updates, and support after go-live, included.",
  },
];

const faqs = [
  {
    q: "Do we need to adopt all six capabilities, or can we start with one?",
    a: "Most organizations start with one or two — typically AI-Enabled Engineering or AI Value Measurement — and expand as the platform proves value.",
  },
  {
    q: "How is this different from your individual AI services pages?",
    a: "Those pages describe standalone capabilities you can engage separately. EICE Catalyst is the integrated version — one platform, one governance layer, one measurement framework spanning all of them together.",
  },
  {
    q: "Is Responsible AI & Governance a separate add-on, or built in from the start?",
    a: "Built in from the start — governance and value measurement are designed as core layers of the platform, not features bolted on after adoption.",
  },
  {
    q: "What does “AI-Powered Modernization” actually involve for a legacy system?",
    a: "Discovery and dependency mapping first, then a prioritized, quantified view of technical debt before any refactoring or migration work begins.",
  },
  {
    q: "Can this integrate with enterprise platforms we already run, like SAP or Salesforce?",
    a: "Yes — Enterprise AI Solutions is specifically designed to integrate with core enterprise and data platforms rather than operating as a disconnected AI layer.",
  },
];

export default function EiceCatalystPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="text-left sm:text-center py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="mt-5 flex justify-center">
          <img
            src={catalystHeroImg}
            alt="EICE Catalyst — AI Engineering, Agentic Delivery, Modernization, Enterprise AI, Governance, and Value Measurement"
            className="mx-auto mb-6 w-full max-w-xl"
            width="1321"
            height="1191"
          />
        </div>

        <span className="font-general font-semibold flex w-fit mx-auto items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
          Integrated AI Platform
        </span>

        <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk mt-[10px] max-w-4xl mx-auto py-1">
          From AI Adoption to <span className="text-bloo">AI-Driven Engineering</span>
        </h1>

        <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
          EICE Catalyst is an integrated AI platform that helps organizations build faster,
          modernize smarter, automate intelligently, and prove the value of every AI
          investment — one connected platform, not six disconnected services.
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button
            onClick={() => navigate("/products/eicerise/form?product=EICE%20Catalyst")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]"
          >
            Request a Demo
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="mx-auto max-w-4xl text-left sm:text-center">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
            One connected path from trying AI to embedding it.
          </h2>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">
            Most enterprise AI initiatives fail the same way: a pilot proves a point, then
            the value quietly evaporates because there was never a connected path from
            &ldquo;we tried AI&rdquo; to &ldquo;AI is embedded in how we actually build and
            run software.&rdquo;
          </p>
          <p className="mt-3 font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            EICE Catalyst exists to close that gap — one platform spanning the full arc from
            engineering acceleration through legacy modernization, agentic automation,
            enterprise AI, governance, and measurable value.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-start gap-2 sm:justify-center">
            {flow.map((stage, i) => (
              <React.Fragment key={stage}>
                <span className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-extrabold text-[#012060]">
                  {stage}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-[#01B0F1]" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* THE SIX CAPABILITIES */}
      <section id="capabilities" className="bg-[#F4F9FF]">
       <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
          <div className="mx-auto mb-8 max-w-4xl text-left sm:text-center">
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
              Designed as a platform, not a collection of services.
            </h2>
            <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
              Accelerate everyday engineering work, safely modernize legacy systems, deploy
              trustworthy enterprise AI, and prove return on investment — under real safety,
              compliance, and uptime pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((cap) => (
              <article
                key={cap.title}
                className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
              >
                <div className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#01B0F1]">
                  {cap.num}
                </div>
                <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mt-2 mb-[7px]">{cap.title}</h3>
                <p className="font-general font-semibold text-[#33445E]">{cap.tagline}</p>
                <p className="mt-3 font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{cap.desc}</p>
                <div className="mt-4 border-t border-[#E2E8F0] pt-4 font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#012060]">
                  <strong className="text-[#01B0F1]">Customer value:</strong> {cap.value}
                </div>
              </article>
            ))}
          </div>
       </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-14 items-center">
          <div className="rounded-[30px] bg-gradient-to-br from-[#012060] to-[#063b91] text-white p-8 sm:p-10 min-h-[280px] flex flex-col justify-center">
            <div className="font-general font-semibold text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-[#6EDBFF]">
              Why This Matters
            </div>
            <h3 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] mt-3">
              AI cannot stay a layer on top of an estate it does not understand.
            </h3>
            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#D6E7F6] mt-3">
              Catalyst connects engineering acceleration, modernization, enterprise AI,
              governance, and value measurement around the reality of complex technology
              estates.
            </p>
          </div>

          <div>
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8">
              Modern platforms. Decades-old systems. One accountable path.
            </h2>

            <div className="grid gap-5">
              {bullets.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E9F8FD] font-black text-[#01B0F1]">
                    ✓
                  </span>
                  <div>
                    <b className="font-general font-semibold text-[#012060]">{b.title}</b>
                    <p className="mt-0.5 font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process" className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Start focused. Build against reality. Scale with proof.
          </h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
            Most organizations begin with one or two capabilities, then expand as the
            platform proves value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col min-h-[220px]">
              <span className="absolute top-5 right-5 text-4xl font-bold text-[#CBD5E1]">{s.step}</span>
              <div className="w-11 h-11 flex items-center justify-center bg-blue-900 text-white rounded-lg text-xl mb-[19px]">
                <img src={s.icon} alt="icon" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">{s.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{s.desc}</p>
            </div>
            ))}
          </div>
      </section>

      {/* WHY EICE */}
      <section id="why-eice" className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div>
          <div className="mx-auto mb-8 max-w-4xl text-left sm:text-center">
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk">
              Engineering discipline behind the AI platform.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyEice.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px]">
                <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">{item.title}</h3>
                <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F4F9FF]">
       <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
              FAQs
            </h2>
            <h1 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
              Questions enterprises ask first.
            </h1>
          </div>

          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]"
              >
                <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
                  <span>Q. {item.q}</span>
                  <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-3">
                  A. {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
       </div>
      </section>

      {/* CTA */}
      <section id ="contact" className="bg-gray-50">
        <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col items-center gap-6 text-left sm:text-center">
            <div>
              <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
                Ready to Move From AI Adoption to <br />AI-Driven Engineering?
              </h2>
              <p className="mt-2 max-w-2xl mx-auto font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70">
                Talk to our team about which capabilities fit your <br/>current technology estate
                and AI maturity.
              </p>
            </div>

            <button
              onClick={() => navigate("/products/eicerise/form?product=EICE%20Catalyst")}
              className="inline-flex items-center gap-2 rounded-md bg-[#012060] px-10 py-3 text-[18px] text-white transition hover:bg-[#1E40AF]"
            >
              Request a Demo
              <img src={arrowIcon} alt="arrow" width="24" height="24" />
            </button>
          </div>
        </div>
      </section>

      <ProductCarousel slides={productSlides} />

      <ProductFooter />
    </div>
  );
}
