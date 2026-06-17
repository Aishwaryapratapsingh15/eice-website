"use client";
import React, { useState } from "react";
import { Link } from "/src/nextNavigation";
import TalkToUs from "../Othercomps/Talktous";
import ProductFooter from "/src/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
import { FaQuoteLeft } from "react-icons/fa";

// ─── SERVICE DATA ────────────────────────────────────────────────────────────

const services = [
  {
    id: "room",
    title: "Room & Venue Management",
    icon: "🏨",
    challenge:
      "Managing room reservations, check-ins, check-outs, guest service, housekeeping, F&B food and venue bookings with catering & vendor alignment across multiple event types manually leads to double bookings, revenue loss, and frustrated guests.",
    solution:
      "EICE Rise delivers complete room and venue control — manage suite, deluxe, and standard reservations with digital check-in/out, integrated Wi-Fi, housekeeping, and room service F&B. Online venue booking lets you seamlessly receive, track, and convert event enquiries. Integrated store and vendor management ensures every single guest need is fully covered.",
    modules: [
      "Room Booking", "Venue Booking", "Online Wi-Fi Module", "Accounts & Billing",
      "Employee Suite", "Compliance Register", "Dining POS", "User Request-Indent",
      "Store & Inventory", "F&B Cost Analysis", "Purchase Vendor Mgmt", "Budget",
    ],
  },
  {
    id: "fnb",
    title: "Food & Beverage Operations",
    icon: "🍽️",
    challenge:
      "Disconnected kitchen systems, manual order taking, language barriers between staff, and untracked food costs silently erode restaurant and hotel F&B profitability every single day.",
    solution:
      "EICE Rise Dining POS enables smooth order management and billing on tablet or web. F&B Cost Analysis tracks consumption and optimizes costing across your property. EICE Voice — India's first voice-to-kitchen NLU platform — lets staff place orders hands-free in natural language, reducing errors and dramatically speeding up overall service delivery.",
    modules: [
      "Dining POS", "F&B Cost Analysis", "EICE Voice", "Accounts & Billing",
      "User Request-Indent", "Purchase Vendor Mgmt", "Store & Inventory",
    ],
  },
  {
    id: "banquet",
    title: "Banquet & Event Management",
    icon: "🎪",
    challenge:
      "Organizing weddings, conferences, and large-scale events involves juggling venue slots, catering, billing, attendance tracking, and last-minute changes — all prone to manual errors and miscommunication.",
    solution:
      "EICE Rise streamlines your entire event lifecycle — fully automate slot management, billing, and bookings for weddings, conferences, and parties via Banquet and Billing. Audience Attendance handles QR-based entry and targeted email invitations for all guests. Every event runs on time, on budget, and on record with zero manual coordination.",
    modules: [
      "Banquet & Billing", "Audience Attendance", "Venue Booking Online",
      "Accounts & Billing", "Dining POS", "Employee Suite", "User Request-Indent",
      "Store & Inventory", "Feedback System", "F&B Cost Analysis", "Purchase Vendor Mgmt",
    ],
  },
  {
    id: "member",
    title: "Member & Guest Management",
    icon: "🤝",
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
    challenge:
      "Managing payroll, employee records, financial transactions, regulatory compliance, and budget planning across departments with disconnected tools leads to errors, delays, and audit risks.",
    solution:
      "EICE Rise handles all back-office needs — Accounts and Finance for receivables, payables, taxation, and balance sheet automation; Employee Suite for digital service books, attendance, and HR portals; Payroll for automated salary structures; Budget for precise department-wise financial planning; and Compliance Register for fully audit-ready regulatory tracking and timely renewal.",
    modules: [
      "Accounts & Finance", "Employee Suite", "Payroll", "Budget", "Compliance Register",
    ],
  },
  {
    id: "vendor",
    title: "Vendor & Inventory Management",
    icon: "📦",
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
    desc: "We define project scope, resources, and timeline — understanding your property's unique workflows and operational needs for a seamless rollout.",
  },
  {
    number: "02",
    title: "Implement",
    desc: "Our team configures, customizes, and deploys the EICE Rise ERP platform tailored precisely to your hotel, club, restaurant, or institution.",
  },
  {
    number: "03",
    title: "Training",
    desc: "We provide comprehensive user training and operational guidance across all roles — ensuring your staff can confidently use the system from day one.",
  },
  {
    number: "04",
    title: "Deployment",
    desc: "We release and monitor the live system closely, ensuring optimal performance, stability, and a smooth transition for your guests and team.",
  },
  {
    number: "05",
    title: "Feedback & Ongoing Iteration",
    desc: "We continuously gather user feedback post-launch to refine, enhance, and evolve the platform — keeping it aligned with your growing needs.",
  },
  {
    number: "06",
    title: "Support",
    desc: "24/7 technical support, regular updates, and a customer-driven improvement cycle — so your operations are always running at their best.",
  },
];

// ─── CASE STUDIES ────────────────────────────────────────────────────────────

const caseStudyTabs = ["Hospitality", "Oil and Gas", "Healthcare", "Automobile"];

