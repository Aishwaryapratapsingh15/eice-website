"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";
import heroImg from "/src/assets/isynclite/isynclite.png"
import shieldIcon from "../assets/common/shield_02.svg";
import arrowIcon from "../assets/arrow.svg";
import wIsynclite from "/src/assets/isynclite/whatIsynclite.png"
import checkIcon from "../assets/common/Check_all.svg";
import capIcon from "/src/assets/isynclite/CAP.svg";
import cbsIcon from "/src/assets/isynclite/CBS.svg";
import ddrIcon from "/src/assets/isynclite/DDR.svg";
import dlrIcon from "/src/assets/isynclite/DLR.svg"; 
import absIcon from "/src/assets/isynclite/ABS.svg";
import fdrrIcon from "/src/assets/isynclite/FDRR.svg";
import ivbIcon from "/src/assets/isynclite/IVB.svg";
import laaIcon from "/src/assets/isynclite/LAA.svg";
import pbrmIcon from "/src/assets/isynclite/PBRM.svg";
import sdeIcon from "/src/assets/isynclite/SDE.svg";
import backupIcon from "/src/assets/isynclite/Backup.svg"
import configureIcon from "/src/assets/isynclite/Configure.svg"
import restoreIcon from "/src/assets/isynclite/Restore.svg"
import storeIcon from "/src/assets/isynclite/Store.svg";
import kbtIcon from "/src/assets/isynclite/kbt.svg";
import cbbIcon from "/src/assets/isynclite/cbb.svg";
import opbIcon from "/src/assets/isynclite/OPB.svg";
import hdIcon from "/src/assets/isynclite/HD.svg";
import bg_image from "/src/assets/isynclite/bg_image.png";
import { useNavigate } from "/src/nextNavigation";



const deploy= [
  {
    title:"On-Premises Backup",
    icon:opbIcon,
    desc:"Deploy on your own infrastructure for\ncomplete control and data\nsovereignty."
   },
   {
    title: "Cloud Based Backup",
    icon:cbbIcon,
    desc:"Leverage cloud storage for\nscalable, off-site backup\nsolutions."
    },
    {
    title: "Hybrid Deployment",
    icon: hdIcon,
    desc:"Combine on-prem and cloud\nfor the best of both worlds"
  }
]

const steps = [
  {
    icon: configureIcon,
    title: "Configure",
    desc: "Define backup policies, schedules, and data sources through an intuitive interface.",
  },
  {
    icon: backupIcon,
    title: "Backup",
    desc: "Automatically back up data with encryption and compression for optimal storage.",
  },
  {
    icon: storeIcon,
    title: "Store",
    desc: "Securely store backups based on defined retention rules and compliance needs.",
  },
  {
    icon: restoreIcon,
    title: "Restore",
    desc: "Quickly recover files or full data sets when needed, minimizing downtime.",
  },
];

const data = [
  { title: "Data Loss\nRisks",
    icon: dlrIcon,
    desc:"Hardware failures, ransomware attacks, and accidental deletion threaten business continuity",
  },
  { title: "Complex Backup Systems",
    icon: cbsIcon,
    desc:"Legacy tools with high operational overhead and difficult management", 
  },
  { title: "Compliance & Audit Pressure",
    icon: capIcon,
    desc:"Meeting backup policies, retention requirements, and traceability standards.",
   },
  { title: "Downtime During Recovery",
    icon: ddrIcon,
    desc:"Slow restore processes that impact business operations and revenue.",
  },
];

const capabilities = [
      {
    icon: absIcon,
    title: "Automated Backup Scheduling",
    desc: "Set it and forget it. Define schedules that run automatically without manual intervention",
  },
     {
    icon: sdeIcon,
    title: "Secure Data Encryption",
    desc: "End-to-end encryption protects your data in transit and at rest.",
  },
  {
    icon: ivbIcon,
    title: "Incremental & Versioned Backups",
    desc: "Save storage space with incremental backups and maintain multiple versions.",
  },
  {
    icon: fdrrIcon,
    title: "Fast Data Recovery & Restore",
    desc: "Minimize downtime with rapid restore capabilities when you need them most.",
  },
  {
    icon: pbrmIcon,
    title: "Policy-Based Retention Management",
    desc: "Automate retention policies to meet compliance and governance requirements.",
  },
  {
    icon: laaIcon,
    title: "Lightweight Agent Architecture",
    desc: "Minimal resource footprint ensures backups don't impact system performance.",
  },
];

