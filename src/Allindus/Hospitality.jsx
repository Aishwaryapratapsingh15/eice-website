"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "@/nextNavigation";
import TalkToUs from "../Othercomps/Talktous";
import ProductFooter from "@/Product/ProductFooter";
import { FaQuoteLeft } from "react-icons/fa";

const heroImg1 = "https://d3r43jacxrwsrp.cloudfront.net/industries_hospitality/hero_1.png";
const heroImg2 = "https://d3r43jacxrwsrp.cloudfront.net/industries_hospitality/hero_2.png";
const heroImg3 = "https://d3r43jacxrwsrp.cloudfront.net/industries_hospitality/hero_3.png";

const BASE = "https://d3r43jacxrwsrp.cloudfront.net/industries_hospitality";

// service images
const imgRoom    = `${BASE}/room_and_venue.png`;
const imgFnb     = `${BASE}/food_and_beverages.png`;
const imgBanquet = `${BASE}/banquet_and_event.png`;
const imgMember  = `${BASE}/member_and_guest.png`;
const imgFinance = `${BASE}/finance_hr.png`;
const imgVendor  = `${BASE}/vendor_and_Inventory.png`;

// implementation step icons
const iconPlan       = `${BASE}/Plan.svg`;
const iconImplement  = `${BASE}/Implement.svg`;
const iconTraining   = `${BASE}/Training.svg`;
const iconDeployment = `${BASE}/Deployment.svg`;
const iconFeedback   = `${BASE}/Feedback.svg`;
const iconOngoing    = `${BASE}/Ongoing.svg`;
const iconArrow      = `${BASE}/Arrow.svg`;

// ─── SERVICE DATA ────────────────────────────────────────────────────────────

const services = [
  {
    id: "room",
    title: "Room & Venue Management",
    icon: "🏨",
    image: imgRoom,
    challenge:
      "Managing room reservations, check-ins, check-outs, Guest service, housekeeping, F&B Food and venue bookings with catering & Vendor alignment across multiple event types manually leads to double bookings, revenue loss, and frustrated guests.",
    solution:
      "EICE Rise delivers complete room and venue control — manage suite, deluxe, and standard reservations with digital check-in/out, integrated Wi-Fi, housekeeping, and room service F&B. Online venue booking lets you seamlessly receive, track, and convert event enquiries. Integrated store and vendor management ensures every single guest need is fully covered.",
    modules: [
      "Room Booking", "Venue Booking", "Online Wi-Fi module", "Accounts and billing",
      "Employee Suite", "Compliance Register", "Dining POS", "User Request-Indent",
      "Store & Inventory", "F&B Cost Analysis", "Purchase Vendor Mgmt", "Budget",
    ],
  __w: 1174, __h: 950},
  {
    id: "fnb",
    title: "Food & Beverage Operations",
    icon: "🍽️",
    image: imgFnb,
    challenge:
      "Disconnected kitchen systems, manual order taking, language barriers between staff, and untracked food costs silently erode restaurant and hotel F&B profitability every single day.",
    solution:
      "EICE Rise Dining POS enables smooth order management and billing on tablet or web. F&B Cost Analysis tracks consumption and optimizes costing across your property. EICEVoice — India's first voice-to-kitchen NLU platform — lets staff place orders hands-free in natural language, reducing errors and dramatically speeding up overall service delivery.",
    modules: [
      "Dining POS", "F&B Cost Analysis", "EICEVoice", "Accounts and billing",
      "User Request-Indent", "Purchase Vendor Mgmt.", "Store & Inventory",
    ],
  __w: 1174, __h: 950},
  {
    id: "banquet",
    title: "Banquet & Event Management",
    icon: "🎪",
    image: imgBanquet,
    challenge:
      "Organizing weddings, conferences, and large-scale events involves juggling venue slots, catering, billing, attendance tracking, and last-minute changes — all prone to manual errors and miscommunication.",
    solution:
      "EICE Rise streamlines your entire event lifecycle — fully automate slot management, billing, and bookings for weddings, conferences, and parties via Banquet and Billing. Audience Attendance handles QR-based entry and targeted email invitations for all guests. Every event runs on time, on budget, and on record with zero manual coordination.",
    modules: [
      "Banquet & Billing", "Audience Attendance", "Venue Booking Online",
      "Accounts and billing", "Dining POS", "Employee Suite", "User Request-Indent",
      "Store & Inventory", "Feedback System", "F&B Cost Analysis", "Purchase Vendor Mgmt",
    ],
  __w: 1174, __h: 950},
  {
    id: "member",
    title: "Member & Guest Management",
    icon: "🤝",
    image: imgMember,
    challenge:
      "Clubs and hospitality institutions struggle to maintain consistent member engagement, manage subscriptions, track service usage, and provide self-service access — especially for geographically dispersed members.",
    solution:
      "EICE Rise Member Suite simplifies membership management with customizable plans, subscription tracking, and secure portal access. The Member Portal lets members manage bookings, access services, and stay connected to the community. The WiFi Module ensures secure internet access, while the Feedback System captures real-time insights to continuously improve service quality.",
    modules: ["Member Suite", "Member Portal", "WiFi Module", "Feedback System"],
  __w: 1174, __h: 950},
  {
    id: "finance",
    title: "Finance, HR & Compliance",
    icon: "📊",
    image: imgFinance,
    challenge:
      "Managing payroll, employee records, financial transactions, regulatory compliance, and budget planning across departments with disconnected tools leads to errors, delays, and audit risks.",
    solution:
      "EICE Rise handles all back-office needs — Accounts and Finance for receivables, payables, taxation, and balance sheet automation; Employee Suite for digital service books, attendance, and HR portals; Payroll for automated salary structures; Budget for precise department-wise financial planning; and Compliance Register for fully audit-ready regulatory tracking and timely renewal.",
    modules: [
      "Accounts and Finance", "Employee Suite", "Payroll", "Budget", "Compliance Register",
    ],
  __w: 1174, __h: 950},
  {
    id: "vendor",
    title: "Vendor & Inventory Management",
    icon: "📦",
    image: imgVendor,
    challenge:
      "Tracking vendor interactions, managing purchase orders, monitoring stock levels, and reconciling inventory across a hospitality property is time-consuming and error-prone without a centralized system.",
    solution:
      "EICE Rise connects your entire supply chain end-to-end. The Purchase and Vendor Portal streamlines vendor collaboration with real-time order tracking and digital bill submission. User, Store and Inventory efficiently handles material requests, stock issuance, and reconciliation — keeping everything centralized, connected, and under complete operational control across your entire property.",
    modules: ["Purchase & Vendor Portal", "User, Store & Inventory"],
  __w: 1174, __h: 950},
];

