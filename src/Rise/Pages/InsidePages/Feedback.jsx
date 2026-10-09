"use client";

import { Link } from '@/nextNavigation';
import { useEffect, useState } from "react";

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const caIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/CA.png";
const dwrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/DWR.png";
const ghpmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/GHPM.png";
const retIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/RET.png";
const rtfaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/RTFA.png";
const sadIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/SAD.png";
const bcmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/BCM.jpg";
const beglIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/BEGL.jpg";
const boiIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/BOI.jpg";
const briIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/BRI.jpg";
const bsrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/BSR.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/hero-feedback.jpg";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const insightfulIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/Insightful.png";
const realtimeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/Realtime.png";
const actionableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/Actionable.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/feedback/feedbackOverview.png";



export default function Feedback() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);

  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Real-Time",
      heading2: "Feedback Alerts",
      desc: "Receive instant notifications for negative feedback or low ratings, enabling immediate intervention and service recovery before guest departure.",
      icon: rtfaIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 2,
      heading: "Sentiment",
      heading2: "Analysis Dashboard",
      desc: "Visualize guest sentiment trends, satisfaction scores, and NPS across departments, outlets, and time periods through an interactive analytics dashboard.",
      icon: sadIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 3,
      heading: "Department-Wise",
      heading2: "Routing",
      desc: "Automatically route feedback to the relevant department — housekeeping, F&B, front desk, maintenance — based on category for targeted resolution.",
      icon: dwrIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 4,
      heading: "Resolution &",
      heading2: "Escalation Tracking",
      desc: "Track feedback resolution from acknowledgement to closure with SLA timers, escalation rules, and manager override capabilities.",
      icon: retIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 5,
      heading: "Guest History",
      heading2: "& Preference Mapping",
      desc: "Link feedback to guest profiles, building a comprehensive preference and complaint history for personalised future interactions.",
      icon: ghpmIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 6,
      heading: "Comparative",
      heading2: "Analytics",
      desc: "Benchmark feedback scores across properties, departments, and time periods to identify best practices and areas requiring improvement.",
      icon: caIcon,
      width: "44px"
    , __w: 50, __h: 50}
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Guest Loyalty",
      desc: "Prompt acknowledgement and resolution of feedback demonstrates care, converting potentially dissatisfied guests into loyal advocates.",
      img: beglIcon
    , __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Operational Improvement",
      desc: "Data-driven insights from feedback trends help identify systemic issues and prioritize operational improvements.",
      img: boiIcon
    , __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Revenue Impact",
      desc: "Improved satisfaction scores directly correlate with higher repeat visits, positive reviews, and increased referral revenue.",
      img: briIcon
    , __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single dashboard for all feedback across properties, channels, and departments provides complete visibility into guest sentiment.",
      img: bcmIcon
    , __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Service Recovery",
      desc: "Real-time alerts enable immediate intervention for negative experiences, turning potential complaints into service recovery success stories.",
      img: bsrIcon
    , __w: 1068, __h: 1017}
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Feedback System module, and who is it designed for?",
      answer: "A : The Feedback System captures, analyzes, and manages guest feedback across multiple channels for hotels, resorts, clubs, and institutions, helping improve service quality and guest satisfaction."
    },
    {
      question: "Q : How does this module improve guest satisfaction?",
      answer: "A : Real-time negative feedback alerts enable immediate service recovery, while sentiment analytics help identify and fix systemic issues before they impact more guests."
    },
    {
      question: "Q : Can feedback be routed to specific departments automatically?",
      answer: "Yes. Feedback is auto-categorized and routed to the relevant department — F&B, housekeeping, front desk — with SLA timers and escalation rules for timely resolution."
    },
    {
      question: "Q : Is the Feedback System integrated with guest profiles?",
      answer: "A : Absolutely. Every feedback entry links to the guest’s profile in the Member Portal and Room Booking modules, building a comprehensive preference and interaction history."
    }
  ];


   const tag = [
        {
        icon:insightfulIcon,
        title:"Insightful", 
        __w: 60, __h: 60},
        
        {
          icon:realtimeIcon,
          title:"Real Time",
         __w: 60, __h: 60}, 
         
         {
          icon:actionableIcon,
          title:"Actionable"
    , __w: 60, __h: 60}
    ];


  const footerUpperText = {
    text1: "Listen more, ",
    text2: "",
    text3: "serve better",
    img: overviewIcon
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]"><>FEEDBACK <span className="text-bloo">SYSTEM</span></></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Capture, analyze, and act on guest feedback in real time, transforming opinions into operational improvements and enhanced guest satisfaction.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="feedback module" width="2097" height="897" />
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
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={overviewIcon} alt="" width="746" height="441" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            Our Feedback System module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to capture and manage guest feedback for Hotels, Resorts, Clubs and Institutions. From dining experiences to room comfort, banquet service, this feature provides multi-channel feedback collection, sentiment analysis, ensuring every guest voice is heard and acted upon.
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
                <img className="w-[44px] mb-[19px]" src={item.icon?.src || item.icon} alt="" width={item.__w} height={item.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.heading} {item.heading2}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Feedback)"}>
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
              <div key={index} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
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
                           <FooterUpperPart product="Feedback" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                           {!isEmbed && <FooterLower />}
               
    </>
  );
}