export default function IsyncLitePage() {
  const navigate = useNavigate();
  return (
    <div className="font-poppins">

      {/* ================= HERO ================= */}
      <section className="text-center py-16 px-4 md:px-10 lg:px-20 xl:px-40 mt-10">
        <div className="max-w-[1200px] mx-auto">

          {/* IMAGE */}
          <img src={heroImg.src} alt="Hero" className="mx-auto mb-6 w-72 md:w-96 lg:w-[480px]" />

          {/* BADGE */}
                  <span className="inline-flex items-center gap-2 bg-blue-50 text-[#334155] px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
            
            <img 
              src={shieldIcon.src} 
              alt="icon" 
              className="w-5 h-5 object-contain"
            />
          
            Enterprise-Data Protection
          </span>

          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl text-[#334155] font-bold leading-relaxed mt-6 mb-6">
            <span className="text-[#01B0F1]">Secure</span> Enterprise Backup & Recovery <br />
            with <span className="text-[#01B0F1]">Full Data Control</span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-[#64748B] max-w-[800px] mx-auto mb-8 text-sm md:text-lg">
            A secure, intelligent backup platform designed to protect enterprise data with automated backups,
            end-to-end encryption, and reliable recovery—without disrupting business operations.
          </p>

          {/* BUTTON */}
                   <div className="mt-8 flex flex-wrap justify-center gap-4">
          
                {/* Primary */}
                <button onClick={() => navigate("/products/form?embed=true&product=iSyncLite")} 
                className="bg-[#012060] text-white px-10 py-5 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px] w-[250px] h-[56px]">
                  Request a Demo
                    <img src={arrowIcon.src} alt="arrow"/>
          
                </button>
          
                {/* Secondary
                <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
                  Talk to an Expert
                </button> */}
          
              </div>

        </div>
      </section>

      {/* ================= WHAT IS ================= */}
      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
              What is iSyncLite?
            </h2>

            <p className="text-[#64748B] font-semibold mb-6 leading-8 space-y-6">
              iSyncLite is an enterprise-grade backup and recovery platform built for modern data protection needs.
            </p>

            <ul className="space-y-3 text-[#334155] font-semibold">
              <li className="flex items-start gap-2"><img
                  src={checkIcon.src}
                  alt="check"
                  className="w-5 h-5 mt-1"
                />Enterprise backup & restore platform</li>
              <li className="flex items-start gap-2"><img
                  src={checkIcon.src}
                  alt="check"
                  className="w-5 h-5 mt-1"
                />Automated, policy-driven backups</li>
              <li className="flex items-start gap-2"><img
                  src={checkIcon.src}
                  alt="check"
                  className="w-5 h-5 mt-1"
                />Secure, encrypted data protection</li>
              <li className="flex items-start gap-2"><img
                  src={checkIcon.src}
                  alt="check"
                  className="w-5 h-5 mt-1"
                />Designed for business continuity & compliance</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <img src={wIsynclite.src} alt="What is" className="w-full max-w-[500px] mx-auto" />
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-bold text-[#334155] mb-5">
            Enterprise Data Protection Challenges
          </h2>
          <h6 className="text-2xl md:text-xl font-semibold text-[#64748B] mb-10">
            Organizations face critical challenges in protecting their data. < br />
iSyncLite addresses these head-on.
          </h6>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

           {data.map((item, i) => (
              <div key={i} className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-6 flex flex-col items-start text-start gap-4">
                <div className="rounded-lg flex items-start justify-center">
                  <img src={item.icon.src} alt="" className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-bold text-2xl text-[#334155] whitespace-pre-line">{item.title}</h3>

                 <p className="text-[#64748B] text-lg leading-relaxed">
          {item.desc}
        </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
     <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-[#334155] mb-5 text-center">
          Core Capabilities
        </h2>
        <h4 className="text-xl text-[#64748B] font-semibold text-center mb-10 max-w-3xl mx-auto">
          Along with secure storage, iSyncDrive enables controlled file and folder sharing to support collaborations across teams and locations        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
             <div
        key={i}
        className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-6 flex flex-col items-start text-start gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center">
          <img src={item.icon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-2xl text-[#334155]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-[#64748B] text-lg leading-relaxed">
          {item.desc}
        </p>

      </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
      
        <div className="max-w-6xl mx-auto text-center">
      
          {/* IMAGE */}
          <img
            src={bg_image.src}
            alt="platform"
            className="w-full rounded-xl"
          />
      
        </div>
      
      </section>

      {/* ================= HOW IT WORKS ================= */}
<section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">

  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-7">
    {/* <h2 className="text-4xl font-bold"> */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      How it Works
    </h2>
    <p className="text-[#64748B] font-semibold mt-6 text-xl">
      A proven continuous journey from planning to optimization
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    {steps.map((item, i) => (
      <div
        key={i}
        className="relative bg-white border border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center text-center gap-4 min-h-[220px]"
      >
        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center text-white rounded-lg text-xl">
          <img src={item.icon.src} alt="icon"/>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-[#334155]]">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#64748B] font-semibold text-lg leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</section>

      {/* ================= BENEFITS ================= */}
<section className="bg-white py-10 px-4 md:px-10 lg:px-20 xl:px-40">
  <div className="max-w-[1100px] mx-auto">

    {/* Heading */}
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#334155]">
        Key Benefits for Enterprises
      </h2>
      <p className="mt-3 text-sm sm:text-base md:text-xl text-[#64748B] font-semibold">
        Transform your backup operations into a strategic advantage.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-10">

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        {/* ICON SPACE */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center">
         <img src={kbtIcon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#334155]">
            Reduced Risk of Data Loss
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#64748B] leading-relaxed font-semibold">
            Comprehensive backup coverage ensures your critical business data is always protected.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#334155]">
            Faster Recovery and Minimal Downtime
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#64748B] leading-relaxed font-semibold">
            Rapid restore capabilities get your systems back online quickly when incidents occur.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#334155]">
            Simplified Backup Operations
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#64748B] leading-relaxed font-semibold">
            Automation and intelligent scheduling reduce manual effort and operational complexity.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#334155]">
            Compliance-Ready Data Retention
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#64748B] leading-relaxed font-semibold">
            Meet regulatory requirements with audit trails and policy-based retention management.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#334155]">
            Cost-Efficient Backup Management
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#64748B] leading-relaxed font-semibold">
            Optimize storage costs with incremental backups and intelligent data deduplication.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= DEPLOYMENT ================= */}
      <section className="py-10 px-20 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#334155]">
            Deployment & Flexibility
          </h2>
           <p className="text-sm sm:text-base md:text-xl text-[#64748B] font-semibold mb-6">
        Deploy iSyncLite where it works best for your infrastructure.
      </p>

          <div className="grid md:grid-cols-3 gap-6">

            {deploy.map((item, i) => (
              <div key={i} className="p-6 rounded-xl shadow-sm bg-[#EFFAFF] border border-[#E2E8F0]">
                <div className="w-10 h-10 mb-4 mx-auto">
                  <img src={item.icon.src} alt="icon" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-bold text-[#334155] text-2xl">
    {item.title}
  </h3>
                <p className="font-semibold text-[#64748B] mt-5 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

        {/* FINAL CTA */}
      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-gray-50 text-center mb-10">
      
        {/* Heading */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800">
            Ready to Secure Your Enterprise Data?
          </h2>
      
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Talk to our experts to see how iSyncLite fits your backup and recovery strategy.
          </p>
      
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
      
            {/* Primary */}
                <button onClick={() => navigate("/products/form?embed=true&product=iSyncLite")} 
                className="bg-[#012060] text-white px-10 py-5 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px] w-[250px] h-[56px]">
              Request a Demo
                <img src={arrowIcon.src} alt="arrow"/>
      
            </button>
      
            {/* Secondary
            <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
              Talk to an Expert
            </button> */}
      
          </div>
        </div>
      
      </section>

      <ProductCarousel slides={productSlides}/>
      <ProductFooter/>

    </div>
  );
}



























// import React from "react";
// import heroImg from "../assets/isynclite/screen.png";

// const features = [
//   {
//     title: "Automated Backup Scheduling",
//     desc: "Set it and forget it. Define schedules that run automatically without manual intervention",
//   },
//   {
//     title: "Secure Data Encryption",
//     desc: "End-to-end encryption protects your data in transit and at rest.",
//   },
//   {
//     title: "Incremental & Versioned Backups",
//     desc: "Save storage space with incremental backups and maintain multiple versions.",
//   },
//   {
//     title: "Fast Data Recovery & Restore",
//     desc: "Minimize downtime with rapid restore capabilities when you need them most.",
//   },
//   {
//     title: "Policy Based Retention Management",
//     desc: "Automate retention policies to meet compliance and governance requirements.",
//   },
//   {
//     title: "Lightweight Agent Architecture",
//     desc: "Minimal resource footprint ensures backups dont impact system performance.",
//   },
// ];

// const challenges = [
//   {
//     title: "Data Loss Risks",
//     desc: "Hardware failures, ransomware attacks, and accidental deletion threaten business continuity.",
//   },
//   {
//     title: "Complex Backup Systems",
//     desc: "Legacy tools with high operational overhead and difficult management.",
//   },
//   {
//     title: "Compliance & Audit Pressure",
//     desc: "Meeting backup policies, retention requirements, and traceability standards.",
//   },
//   {
//     title: "Downtime During Recovery",
//     desc: "Slow restore processes that impact business operations and revenue.",
//   },
// ];

// const steps = [
//   {
//     title: "Configure",
//     desc: "Define backup policies, schedules, and data sources through an intuitive interface.",
//   },
//   {
//     title: "Backup",
//     desc: "Automatically back up data with encryption and compression for optimal storage.",
//   },
//   {
//     title: "Store",
//     desc: "Securely store backups based on defined retention rules and compliance needs.",
//   },
//   {
//     title: "Restore",
//     desc: "Quickly recover files or full data sets when needed, minimizing downtime.",
//   },
// ];

// const benefits = [
//   "Reduced Risk of Data Loss",
//   "Simplified Backup Operations",
//   "Cost-Efficient Backup Management",
//   "Faster Recovery and Minimal Downtime",
//   "Compliance-Ready Data Retention",
// ];

// const deployments = [
//   {
//     title: "On-Premises Backup",
//     desc: "Deploy on your own infrastructure for complete control and data sovereignty.",
//   },
//   {
//     title: "Cloud-Based Backup",
//     desc: "Leverage cloud storage for scalable, off-site backup solutions.",
//   },
//   {
//     title: "Hybrid Deployment",
//     desc: "Combine on-prem and cloud for the best of both worlds.",
//   },
// ];

// export default function ISyncLitePage() {
//   return (
//     <div className="bg-gray-50 text-gray-800">

//       {/* HERO */}
//       <section className="text-center pt-40 pb-16 px-6">
//         <img
//           src={heroImg.src}
//           alt="product"
//           className="mx-auto mb-6 w-72 md:w-96 lg:w-[580px]"
//         />

//         <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium border border-blue-500">
//           Enterprise-Data Protection
//         </span>

//         <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mt-6 max-w-3xl mx-auto">
//           Secure Enterprise Backup & Recovery with Full Data Control
//         </h1>

//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           A secure, intelligent backup platform designed to protect enterprise data
//           with automated backups, end-to-end encryption, and reliable recovery—without
//           disrupting business operations.
//         </p>

//         <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-blue-900 text-white px-6 py-3 rounded-sm">
//             Request a Demo
//           </button>
//           <button className="border border-gray-300 px-6 py-3 rounded-sm">
//             Talk to an Expert
//           </button>
//         </div>
//       </section>

//       {/* WHAT IS */}
//       <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             What is iSyncLite?
//           </h2>
//           <p className="text-gray-600 mb-4">
//             iSyncLite is an enterprise-grade backup and recovery platform built for
//             modern data protection needs. Designed for enterprise-scale operations,
//             it delivers automated, policy-driven backups with robust security and
//             encryption at every layer.
//           </p>

//           <ul className="space-y-2">
//             {[
//               "Enterprise backup & restore platform",
//               "Automate, policy-driven backups",
//               "Secure, encrypted data protection",
//               "Designed for business continuity & compliance",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-2">
//                 <span className="text-blue-700">✔</span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <img
//             src="/illustration.png"
//             alt="illustration"
//             className="w-full"
//           />
//         </div>
//       </section>

//       {/* CHALLENGES */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold">
//           Enterprise Data Protection Challenges
//         </h2>
//         <p className="text-gray-600 mt-2 mb-10">
//           Organizations face critical challenges in protecting their data.
//         </p>

//         <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {challenges.map((item, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow">
//               <h3 className="font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-16 px-6 bg-white text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10">
//           Core Capabilities of iSyncLite
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {features.map((item, i) => (
//             <div key={i} className="p-6 rounded-xl shadow bg-gray-50">
//               <h3 className="font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10">
//           How iSyncLite Works
//         </h2>

//         <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {steps.map((step, i) => (
//             <div key={i} className="p-6">
//               <h3 className="font-semibold mb-2">{step.title}</h3>
//               <p className="text-sm text-gray-600">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="py-16 px-6 bg-white text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10">
//           Key Benefits for Enterprises
//         </h2>

//         <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
//           {benefits.map((item, i) => (
//             <div key={i} className="flex gap-2">
//               <span className="text-blue-700">✔</span>
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* DEPLOYMENT */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10">
//           Deployment & Flexibility
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {deployments.map((item, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow">
//               <h3 className="font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-6 text-center bg-gray-100">
//         <h2 className="text-2xl md:text-3xl font-bold">
//           Ready to Secure Your Enterprise Data?
//         </h2>

//         <p className="text-gray-600 mt-3">
//           Talk to our experts to see how iSyncLite fits your backup and recovery strategy.
//         </p>

//         <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">
//             Request a Demo
//           </button>
//           <button className="border border-gray-300 px-6 py-3 rounded-lg">
//             Talk to an Expert
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// }
// const ComingSoon = () => {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-50">
//       <h1 className="text-4xl font-bold mb-4">🚧 Coming Soon</h1>
//       <p className="text-gray-600">
//         This page is under development. Stay tuned!
//       </p>
//     </div>
//   );
// };

// export default ComingSoon;