// ─── IMPLEMENTATION STEPS ────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Plan",
    icon: iconPlan,
    desc: "We define project scope, resources, and timeline — understanding your property's unique workflows and operational needs for a seamless rollout.",
  },
  {
    number: "02",
    title: "Implement",
    icon: iconImplement,
    desc: "Our team configures, customizes, and deploys the EICE Rise ERP platform tailored precisely to your hotel, club, restaurant, or institution.",
  },
  {
    number: "03",
    title: "Training",
    icon: iconTraining,
    desc: "We provide comprehensive user training and operational guidance across all roles — ensuring your staff can confidently use the system from day one.",
  },
  {
    number: "04",
    title: "Deployment",
    icon: iconDeployment,
    desc: "We release and monitor the live system closely, ensuring optimal performance, stability, and a smooth transition for your guests and team.",
  },
  {
    number: "05",
    title: "Feedback & Ongoing Iteration",
    icon: iconFeedback,
    desc: "We continuously gather user feedback post-launch to refine, enhance, and evolve the platform — keeping it aligned with your growing needs.",
  },
  {
    number: "06",
    title: "Support",
    icon: iconOngoing,
    desc: "24/7 technical support, regular updates, and a customer-driven improvement cycle — so your operations are always running at their best.",
  },
];

// ─── CASE STUDIES ────────────────────────────────────────────────────────────

const cs_industries = [
  { id: "Hospitality", name: "Hospitality" },
  { id: "Oil and Gas", name: "Oil and Gas" },
  { id: "Healthcare industry", name: "Healthcare industry" },
  { id: "automobile industry", name: "automobile industry" },
];

