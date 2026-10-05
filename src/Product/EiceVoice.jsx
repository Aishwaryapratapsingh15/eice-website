"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
import ProductFooter from "./ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const eiceVoiceIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/EiceVoice.png";
const BannerIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/BannerOne.svg";
const dsIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/DS.webp";
const smeIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/SME.webp";
const lbIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/LB.webp";
const oeIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/OE.webp";
const tickIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/KBI.svg";
const confirmIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/Confirm.svg";
const dispatchIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/Dispatch.svg";
const speakIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/Speak.svg";
const understandIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/Understand.svg";
const hdIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/HD.svg";
const cbIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/CB.svg";
const opIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/OP.svg";
const arIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/AR.webp";
const nluIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/NLU.webp";
const rtsIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/RTS.webp";
const peIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/PEI.webp";
const mlIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/ML.webp";
const omIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/OM.webp";
const bannerbg = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/Bannerbg.png";
const heroImage = "https://d3r43jacxrwsrp.cloudfront.net/EiceVoice/Herosection.png";

export default function EiceVoice() {
  const navigate = useNavigate();

  const challenges = [
    {
      icon: smeIcon,  
      title: "Slow \nManual Entry",
      desc: "Staff spend too much time typing orders into POS terminals, creating delays during peak service hours.",
    },
    {
      icon: oeIcon,  
      title: "Order \nErrors",
      desc: "Misheard or miscommunicated orders lead to wrong dishes reaching guests, impacting satisfaction and revenue.",
    },
    {
      icon: lbIcon,  
      title: "Language Barriers",
      desc: "Multilingual teams struggle with consistent order communication between front-of-house and kitchen staff.",
    },
    {
      icon: dsIcon,  
      title: "Disconnected Systems",
      desc: "Existing POS and ERP systems don't support voice input, creating friction in workflows that demand speed.",
    },
  ];

  const capabilities = [
    { 
      icon: nluIcon,
      title: "Natural Language Understanding",
      desc: "Custom NLU engine trained on hospitality vocabulary-understands table numbers, menu items, modifiers, and quantities in natural speech.",
    },
    { 
      icon: rtsIcon,
      title: "Real-Time \nSpeech-to-Text",
      desc: "Industry-leading STT accuracy with sub-300ms latency. Orders are transcribed and confirmed in real time-no lag, no waiting.",
    },
    {
      icon: peIcon,
      title: "POS & ERP \nIntegration",
      desc: "Acts as a voice layer on top of your existing POS system. No replacement required - EICE Voice integrates via API with EICE Rise and third-party systems.",
    },
    { 
      icon: mlIcon,
      title: "Multi-language \nSupport",
      desc: "Supports multiple languages and regional accents out of the box. Ideal for diverse hospitality teams across international properties.",
    },
    { 
      icon: omIcon,
      title: "Order Modification \nand Cancellation",
      desc: "Staff can modify, cancel, or repeat orders using natural voice commands. Full audit trail of every voice instruction logged automatically",
    },
    { 
      icon: arIcon,
      title: "Analytics \nand Reporting",
      desc: "Track voice order volumes, peak hours, error rates, and staff usage patterns from a centralised dashboard with scheduled reports.",
    },
  ];

  const steps = [
    { title: "Speak", desc: "Staff speak the order naturally - table number, items, quantities, and modifiers - in their own words." },
    { title: "Understand", desc: "EICE Voice's AI-driven NLU engine parses the speech, resolves menu items, and structures the order in real time." },
    { title: "Confirm", desc: "Order is read back or shown on screen for instant confirmation before submission. Errors caught before they happen." },
    { title: "Dispatch", desc: "Confirmed order is sent to the kitchen display and synced with the POS system - hands-free, zero lag." },
  ];

  const benefits = [
  {
    title: "Faster Order Throughput",
    desc: "Voice ordering is 3× faster than manual POS entry — reducing wait times and increasing table turns during peak service.",
  },
  {
    title: "Fewer Order Errors",
    desc: "Real-time confirmation and structured NLU parsing eliminates miscommunication between staff and kitchen.",
  },
  {
    title: "Zero Learning Curve",
    desc: "Staff simply speak naturally. No training required — EICE Voice adapts to your team’s vocabulary and accent.",
  },
  {
    title: "Seamless POS Integration",
    desc: "No ripping out your current system. EICE Voice plugs into EICE Rise and third-party POS via a lightweight API layer.",
  },
  ];

  const deployment = [
    {
      icon: opIcon,
      tag: "FULL CONTROL",
      title: "On-Premises",
      desc: "Deploy EICE Voice entirely within your property network. Full data control, works offline — ideal for enterprise hotel groups with strict data policies.",
    },
    {
      icon: cbIcon,
      tag: "QUICK START",
      title: "Cloud-Based",
      desc: "Managed cloud deployment with automatic updates and scaling. Get started in minutes with zero infrastructure investment.",
    },
    {
      icon: hdIcon,
      tag: "MOST FLEXIBLE",
      title: "Hybrid Deployment",
      desc: "Combine on-prem voice processing with cloud analytics and reporting. Best of both worlds for multi-property hospitality groups.",
    },
  ];


  return (
    <div className="bg-white text-[#334155]">

      {/* ================= HERO ================= */}
      <section className="bg-white py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto text-left sm:text-center">
        <div className="max-w-4xl mx-auto">

          {/* ICON */}
          <div className="mb-6 flex items-center justify-center">
            <img src={heroImage} alt="product"
                    className="mx-auto sm:mb-6 md:w-96 lg:w-[600px]" width="2639" height="995" />
          </div>

                  {/* TAG */}
        <div className="font-general font-semibold flex w-fit mx-auto items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide mb-4">
         <img
            src={speakIcon}
            alt="icon"
            className="w-5 h-5 rounded-full object-contain"
           width="20" height="20" />
          <span>Voice-First AI for Hospitality</span>
        </div>

          {/* HEADING */}
          <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk py-1">
           <span className="text-bloo"> AI-Powered </span>Voice Order Management <br />

            for Modern Hospitality
          </h1>

          {/* SUBTEXT */}
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            EICE Voice is an AI-Powered, voice-first order management platform that lets restaurant and hotel staff place, manage and track orders hand-free--with natural language understanding built for the hospitality industry.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:flex sm:justify-center">
            <button
              onClick={() => navigate("/products/eicerise/form?product=Eice%20Voice")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 text-[18px] hover:bg-[#1E40AF] transition"
            >
              Request a Demo
              <img src={arrowIcon} alt="arrow"  width="24" height="24" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS ================= */}
  <section className="bg-white py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-4 sm:gap-10 items-center max-w-6xl mx-auto">

    {/* LEFT */}
    <div>
      <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8">
        What is EICE Voice?
      </h2>

      <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mb-3 max-w-[600px]">
        EICE Voice is an AI-powered voice layer built on top of existing POS
        and ERP systems. It enables hospitality staff to place and manage
        orders using natural speech — without touching a screen or learning
        complex software.
      </p>

      <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mb-6 max-w-[600px]">
        Built with a custom NLU engine trained on hospitality-specific
        vocabulary, EICE Voice understands kitchen terminology, table
        numbers, modifiers, and multi-item orders — in real time, across
        multiple languages.
      </p>

      {/* ✅ BULLET POINTS */}
      <div className="space-y-4">

        <div className="flex items-center gap-3">
          {/* ICON PLACEHOLDER */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon} width="24" height="24" />
          </div>
          <p className="font-inter font-normal text-blackk text-[15px] sm:text-[16px] leading-[1.6]">
            Voice-first, hands-free order placement
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon} width="24" height="24" />
          </div>
          <p className="font-inter font-normal text-blackk text-[15px] sm:text-[16px] leading-[1.6]">
            Integrates with existing POS systems
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon} width="24" height="24" />
          </div>
          <p className="font-inter font-normal text-blackk text-[15px] sm:text-[16px] leading-[1.6]">
            Custom AI-driven NLU trained for hospitality vocabulary
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon} width="24" height="24" />
          </div>
          <p className="font-inter font-normal text-blackk text-[15px] sm:text-[16px] leading-[1.6]">
            AI-driven real-time speech-to-text with order confirmation
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT */}
    <div className="w-full h-[400px] bg-white rounded-xl flex items-center justify-center pt-10px">
      <img src={eiceVoiceIcon} className = "w-full h-[400px]" width="1295" height="1237" />
    </div>

  </div>
