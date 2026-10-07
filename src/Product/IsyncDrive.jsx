"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
import ProductFooter from "./ProductFooter";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/screen.png";
const dataOwnershipIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Data_Ownnership_Risks.svg";
const fragmentedFileIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Fragmented_File_Systems.svg";
const governanceIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Lack_of_Governance.svg";
const hybridSupportIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/On-Prem_Support.svg";
const clientAppIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Client_App.svg";
const syncEngineIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Sync_engine.svg";
const storageGatewayIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Storage_gateway.svg";
const managementConsoleIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Management_console.svg";
const bgImage = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Background.png";
const fileSharingIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/File_sharing.svg";
const roleBaseAccessIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Role-Based_Access.svg";
const complianceIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Compliance.svg";
const centralizedConsoleIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Centralized_Admin.svg";
const multiPlatformIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Multi-Platform_Access.svg";
const whiteLabelIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/White-Label_Flexibility.svg";
const encryptionIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/End-to-End_Encryption.svg";
const intelligentSyncIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Intelligent_Sync.svg";
const deployIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Deploy.svg";
const planIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Plan.svg";
const scaleIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Scale.svg";
const optimizeIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Optimize.svg";
const adaptiveIntelligenceIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Adaptive_Intelligence.svg";
const unifiedEcosystemIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Unified_Ecosystem.svg";
const rbacIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/RBAC.svg";
const approvalIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Approval_Workflows.svg";
const tenantIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Tenant_Governance.svg";
const cloudIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Cloud_Deployment.svg";
const onPremIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/On-Prem_Deployment.svg";
const hybridIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Hybrid_Deployment.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const cRoleSeparationIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Clear_Role_Seperation.svg";
const enterpriseGovernanceIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Enterprise_Governance.svg";
const flexibleDeploymentIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Flexible_Deployment.svg";
const bgImage2 = "https://d3r43jacxrwsrp.cloudfront.net/common/Background.png";
const shieldIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/shield_02.svg";
const checkIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Check_all.svg";
const linkingIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/linking.svg";
import { useNavigate } from "@/nextNavigation";


const features = [
  { icon: enterpriseGovernanceIcon, title: "Enterprise Governance", desc: "Role based access and approvals" , __w: 44, __h: 44},
  { icon: flexibleDeploymentIcon, title: "Flexible Deployment", desc: "Cloud, On prem or hybrid" , __w: 44, __h: 44},
  { icon: cRoleSeparationIcon, title: "Clear Role Separation", desc: "User, Admin, Super Admin" , __w: 44, __h: 44},
];

// const challenges = [
//   "Fragmented File Systems",
//   "Lack of Governance",
//   "Data Ownership Risks",
//   "No Hybrid or On-Prem Support",
// ];


const challenges = [
  {
    icon: fragmentedFileIcon,
    title: "Fragmented File Systems",
    desc: "Files scattered across tools and devices",
  },
  {
    icon: governanceIcon,
    title: "Lack of Governance",
    desc: "Limited admin visibility and approvals",
  },
  {
    icon: dataOwnershipIcon,
    title: "Data Ownership Risks",
    desc: "Vendor-controlled cloud storage",
  },
  {
    icon: hybridSupportIcon,
    title: "No Hybrid or On-Prem Support",
    desc: "Inflexible deployment models",
  },
];

const architecture = [
  {
    icon: clientAppIcon,
    title: "Client\nApp",
    desc: "Unified, centralized access to enterprise files across web and desktop environments",
  },  
  {
    icon: syncEngineIcon,
    title: "Sync\nEngine",
    desc: "Real-time synchronization with intelligent conflict resolution",
  },
  {
    icon: storageGatewayIcon,
    title: "Storage\nGateway",
    desc: "Integrates with S3, Blob and Ceph backends for flexible storage",
  },
  {
    icon: managementConsoleIcon,
    title: "Management Console",
    desc: "Central monitoring, analytics, and user administration",
  },
];

