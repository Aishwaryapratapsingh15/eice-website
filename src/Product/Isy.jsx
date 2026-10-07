"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
import ProductFooter from "./ProductFooter";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/isynclite.png";
const shieldIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/shield_02.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const wIsynclite = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/whatIsynclite.png";
const checkIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Check_all.svg";
const capIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/CAP.svg";
const cbsIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/CBS.svg";
const ddrIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/DDR.svg";
const dlrIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/DLR.svg"; 
const absIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/ABS.svg";
const fdrrIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/FDRR.svg";
const ivbIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/IVB.svg";
const laaIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/LAA.svg";
const pbrmIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/PBRM.svg";
const sdeIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/SDE.svg";
const backupIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/Backup.svg";
const configureIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/Configure.svg";
const restoreIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/Restore.svg";
const storeIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/Store.svg";
const kbtIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/KBT.svg";
const cbbIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/CBB.svg";
const opbIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/OPB.svg";
const hdIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/HD.svg";
const bg_image = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/bg_image.png";
import { useNavigate } from "@/nextNavigation";



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
    <div>

      {/* ================= HERO ================= */}
      <section className="text-center py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
        <div className="max-w-4xl mx-auto">

          {/* IMAGE */}
          <img src={heroImg} alt="Hero" className="mx-auto pb-4 lg:mb-6 md:mb-6 md:w-96 lg:w-[480px]"  width="873" height="404" />

          {/* BADGE */}
                  <span className="font-general font-semibold lg:inline-flex md:inline-flex flex w-fit mx-auto items-center md:items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">

            <img
              src={shieldIcon}
              alt="icon"
              className="w-5 h-5 object-contain"
             width="20" height="20" />

            Enterprise-Data Protection
          </span>

          {/* HEADING */}
          <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk mt-[10px] max-w-4xl mx-auto py-1">
            <span className="text-bloo">Secure</span> Enterprise Backup & Recovery <br />
            with <span className="text-bloo">Full Data Control</span>
          </h1>

          {/* SUBTEXT */}
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
            A secure, intelligent backup platform designed to protect enterprise data with automated backups,
            end-to-end encryption, and reliable recovery—without disrupting business operations.
          </p>

          {/* BUTTON */}
                   <div className="mt-8 flex flex-wrap justify-start lg:justify-center md:justify-center sm:justify-center gap-4">

                {/* Primary */}
                <button onClick={() => navigate("/products/eicerise/form?product=iSyncLite")}
                className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
                  Request a Demo
                    <img src={arrowIcon} alt="arrow" width="24" height="24" />

                </button>

                {/* Secondary
                <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
                  Talk to an Expert
                </button> */}

              </div>

        </div>
      </section>

      {/* ================= WHAT IS ================= */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
        <div className="grid md:grid-cols-[1.1fr_1fr] sm:gap-16 items-center gap-4">

          {/* LEFT */}
          <div>
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8">
              What is iSyncLite?
            </h2>

            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-[18px]">
              iSyncLite is an enterprise-grade backup and recovery platform built for modern data protection needs.
            </p>

            <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#334155] space-y-3">
              <li className="flex items-start gap-2"><img
                  src={checkIcon}
                  alt="check"
                  className="w-5 h-5 mt-1"
                 width="20" height="20" />Enterprise backup & restore platform</li>
              <li className="flex items-start gap-2"><img
                  src={checkIcon}
                  alt="check"
                  className="w-5 h-5 mt-1"
                 width="20" height="20" />Automated, policy-driven backups</li>
              <li className="flex items-start gap-2"><img
                  src={checkIcon}
                  alt="check"
                  className="w-5 h-5 mt-1"
                 width="20" height="20" />Secure, encrypted data protection</li>
              <li className="flex items-start gap-2"><img
                  src={checkIcon}
                  alt="check"
                  className="w-5 h-5 mt-1"
                 width="20" height="20" />Designed for business continuity & compliance</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <img src={wIsynclite} alt="What is" className="w-full max-w-[500px] mx-auto"  width="579" height="491" />
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <ProductVideo
        eyebrow="Data Backup & Recovery"
        heading="See iSyncLite in Action"
        subtext="See how automated backups, versioning, and rapid recovery help protect critical business data and keep operations running."
        videoId="vnT0g4IR9N8"
      />


      {/* ================= CHALLENGES ================= */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center">

          <div className="mb-8">
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
              Enterprise Data Protection Challenges
            </h2>
            <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
              Organizations face critical challenges in protecting their data. <br />
iSyncLite addresses these head-on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-6 gap-4">

           {data.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
                <div className="rounded-lg flex items-start justify-center mb-[19px]">
                  <img src={item.icon} alt="" className="w-11 h-11 object-contain"  width="44" height="44" />
                </div>
                <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">{item.title}</h3>

                 <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
     <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Core Capabilities
          </h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
            Along with secure storage, iSyncDrive enables controlled file and folder sharing to support collaborations across teams and locations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 gap-4">
          {capabilities.map((item, i) => (
             <div
        key={i}
        className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>

      </div>
          ))}
        </div>
      </section>

      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

        <div className="text-center">

          {/* IMAGE */}
          <img
            src={bg_image}
            alt="platform"
            className="w-full rounded-xl"
           width="1571" height="371" />

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      How it Works
    </h2>
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
      A proven continuous journey from planning to optimization
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-6 gap-4">

    {steps.map((item, i) => (
      <div
        key={i}
        className="relative rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col sm:items-center items-start sm:text-center text-start min-h-[220px]"
      >
        {/* ICON */}
        <div className="w-11 h-11 flex items-center justify-center text-white rounded-lg text-xl mb-[19px]">
          <img src={item.icon} alt="icon" width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</section>

      {/* ================= BENEFITS ================= */}
<section className="bg-white py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-8">
      <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
        Key Benefits for Enterprises
      </h2>
      <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
        Transform your backup operations into a strategic advantage.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-10">

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        {/* ICON SPACE */}
        <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center">
         <img src={kbtIcon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        <div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
            Reduced Risk of Data Loss
          </h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            Comprehensive backup coverage ensures your critical business data is always protected.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>
        <div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
            Faster Recovery and Minimal Downtime
          </h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            Rapid restore capabilities get your systems back online quickly when incidents occur.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>
        <div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
            Simplified Backup Operations
          </h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            Automation and intelligent scheduling reduce manual effort and operational complexity.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>
        <div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
            Compliance-Ready Data Retention
          </h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            Meet regulatory requirements with audit trails and policy-based retention management.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center">
          <img src={kbtIcon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>
        <div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
            Cost-Efficient Backup Management
          </h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            Optimize storage costs with incremental backups and intelligent data deduplication.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= DEPLOYMENT ================= */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center">

          <div className="mb-8">
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
              Deployment & Flexibility
            </h2>
            <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
              Deploy iSyncLite where it works best for your infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:gap-6 gap-4">

            {deploy.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] bg-[#EFFAFF]">
                <div className="w-16 h-16 mb-[19px] sm:mx-auto">
                  <img src={item.icon} alt="icon" className="w-full h-full object-contain"  width="64" height="64" />
                  </div>
                  <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
    {item.title}
  </h3>
                <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] whitespace-pre-line">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>


        {/* FINAL CTA */}
      <section className="bg-gray-50 text-center">
       <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">

        {/* Heading */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
            Ready to Secure Your Enterprise Data?
          </h2>

          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70 max-w-2xl mx-auto mt-2">
            Talk to our experts to see how iSyncLite fits your backup and recovery strategy.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {/* Primary */}
                <button onClick={() => navigate("/products/eicerise/form?product=iSyncLite")}
                className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-[#1E40AF] transition text-[18px]">
              Request a Demo
                <img src={arrowIcon} alt="arrow" width="24" height="24" />

            </button>

            {/* Secondary
            <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
              Talk to an Expert
            </button> */}

          </div>
        </div>
       </div>
      </section>

      <ProductCarousel slides={productSlides}/>
      <ProductFooter/>

    </div>
  );
}
