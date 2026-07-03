"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/screens.png";
const sdIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/sd.svg";
const ahIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/ah.svg";
const sclIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/scl.svg";
const tlsIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/tls.svg";
const thIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/th.svg";
const slaIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/sla.svg";
const fatIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/fat.svg";
const slarIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/slar.svg";
const erIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/er.svg";
const cscmIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/cscm.svg";
const pslcIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/pslc.svg";
const ntIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/nt.svg";
const hbscIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/hbsc.svg";
const mfcIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/mfc.svg";
const clIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/cl.svg";
const ftlIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/ftl.svg";
const slaaccountabilityIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/SLAaccountability.svg";
const mvIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/mv.svg";

const stats = [
  {
    number: "3",
    title: "Live SLA Clocks per ticket",
  },
  {
    number: "L1 → L3",
    title: "Tier handoff tracking",
  },
  {
    number: "100%",
    title: "Audit trail on every action",
  },
  {
    number: "Real-time",
    title: "Agent effectiveness reports",
  },
  {
    number: "Zero",
    title: "Missed escalations",
  },
];

const pillars = [
  {
    icon: ftlIcon,
    title: "Full Ticket Lifecycle",
    description:
      "From first call to closure — every step tracked, timestamped and visible to agents and managers alike.",
  },
  {
    icon: slaaccountabilityIcon,
    title: "SLA \nAccountability",
    description:
      "Live countdowns, automatic breach alerts and paused-clock support for blocked tickets",
  },
  {
    icon: clIcon,
    title: "Communication Log",
    description:
      "Every call, email and message logged against the ticket — who said what, when and how",
  },
  {
    icon: mvIcon,
    title: "Management Visibility",
    description:
      "Leaderboards, SLA trends and per-agent drill-downs for performance reviews and reporting",
  },
];

const agentFeatures = [
    {
  heading:"Smart \ndashboard",
  paragraph:" See all open tickets, SLA breaches,  escalation alerts and pending reporter updates at a glance",
  icon: sdIcon
    },
    {
  heading:"Actionable \nhints",
  paragraph:'The ticket tells the agent what to do next: "First reply due in 20m", "Reporter update overdue"',
  icon: ahIcon
    },
    {
  heading:"Structured communication log with calls",
  paragraph:"Log every call, email or  WhatsApp message with direction (sent/received), channel  and contact name",
  icon: sclIcon
    },
    {
  heading:"Three live SLA clocks",
  paragraph:"First Reply, Fix Deadline and Reporter  Update frequency tracked simultaneously per ticket",
  icon: tlsIcon
    },
    {
  heading:"Tier \nhandoff",
  paragraph:"Hand tickets from L1 to L2 to L3 with a single  click; all tier movements recorded in the activity timeline",
  icon: thIcon
    },
    {
  heading:"SLA \npause",
  paragraph:"Freeze the clock when blocked by a third party or  awaiting customer response, with a full reason audit trail",
  icon: slaIcon
    },
    {
  heading:"Full activity timeline",
  paragraph:"Every state change, communication,  tier handoff and work note in chronological order",
  icon: fatIcon
    }
];

const adminFeatures = [
   {
  heading:"SLA rules \nengine",
  paragraph:"Define First Reply, Fix Deadline and  Update Frequency per priority level, for Business Hours and  24×7 models",
  icon: slarIcon
    },
    {
  heading:"Escalation \nrules",
  paragraph:'Set time-based escalation triggers (e.g.  alert account manager at 75% SLA, CTO at 100%) per category and priority',
  icon: erIcon
    },
    {
  heading:"Category & sub-category management",
  paragraph:"Configure your full  service catalogue with dedicated contacts per category",
  icon: cscmIcon
    },
    {
  heading:"Priority & support level contacts",
  paragraph:"Assign the right people to P1/P2 and L1/L2/L3 so agents always know who to reach",
  icon: pslcIcon
    },
    {
  heading:"Notification templates",
  paragraph:"Customise acknowledgement, status update and resolution emails with live preview",
  icon: ntIcon
    },
    {
  heading:"Mandatory field control",
  paragraph:"Decide which ticket fields are  required before an agent can submit",
  icon: mfcIcon
    },
    {
  heading:"Holiday & business hours calendar",
  paragraph:"SLA clocks  automatically respect working hours, weekends and public  holidays",
  icon: hbscIcon
    }
];

