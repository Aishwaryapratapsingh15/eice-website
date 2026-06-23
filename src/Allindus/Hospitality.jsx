"use client";
import React, { useState } from "react";
import { Link } from "/src/nextNavigation";
import TalkToUs from "../Othercomps/Talktous";
import ProductFooter from "/src/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

const caseStudyTabs = ["Hospitality", "Oil and Gas", "Healthcare industry", "automobile industry"];

const caseStudies = {
  Hospitality: [
    {
      title: "Transforming Operational Efficiency for SalesVu",
      desc: "HDBS sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed global community while maintaining...",
      link: "/case-studies/durgabari",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Rise/caseStudy/android.webp",
    },
    {
      title: "Empowering Community Operations for Houston Durga Bari Society",
      desc: "The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency across admin, user, and guest roles.",
      link: "/case-studies/iic",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Rise/caseStudy/durga.webp",
    },
    {
      title: "Empowering Indian International Center (IIC)",
      desc: "The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency across admin, user, and guest roles.",
      link: "/case-studies/iic",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Rise/caseStudy/IIC.webp",
    },
  ],
  "Oil and Gas": [
    {
      title: "Noralta SCADA Implementation",
      desc: "Robust industrial control system enabling real-time monitoring and control of field operations for Noralta.",
      link: "/case-studies/noralta-scada",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/scada.jpg",
    },
    {
      title: "PetroSIM Refinery Simulation",
      desc: "Comprehensive petroleum simulation tool for refinery operations with advanced modeling and process optimization.",
      link: "/case-studies/petro-sim",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/petrosim.jpeg",
    },
  ],
  "Healthcare industry": [
    {
      title: "AI-Powered Healthcare Solutions",
      desc: "Transforming patient care with intelligent diagnostics, telemedicine, and clinical management platforms.",
      link: "/case-studies/inventory-ai",
      img: "https://d3r43jacxrwsrp.cloudfront.net/medical/aipdt.jpeg",
    },
  ],
  "automobile industry": [
    {
      title: "Autonomous Driving AI",
      desc: "Machine learning model improving object detection accuracy by 30% in diverse weather conditions.",
      link: "/case-studies/voice-call-ai",
      img: "https://d3r43jacxrwsrp.cloudfront.net/Automobile/adai.jpeg",
    },
  ],
};

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
  const [activeCaseTab, setActiveCaseTab] = useState("Hospitality");

  return (
    <div className="font-manrope">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="sm:max-w-7xl w-screen mx-auto px-4 pt-32 pb-12">
        <div className="w-full grid grid-cols-3 gap-4 mb-10">
          <img src={heroImg1} alt="Hospitality technology solutions" className="w-full h-48 sm:h-64 object-cover rounded-xl" />
          <img src={heroImg2} alt="Hotel management software" className="w-full h-48 sm:h-64 object-cover rounded-xl" />
          <img src={heroImg3} alt="EICE Rise ERP for hospitality" className="w-full h-48 sm:h-64 object-cover rounded-xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <h1 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto pb-4">
            <span className="text-bloo">Powering Hospitality</span> Excellence with
            Integrated Technology Solutions
          </h1>
          <p className="font-medium text-blackk/70 sm:text-xl text-lg leading-relaxed max-w-4xl mx-auto">
            The hospitality industry demands seamless coordination across every touchpoint — from the
            front desk to the kitchen, the boardroom to the banquet hall. At EICE Technology, we
            understand these complexities. Through{" "}
            <Link href="/products/eice-rise" className="text-bloo font-semibold hover:underline">
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
      <section className="py-16">
        <div className="sm:max-w-7xl w-screen mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-bloo fontweight_1 text-center fontsize_2 py-2">Key Services</h2>
            <h3 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto">
              Everything your property needs to run seamlessly — from front desk to
              back office, all in one platform.
            </h3>
          </div>

          <div className="flex flex-col gap-16">
            {services.map((svc, index) => (
              <div key={svc.id}>

                {/* Image + Content — 50/50 split, alternating sides */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  {/* Image — moves to right on odd rows */}
                  <div className={`w-full${index % 2 !== 0 ? " lg:order-last" : ""}`}>
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover rounded-xl" />
                  </div>

                  {/* Right — Title + Challenge + Solution */}
                  <div className="flex flex-col gap-5 justify-center">
                    {/* Service Title */}
                    <h3 className="text-blackk fontweight_1 text-2xl sm:text-2xl md:text-3xl lg:text-[32px]">{svc.title}</h3>
                    <div>
                      <h4 className="fontweight_1 text-blackk sm:text-xl text-lg mb-2">The Challenge</h4>
                      <p className="font-medium text-blackk/70 sm:text-xl text-lg leading-relaxed">"{svc.challenge}"</p>
                    </div>
                    <div>
                      <h4 className="fontweight_1 text-blackk sm:text-xl text-lg mb-2">The Solution</h4>
                      <p className="font-medium text-blackk/70 sm:text-xl text-lg leading-relaxed">{svc.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Modules — full width below */}
                <div>
                  <h4 className="fontweight_1 text-blackk sm:text-xl text-lg mb-3">Modules:</h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.modules.map((mod) => (
                      <span key={mod} className="px-3 py-1.5 text-sm font-medium rounded-full border border-[#a0e1fa] bg-[#dcf5ff] text-blackk">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-200 mt-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION APPROACH ──────────────────────────────────────── */}
      <section className="py-16 sm:max-w-7xl w-screen mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto pb-4">EICE Rise Implementation Approach</h2>
          <p className="font-medium text-blackk/70 sm:text-xl text-lg max-w-3xl mx-auto mt-3">
            Empowering Hospitality Businesses with a Turnkey ERP Implementation — Operational from Day One
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain" />
              </div>
              <h4 className="fontweight_1 text-blackk text-base">{step.title}</h4>
              <p className="text-blackk/60 font-medium text-xs leading-relaxed">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10" style={{ right: "-30px" }}>
                  <div className="w-11 h-11 rounded-lg border-2 border-blue-900 flex items-center justify-center bg-white">
                    <img src={iconArrow} alt="→" className="w-5 h-5 object-contain" style={{ filter: "brightness(0) saturate(100%) invert(11%) sepia(60%) saturate(800%) hue-rotate(200deg)" }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section className="bg-zinc-50 py-16">
        <div className="sm:max-w-7xl w-screen mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-bloo fontweight_1 fontsize_2 py-2">Case Studies</h2>
            <h3 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto">
              Explore how we digitally transformed other businesses
            </h3>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {caseStudyTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCaseTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeCaseTab === tab
                    ? "bg-blue-900 text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-bloo hover:text-bloo"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(caseStudies[activeCaseTab] || []).map((cs, i) => (
              <Link
                key={i}
                href={cs.link}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition group"
              >
                <img src={cs.img} alt={cs.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h4 className="fontweight_1 text-blackk text-base mb-2 group-hover:text-bloo transition">
                    {cs.title}
                  </h4>
                  <p className="text-blackk/70 text-sm font-medium leading-relaxed">{cs.desc}</p>
                  <span className="inline-block mt-3 text-bloo text-sm fontweight_1">
                    View more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:max-w-7xl w-screen mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-bloo fontweight_1 fontsize_2 py-2">Testimonials</h2>
          <h3 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl mx-auto">
            Trusted by Over 60+ Companies in the Past Decade. Join Our Success Story!
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition"
            >
              <FaQuoteLeft size={28} className="text-bloo/30" />
              <h4 className="fontweight_1 text-blackk text-lg leading-snug">{t.title}</h4>
              <p className="text-blackk/70 font-medium text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="fontweight_1 text-blackk text-sm">{t.name}</p>
                <p className="text-blackk/60 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BASE}/cta_img.png)` }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, transparent 80%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-lg flex flex-col gap-6">
            <h2 className="text-white fontweight_1 text-2xl sm:text-3xl leading-snug">
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
      <Copyright />
    </div>
  );
}
