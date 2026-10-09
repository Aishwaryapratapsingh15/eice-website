"use client";

import { Link } from '@/nextNavigation';
import { useEffect, useState } from "react";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const bpvmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/BPVM.png";
const camIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/CAM.png";
const cdtIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/CDT.png";
const phlIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/PHL.png";
const psrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/PSR.png";
const vcpIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VCP.png";
const vctIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VCT.png";
const vmdIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VMD.png";
const vroIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VRO.png";
const bcmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bcm.png";
const bcoIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bco.jpg";
const bcrmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bcrm.jpg";
const bescrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bescr.png";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/boe.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/hero-vendor.png";
// const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const ratedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/Rated.png";
const reliableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/Reliable.png";
const regulatedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/Regulated.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/vendorOverview.png";






export default function VendorManagement() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);

  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Vendor Registration",
      heading2: "& Onboarding",
      desc: "Digitize vendor onboarding with online registration forms, document collection (GST, PAN, bank details), and verification workflows for compliance-ready vendor profiles.",
      img: vroIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 2,
      heading: "Vendor Master",
      heading2: "Database",
      desc: "Maintain a centralized vendor directory with contact details, service categories, payment terms, credit limits, and compliance documentation for quick reference.",
      img: vmdIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 3,
      heading: "Performance",
      heading2: "Scoring & Rating",
      desc: "Rate vendors based on delivery timeliness, quality compliance, pricing competitiveness, and responsiveness with configurable scoring parameters.",
      img: psrIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 4,
      heading: "Contract",
      heading2: "Management",
      desc: "Store and manage vendor contracts, rate agreements, and service level agreements with renewal alerts, expiry notifications, and version-controlled documents.",
      img: camIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 5,
      heading: "Compliance &",
      heading2: "Document Tracking",
      desc: "Track vendor compliance documents — licenses, insurance, certifications, FSSAI — with expiry alerts and auto-blocking of non-compliant vendors.",
      img: cdtIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 6,
      heading: "Vendor",
      heading2: "Comparison Tools",
      desc: "Compare vendors across parameters — pricing, quality, lead time, payment terms — with visual comparison matrices for informed selection.",
      img: vctIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 7,
      heading: "Blacklist &",
      heading2: "Preferred Management",
      desc: "Maintain preferred vendor lists and blacklist non-performing suppliers with documented reasons, ensuring procurement teams work with vetted partners.",
      img: bpvmIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 8,
      heading: "Payment History",
      heading2: "& Ledger",
      desc: "Track vendor-wise payment history, outstanding balances, and debit/credit notes with integration to Accounts & Finance for reconciliation.",
      img: phlIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 9,
      heading: "Vendor Communication",
      heading2: "Portal",
      desc: "Enable direct communication with vendors for quotation requests, order confirmations, and dispute resolution through a built-in messaging system.",
      img: vcpIcon,
      width: "44px"
    , __w: 50, __h: 50}
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Supply Chain Reliability",
      desc: "Performance-rated vendors and preferred supplier lists ensure consistent quality and timely delivery of goods and services.",
      img: bescrIcon
    , __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Digital onboarding, centralized documentation, and automated alerts reduce vendor management overhead significantly.",
      img: boeIcon
    , __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Cost Optimization",
      desc: "Vendor comparison tools and rate contract management ensure the best pricing and terms across all procurement categories.",
      img: bcoIcon
    , __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single vendor portal for all properties, categories, and contracts provides complete supplier network visibility.",
      img: bcmIcon
    , __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Compliance & Risk Mitigation",
      desc: "Automated document tracking and compliance checks prevent engagement with non-compliant or blacklisted vendors.",
      img: bcrmIcon
    , __w: 1068, __h: 1017}
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Vendor Management module, and who is it designed for?",
      answer: "A : The Vendor Management module handles the complete vendor lifecycle — registration, performance tracking, contract management, and compliance — for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve vendor quality?",
      answer: "A : It auto-rates vendors on delivery, quality, pricing, and responsiveness. Low-performing vendors are flagged or blacklisted, while top performers are prioritized in procurement workflows."
    },
    {
      question: "Q : Can the module manage vendor compliance documents?",
      answer: "A : Yes. It tracks all vendor documents — GST, FSSAI, insurance, licenses — with expiry alerts and auto-blocks vendors with expired or missing compliance documentation."
    },
    {
      question: "Q : Is the Vendor Management module integrated with purchasing?",
      answer: "A : Absolutely. It connects with the Purchase Module for vendor selection, Store & Inventory Management for GRN matching, and Accounts & Finance for payment processing and reconciliation."
    }
  ];

   const tag = [
            {
            icon:reliableIcon,
            title:"Reliable", 
            __w: 60, __h: 60},
            
            {
              icon:ratedIcon,
              title:"Rated",
             __w: 60, __h: 60}, 
             
             {
              icon:regulatedIcon,
              title:"Regulated"
        , __w: 60, __h: 60}
        ];
  

  const footerUpperText = {
    text1: "Build partnerships,",
    text2: "",
    text3: "not just vendor lists",
    img: overviewIcon
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">VENDOR <span className="text-[#01B0F1]">MANAGEMENT</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Build and manage a trusted vendor ecosystem with comprehensive supplier profiles, performance tracking, contract management, and compliance monitoring.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="vendor management" width="1389" height="915" />
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
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={overviewIcon} alt="" width="995" height="540" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            Our Vendor Management module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline vendor lifecycle management for Hotels, Resorts, Clubs and Institutions. From vendor registration to performance evaluation, this feature provides a centralized, transparent platform for procurement teams, finance departments, and administrators, ensuring a reliable, cost-effective, and compliant supplier network.
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
                <img className="w-[44px] mb-[19px]" src={f.img?.src || f.img} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.heading} {f.heading2}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Vendor Management)"}>
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
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={b.img?.src || b.img} alt="" width={b.__w} height={b.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{b.heading}</h3>
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
                           <FooterUpperPart product="Vendor Management" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                           {!isEmbed && <FooterLower />}
    </>
  );
}