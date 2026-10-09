"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
import ProductFooter from "./ProductFooter";
// const fileSharingIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/File_Sharing.svg";
// const roleBaseAccessIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Role-Based_Access.svg";
// const complianceIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Compliance.svg";   
// const centralizedConsoleIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Centralized_Admin.svg";
// const multiPlatformIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Multi-platform_Access.svg";
// const whiteLabelIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/White-label_Flexibility.svg";
// const encryptionIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/End-to-End_Encryption.svg";
// const intelligentSyncIcon = "https://d3r43jacxrwsrp.cloudfront.net/isyncdrive/Intelligent_Sync.svg";
// const deployIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Deploy.svg";
// const planIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Plan.svg";
// const scaleIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Scale.svg";
// const optimizeIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Optimize.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const shieldIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/shield_02.svg";
const codeRefreshIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/1.svg";
const multilayerIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/2.svg";
const appIntegrationIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/3.svg";
const fasIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/FAS.svg";
const gcrIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/GCR.svg";
const lacIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/LAC.svg";
const nmfsIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/NMFS.svg";
const bannerIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/bannerMiddle.png";
const ztsIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/ZTS.svg";
const ztkIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/ZTK.svg";
const sprIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/SPR.svg";
const laaIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/LAA.svg";
const verilockIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/verilockHero.png";
const verilockLogoIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/verilockLogo.svg";
const authenticatorLogoIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/authenticatorLogo.svg";
const tickIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/tick.svg";
const nilIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/nil.svg";
import { useNavigate } from "@/nextNavigation";
const rsIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Registration_Setup.svg";
const saIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Security_Architecture.svg";
const lmIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Login_Methods.svg";
const gfIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Geo-Fencing_Controls.svg";
const step1Icon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/01.svg";
const step2Icon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/02.svg";
const step3Icon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/03.svg";
const step4Icon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/04.svg";


const features = [
  { icon: codeRefreshIcon, title: "Code Refresh", desc: "Lightning-fast code regeneration for enterprise speed" , __w: 44, __h: 44},
  { icon: multilayerIcon, title: "Multi-Layer Auth ", desc: "TOTP-based, push approval, and token-based authentication" , __w: 44, __h: 44},
  { icon: appIntegrationIcon, title: "App Integrations", desc: "Seamless integration with unlimited third-party applications" , __w: 44, __h: 44},
];

// const challenges = [
//   "Fragmented File Systems",
//   "Lack of Governance",
//   "Data Ownership Risks",
//   "No Hybrid or On-Prem Support",
// ];


const challenges = [
  {
    icon: fasIcon,
    title: "Fragmented auth systems",
    desc: "MFA scattered across tools and platforms with no unified management.",
  },
  {
    icon: lacIcon,
    title: "Limited Admin Control",
    desc: "Lack of visibility and approval workflows for enterpriseauthentication.",
  },
  {
    icon: gcrIcon,
    title: "Geo-compliance risks",
    desc: "No region-based access restrictions leading to compliance gaps.",
  },
  {
    icon: nmfsIcon,
    title: "No Mobile First Support",
    desc: "Legacy authentication solutions lacking modern mobile capabilities.",
  },
];

const architecture = [
  {
    icon: step1Icon,
    step: "01",
    title: "Register app and\ngenerate secret key",
  },
  {
    icon: step2Icon,
    step: "02",
    title: "Scan QR or enter\nAuth Key in app",
  },
  {
    icon: step3Icon,
    step: "03",
    title: "Login with Tap\nor Auth Token",
  },
  {
    icon: step4Icon,
    step: "04",
    title: "Server verifies and\ngrants access",
  },
];