const cs_projects = {
  "Hospitality": [
    {
      title: "Transforming Operational Efficiency for SalesVu",
      description: "HDBS sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed global community while maintaining...",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Rise/caseStudy/android.webp",
    },
    {
      title: "Empowering Community Operations for Houston Durga Bari Society",
      description: "The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency across admin, user, and guest roles.",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Rise/caseStudy/durga.webp",
    },
    {
      title: "Empowering Indian International Center (IIC)",
      description: "The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency across admin, user, and guest roles.",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Rise/caseStudy/IIC.webp",
    },
  ],
  "Oil and Gas": [
    {
      title: "Noralta SCADA Implementation",
      description: "Robust industrial control system enabling real-time monitoring and control of field operations for Noralta.",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/scada.jpg",
    },
    {
      title: "PetroSIM Refinery Simulation",
      description: "Comprehensive petroleum simulation tool for refinery operations with advanced modeling and process optimization.",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/petrosim.jpeg",
    },
  ],
  "Healthcare industry": [
    {
      title: "AI-Powered Healthcare Solutions",
      description: "Transforming patient care with intelligent diagnostics, telemedicine, and clinical management platforms.",
      img: "https://d3r43jacxrwsrp.cloudfront.net/medical/aipdt.jpeg",
    },
  ],
  "automobile industry": [
    {
      title: "Autonomous Driving AI",
      description: "Machine learning model improving object detection accuracy by 30% in diverse weather conditions.",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Automobile/adai.jpeg",
    },
  ],
};

const CaseStudy = ({ title, description, image }) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={image?.src || image}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="p-3 md:p-4">
        <h3 className="fontweight_1 text-[24px] sm:text-base md:text-lg mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-600 text-[16px] sm:text-sm">{description}</p>
      </div>
    </div>
  </div>
);