</section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-8">
          <h1 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Hospitality Order Management Challenges
          </h1>

          <h4 className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            Restaurants and hotels face critical bottlenecks in order handling. EICE Voice<br className="hidden sm:inline" /> addresses these head-on.
          </h4>
        </div>

        <div className="grid md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {challenges.map((item, i) => (
            <div key={i} className="bg-white rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px] flex flex-col items-start text-start">
                  {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="56" height="56" />
        </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">{item.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Core Capabilities of EICE Voice
          </h2>

          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            Powered by AI, built for hospitality speed and accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {capabilities.map((item, i) => (
            <div key={i} className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">
               <div className="rounded-lg flex items-start mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="56" height="56" />
        </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">{item.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BANNER ================= */}
   <section  style={{ backgroundImage: `url(${bannerbg})` }} className="bg-cover bg-center">
  <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
  <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-4 sm:gap-20 items-center">

    {/* LEFT SIDE - CONTENT */}
    <div className="text-white">

      {/* <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-6">
        India’s first staff-facing voice-to-kitchen NLU order management platform
      </h2> */}

 <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-white py-1">
  India’s first staff-facing AI Powered voice-to-kitchen Natural Language order Management Platform
</h2>

      <p className="font-inter font-normal text-white/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-xl mt-2">
        EICE Voice is uniquely positioned as a voice layer atop existing POS systems — not a replacement.
        Hotels and restaurants get all the speed of voice ordering without ripping out their current infrastructure.
      </p>

    </div>

    {/* RIGHT SIDE - VISUAL */}
    <div className="flex flex-col items-center md:items-end justify-center gap-4 md:gap-6">

      {/* Mic Circle */}
      {/* <div className="w-50 h-24 rounded-full bg-cyan-400/20 flex items-center justify-center"> */}
        {/* <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center"> */}
          <img src={BannerIcon} className="w-auto h-70" width="48" height="48" />
        {/* </div> */}
      {/* </div> */}

      {/* Wave Bars */}
      {/* <div className="flex items-end gap-1">
        <span className="w-1 h-4 bg-cyan-400"></span>
        <span className="w-1 h-6 bg-cyan-400"></span>
        <span className="w-1 h-10 bg-cyan-400"></span>
        <span className="w-1 h-6 bg-cyan-400"></span>
        <span className="w-1 h-4 bg-cyan-400"></span>
      </div> */}

    </div>

  </div>
  </div>
</section>

      {/* ================= WORKFLOW ================= */}
<section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto text-center">
  <div className="mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">How EICE Voice Works</h2>

    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
          A Simple, reliable 4-step voice workflow that protects your order accuracy.
        </p>
  </div>

  <div className="relative max-w-5xl mx-auto">

    {/* LINE BEHIND */}
    <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-[80%] h-[4px] bg-[#01B0F1]/30"></div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10 relative z-10">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">

          {/* CIRCLE WITH SVG */}
          <div className="w-12 h-12 rounded-full border-2 border-[#012060] bg-white flex items-center justify-center mb-4">

            {i === 0 && (
              // MIC ICON
              <img src={speakIcon} className = "w-12 h-12 rounded-full object-cover" width="48" height="48" />
            )}

            {i === 1 && (
              // BRAIN / AI ICON
              <img src={understandIcon} className = "w-12 h-12 rounded-full object-cover" width="48" height="48" />
            )}

            {i === 2 && (
              // CHECK ICON
              <img src={confirmIcon} className = "w-12 h-12 rounded-full object-cover" width="48" height="48" />
            )}

            {i === 3 && (
              // DISPATCH ICON
             <img src={dispatchIcon} className = "w-12 h-12 rounded-full object-cover" width="48" height="48" />
            )}

          </div>

          <h3 className="font-general font-semibold text-blackk mb-1 text-[18px] sm:text-[20px] leading-[1.3]">{step.title}</h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] max-w-[180px]">
            {step.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= BENEFITS ================= */}
 <section className="bg-[#F8FAFC]">
  <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto text-center">

  {/* HEADING */}
  <div className="mb-8">
  <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
    Key Benefits for Hospitality Teams
  </h2>

  {/* SUBTEXT */}
  <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
    Transform your order operations into a competitive advantage.
  </p>
  </div>

  {/* CARDS */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
    {benefits.map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-4 rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px] bg-white"
      >

        {/* ICON (LEFT) */}
        <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0">
          <img src={tickIcon} width="56" height="56" />
        </div>

        {/* TEXT */}
        <div className="text-left">
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">{item.title}</h3>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
            {item.desc}
          </p>
        </div>

      </div>
    ))}
  </div>

  </div>
</section>

      {/* ================= DEPLOYMENT ================= */}
<section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto text-center">

  <div className="mb-8">
  <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
    Deployment & Flexibility
  </h2>

  <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
    Deploy EICE Voice where it works best for your hospitality infrastructure.
  </p>
  </div>

  <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
    {deployment.map((item, i) => (
      <div
        key={i}
        className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px] bg-white text-left sm:text-center"
      >

        {/* ICON PLACEHOLDER */}
        <div className="w-16 h-16 mx-0 sm:mx-auto mb-4 rounded-xl flex items-center justify-center">
         <img src={item.icon} width="64" height="64" />
        </div>

        {/* TAG */}
        <div className="inline-block text-[10px] tracking-widest text-[#334155] font-semibold bg-blue-50 px-3 py-1 rounded-full mb-3">
          {item.tag}
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

      {/* ================= VIDEO ================= */}
      <ProductVideo
        eyebrow="Voice-Powered AI"
        heading="See EICE Voice in Action"
        subtext="Experience how voice-powered AI simplifies ordering, connects with your existing systems, and helps hospitality teams serve guests faster."
        videoId="vsYw6GvlpSc"
      />

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gray-50 relative overflow-hidden">
        <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
        <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk text-center py-1">
          Ready to Transform Your Order Management?
        </h2>

        <p className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6] mt-2 mb-10 text-center">
      Talk to our experts to see how EICE Voice fits your hospitality<br/> operations and order management strategy.
    </p>

        <button
          onClick={() => navigate("/products/eicerise/form?product=Eice%20Voice")}
          className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px]  mx-auto hover:bg-[#1E40AF]"
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