// const platformFeatures = [
//       {
//     icon: fileSharingIcon,
//     title: "Multi Authentication Security",
//     // desc: "Secure file and folder sharing combined with inteliigent synchronization for seamless collaborations across devices",
//     desc: "Support TOTP, Push Auth, and Token-based methods for layered Protection"
//   },
//      {
//     icon: roleBaseAccessIcon,
//     title: "Push & token based login",
//     desc: "Approve or deny access with one tap or a rotating 6-digit auth code.",
//   },
//   {
//     icon: complianceIcon,
//     title: "Geo-fencing access control",
//     desc: "Restrict logins by country and region on a per-application basis.",
//   },
//   {
//     icon: centralizedConsoleIcon,
//     title: "Third-party integration",
//     desc: "Works with Gmail, GitHub,Microsoft & any TOTP-compatible service.",
//   },
//   {
//     icon: multiPlatformIcon,
//     title: "Centralized management dashboard",
//     desc: "Monitor all authentications from one unified admin console.",
//   },
//   {
//     icon: whiteLabelIcon,
//     title: "Real time login insights",
//     desc: "AES-256 protection for data in transit and rest",
//   },
//   {
//     icon: encryptionIcon,
//     title: "Enterprise grade security architecture",
//     desc: "HMAC SHA1, zero transmission keys, and cryptographically signed responses.",
//   },
//   {
//     icon: intelligentSyncIcon,
//     title: "Audit logs & monitoring",
//     desc: "Complete event logging for every authentication event and compliance reporting.",
//   },
// ];


// const steps = [
//   {
//     icon: planIcon,
//     step: "01",
//     title: "Register app & generate secret key",
//     desc: "Register your application and generate a unique secret key in the Verilock dashboard.",
//   },
//   {
//     icon: deployIcon,
//     step: "02",
//     title: "Scan QR or enter auth key in app",
//     desc: "Users scan QR code or enter the auth key in the Verilock mobile app to link instantly.",
//   },
//   {
//     icon: scaleIcon,
//     step: "03",
//     title: "Login with tap or auth token",
//     desc: "Users approve with one tap or enter a rotating 6-digit code at the login screen.",
//   },
//   {
//     icon: optimizeIcon,
//     step: "04",
//     title: "Server verifies & grants access",
//     desc: "Backend independently verifies and grants secure access — no code transmitted.",
//   },
// ];

export default function ISyncDrivePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="text-left sm:text-center py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
         <div className="mt-5 flex justify-center">
           <img
                    src={verilockIcon}
                    alt="product"
                    className="mx-auto mb-6 md:w-96 lg:w-[350px] h-[280px]"
                   width="2262" height="1897" />
        </div>

        {/* <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-small border border-blue-300">
          Enterprise-Grade File Management
        </span> */}
        <span className="font-general font-semibold flex w-fit mx-auto items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide mb-4">

  <img
    src={shieldIcon}
    alt="icon"
    className="w-5 h-5 object-contain"
   width="20" height="20" />

  Enterprise MFA platform