function Cstdmain() {
  const [activeIndustry, setActiveIndustry] = useState(cs_industries[0].id);
  return (
    <div className="font-manrope px-5 sm:px-6 lg:px-8">
      <h2 className="text-bloo fontweight_1 text-center text-[22px] sm:text-[25px] py-2">
        Case Studies
      </h2>
      <h1 className="text-blackk fontweight_1 text-center text-[32px] sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-8">
        Explore how we digitally transformed other businesses
      </h1>
      <main className="mx-auto max-w-7xl">
        <nav className="mb-8 sm:mb-12">
          <ul className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-4">
            {cs_industries.map((industry) => (
              <li key={industry.id} className="w-full sm:w-auto">
                <button
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full sm:w-auto px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${
                    activeIndustry === industry.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {industry.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {cs_industries.map((industry) => (
          <section
            key={industry.id}
            className={`mb-12 ${activeIndustry === industry.id ? "block" : "hidden"}`}
          >
            <h2 className="text-[24px] px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">
              {industry.name}
            </h2>
            <div className="flex flex-wrap -mx-2">
              {(cs_projects[industry.id] || []).map((project, index) => (
                <CaseStudy
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.img}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    title: "From Chaos to Clarity — All in One Platform",
    quote:
      "Managing a property of our scale meant juggling reservations, banquet bookings, member accounts, and vendor payments across multiple disconnected systems. EICE Rise brought everything under one roof. Our front desk response time dropped significantly, our finance team finally has real-time visibility, and our monthly close that used to take a week now takes two days. It's not just software — it's how our entire operation breathes now.",
    name: "Rajesh Mehra",
    role: "General Manager, Grandeur Hospitality Group",
  },
  {
    title: "A System That Scales With Our Ambition",
    quote:
      "As a growing institution managing members across geographies, we needed a platform that could handle complexity without making things complex for our team. EICE Rise delivered exactly that. Role-based access, automated financial workflows, real-time event management — everything works together seamlessly. What impressed us most was how quickly the system adapted to our evolving needs without costly customisations.",
    name: "Sunita Kapoor",
    role: "Chief Operating Officer, Horizon Resorts",
  },
  {
    title: "The Only ERP That Understood Hospitality Operations",
    quote:
      "We evaluated several ERP platforms before choosing EICE Rise. What stood out was how deeply the product understood the nuances of hospitality — from F&B cost tracking to banquet slot management to compliance registers. Implementation was smooth, our staff adopted it within days, and the EICE team stayed with us through every step. Eighteen months in, we have not looked back once.",
    name: "Amit Srivastava",
    role: "Operations Head, Pinnacle Club & Institutional Services",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Hospitality() {
  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const isPaused = useRef(false);
  const touchStartX = useRef(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const step = () => {
      if (!isPaused.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      const firstCard = el.children[0];
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 16;
        const idx = Math.round(el.scrollLeft / cardWidth) % testimonials.length;
        setMobileIndex(idx < 0 ? 0 : idx);
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isPaused.current = true;
  };
  const handleTouchMove = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const diff = touchStartX.current - e.touches[0].clientX;
    el.scrollLeft += diff;
    touchStartX.current = e.touches[0].clientX;
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
    else if (el.scrollLeft < 0) el.scrollLeft += el.scrollWidth / 2;
  };
  const handleTouchEnd = () => {
    setTimeout(() => { isPaused.current = false; }, 800);
  };

  return (
    <div className="font-manrope">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="sm:max-w-7xl w-screen mx-auto px-4 pt-4 pb-8 sm:pb-12">
        {/* Desktop: 3 images */}
        <div className="hidden sm:grid grid-cols-3 gap-4 mb-10">
          <img src={heroImg1} alt="Hospitality technology solutions" className="w-full h-64 object-cover rounded-xl"  width="1496" height="918" />
          <img src={heroImg2} alt="Hotel management software" className="w-full h-64 object-cover rounded-xl"  width="1496" height="918" />
          <img src={heroImg3} alt="EICE Rise ERP for hospitality" className="w-full h-64 object-cover rounded-xl"  width="1496" height="918" />
        </div>
        {/* Mobile: only first image full-width */}
        <div className="sm:hidden mb-4">
          <img src={heroImg1} alt="Hospitality technology solutions" className="w-full h-48 object-cover rounded-xl"  width="1496" height="918" />
        </div>

        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <h1 className="text-blackk fontweight_1 text-center text-[32px] sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto pb-4">
            <span className="text-bloo">Powering Hospitality</span> Excellence with
            Integrated Technology Solutions
          </h1>
          <p className="font-medium text-blackk/70 text-[16px] sm:text-xl leading-relaxed max-w-4xl mx-auto">
            The hospitality industry demands seamless coordination across every touchpoint — from the
            front desk to the kitchen, the boardroom to the banquet hall. At EICE Technology, we
            understand these complexities. Through{" "}
            <Link href="/products/eicerise" className="text-bloo font-semibold hover:underline">
              EICE Rise
            </Link>
            , our purpose-built hospitality ERP, and{" "}
            <Link href="/products/eice-voice" className="text-bloo font-semibold hover:underline">
              EICE Voice
            </Link>
            , our AI-powered voice order management platform, we help hotels, clubs, restaurants, and
            institutions streamline their operations, delight their guests, and make smarter business
            decisions — all from one integrated system.
          </p>
        </div>
      </section>

      {/* ── KEY SERVICES ─────────────────────────────────────────────────── */}
      <section className="pb-8 sm:py-16">
        <div className="sm:max-w-7xl w-screen mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-4 sm:mb-14">
            <h2 className="text-bloo fontweight_1 text-center text-[22px] sm:text-[25px] py-2">Key Services</h2>
            <h3 className="text-blackk fontweight_1 text-center text-[32px] sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto">
              Everything your property needs to run seamlessly — from front desk to
              back office, all in one platform.
            </h3>
          </div>

          <div className="flex flex-col gap-4 sm:gap-16">
            {services.map((svc, index) => (
              <div key={svc.id}>

                {/* Image + Content — 50/50 split, alternating sides */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6">
                  {/* Image — moves to right on odd rows */}
                  <div className={`w-full${index % 2 !== 0 ? " lg:order-last" : ""}`}>
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover rounded-xl"  width={svc.__w} height={svc.__h} />
                  </div>

                  {/* Right — Title + Challenge + Solution */}
                  <div className="flex flex-col gap-4 justify-center">
                    {/* Service Title */}
                    <h3 className="text-blackk fontweight_1 text-[32px] sm:text-2xl md:text-3xl lg:text-[32px]">{svc.title}</h3>
                    <div>
                      <h4 className="fontweight_1 text-blackk text-[16px] sm:text-xl mb-2">The Challenge</h4>
                      <p className="font-medium text-blackk/70 text-[16px] sm:text-xl leading-relaxed">"{svc.challenge}"</p>
                    </div>
                    <div>
                      <h4 className="fontweight_1 text-blackk text-[16px] sm:text-xl mb-2">The Solution</h4>
                      <p className="font-medium text-blackk/70 text-[16px] sm:text-xl leading-relaxed">{svc.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Modules — full width below */}
                <div>
                  <h4 className="fontweight_1 text-blackk text-[16px] sm:text-xl mb-3">Modules:</h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.modules.map((mod) => (
                      <span key={mod} className="px-3 py-1.5 text-[14px] sm:text-sm font-medium rounded-full border border-[#a0e1fa] bg-[#dcf5ff] text-blackk">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-200 mt-4 sm:mt-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION APPROACH ──────────────────────────────────────── */}
      <section className="pb-8 sm:py-16 sm:max-w-7xl w-screen mx-auto px-4">
        <div className="text-center mb-4 sm:mb-12">
          <h2 className="text-blackk fontweight_1 text-center text-[32px] sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto pb-4">EICE Rise Implementation Approach</h2>
          <p className="font-medium text-blackk/70 text-[16px] sm:text-xl max-w-3xl mx-auto mt-3">
            Empowering Hospitality Businesses with a Turnkey ERP Implementation — Operational from Day One
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 sm:mt-10 items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain"  width="28" height="28" />
              </div>
              <h4 className="fontweight_1 text-blackk text-[24px] sm:text-base">{step.title}</h4>
              <p className="text-blackk/60 font-medium text-[16px] sm:text-xs leading-relaxed">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10" style={{ right: "-30px" }}>
                  <div className="w-11 h-11 rounded-lg border-2 border-blue-900 flex items-center justify-center bg-white">
                    <img src={iconArrow} alt="→" className="w-5 h-5 object-contain" style={{ filter: "brightness(0) saturate(100%) invert(11%) sepia(60%) saturate(800%) hue-rotate(200deg)" }}  width="20" height="20" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section className="bg-zinc-50 pb-8 sm:py-16">
        <Cstdmain />
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="pb-8 sm:py-16 sm:max-w-7xl w-screen mx-auto px-4">
        <div className="text-center mb-4 sm:mb-12">
          <h2 className="text-bloo fontweight_1 text-[22px] sm:text-[25px] py-2">Testimonials</h2>
          <h3 className="text-blackk fontweight_1 text-center text-[32px] sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto">
            Trusted by Over 60+ Companies in the Past Decade. Join Our Success Story!
          </h3>
        </div>

        {/* Mobile: auto-scroll carousel */}
        <div
          ref={scrollRef}
          className="sm:hidden flex overflow-hidden gap-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[82vw] bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              <FaQuoteLeft size={28} className="text-bloo/30" />
              <h4 className="fontweight_1 text-blackk text-[24px] sm:text-lg leading-snug">{t.title}</h4>
              <p className="text-blackk/70 font-medium text-[16px] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="fontweight_1 text-blackk text-[14px] sm:text-sm">{t.name}</p>
                <p className="text-blackk/60 text-[14px] sm:text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="sm:hidden flex justify-center pt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`${
                mobileIndex === index
                  ? "px-3 py-1 rounded-xl bg-blue-900"
                  : "px-3 py-1 rounded-xl bg-bloo/30"
              }`}
            />
          ))}
        </div>

        {/* Desktop: 3-card grid */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition"
            >
              <FaQuoteLeft size={28} className="text-bloo/30" />
              <h4 className="fontweight_1 text-blackk text-[24px] sm:text-lg leading-snug">{t.title}</h4>
              <p className="text-blackk/70 font-medium text-[16px] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="fontweight_1 text-blackk text-[14px] sm:text-sm">{t.name}</p>
                <p className="text-blackk/60 text-[14px] sm:text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        className="pb-8 sm:py-16 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BASE}/cta_img.png)` }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, transparent 80%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-lg flex flex-col gap-4 sm:gap-6">
            <h2 className="text-white fontweight_1 text-[32px] sm:text-3xl leading-snug">
              Our strength lies in delivering innovative, Industry-Specific Solutions. Partner with EICE to transform your hospitality business and achieve Exceptional Results.
            </h2>
            <div>
              <Link href="/contact">
                <button className="text-nowrap px-6 py-3 rounded-md font-semibold transition duration-200 bg-blue-900 text-white hover:bg-blue-900/90 text-base sm:text-lg">
                  Let's Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ProductFooter />
    </div>
  );
}