const platformFeatures = [
      {
    icon: fileSharingIcon,
    title: "File Sharing & Synchronization",
    // desc: "Secure file and folder sharing combined with inteliigent synchronization for seamless collaborations across devices",
    desc: "Share and sync files securely across all devices and platforms"
  },
     {
    icon: roleBaseAccessIcon,
    title: "Role-Based Access Control",
    desc: "Define user roles and manage permissions",
  },
  {
    icon: complianceIcon,
    title: "Compliance & Reporting",
    desc: "Generate audit-ready reports",
  },
  {
    icon: centralizedConsoleIcon,
    title: "Centralized Admin Console",
    desc: "Manage users and analytics from one dashboard",
  },
  {
    icon: multiPlatformIcon,
    title: "Multi-platform Access",
    desc: "Access anywhere Windows,, macOs, linux, Web",
  },
  {
    icon: whiteLabelIcon,
    title: "White-label Flexibility",
    desc: "Customize UI for partners and clients",
  },
  {
    icon: encryptionIcon,
    title: "End-to-End Encryption",
    desc: "AES-256 protection for data in transit and rest",
  },
  {
    icon: intelligentSyncIcon,
    title: "Intelligent Sync Engine",
    desc: "Smart file sync and version optimization",
  },
];


const steps = [
  {
    icon: planIcon,
    step: "01",
    title: "Plan",
    desc: "Define storage goals, compliance policies, and integration roadmap.",
  },
  {
    icon: deployIcon,
    step: "02",
    title: "Deploy",
    desc: "Configure, connect, and securely launch iSyncDrive across your ecosystem.",
  },
  {
    icon: scaleIcon,
    step: "03",
    title: "Scale",
    desc: "Expand storage clusters, integrate new teams, and strengthen access controls organization-wide.",
  },
  {
    icon: optimizeIcon,
    step: "04",
    title: "Optimize",
    desc: "Continuously refine synchronization performance and compliance monitoring for maximum efficiency.",
  },
];

export default function ISyncDrivePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="text-left sm:text-center py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
         <div className="mt-5 flex justify-center">
           <img
                    src={heroImg}
                    alt="product"
                    className="mx-auto mb-6 md:w-96 lg:w-[480px]"
                   width="873" height="404" />
        </div>

        {/* <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-small border border-blue-300">
          Enterprise-Grade File Management
        </span> */}
        <span className="font-general font-semibold flex w-fit mx-auto items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">

  <img
    src={shieldIcon}
    alt="icon"
    className="w-5 h-5 object-contain"
   width="20" height="20" />

  Enterprise-Grade File Management
</span>

        <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk mt-[10px] max-w-4xl mx-auto py-1">
          <span className="text-bloo">Secure</span> File Access, Storage & <span className="text-bloo">Team<br /> Collaboration</span> with Full Enterprise Control
        </h1>

        <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2 max-w-3xl mx-auto">
         Enterprise-grade file storage, centralized access, and collaboration built for governance, ownership, and scale. Securely
access, sync, and share files across devices from a single platform with full control for users, admins, and tenants.
        </p>

        {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md">
            Request a Demo
            <img src={arrowIcon} alt="arrow" className="w-4 h-4"  width="16" height="16" />
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md">
            Talk to an Expert
          </button>
        </div> */}
         <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">

      {/* Primary */}
      <button onClick={() => navigate("/products/eicerise/form?product=iSyncDrive")}
      className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
        Request a Demo
          <img src={arrowIcon} alt="arrow" width="24" height="24" />

      </button>

      {/* Secondary
      <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
        Talk to an Expert
      </button> */}

    </div>

      </section>

      {/* FEATURES */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white grid md:grid-cols-3 text-center">

  {features.map((item, i) => (
    <div key={i} className="flex flex-col items-center">

      {/* ICON (Rounded Rectangle) */}
      <div className="px-6 rounded-xl mb-[19px]">
       <img src={item.icon} alt="icon" width={item.__w} height={item.__h} />
      </div>

      {/* TITLE */}
      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] max-w-xs">
        {item.desc}
      </p>

    </div>
  ))}