// const whyChoose = [
//   {
//     icon:"1.",
//     title: "ITIL 4 Aligned",
//     description:
//       "Built on internationally recognised best practice for IT service management",
//   },
//   {
//     icon:"2.",
//     title: "Complete Audit Trail",
//     description:
//       "Every communication, decision and state change is logged",
//   },
//   {
//     icon:"3.",
//     title: "Agent Effectiveness Reports",
//     description:
//       "Measure first-reply SLA %, fix rate and resolution time per agent",
//   },
//   {
//     icon:"4.",
//     title: "Escalation You Can Trust",
//     description:
//       "Time-based escalation rules ensure the right people are alerted",
//   },
//   {
//     icon:"5.",
//     title: "Fully Configurable",
//     description:
//       "Categories, priorities, SLA models and escalation paths tailored to your business",
//   },
//   {
//     icon:"6.",
//     title: "Built for Accountability",
//     description:
//       "Customers always know the status; agents always know the next action",
//   },
// ];

export default function EiceOps() {
    const navigate = useNavigate();
  return (
    <div className="bg-white text-[#111]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-5 pt-32 pb-4 md:pt-32 lg:pt-32 md:pb-20 lg:pb-20 md:px-5 md:px-20 lg:px-5 lg:px-32">
        
           <div className="mt-5 flex justify-center">
                            <img
                                     src={heroImg}
                                     alt="product"
                                     className="mx-auto mb-6 md:w-full lg:w-[480px]"
                                   />
                         </div>
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="mt-6 text-[40px] leading-[48px] md:text-4xl font-bold text-[#111]">
            Your <span className="text-[#01B0F1]">Help Desk</span>, Working <span className="text-[#01B0F1]">Smarter.</span>
          </h1>

          {/* <p className="mt-3 text-xl text-[#111] font-semibold">
            Every ticket. Every SLA. Every time.
          </p> */}

          <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
            EICE Ops is EICE Technology's ITIL 4-aligned help desk management platform, designed to bring complete
accountability to every ticket lifecycle. Built for IT service teams that take SLAs seriously, EICEOps eliminates
missed escalations, ensures structured communication, and gives managers full visibility into team performance
— all in a single, configurable platform.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/products/eicerise/form")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 sm:mx-auto text-[18px] hover:bg-blue-800 transition"
            >
              Request a Demo
              <img src={arrowIcon} alt="arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 py-4 md:px-20 lg:px-32 lg:-mt-10 md:-mt-10 sm:-mt-10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-white py-2 pr-2 text-left lg:text-white lg:py-8 lg:px-5 lg:text-center md:text-white md:py-8 md:px-5 md:text-center"
            >
              <h3 className="text-[#01B0F1] text-[22px] font-bold mb-4 text-left lg:text-4xl lg:mb-5 md:text-4xl md:mb-5">{item.number}</h3>
              <p className="font-semi-bold text-[16px] leading-relaxed text-[#334155] lg:font-bold lg:text-lg lg:leading-relaxed text-[#334155] md:font-bold md:text-lg sm:font-bold sm:text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR PILLARS */}
     <section className="py-4 px-5 md:px-10 lg:px-20 xl:px-40 bg-white">

  <h1 className="text-[32px] leading-[48px] md:text-4xl text-[#334155] font-bold text-center leading-relaxed pb-4">
    Enterprise Authentication Challenges
  </h1>

  <h4 className="text-[22px] pb-4 md:text-xl text-[#64748B] text-center max-w-2xl mx-auto">
    Traditional MFA solutions lack enterprise control and flexibility
  </h4>

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    {pillars.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-4 flex flex-col items-start text-start gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold lg:text-2xl md:text-2xl text-[24px]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-gray-500 lg:text-lg md:text-lg leading-relaxed text-[16px]">
          {item.description}
        </p>

      </div>
    ))}

  </div>
</section>

      {/* FEATURE HIGHLIGHTS */}