const caseStudies = {
  Hospitality: [
    {
      title: "Transforming Operational Efficiency for SalesVu",
      desc: "HDBS sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed global community while maintaining...",
      link: "/case-studies/durgabari",
    },
    {
      title: "Empowering Community Operations for Houston Durga Bari Society",
      desc: "The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency across admin, user, and guest roles.",
      link: "/case-studies/iic",
    },
    {
      title: "Empowering Indian Durga International Center (IIC)",
      desc: "The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency across admin, user, and guest roles.",
      link: "/case-studies/iic",
    },
  ],
  "Oil and Gas": [
    {
      title: "Noralta SCADA Implementation",
      desc: "Robust industrial control system enabling real-time monitoring and control of field operations for Noralta.",
      link: "/case-studies/noralta-scada",
    },
    {
      title: "PetroSIM Refinery Simulation",
      desc: "Comprehensive petroleum simulation tool for refinery operations with advanced modeling and process optimization.",
      link: "/case-studies/petro-sim",
    },
  ],
  Healthcare: [
    {
      title: "AI-Powered Healthcare Solutions",
      desc: "Transforming patient care with intelligent diagnostics, telemedicine, and clinical management platforms.",
      link: "/case-studies/inventory-ai",
    },
  ],
  Automobile: [
    {
      title: "Autonomous Driving AI",
      desc: "Machine learning model improving object detection accuracy by 30% in diverse weather conditions.",
      link: "/case-studies/voice-call-ai",
    },
  ],
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Managing a property of our scale meant juggling reservations, banquet bookings, member accounts, and vendor payments across multiple disconnected systems. EICE Rise brought everything under one roof. Our front desk response time dropped significantly, our finance team finally has real-time visibility, and our monthly close that used to take a week now takes two days. It's not just software — it's how our entire operation breathes now.",
    name: "Rajesh Mehra",
    role: "General Manager, Grandeur Hospitality Group",
  },
  {
    quote:
      "As a growing institution managing members across geographies, we needed a platform that could handle complexity without making things complex for our team. EICE Rise delivered exactly that. Role-based access, automated financial workflows, real-time event management — everything works together seamlessly. What impressed us most was how quickly the system adapted to our evolving needs without costly customisations.",
    name: "Sunita Kapoor",
    role: "Chief Operating Officer, Horizon Resorts",
  },
  {
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
        {/* Hero Image Placeholder */}
        <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-xl flex items-center justify-center mb-10">
          <span className="text-gray-400 text-lg">[ Hero Image ]</span>
        </div>

        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <h1 className="text-blackk fontweight_1 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Powering <span className="text-bloo">Hospitality Excellence</span> with
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
            <h2 className="text-bloo fontweight_1 fontsize_2 py-2">Key Services</h2>
            <h3 className="text-blackk fontweight_1 text-2xl sm:text-3xl lg:text-[32px] max-w-3xl mx-auto">
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
                  <div className={`w-full aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300${index % 2 !== 0 ? " lg:order-last" : ""}`}>
                    <span className="text-gray-400 text-sm">[ Image Placeholder ]</span>
                  </div>

                  {/* Right — Title + Challenge + Solution */}
                  <div className="flex flex-col gap-5 justify-center">
                    {/* Service Title */}
                    <h3 className="text-blackk fontweight_1 text-2xl sm:text-3xl lg:text-[32px]">{svc.title}</h3>
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
                      <span key={mod} className="px-3 py-1.5 bg-blue-900 text-white text-sm font-medium rounded-md">
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
          <h2 className="text-bloo fontweight_1 fontsize_2 py-2">EICE Rise Implementation Approach</h2>
          <h3 className="text-blackk fontweight_1 text-2xl sm:text-3xl lg:text-[32px] max-w-4xl mx-auto">
            Empowering Hospitality Businesses with a Turnkey ERP Implementation —
            Operational from Day One
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-bloo hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl fontweight_1 text-bloo/20 group-hover:text-bloo/40 transition-colors">
                  {step.number}
                </span>
                <div>
                  <h4 className="fontweight_1 text-blackk text-lg mb-2">{step.title}</h4>
                  <p className="text-blackk/70 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {/* Connector arrow (not last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 text-bloo/30">→</div>
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
            <h3 className="text-blackk fontweight_1 text-2xl sm:text-3xl lg:text-[32px] max-w-3xl mx-auto">
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
                {/* Image Placeholder */}
                <div className="w-full h-44 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">[ Case Study Image ]</span>
                </div>
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
          <h3 className="text-blackk fontweight_1 text-2xl sm:text-3xl lg:text-[32px] max-w-3xl mx-auto">
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
              <p className="text-blackk/70 font-medium text-base leading-relaxed flex-1">
                "{t.quote}"
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
      <section className="bg-blue-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <p className="text-white/80 font-medium text-lg sm:text-xl leading-relaxed">
            Our strength lies in delivering innovative, Industry-Specific Solutions. Partner with
            EICE to transform your hospitality business and achieve Exceptional Results.
          </p>
          <Link href="/contact">
            <button className="bg-bloo text-white px-10 py-3 rounded-md font-semibold text-lg hover:bg-bloo/90 transition mx-auto flex items-center gap-2">
              Let's Connect →
            </button>
          </Link>
        </div>
      </section>

      <TalkToUs />
      <ProductFooter />
      <Copyright />
    </div>
  );
}