</span>

        <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk mt-[10px] max-w-4xl mx-auto py-1">
          Enterprise <span className="text-bloo">Multi-Factor<br /> Authentication,</span> Simplified
        </h1>

        <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
        Verilock secures your applications with TOTP-based 2FA, push approval, and geo-fencing all from one mobile-first platform.
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
      <button onClick={() => navigate("/demo-form?product=Verilock")}
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
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white grid md:grid-cols-3 text-center gap-4 sm:gap-8">
  {features.map((item, i) => (
    <div key={i} className="flex flex-col mx-auto items-center">

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

      {/* WHAT IS
      <section className="bg-[#F4F9FF] py-10 bg-[#F4F9FF]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 max-w-7xl mx-auto px-3 xl:px-4 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#334155]">
              What is iSyncDrive?
            </h2>
          </div>

          <div className="text-[#64748B] space-y-5">
            <p>
              iSyncDrive is a next-generation hybrid cloud storage and synchronization platform that combines the flexibility of the cloud with the control of on-premises infrastructure.
              It enables organizations to securely store, sync, and manage data across teams and regions while maintaining full ownership and compliance control.
              <br /> iSyncDrive provides a centralized access point for enterprise files, enabling users to securely access, share, and manage documents anytime, across devices and locations.
            </p>
          </div>
        </div>
      </section> */}
      <section className="bg-[#F4F9FF]">
       <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 grid md:grid-cols-[1.1fr_1fr] gap-4 sm:gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8">
        What is Verilock?
      </h2>

      <div className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mb-6 space-y-4 sm:space-y-3">
        <p>
          Verilock is EICE Technology's enterprise multi-factor
authentication platform designed to provide secure, mobile-first
authentication for modern enterprises. It combines TOTP-based
2FA, push approval, and geo-fencing capabilities in one unified
platform. <br />
        </p> <p> Verilock provides a centralized access point for enterprise
authentication, enabling secure access across devices and
locations with full admin control.
        </p>


      </div>
    </div>

    {/* RIGHT CARDS */}
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 bg-[#F4F9FF]">

      {/* CARD 1 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          TOTP Standard
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          RFC 6238 · HMAC-SHA1 algorithm
        </p>
      </div>

      {/* CARD 2 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          Mobile-First
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          iOS & Android native app
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          Zero Setup Friction
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          QR scan — live in minutes
        </p>
      </div>

      {/* CARD 4 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          Universal Compat.
        </h3>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          Gmail, GitHub, MS Account & more
        </p>
      </div>

    </div>
       </div>
</section>

      {/* ================= VIDEO ================= */}
      <ProductVideo
        eyebrow="Enterprise Access Security"
        heading="See VeriLock in Action"
        subtext="Discover how multi-factor authentication, secure approvals, and location-aware access controls help protect enterprise applications."
        videoId="W0tEGxt5Khk"
      />


<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Enterprise Authentication Challenges
    </h2>

    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
      Traditional MFA solutions lack enterprise control and flexibility
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

  {/* KEEP YOUR HEADING */}
  <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk text-center mx-auto max-w-4xl mb-8">
    How It works
  </h2>

  <div className="relative sm:mx-auto grid grid-cols-2 sm:flex sm:flex-col sm:justify-between md:flex-row gap-4 md:gap-6">

    {architecture.map((item, i) => (
      <div key={i} className="flex items-stretch flex-1">

        {/* CARD */}
        <div className="w-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] text-left transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

          {/* ICON + STEP NUMBER */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#012060] flex items-center justify-center">
              <img src={item.icon} alt="" className="w-6 h-6 object-contain" width="24" height="24" />
            </div>
            <span className="font-general font-semibold text-[#E2E8F0] text-[40px] leading-none">
              {item.step}
            </span>
          </div>

          {/* TEXT */}
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#1E293B] whitespace-pre-line">
            {item.title}
          </h3>
        </div>

      </div>
    ))}

  </div>

</section>

      {/* IMAGE + TEXT SECTION */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  <div className="text-center">

    {/* IMAGE */}
    <img
      src={bannerIcon}
      alt="platform"
      className="w-full rounded-xl"
     width="1571" height="371" />

    {/* TEXT */}
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
     Secure access with seamless authentication and advanced protection <br />across devices and applications
    </p>

  </div>

</section>

<section className="bg-[#F4F9FF]">
 <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">

    {/* HEADER */}
    <div className="text-center mb-8">
      <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
        Comprehensive platform capabilities
      </h2>

      <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
        Everything you need for enterprise-grade authentication
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-4 sm:gap-8">

      {/* CARD 1 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        <div className="flex items-center gap-4 mb-[19px]">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl">
            <img src={rsIcon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
          </div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
            Registration & setup
          </h3>
        </div>

        <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4">
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-blue-500">✦</span>
            Register any web application in minutes
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-blue-500">✦</span>
            Generate QR code or User Auth Key per user
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-blue-500">✦</span>
            Scan QR or enter Auth Key in the Verilock mobile app
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-blue-500">✦</span>
            One-time validation codes confirm setup on first use
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500">✦</span>
            Supports third-party services: Gmail, GitHub, Microsoft Account & more
          </li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        <div className="flex items-center gap-4 mb-[19px]">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl">
            <img src={lmIcon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
          </div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
            Login methods
          </h3>
        </div>

        <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4">
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-green-500">✦</span>
            Tap (Push) Auth — approve or deny  login from a real-time push notification</li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-green-500">✦</span>
            Auth Token — enter a rotating 6-digit one-time code on the login screen
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-green-500">✦</span>
            Login requests show location & timestamp
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✦</span>
            Works for both Verilock-registered apps and third-party TOTP services
          </li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        <div className="flex items-center gap-4 mb-[19px]">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl">
            <img src={gfIcon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
          </div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
            Geo-fencing controls
          </h3>
        </div>

        <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4">
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-orange-500">✦</span>
            Restrict logins by country — block access from unauthorized regions
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-orange-500">✦</span>
            Enable or disable geo-fencing per registered application
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-orange-500">✦</span>
             Manage allowed countries globally from the mobile app
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500">✦</span>
            Ideal for compliance, remote-work policies & enterprise security
          </li>
        </ul>
      </div>

      {/* CARD 4 */}
      <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
        <div className="flex items-center gap-4 mb-[19px]">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl">
            <img src={saIcon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
          </div>
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
            Security architecture
          </h3>
        </div>

        <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4">
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-purple-500">✦</span>
            Industry-standard SHA1 based algorithm
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-purple-500">✦</span>
            TOTP-based 2FA
          </li>
          <li className="flex items-start gap-3 border-b pb-3">
            <span className="text-purple-500">✦</span>
            Full audit & security logging for every authentication event
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500">✦</span>
            Login attempts are blocked from disallowed regions
          </li>
        </ul>
      </div>

    </div>
 </div>
</section>


{/* WHY CHOOSE */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Why Enterprises choose Verilock?
    </h2>
    <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
      Built for organizations that require control, governance, and flexible deployment.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

    {/* LEFT CARD */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

      {/* Header */}
      <div className="flex flex-col items-start gap-4 mb-[19px]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <img src={ztsIcon} alt="icon" width="44" height="44" />
        </div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          Zero trust architecture
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
        TOTP regenerates every 30 seconds, ensuring codes are always fresh and never reusable. TOTP = HMAC_SHA1(K,T) — where K is the shared secret and T is the time-based counter.
      </p>
    </div>

    {/* RIGHT CARD */}
    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

      {/* Header */}
      <div className="flex flex-col items-start gap-4 mb-[19px]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <img src={ztkIcon} alt="icon" width="44" height="44" />
        </div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          Zero transmission key
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
       The secret key is stored once during setup nd never transmitted again, eliminating interception risk entirely.
      </p>
    </div>

        <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

      {/* Header */}
      <div className="flex flex-col items-start gap-4 mb-[19px]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <img src={laaIcon} alt="icon" width="44" height="44" />
        </div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          Location aware authentication
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
        Geo-fencing enforces country-level policies. Login attempts are blocked at the authentication layer before reaching your application.
      </p>
    </div>

        <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">

      {/* Header */}
      <div className="flex flex-col items-start gap-4 mb-[19px]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <img src={sprIcon} alt="icon" width="44" height="44" />
        </div>
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          Signed push responses
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
       Cryptographically signed responses via FCM/APNs — not just simple callbacks. Every tap approval is verifiable and tamper-proof.      </p>
    </div>

  </div>

</section>


<section className="bg-[#F4F9FF]">
 <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">

    {/* HEADER */}
    <div className="text-center mb-8">

      <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
        Verilock vs Google Authenticator
      </h2>

      <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
        See how Verilock stands out
      </p>
    </div>

    {/* TABLE */}
    <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm overflow-x-auto">

      {/* HEADER ROW */}
      <div className="grid grid-cols-3 bg-white text-white text-sm font-semibold tracking-wide">

        <div className="p-5 text-left text-[#000000] text-lg font-bold">
          Features
        </div>

        <div className="p-5 text-left text-blue-400 flex items-center gap-2">
          <img src={verilockLogoIcon} alt="Verilock Logo" className="w-28 h-auto" width="92" height="30" />
        </div>

        <div className="p-5 text-left text-[#94A3B8]">
          <img src={authenticatorLogoIcon} alt="Google Authenticator Logo" className="w-28 h-auto scale-125" width="144" height="30" />
        </div>
      </div>

      {/* ROWS */}
      {/* ROWS */}
{[
  {
    feature: "TOTP standard (RFC 6238)",
    verilock: { text: "Supported", type: "tick" },
    google: { text: "Supported", type: "tick" },
  },
  {
    feature: "Push / Tap approval",
    verilock: { text: "Yes — one-tap approve or deny", type: "tick" },
    google: { text: "N/A", type: "nil" },
  },
  {
    feature: "Geo-fencing by country",
    verilock: { text: "Per-app configuration", type: "tick" },
    google: { text: "N/A", type: "nil" },
  },
  {
    feature: "Enterprise app management",
    verilock: { text: "Centralized registration", type: "tick" },
    google: { text: "Personal use only", type: "nil" },
  },
  {
    feature: "Third-party TOTP support",
    verilock: { text: "Universal", type: "tick" },
    google: { text: "Universal", type: "tick" },
  },
  {
    feature: "Push notification architecture",
    verilock: { text: "FCM / APNs signed responses", type: "tick" },
    google: { text: "No push support", type: "nil" },
  },
  {
    feature: "Audit & security logs",
    verilock: { text: "Full event logging", type: "tick" },
    google: { text: "None", type: "nil" },
  },
  {
    feature: "Account recovery",
    verilock: {
      text: "Admin re-issues QR / Auth Key — no cloud risk",
      type: "tick",
    },
    google: { text: "Google Account sync", type: "tick" },
  },
].map((row, i) => (
  <div
    key={i}
    className={`grid grid-cols-3 text-sm ${
      i % 2 === 0 ? "bg-white" : "bg-[#F8FBFF]"
    } border-t border-[#E2E8F0]`}
  >
    {/* FEATURE */}
    <div className="p-5 text-[#334155]">
      {row.feature}
    </div>

    {/* VERILOCK */}
    <div className="p-5 flex items-start gap-2 text-left">
      <img
        src={row.verilock.type === "tick" ? tickIcon : nilIcon}
        alt=""
        className="w-4 h-4 mt-1"
       width="16" height="16" />
      <span className="text-green-600 font-medium">
        {row.verilock.text}
      </span>
    </div>

    {/* GOOGLE */}
    <div className="p-5 flex items-start gap-2 text-left">
      <img
        src={row.google.type === "tick" ? tickIcon : nilIcon}
        alt=""
        className="w-4 h-4 mt-1"
       width="16" height="16" />
      <span
        className={
          row.google.type === "tick"
            ? "text-green-600 font-medium"
            : "text-[#94A3B8]"
        }
      >
        {row.google.text}
      </span>
    </div>
  </div>
      ))}

    </div>
  </div>
</section>


<section className="bg-gray-50 relative overflow-hidden">
 <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">

    {/* TOP LABEL
    <p className="text-sm tracking-[0.2em] text-[#334155] font-bold mb-6">
      READY TO GET STARTED
    </p> */}

    {/* HEADING */}
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
      Ready to Secure Your Applications?
    </h2>

    {/* SUBTEXT */}
    <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70 mt-2 mb-8">
      Deploy Verilock MFA across your enterprise in <br /> minutes —
      not days.
    </p>

    {/* TAG PILLS */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["iOS & Android", "API-ready", "Country-level control", "Full audit trail"].map((item, i) => (
        <span
          key={i}
          className="px-4 py-2 text-sm text-[#01B0F1] border border-[#334155] rounded-full bg-white/5 backdrop-blur-sm"
        >
          {item}
        </span>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

      {/* PRIMARY */}
      <button onClick={() => navigate("/demo-form?product=Verilock")} 
      className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-[#1E40AF] transition text-[18px]">
        Request a Demo
          <img src={arrowIcon} alt="arrow" width="24" height="24" />

      </button>
    </div>
  </div>
 </div>
</section>
<ProductCarousel slides={productSlides} />

 <ProductFooter/>
    </div>
  );
}