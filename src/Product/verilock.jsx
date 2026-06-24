"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
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
import { useNavigate } from "/src/nextNavigation";
const rsIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Registration_Setup.svg";
const saIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Security_Architecture.svg";
const lmIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Login_Methods.svg";
const gfIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/Geo-Fencing_Controls.svg";


const features = [
  { icon: codeRefreshIcon, title: "Code Refresh", desc: "Lightning-fast code regeneration for enterprise speed" },
  { icon: multilayerIcon, title: "Multi-Layer Auth ", desc: "TOTP-based, push approval, and token-based authentication" },
  { icon: appIntegrationIcon, title: "App Integrations", desc: "Seamless integration with unlimited third-party applications" },
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

    title: "Register app\n& generate\nsecret key",

  },  
  {

    title: "Scan QR or enter\nAuth Key in app",

  },
  {

    title: "Login with Tap\nor Auth Token",

  },
  {

    title: "Server verifies\n& grants access",

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
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="mt-10 text-center py-16 px-6 bg-white">
         <div className="mt-5 flex justify-center">
           <img
                    src={verilockIcon}
                    alt="product"
                    className="mx-auto mb-6 w-72 md:w-96 lg:w-[350px] h-[280px]"
                  />
        </div>

        {/* <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-small border border-blue-300">
          Enterprise-Grade File Management
        </span> */}
        <span className="inline-flex items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
  
  <img 
    src={shieldIcon} 
    alt="icon" 
    className="w-5 h-5 object-contain"
  />

  Enterprise MFA platform
</span>

        <h1 className="text-[32px] text-[#334155] md:text-[48px] sm:text-[32px]mt-6 font-bold max-w-4xl mx-auto leading-tight">
          Enterprise <span className="text-[#01B0F1]">Multi-Factor<br /> Authentication,</span> Simplified
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-[20px] font-semi-bold">
        Verilock secures your applications with TOTP-based 2FA, push approval, and geo-fencing — all from one mobile-first platform.
        </p>

        {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md">
            Request a Demo
            <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md">
            Talk to an Expert
          </button>
        </div> */}
         <div className="mt-8 flex flex-wrap justify-center gap-4">

      {/* Primary */}
      <button onClick={() => navigate("/products/eicerise/form")}  
      className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-blue-800 transition text-[18px]">
        Request a Demo
          <img src={arrowIcon} alt="arrow"/>

      </button>

      {/* Secondary
      <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
        Talk to an Expert
      </button> */}

    </div>

      </section>

      {/* FEATURES */}
<section className="pb-10 px-4 max-w-7xl mx-auto md:px-10 lg:px-20 xl:px-40 bg-white grid md:grid-cols-3 text-center gap-8">
  {features.map((item, i) => (
    <div key={i} className="flex flex-col mx-auto items-center gap-1">

      {/* ICON (Rounded Rectangle) */}
      <div className=" px-6 rounded-xl">
       <img src={item.icon} alt="icon"/>
      </div>

      {/* TITLE */}
      <h3 className="font-bold text-xl leading-relaxed text-[#334155]">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#64748B] font-semibold text-md leading-relaxed max-w-xs">
        {item.desc}
      </p>

    </div>
  ))}

</section>

      {/* WHAT IS
      <section className="bg-[#F4F9FF] py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-[#F4F9FF]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto items-center">
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
      <section className="bg-[#F4F9FF] py-10 px-4 md:px-10 lg:px-20 xl:px-40">
  <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-4xl font-bold text-[#1E293B] mb-6">
        What is Verilock?
      </h2>

      <div className="text-[#64748B] font-semibold mb-6 leading-8 space-y-6">
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
    <div className="grid sm:grid-cols-2 gap-6 bg-[#F4F9FF]">

      {/* CARD 1 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
          TOTP Standard
        </h3>
        <p className="text-sm text-[#64748B]">
          RFC 6238 · HMAC-SHA1 algorithm
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
          Mobile-First
        </h3>
        <p className="text-sm text-[#64748B]">
          iOS & Android native app
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
          Zero Setup Friction
        </h3>
        <p className="text-sm text-[#64748B]">
          QR scan — live in minutes
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
        {/* <div className="w-2 h-2 bg-[#01B0F1] rounded-full mb-4"></div> */}
        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
          Universal Compat.
        </h3>
        <p className="text-sm text-[#64748B]">
          Gmail, GitHub, MS Account & more
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">

  <h1 className="text-4xl md:text-4xl text-[#334155] font-bold text-center leading-relaxed mb-5">
    Enterprise Authentication Challenges
  </h1>

  <h4 className="text-lg md:text-xl text-[#64748B] text-center mb-12 max-w-2xl mx-auto">
    Traditional MFA solutions lack enterprise control and flexibility
  </h4>

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    {challenges.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col items-start text-start gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start justify-center">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-2xl">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-gray-500 text-lg leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>
</section>

      {/* ARCHITECTURE */}
<section className="pb-20 pt-2 px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 bg-white">

  {/* KEEP YOUR HEADING */}
  <h2 className="text-4xl text-[#334155] font-bold text-center leading-relaxed mb-14">
    How It works
  </h2>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

    {architecture.map((item, i) => (
      <div key={i} className="flex items-center">

        {/* CARD */}
        <div className="w-[200px] h-[230px] rounded-2xl bg-[#01B0F1] flex flex-col items-center justify-center text-center px-6 shadow-lg">

          {/* NUMBER */}
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl font-semibold text-[#334155] mb-6 shadow">
            {i + 1}
          </div>

          {/* TEXT */}
          <p className="text-white text-lg font-semibold leading-relaxed whitespace-pre-line">
            {item.title}
          </p>
        </div>

        {/* ARROW (except last) */}
        {i !== 3 && (
          <div className="hidden md:flex mx-4 text-[#0B3A63] text-4xl">
            →
          </div>
        )}

      </div>
    ))}

  </div>

</section>

      {/* IMAGE + TEXT SECTION */}
<section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">

  <div className="max-w-6xl mx-auto text-center">

    {/* IMAGE */}
    <img
      src={bannerIcon}
      alt="platform"
      className="w-full rounded-xl"
    />

    {/* TEXT */}
    <p className="mt-4 text-gray-400 text-xl max-w-3xl mx-auto">
     Secure access with seamless authentication and advanced protection <br />across devices and applications
    </p>

  </div>

</section>

<section className="bg-[#F4F9FF] py-20 px-6 md:px-12 lg:px-24 xl:px-40">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-4xl font-bold text-[#1E293B] mb-4">
        Comprehensive platform capabilities
      </h2>

      <p className="text-[#64748B] text-lg">
        Everything you need for enterprise-grade authentication
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* CARD 1 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl">
            <img src={rsIcon} alt="icon" className="w-12 h-12 object-contain"/>
          </div>
          <h3 className="text-xl font-semibold text-[#1E293B]">
            Registration & setup
          </h3>
        </div>

        <ul className="space-y-4 text-[#64748B] text-[16px]">
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
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl">
            <img src={lmIcon} alt="icon" className="w-12 h-12 object-contain"/>
          </div>
          <h3 className="text-xl font-semibold text-[#1E293B]">
            Login methods
          </h3>
        </div>

        <ul className="space-y-4 text-[#64748B] text-[16px]">
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
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl">
            <img src={gfIcon} alt="icon" className="w-12 h-12 object-contain"/>
          </div>
          <h3 className="text-xl font-semibold text-[#1E293B]">
            Geo-fencing controls
          </h3>
        </div>

        <ul className="space-y-4 text-[#64748B] text-[16px]">
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
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl">
            <img src={saIcon} alt="icon" className="w-12 h-12 object-contain"/>
          </div>
          <h3 className="text-xl font-semibold text-[#1E293B]">
            Security architecture
          </h3>
        </div>

        <ul className="space-y-4 text-[#64748B] text-[16px]">
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
<section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">

  {/* Heading */}
  <div className="max-w-5xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-[#334155]">
      Why Enterprises choose Verilock?
    </h2>
    <p className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto">
      Built for organizations that require control, governance, and flexible deployment.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto items-start grid md:grid-cols-4 gap-8 w-auto">

    {/* LEFT CARD */}
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 w-auto h-[370px]">

      {/* Header */}
      <div className="flex-column items-start gap-4 mb-5">
        <div className="py-5 rounded-lg">
          <img src={ztsIcon} alt="icon"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Zero trust architecture
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] leading-relaxed mb-6">
        TOTP regenerates every 30 seconds, ensuring codes are always fresh and never reusable. TOTP = HMAC_SHA1(K,T) — where K is the shared secret and T is the time-based counter.
      </p>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 w-auto h-[370px]">

      {/* Header */}
      <div className="flex-column items-start gap-4 mb-5">
        <div className="py-5 rounded-lg">
          <img src={ztkIcon} alt="icon"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Zero transmission key
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] leading-relaxed mb-6">
       The secret key is stored once during setup nd never transmitted again, eliminating interception risk entirely.
      </p>
    </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 w-auto h-[370px]">

      {/* Header */}
      <div className="flex-column items-start gap-4 mb-5">
        <div className="py-5 rounded-lg">
          <img src={laaIcon} alt="icon"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Location aware authentication
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] leading-relaxed mb-6">
        Geo-fencing enforces country-level policies. Login attempts are blocked at the authentication layer before reaching your application.
      </p>
    </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 w-auto h-[370px]">

      {/* Header */}
      <div className="flex-column items-start gap-4 mb-5">
        <div className="py-5 rounded-lg">
          <img src={sprIcon} alt="icon"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Signed push responses
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] leading-relaxed mb-6">
       Cryptographically signed responses via FCM/APNs — not just simple callbacks. Every tap approval is verifiable and tamper-proof.      </p>
    </div>

  </div>