</section>

      {/* WHAT IS */}
      <section className="bg-[#F4F9FF]">
        <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 items-center">
          <div>
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk">
              What is iSyncDrive?
            </h2>
          </div>

          <div className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4 sm:space-y-6">
            <p>
              iSyncDrive is a next-generation hybrid cloud storage and synchronization platform that combines the flexibility of the cloud with the control of on-premises infrastructure.
              It enables organizations to securely store, sync, and manage data across teams and regions while maintaining full ownership and compliance control.
              <br /> iSyncDrive provides a centralized access point for enterprise files, enabling users to securely access, share, and manage documents anytime, across devices and locations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <ProductVideo
        eyebrow="Enterprise File Management"
        heading="See iSyncDrive in Action"
        subtext="Explore how teams can securely store, sync, share, and manage business files while maintaining centralized control and visibility."
        videoId="3anJ2Nt-jZ0"
      />


      {/* CHALLENGES */}
      {/* <section className="py-16 px-6">
        <h1 className="text-5xl font-bold text-center mb-7">
          Enterprise Challenges
        </h1>
        <h4 className="text-xl text-gray-600 text-center mb-10">
          Traditional file storage solutions fall short of enterprise needs.
        </h4>
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {challenges.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow text-center">
              {item}
            </div>
          ))}
        </div>
      </section> */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Enterprise Challenges
    </h2>

    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
      Traditional file storage solutions fall short of enterprise needs.
    </p>
  </div>

  {/* 4 CARDS ROW */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

    {challenges.map((item, i) => (
      <div
        key={i}
        className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
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

      {/* ARCHITECTURE */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk text-center mx-auto max-w-4xl mb-8">
          Architecture Overview
        </h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {architecture.map((item, i) => (

            <div
        key={i}
        className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">
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

      {/* IMAGE + TEXT SECTION */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  <div className="text-center">

    {/* IMAGE */}
    <img
      src={bgImage}
      alt="platform"
      className="w-full rounded-xl"
     width="1625" height="371" />

    {/* TEXT */}
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
      Access, share, and manage enterprise files from a single interface across devices
    </p>

  </div>

</section>

      {/* UNIFIED PLATFORM */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            A Unified Platform for Total Data Control
          </h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
            Along with secure storage, iSyncDrive enables controlled file and folder sharing to support collaborations across teams and locations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {platformFeatures.map((item, i) => (
             <div
        key={i}
        className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
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

{/* IMPLEMENTATION */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Implementation Journey
    </h2>
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
      A proven continuous journey from planning to optimization
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

    {steps.map((item, i) => (
      <div
        key={i}
        className="relative rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col gap-4 min-h-[220px]"
      >

        {/* STEP NUMBER (top right) */}
        <span className="absolute top-5 right-5 text-4xl font-bold text-[#CBD5E1]">
          {item.step}
        </span>

        {/* ICON */}
        <div className="w-11 h-11 flex items-center justify-center bg-blue-900 text-white rounded-lg text-xl mb-[19px]">
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

{/* WHY CHOOSE */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Why enterprises choose iSyncDrive?
    </h2>
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
      Built for organizations that require control, governance, and flexible deployment.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-2 gap-4 sm:gap-8">

    {/* LEFT CARD */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

      {/* Header */}
      <div className="flex items-center gap-4 mb-[19px]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <img src={unifiedEcosystemIcon} alt="icon" width="44" height="44" />
        </div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          Unified Ecosystem
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-[18px]">
        Not just tools—an integrated platform where knowledge and action agents work in harmony to amplify enterprise intelligence.
      </p>

      {/* Points */}
      <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-3">
        <li className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          Cloud + On-Prem integration for seamless synchronization
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          Ensures data remains secure and accessible at all times
        </li>
      </ul>

    </div>

    {/* RIGHT CARD */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

      {/* Header */}
      <div className="flex items-center gap-4 mb-[19px]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <img src={adaptiveIntelligenceIcon} alt="icon" width="44" height="44" />
        </div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          Adaptive Intelligence
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-[18px]">
        AI that learns from your data, adapts to your workflows, and continuously improves with every interaction.
      </p>

      {/* Points */}
      <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-3">
        <li className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          Auto-syncs, tracks versions, and optimizes performance
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          Learns file usage patterns to boost speed and reliability
        </li>
      </ul>

    </div>

  </div>

</section>


{/* ACCESS CONTROL */}
<section className="bg-gradient-to-r from-[#eef4fb] to-[#e6f0fa] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage2})` }}>
 <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Access Control & Governance Logic
    </h2>
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
      Advanced security and policy enforcement at every level
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

    {/* CARD 1 */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-3">

      {/* ICON */}
      <div className="py-1 rounded-lg">
        <img src={rbacIcon} alt="rbac" className="w-11 h-11" width="44" height="44" />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          Role-Based Access Control (RBAC)
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          User, Admin, Super Admin roles
        </p>
      </div>

    </div>

    {/* CARD 2 */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-3">

      <div className=" py-1 rounded-lg">
        <img src={approvalIcon} alt="approval" className="w-11 h-11" width="44" height="44" />
      </div>

      <div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          Approval Workflows
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          Access and sharing approvals
        </p>
      </div>

    </div>

    {/* CARD 3 */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-3">

      <div className="py-1 rounded-lg">
        <img src={tenantIcon} alt="tenant" className="w-11 h-11" width="44" height="44" />
      </div>

      <div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          Tenant Governance
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          Organization isolation and admin scope control
        </p>
      </div>

    </div>

  </div>

 </div>
</section>


{/* DEPLOYMENT */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Deployment & Infrastructure
    </h2>
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
      Choose the deployment model that fits your organization's needs
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

    {/* CLOUD */}
    <div className="bg-[#EFFAFF] rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] text-left sm:text-center">

      {/* ICON */}
      <div className="w-16 h-16 mx-0 sm:mx-auto flex items-center justify-center rounded-lg mb-6">
        <img src={cloudIcon} alt="cloud" width="64" height="64" />
      </div>

      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
        Cloud Deployment
      </h3>

      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-[18px]">
        Managed, scalable infrastructure
      </p>

      <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] text-left space-y-3">
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Zero infrastructure management
        </li>
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Auto-scaling capabilities
        </li>
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Global availability
        </li>
      </ul>

    </div>

    {/* ON-PREM */}
    <div className="bg-[#EFFAFF] rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] text-left sm:text-center">

      <div className="w-16 h-16 mx-0 sm:mx-auto flex items-center justify-center rounded-lg mb-6">
        <img src={onPremIcon} alt="onprem" width="64" height="64" />
      </div>

      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
        On-Prem Deployment
      </h3>

      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-[18px]">
        Full data ownership
      </p>

      <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] text-left space-y-3">
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Complete control over data
        </li>
        <li className="flex items-start gap-2">
           <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Meet regulatory requirements
        </li>
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Custom infrastructure
        </li>
      </ul>

    </div>

    {/* HYBRID */}
    <div className="bg-[#EFFAFF] rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] text-left sm:text-center">

      <div className="w-16 h-16 mx-0 sm:mx-auto flex items-center justify-center rounded-lg mb-6">
        <img src={hybridIcon} alt="hybrid" width="64" height="64" />
      </div>

      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
        Hybrid Deployment
      </h3>

      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-[18px]">
        Cloud flexibility with on-prem control
      </p>

      <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] text-left space-y-3">
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Controlled internal and external sharing
        </li>
        <li className="flex items-start gap-2">
          <img
    src={checkIcon}
    alt="check"
    className="w-5 h-5 mt-1"
   width="20" height="20" />
          Permission-based access
        </li>
      </ul>

    </div>

  </div>

</section>


  {/* FINAL CTA */}
<section className="bg-gray-50 text-center">
 <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">

  {/* Heading */}
  <div className="max-w-4xl mx-auto">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
      Ready to Transform Your File Management?
    </h2>

    <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70 max-w-2xl mx-auto mt-2">
      Join forward-thinking enterprises that trust iSyncDrive for secure, scalable, and governed file storage
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">

      {/* Primary */}
          <button onClick={() => navigate("/products/eicerise/form?product=iSyncDrive")}
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

  {/* Bottom Cards */}
  <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

    <div className="border border-[#E6EAF1] bg-gray-100 rounded-[18px] py-6 px-4">
      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
        Enterprise-Grade
      </h3>
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">
        Governance
      </p>
    </div>

    <div className="border border-[#E6EAF1] bg-gray-100 rounded-[18px] py-6 px-4">
      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
        Flexible
      </h3>
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">
        Development
      </p>
    </div>

    <div className="border border-[#E6EAF1] bg-gray-100 rounded-[18px] py-6 px-4">
      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
        Clear
      </h3>
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">
        Role Separation
      </p>
    </div>

  </div>

 </div>
</section>
<ProductCarousel slides={productSlides} />

 <ProductFooter/>
    </div>
  );
}