<section className="py-4 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">

  <h1 className="text-[32px] leading-[48px] lg:text-4xl md:text-4xl text-[#334155] font-bold text-center leading-relaxed lg:mb-10 md:mb-10 pb-4">
    Help Desk Agent Highlights
  </h1>

  {/* <h4 className="text-lg md:text-xl text-[#64748B] text-center mb-10 max-w-2xl mx-auto">
    Traditional monitoring tools fall short of modern enterprise observability needs
  </h4> */}

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6 md:gap-6 sm:gap-6 gap-4">

    {agentFeatures.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-4 flex flex-col items-start text-start gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold lg:text-2xl md:text-2xl text-[24px] text-[#334155] whitespace-pre-line">
          {item.heading}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-[#64748B] md:text-[16px] leading-relaxed text-[16px]">
          {item.paragraph}
        </p>

      </div>
    ))}

  </div>
</section>

<section className="py-4 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">

  <h1 className="text-[32px] leading-[48px] lg:text-4xl md:text-4xl text-[#334155] font-bold text-center leading-relaxed lg:mb-10 md:mb-10 sm:mb-10 pb-4">
    Admin Agent Highlights
  </h1>

  {/* <h4 className="text-lg md:text-xl text-[#64748B] text-center mb-10 max-w-2xl mx-auto">
    Traditional monitoring tools fall short of modern enterprise observability needs
  </h4> */}

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6 md:gap-6 sm:gap-6 gap-4">

    {adminFeatures.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-4 flex flex-col items-start text-start gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold md:text-[24px] text-[#334155] text-[24px] whitespace-pre-line">
          {item.heading}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-[#64748B] md:text-[16px] text-[16px] leading-relaxed">
          {item.paragraph}
        </p>

      </div>
    ))}

  </div>
</section>


      {/* WHY CHOOSE */}
  <section className="py-4 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">
  
  {/* Heading */}
  <h2 className="text-[32px] leading-[48px] lg:text-4xl md:text-4xl font-bold text-center text-[#334155] lg:mb-[14px] md:mb-[14px] sm:mb-[14px] pb-4">
    Why enterprises choose EICEOps?
  </h2>

  {/* Subheading */}
  <h4 className="lg:text-lg md:text-xl text-[#64748B] text-[22px] text-center lg:mb-10 md:mb-10 sm:mb-10 pb-4 max-w-3xl mx-auto">
    Built for organizations that require complete infrastructure <br /> control and observability
  </h4>

  {/* Content */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-10 sm:gap-10 gap-4 text-[#334155]">

    {/* LEFT COLUMN */}
    <div className="lg:space-y-6 md:space-y-6 space-y-4 lg:text-xl md:text-xl text-[18px] leading-relaxed">
      <p>
        <span className="font-bold">1. ITIL 4 Aligned :</span> Built on internationally recognised best practices for modern, scalable, efficient IT service management operations.
      </p>

      <p>
        <span className="font-bold">2. Complete Audit Trail :</span> Every communication, decision and state change is logged - nothing falls through the cracks.
      </p>

      <p>
        <span className="font-bold">3. Agent Effectiveness Reports :</span> Measure first-reply SLA %, fix rate, avg  resolution time and reporter updates per  agent
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="lg:space-y-6 md:space-y-6 space-y-4 lg:text-xl md:text-xl text-[18px] leading-relaxed">
      <p>
        <span className="font-bold">4. Escalation You Can Trust :</span> Time-based escalation rules ensure the right  people are alerted before SLAs are breached
</p>
      <p>
        <span className="font-bold">5. Fully Configurable :</span> Categories, priorities, SLA models, support  tiers and escalation paths all tailored to  your business
      </p>

      <p>
        <span className="font-bold">6.  uilt for Accountability Control  :</span> Customers always know the status; agents  always know what action is needed next.

      </p>
    </div>

  </div>
</section>
          {/* ================= FINAL CTA ================= */}
          <section className="bg-gray-50 relative py-4 px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden mb-10">
            <h2 className="text-4xl md:text-4xl font-bold text-[#334155] mb-[14px] leading-tight text-center">
              Ready to Transform Your Order Management?
            </h2>
    
            <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-10 text-center">
          Talk to our experts to see how EICE Voice fits your hospitality<br/> operations and order management strategy.
        </p>
    
            <button
              onClick={() => navigate("/products/eicerise/form")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px] hover:bg-blue-800"
            >
              Request a Demo
              <img src={arrowIcon} alt="arrow" />
            </button>
          </section>

      <ProductCarousel slides={productSlides} />
      <ProductFooter />


    </div>
  );
}
