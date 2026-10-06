"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "@/nextNavigation";
import TalkToUs from "../Othercomps/Talktous";
import ProductFooter from "@/Product/ProductFooter";
import { FaQuoteLeft } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { RiH1 } from "react-icons/ri";

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
// Hospitality-specific only — the Oil and Gas / Healthcare / Automobile tabs
// that used to sit alongside these were unrelated generic placeholder
// content and have been removed.

const cs_projects = [
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
];

const CaseStudy = ({ title, description, image }) => (
  
    <div className="bg-white rounded-[18px] overflow-hidden border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
      <img
        src={image?.src || image}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="pt-[19px] px-[25px] pb-[25px]">
        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{title}</h3>
        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">{description}</p>
      </div>
    </div>
  
);

function Cstdmain() {
  return (
    <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 sm:max-w-7xl mx-auto text-center py-8">
      <h1 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
        Case Studies
      </h1>
      <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] py-1">
        Explore how we digitally transformed other businesses
      </h2>
      <main className="mx-auto max-w-7xl mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cs_projects.map((project, index) => (
            <CaseStudy
              key={index}
              title={project.title}
              description={project.description}
              image={project.img}
            />
          ))}
        </div>
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
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="sm:max-w-7xl pt-4 pb-8 w-full mx-auto grid">
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

        <div className="max-w-7xl mx-auto text-center flex flex-col gap-8 pb-10">
          <h1 className="text-blackk font-genral font-semibold text-center text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">
            <span className="text-bloo">Powering Hospitality</span> Excellence with
            Integrated Technology Solutions
          </h1>
          <p className="mt-3 font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]  sm:text-center">
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
        </div>
      </section>

      {/* ── KEY SERVICES ─────────────────────────────────────────────────── */}
      <section className="w-full">
       <div className="sm:max-w-7xl mx-auto text-center py-10">

          {/* Section Heading */}
          <div className="text-center mb-4 sm:mb-14 max-w-4xl mx-auto">
            <h1 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">Key Services</h1>
            <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] py-1">
              Everything your property needs to run seamlessly from front desk to
              back office, all in one platform.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-16">
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
                    <h2 className="text-[#373737] font-general font-bold text-[18px] sm:text-[20px] leading-[1.3]">{svc.title}</h2>
                    <div>
                      <h3 className="font-medium font-inter text-blackk text-[16px] sm:text-[18px] leading-[1.6]">The Challenge</h3>
                      <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">"{svc.challenge}"</p>
                    </div>
                    <div>
                      <h3 className="font-medium font-inter text-blackk text-[16px] sm:text-[18px] leading-[1.6]">The Solution</h3>
                      <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{svc.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Modules — full width below */}
                <div>
                  <h4 className="font-general font-semibold text-blackk text-[16px] sm:text-[18px] mb-3">Modules:</h4>
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
      <section className="w-full">
        <div className="sm:max-w-7xl mx-auto py-10">
        <div className="text-center mb-4">
          <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] py-1">EICE Rise Implementation Approach</h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            Empowering Hospitality Businesses with a Turnkey ERP Implementation,<br className="hidden sm:block" />Operational from Day One
          </p>
        </div>

        {/* Steps Grid */}
        <div className="pb-4 sm:pb-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 sm:mt-8 items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
              <div className="w-11 h-11 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain"  width="28" height="28" />
              </div>
              <h4 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{step.title}</h4>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">{step.desc}</p>
              {/* {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10" style={{ right: "-30px" }}>
                  <div className="w-11 h-11 rounded-lg border-2 border-blue-900 flex items-center justify-center bg-white">
                    <img src={iconArrow} alt="→" className="w-5 h-5 object-contain" style={{ filter: "brightness(0) saturate(100%) invert(11%) sepia(60%) saturate(800%) hue-rotate(200deg)" }}  width="20" height="20" />
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section className="bg-zinc-50">
        <Cstdmain />
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        className="pb-8 sm:py-16 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BASE}/cta_img.png)` }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, transparent 80%)" }} />
        <div className="relative px-4 md:px-10 lg:px-20 xl:px-40 py-8">
          <div className="max-w-7xl mx-auto">
          <div className="max-w-lg flex flex-col gap-4 sm:gap-6">
            <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-snug">
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
        </div>
      </section>
      <ProductFooter />
    </div>
  );
}