</section>


<section className="bg-[#F4F9FF] py-20 px-6 md:px-12 lg:px-24 xl:px-40 mb-10">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">

      <h2 className="text-4xl md:text-4xl font-bold text-[#1E293B] mb-4">
        Verilock vs Google Authenticator
      </h2>

      <p className="text-[#64748B] text-lg">
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
          <img src={verilockLogoIcon} alt="Verilock Logo" className="w-28 h-auto"/>
        </div>

        <div className="p-5 text-left text-[#94A3B8]">
          <img src={authenticatorLogoIcon} alt="Google Authenticator Logo" className="w-28 h-auto scale-125"/>
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
      />
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
      />
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


<section className="bg-gray-50 relative py-10 px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden mb-10">

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">

    {/* TOP LABEL
    <p className="text-sm tracking-[0.2em] text-[#334155] font-bold mb-6">
      READY TO GET STARTED
    </p> */}

    {/* HEADING */}
    <h2 className="text-4xl md:text-4xl font-bold text-[#334155] mb-6 leading-tight">
      Ready to Secure Your Applications?
    </h2>

    {/* SUBTEXT */}
    <p className="text-[#64748B] text-lg leading-relaxed mb-10">
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
      <button onClick={() => navigate("/products/eicerise/form")} 
      className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-blue-800 transition text-[18px]">
        Request a Demo
          <img src={arrowIcon} alt="arrow"/>

      </button>
    </div>
  </div>
</section>
<ProductCarousel slides={productSlides} />

 <ProductFooter/>
    </div>
  );
}