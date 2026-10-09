"use client";
import { useState, useEffect } from "react";
import { Link } from '@/nextNavigation';
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const acgIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/ACG.png";
const tbacIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/TBAC.png";
const bcpIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BCP.png";
const gsspIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/GSSP.png"; 
const rtumIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/RTUM.png";
const mdsIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/MDS.png";
const ipmsIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/IPMS.png";
const draIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/DRA.png";
const bartIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BART.png";
const bcmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BCM.png";
const begeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BEGE.png";
const bnsIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BNS.png";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BOE.png";
const broIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/BRO.png";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/hero-wifi.png";
const seamlessIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/Seamless.png";
const secureIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/Secure.png";
const scalableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/Scalable.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/wifi/wifiOverview.png";






export default function WifiModule() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);

  const features = [
    { 
      icon: acgIcon,
      title: "Automated Card Generation",
      desc: "Generate unique Wi-Fi access cards automatically at check-in, tied to room number, guest profile, and stay duration for a seamless onboarding experience."
     , __w: 50, __h: 50},
    { 
      icon: tbacIcon,
      title: "Time-Bound Access Control",
      desc: "Set Wi-Fi validity based on check-in and check-out dates, automatically expiring access at departure to maintain network security and bandwidth efficiency."
     , __w: 50, __h: 50},
    { 
      icon: bartIcon,
      title: "Bandwidth Allocation by Room Type",
      desc: "Assign different speed tiers based on room category — standard, deluxe, suite — ensuring premium guests receive priority bandwidth."
     , __w: 50, __h: 50},
    { 
      icon: gsspIcon,
      title: "Guest Self-Service Portal",
      desc: "Allow guests to activate their Wi-Fi using a card code via a branded captive portal, reducing front-desk workload and enhancing the digital experience."
     , __w: 50, __h: 50},
    { 
      icon: rtumIcon,
      title: "Real-Time Usage Monitoring",
      desc: "Track active connections, data consumption, and device count per guest in real time from a centralized network dashboard."
     , __w: 50, __h: 50},
    { 
      icon: mdsIcon,
      title: "Multi-Device Support",
      desc: "Enable guests to connect multiple devices — phones, laptops, tablets — under a single Wi-Fi card with configurable device limits per card."
     , __w: 50, __h: 50},
    { 
      icon: bcpIcon,
      title: "Branded Captive Portal",
      desc: "Customize the Wi-Fi login page with your property’s logo, promotions, and welcome messages to reinforce brand identity at every touchpoint."
     , __w: 50, __h: 50},
    { 
      icon: ipmsIcon,
      title: "Integration with PMS",
      desc: "Sync directly with the Property Management System to auto-issue Wi-Fi credentials upon room assignment, eliminating manual intervention."
     , __w: 50, __h: 50},
    { 
      icon: draIcon,
      title: "Detailed Reporting & Analytics",
      desc: "Generate comprehensive reports on Wi-Fi usage patterns, peak hours, and guest connectivity trends to optimize network infrastructure investment."
     , __w: 50, __h: 50},
  ];

  const benefits = [
    {
      icon:begeIcon,
    title:"Enhanced Guest Experience",
    desc:"Delivers instant, frictionless internet access that meets modern guest expectations from the first minute of arrival.",
    __w: 1068, __h: 1017},

    {
    icon:boeIcon,
    title:"Operational Efficiency",
    desc:"Eliminates manual Wi-Fi credential distribution, freeing front-desk staff to focus on personalized guest service.",
    __w: 1068, __h: 1017},

    {
    icon:broIcon,
    title:"Revenue Optimization",
    desc:"Enables tiered or premium Wi-Fi packages as upsell opportunities, turning connectivity into an additional revenue stream.",
    __w: 1068, __h: 1017},

    {
    icon:bcmIcon,
    title:"Centralized Management",
    desc:"Provides a single dashboard to monitor, manage, and troubleshoot all guest Wi-Fi access across the entire property.",
    __w: 1068, __h: 1017},

    {
    icon:bnsIcon,
    title:"Network Security",
    desc:"Ensures automatic expiry, device limits, and isolated guest networks to protect property infrastructure and guest data.",
    __w: 1068, __h: 1017}
  ];

  const query = [
    {
      question: "Q : What is the Wi-Fi module?",
      answer: "A : It automates guest internet access provisioning."
    },
    {
      question: "Q : How does it improve experience?",
      answer: "A : Guests get instant Wi-Fi access."
    },
    {
      question: "Q : Can access be customized?",
      answer: "A : Yes, based on room type."
    },
    {
      question: "Q : Is it integrated with PMS?",
      answer: "A : Yes, fully integrated."
    }
  ];

  const tag = [
    {
    icon:seamlessIcon,
    title:"Seamless", 
    __w: 60, __h: 60},
    
    {
      icon:secureIcon,
      title:"Secure",
     __w: 60, __h: 60}, 
     
     {
      icon:scalableIcon,
      title:"Scalable"
, __w: 60, __h: 60}
];


  const footerUpperText = {
  
          text1: 'Connect every guest, ',
          text2: " ",
          text3: 'effortlessly',
          img: overviewIcon
      }

  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">WI-FI <span className="text-[#01B0F1]"> MODULE </span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Automate guest Wi-Fi access linked with the Room Booking module to the issuance system, delivering instant, secure connectivity from the moment of check-in. This module can also be utilised to generate the Wi-Fi cards for walking guests/visitors, who are utilising the banquets service, seminars etc.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="wifi module" width="1601" height="784" />
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
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={overviewIcon} alt="" width="720" height="458" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            <strong>Our Wi-Fi module</strong> is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to automate and streamline internet access provisioning for Hotels, Resorts, Clubs and Institutions. From lobby lounges to luxury suites, this feature ensures every guest receives hassle-free, secure Wi-Fi credentials through an intuitive card issuance workflow, enhancing the digital guest experience.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={f.icon?.src || f.icon} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Wifi)"}>
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
            {benefits.map((b, i) => (
              <div key={i} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={b.icon?.src || b.icon} alt="" width={b.__w} height={b.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{b.title}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] text-left">{b.desc}</p>
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
              <details key={i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
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
                  <FooterUpperPart product="Wi-Fi" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                  {!isEmbed && <FooterLower />}

    </>
  );
}