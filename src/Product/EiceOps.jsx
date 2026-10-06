"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
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
      <section className="relative overflow-hidden py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">

           <div className="mt-5 flex justify-center">
                            <img
                                     src={heroImg}
                                     alt="product"
                                     className="mx-auto mb-6 md:w-full lg:w-[480px]"
                                    width="3299" height="1187" />
                         </div>
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="font-general font-semibold mt-[10px] text-[32px] sm:text-[44px] leading-[1.1] text-blackk py-1">
            Your <span className="text-bloo">Help Desk</span>, Working <span className="text-bloo">Smarter.</span>
          </h1>

          {/* <p className="mt-3 text-xl text-[#111] font-semibold">
            Every ticket. Every SLA. Every time.
          </p> */}

          <p className="font-inter font-normal mt-2 max-w-3xl mx-auto text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
            EICE Ops is EICE Technology's ITIL 4-aligned help desk management platform, designed to bring complete
accountability to every ticket lifecycle. Built for IT service teams that take SLAs seriously, EICEOps eliminates
missed escalations, ensures structured communication, and gives managers full visibility into team performance
— all in a single, configurable platform.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/products/eicerise/form?product=EiceOps")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 sm:mx-auto text-[18px] hover:bg-[#1E40AF] transition"
            >
              Request a Demo
              <img src={arrowIcon} alt="arrow"  width="24" height="24" />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl lg:max-w-none mx-auto relative z-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-white py-2 pr-2 text-left lg:text-white lg:py-8 lg:px-5 lg:text-center md:text-white md:py-8 md:px-5 md:text-center"
            >
              <h3 className="font-general font-semibold text-[#01B0F1] text-[22px] mb-4 text-left md:text-center lg:text-center lg:text-4xl lg:mb-5 md:text-4xl md:mb-5">{String(item.number).includes(" → ") ? (
                  <>
                    {String(item.number).split(" → ")[0]}
                    <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="to" className="mx-2 inline-block w-[1em] h-[1em] align-middle" width="24" height="24" style={{ filter: "brightness(0) saturate(100%) invert(54%) sepia(98%) saturate(1655%) hue-rotate(166deg) brightness(97%) contrast(101%)" }} />
                    {String(item.number).split(" → ")[1]}
                  </>
                ) : (
                  item.number
                )}</h3>
              <p className="font-inter font-semibold text-[16px] leading-relaxed text-[#334155] lg:text-lg lg:leading-relaxed text-[#334155] md:text-lg sm:text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR PILLARS */}
     <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">

  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
      Complete Ticket Lifecycle Management
    </h2>

    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
      Everything you need for accountable, SLA-driven IT support
    </p>
  </div>

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

    {pillars.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] whitespace-pre-line">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
          {item.description}
        </p>

      </div>
    ))}

  </div>
</section>

      {/* FEATURE HIGHLIGHTS */}
<section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">

  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
      Help Desk Agent Highlights
    </h2>
  </div>

  {/* <h4 className="text-lg md:text-xl text-[#64748B] text-center mb-10 max-w-2xl mx-auto">
    Traditional monitoring tools fall short of modern enterprise observability needs
  </h4> */}

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6 md:gap-6 sm:gap-6 gap-4">

    {agentFeatures.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] whitespace-pre-line">
          {item.heading}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
          {item.paragraph}
        </p>

      </div>
    ))}

  </div>
</section>

<section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">

  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
      Admin Agent Highlights
    </h2>
  </div>

  {/* <h4 className="text-lg md:text-xl text-[#64748B] text-center mb-10 max-w-2xl mx-auto">
    Traditional monitoring tools fall short of modern enterprise observability needs
  </h4> */}

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6 md:gap-6 sm:gap-6 gap-4">

    {adminFeatures.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] whitespace-pre-line">
          {item.heading}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
          {item.paragraph}
        </p>

      </div>
    ))}

  </div>
</section>


      {/* WHY CHOOSE */}
  <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">

  <div className="text-center mb-8">
    {/* Heading */}
    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
      Why enterprises choose EICEOps?
    </h2>

    {/* Subheading */}
    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
      Built for organizations that require complete infrastructure <br /> control and observability
    </p>
  </div>

  {/* Content */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-10 sm:gap-10 gap-4 text-[#334155]">

    {/* LEFT COLUMN */}
    <div className="lg:space-y-6 md:space-y-6 space-y-4 font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6]">
      <p>
        <span className="font-general font-semibold">1. ITIL 4 Aligned :</span> Built on internationally recognised best practices for modern, scalable, efficient IT service management operations.
      </p>

      <p>
        <span className="font-general font-semibold">2. Complete Audit Trail :</span> Every communication, decision and state change is logged - nothing falls through the cracks.
      </p>

      <p>
        <span className="font-general font-semibold">3. Agent Effectiveness Reports :</span> Measure first-reply SLA %, fix rate, avg  resolution time and reporter updates per agent.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="lg:space-y-6 md:space-y-6 space-y-4 font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6]">
      <p>
        <span className="font-general font-semibold">4. Escalation You Can Trust :</span> Time-based escalation rules ensure the right people are alerted before SLAs are breached.
</p>
      <p>
        <span className="font-general font-semibold">5. Fully Configurable :</span> Categories, priorities, SLA models, support tiers and escalation paths tailored to your business.
      </p>

      <p>
        <span className="font-general font-semibold">6.  uilt for Accountability Control  :</span> Customers always know the status; agents  always know what action is needed next.

      </p>
    </div>

  </div>
</section>

      <ProductVideo
        eyebrow="IT Service Management"
        heading="See EICEOps in Action"
        subtext="See how EICEOps brings tickets, SLAs, escalations, workflows, and service performance together for accountable IT support."
        videoId="evqqm0anfOk"
      />

          {/* ================= FINAL CTA ================= */}
          <section className="bg-gray-50 relative overflow-hidden">
            <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto text-center">
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
                Ready to Take Control of Every Ticket?
              </h2>

              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-2 mb-8">
                See how EICE Ops brings live SLA clocks, structured escalation,<br/> and a full audit trail to your help desk — talk to our team.
              </p>

              <button
                onClick={() => navigate("/products/eicerise/form?product=EiceOps")}
                className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px] hover:bg-[#1E40AF]"
              >
                Request a Demo
                <img src={arrowIcon} alt="arrow"  width="24" height="24" />
              </button>
            </div>
          </section>

      <ProductCarousel slides={productSlides} />
      <ProductFooter />


    </div>
  );
}
