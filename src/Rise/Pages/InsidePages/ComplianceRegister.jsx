"use client";

import { Link } from '@/nextNavigation';
import { useEffect, useState } from "react";

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const dwabIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/DWAB.png";
const pdaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/PDA.png";
const pprIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/PPR.png";
const rtaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/RTA.png";
const rtptIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/RTPT.png";
const serIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/SER.png";
const tadIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/TAD.png";
const bcvIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BCV.png";
const bdddIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BDDD.jpg";
const beaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BEA.jpg";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BOE.jpg";
const bsqIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BSQ.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/hero-compliance.png";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const visibleIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/Visible.png";
const accountableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/Accountable.png";
const connectedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/Connected.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/complianceOverview.png";


export default function ComplianceRegister() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);



  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Task Assignment",
      heading2: "& Delegation",
      desc: "Assign tasks with priority levels, deadlines, attachments, and detailed instructions from a centralized task management dashboard.",
      img: tadIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 2,
      heading: "Real-Time",
      heading2: "Progress Tracking",
      desc: "Monitor task status — pending, in-progress, completed, overdue — in real time with progress percentages and timeline views.",
      img: rtptIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 3,
      heading: "Department-Wise",
      heading2: "Activity Boards",
      desc: "Organize activities by department — housekeeping, maintenance, F&B, front office — with customizable boards, filters, and views.",
      img: dwabIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 4,
      heading: "Recurring Task",
      heading2: "Automation",
      desc: "Set up recurring tasks for monthly operations like room inspections, equipment servicing, and compliance checks with auto-assignment.",
      img: rtaIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 5,
      heading: "SLA &",
      heading2: "Escalation Rules",
      desc: "Define Service Level Agreements for task categories with automated escalation to supervisors and managers when deadlines are breached.",
      img: serIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 6,
      heading: "Photo & Document",
      heading2: "Attachments",
      desc: "Allow staff to attach before/after photos, inspection reports, and documents to tasks as proof of completion for audit trails.",
      img: pdaIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 7,
      heading: "Performance",
      heading2: "Reports",
      desc: "Generate individual and team performance reports — completion rates, average resolution time, SLA compliance — for workforce optimization.",
      img: pprIcon,
      width: "44px"
    , __w: 50, __h: 50}
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Accountability",
      desc: "Clear task ownership, deadlines, and audit trails ensure every activity has a responsible person and a documented outcome.",
      img: beaIcon
    , __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automated recurring tasks and reduce supervisor follow-up effort and keep operations running smoothly.",
      img: boeIcon
    , __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Service Quality",
      desc: "SLA-driven task management ensures guest-impacting activities are prioritized and completed within acceptable timeframes.",
      img: bsqIcon
    , __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Centralized Visibility",
      desc: "Management gets a bird’s-eye view of all operational activities across departments and properties from a single dashboard.",
      img: bcvIcon
    , __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Data-Driven Decisions",
      desc: "Performance analytics help identify bottlenecks, reward top performers, and allocate resources more effectively.",
      img: bdddIcon
    , __w: 1068, __h: 1017}
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Compliance Register module, and who is it designed for?",
      answer: "A : The Compliance Register manages task assignment, progress tracking, and performance monitoring across all operational departments for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve operational accountability?",
      answer: "A : Every task has a clear owner, deadline, and digital audit trail. SLA rules auto-escalate overdue tasks, and photo attachments provide completion evidence."
    },
    {
      question: "Q : Can the module handle recurring operational tasks?",
      answer: "A : Yes. Daily room inspections, weekly equipment checks, and monthly compliance reviews can all be configured as auto-recurring tasks with preset assignment rules."
    },
    {
      question: "Q : Is the Activity Tracker integrated with other EICE Rise modules?",
      answer: "A : Absolutely. It connects with Housekeeping, Maintenance, HRMS to auto-generate tasks from guest complaints, inspection results, and work orders."
    }
  ];

  const tag = [
          {
          icon:visibleIcon,
          title:"Visible", 
          __w: 60, __h: 60},
          
          {
            icon:accountableIcon,
            title:"Accountable",
           __w: 60, __h: 60}, 
           
           {
            icon:connectedIcon,
            title:"Connected"
      , __w: 60, __h: 60}
      ];

  const footerUpperText = {
    text1: "Track every task,",
    text2: "",
    text3: "deliver every promise",
    img: overviewIcon
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">COMPLIANCE <span className="text-[#01B0F1]">REGISTER</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Track, assign, and monitor operational activities and tasks across departments in real time, ensuring accountability and timely completion.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="compliance register" width="1200" height="918" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          {tag.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={t.icon?.src || t.icon} alt="" width={t.__w} height={t.__h} />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">{t.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={overviewIcon} alt="" width="995" height="543" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            Our Compliance Register module  is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to manage and monitor departmental tasks, organization compliance register and activities for Hotels, Resorts, Clubs and Institutions. From daily housekeeping checklists to maintenance work orders, this feature provides a task assignment, progress tracking, and performance analytics platform, ensuring every operational activity is visible, accountable, and completed on time.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div key={item.key ?? index} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={item.img?.src || item.img} alt="" width={item.__w} height={item.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.heading} {item.heading2}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Compliance Register)"}>
              Request a Demo <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" width="20" height="20" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Benefits</h2>

          <div className="flex flex-col gap-4">
            {benefits.map((item, index) => (
              <div key={item.key ?? index} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={item.img?.src || item.img} alt="" width={item.__w} height={item.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{item.heading}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] text-left">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="text-left sm:text-center mb-8">
            <div className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">FAQs</div>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {query.map((item, i) => (
              <details key={item.key ?? i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
                <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
                  <span>{item.question}</span>
                  <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
                           <FooterUpperPart product="Compliance Register" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                           {!isEmbed && <FooterLower />}
    </>
  );
}