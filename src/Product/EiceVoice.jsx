"use client";
import React from "react";
import { useNavigate } from "/src/nextNavigation";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";
import arrowIcon from "../assets/arrow.svg";
import eiceVoiceIcon from "../assets/EiceVoice/EiceVoice.png"
import BannerIcon from "../assets/EiceVoice/BannerOne.svg";
import dsIcon from "../assets/EiceVoice/DS.webp";
import smeIcon from "../assets/EiceVoice/SME.webp";
import lbIcon from "../assets/EiceVoice/LB.webp";
import oeIcon from "../assets/EiceVoice/OE.webp";
import tickIcon from "../assets/EiceVoice/KBI.svg";
import confirmIcon from "../assets/EiceVoice/Confirm.svg";
import dispatchIcon from "../assets/EiceVoice/Dispatch.svg";
import speakIcon from "../assets/EiceVoice/Speak.svg";
import understandIcon from "../assets/EiceVoice/Understand.svg";
import hdIcon from "../assets/EiceVoice/HD.svg";
import cbIcon from "../assets/EiceVoice/CB.svg";
import opIcon from "../assets/EiceVoice/OP.svg";
import arIcon from "../assets/EiceVoice/AR.webp";
import nluIcon from "../assets/EiceVoice/NLU.webp";
import rtsIcon from "../assets/EiceVoice/RTS.webp";
import peIcon from "../assets/EiceVoice/PEI.webp";
import mlIcon from "../assets/EiceVoice/ML.webp";
import omIcon from "../assets/EiceVoice/OM.webp";
import bannerbg from "../assets/EiceVoice/Bannerbg.png"
import heroImage from "../assets/EiceVoice/Herosection.png";

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
    { title: "Understand", desc: "EICE Voice's NLU engine parses the speech, resolves menu items, and structures the order in real time." },
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
      <section className="bg-white py-10 sm:py-16 md:py-20 text-center mt-16 sm:mt-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* ICON */}
          <div className="mb-6 flex items-center justify-center">
            <img src={heroImage.src} alt="product"
                    className="mx-auto mb-6 w-72 md:w-96 lg:w-[600px]"/>
          </div>

                  {/* TAG */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#344155] px-2 py-1 rounded-full text-sm font-medium mb-6">
         <img 
            src={speakIcon.src} 
            alt="icon" 
            className="w-5 h-5 rounded-full object-contain"
          />
          <span className = "text-[#334155]">Voice-First AI for Hospitality</span>
        </div>

          {/* HEADING */}
          <h1 className="text-[42px] md:text-[54px] font-bold leading-tight">
           <span className="text-[#01B0F1]"> Voice-Powered </span>Order Management <br /> 
            
            for Modern Hospitality
          </h1>

          {/* SUBTEXT */}
          <p className="mt-3 text-[#64748B] text-lg max-w-2xl mx-auto">
            EICE Voice is an AI-Powered, voice-first order management platform that lets restaurant and hotel staff place, manage and track orders hand-free--with natural language understanding built for the hospitality industry.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/products/form?embed=true&product=EiceVoice")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px] hover:bg-blue-800 transition"
            >
              Request a Demo
              <img src={arrowIcon.src} alt="arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS ================= */}
  <section className="bg-white py-10 px-5 md:px-20 lg:px-20 xl:px-40">
  <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

    {/* LEFT */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
        What is EICE Voice?
      </h2>

      <p className="text-[#64748B] font-semibold mb-6 leading-8 space-y-6 max-w-[600px]">
        EICE Voice is an AI-powered voice layer built on top of existing POS
        and ERP systems. It enables hospitality staff to place and manage
        orders using natural speech — without touching a screen or learning
        complex software.
      </p>

      <p className="text-[#64748B] font-semibold mb-6 leading-8 space-y-6 max-w-[600px]">
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
            <img src={tickIcon.src}/>
          </div>
          <p className="space-y-3 text-[#334155] font-semibold">
            Voice-first, hands-free order placement
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon.src}/>
          </div>
          <p className="space-y-3 text-[#334155] font-semibold">
            Integrates with existing POS systems
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon.src}/>
          </div>
          <p className="space-y-3 text-[#334155] font-semibold">
            Custom NLU trained for hospitality vocabulary
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
            <img src={tickIcon.src}/>
          </div>
          <p className="space-y-3 text-[#334155] font-semibold">
            Real-time speech-to-text with order confirmation
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT */}
    <div className="w-full h-[400px] bg-white rounded-xl flex items-center justify-center pt-10px">
      <img src={eiceVoiceIcon.src} className = "w-full h-[400px]"/>
    </div>

  </div>
</section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-10 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">
        <h1 className="text-4xl md:text-4xl text-[#334155] font-bold text-center leading-relaxed mb-[14px]">
          Hospitality Order Management Challenges
        </h1>
         
          <h4 className="text-lg md:text-xl text-[#64748B] text-center mb-10 max-w-2xl mx-auto">
    Restaurants and hotels face critical bottlenecks in order handling. EICE Voice addresses these head-on.
  </h4>


        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {challenges.map((item, i) => (
            <div key={i} className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col items-start text-start gap-4">
                  {/* SVG */}
        <div className="rounded-lg flex items-start justify-center">
          <img src={item.icon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>
              <h3 className="font-bold md:text-2xl text-2xl text-[#334155] whitespace-pre-line">{item.title}</h3>
              <p className="text-[#64748B] md:text-lg text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-10 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-[14px] text-[#334155]">
          Core Capabilities of EICE Voice
        </h2>
        
         <h4 className="text-lg md:text-xl text-[#64748B] font- text-center mb-10 max-w-3xl mx-auto">
    Powerful voice-first features designed for hospitality speed and accuracy.
  </h4>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((item, i) => (
            <div key={i} className="border rounded-xl p-6">
               <div className="rounded-lg flex items-start pb-5">
          <img src={item.icon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>
              <h3 className="font-bold md:text-2xl text-2xl text-[#334155] whitespace-pre-line">{item.title}</h3>
              <p className="text-[#64748B] md:text-lg text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BANNER ================= */}
   <section  style={{ backgroundImage: `url(${bannerbg.src})` }} className="bg-cover bg-center py-10 px-5 md:px-20 lg:px-20 xl:px-40">
  <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-20 items-center">

    {/* LEFT SIDE - CONTENT */}
    <div className="text-white">

      {/* <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-6">
        India’s first staff-facing voice-to-kitchen NLU order management platform
      </h2> */}

 <h2 className="text-3xl md:text-[36px] leading-1.2 font-bold tracking-relaxed mb-6">
  India’s first staff-facing voice-to-kitchen Natural Language order Management Platform
</h2>

      <p className="text-white/70 text-lg leading-relaxed max-w-xl">
        EICE Voice is uniquely positioned as a voice layer atop existing POS systems — not a replacement. 
        Hotels and restaurants get all the speed of voice ordering without ripping out their current infrastructure.
      </p>

    </div>

    {/* RIGHT SIDE - VISUAL */}
    <div className="flex flex-col items-center md:items-end justify-center gap-6">

      {/* Mic Circle */}
      {/* <div className="w-50 h-24 rounded-full bg-cyan-400/20 flex items-center justify-center"> */}
        {/* <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center"> */}
          <img src={BannerIcon.src} className="w-auto h-70"/>
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
</section>

      {/* ================= WORKFLOW ================= */}
<section className="py-10 px-5 md:px-20 lg:px-20 xl:px-40 text-center">
  <h2 className="text-4xl md:text-4xl font-bold text-center mb-[14px] text-[#334155]">How EICE Voice Works</h2>

  <h4 className="text-[#64748B] text-lg md:text-xl mb-10">
          A Simple, reliable 4-step voice workflow that protects your order accuracy.
        </h4>

  <div className="relative max-w-5xl mx-auto">

    {/* LINE BEHIND */}
    <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-[80%] h-[4px] bg-[#01B0F1]/30"></div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">

          {/* CIRCLE WITH SVG */}
          <div className="w-12 h-12 rounded-full border-2 border-[#012060] bg-white flex items-center justify-center mb-4">

            {i === 0 && (
              // MIC ICON
              <img src={speakIcon.src} className = "w-12 h-12 rounded-full object-cover"/>
            )}

            {i === 1 && (
              // BRAIN / AI ICON
              <img src={understandIcon.src} className = "w-12 h-12 rounded-full object-cover"/>
            )}

            {i === 2 && (
              // CHECK ICON
              <img src={confirmIcon.src} className = "w-12 h-12 rounded-full object-cover"/>
            )}

            {i === 3 && (
              // DISPATCH ICON
             <img src={dispatchIcon.src} className = "w-12 h-12 rounded-full object-cover"/>
            )}

          </div>

          <h3 className="font-bold text-[#334155] mb-2 text-[18px]">{step.title}</h3>
          <p className="text-sm text-[#64748B] leading-relaxed max-w-[180px]">
            {step.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= BENEFITS ================= */}
 <section className="py-10 px-5 md:px-20 lg:px-20 xl:px-40 bg-[#F8FAFC] text-center">

  {/* HEADING */}
  <h2 className="text-4xl md:text-4xl font-bold text-center mb-[14px] text-[#334155]">
    Key Benefits for Hospitality Teams
  </h2>

  {/* SUBTEXT */}
  <p className="text-lg md:text-xl text-[#64748B] font- text-center mb-10 max-w-3xl mx-auto">
    Transform your order operations into a competitive advantage.
  </p>

  {/* CARDS */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
    {benefits.map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-4 border border-gray-200 rounded-2xl p-6 bg-white"
      >
        
        {/* ICON (LEFT) */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
          <img src={tickIcon.src}/>
        </div>

        {/* TEXT */}
        <div className="text-left">
          <h3 className="font-bold md:text-2xl text-2xl text-[#334155]">{item.title}</h3>
          <p className="text-[#64748B] md:text-lg text-lg leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    ))}
  </div>

</section>

      {/* ================= DEPLOYMENT ================= */}
<section className="py-10 px-5 md:px-20 lg:px-20 xl:px-40 text-center">

  <h2 className="text-4xl md:text-4xl font-bold text-center mb-[14px] text-[#334155]">
    Deployment & Flexibility
  </h2>

  <p className="text-lg md:text-xl text-[#64748B] font- text-center mb-10 max-w-3xl mx-auto">
    Deploy EICE Voice where it works best for your hospitality infrastructure.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {deployment.map((item, i) => (
      <div
        key={i}
        className="border border-gray-200 rounded-2xl p-8 bg-white text-center"
      >

        {/* ICON PLACEHOLDER */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center">
         <img src={item.icon.src}/>
        </div>

        {/* TAG */}
        <div className="inline-block text-[10px] tracking-widest text-[#334155] font-semibold bg-blue-50 px-3 py-1 rounded-full mb-3">
          {item.tag}
        </div>

        {/* TITLE */}
        <h3 className="font-bold md:text-2xl text-2xl text-[#334155]">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#64748B] md:text-lg text-lg leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}
  </div>

</section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gray-50 relative py-10 px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden mb-10">
        <h2 className="text-4xl md:text-4xl font-bold text-[#334155] mb-[14px] leading-tight text-center">
          Ready to Transform Your Order Management?
        </h2>

        <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-10 text-center">
      Talk to our experts to see how EICE Voice fits your hospitality<br/> operations and order management strategy.
    </p>

        <button
          onClick={() => navigate("/products/form?embed=true&product=EiceVoice")}
          className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px] hover:bg-blue-800"
        >
          Request a Demo
          <img src={arrowIcon.src} alt="arrow" />
        </button>
      </section>

      <ProductCarousel slides={productSlides} />
      <ProductFooter />
    </div>
  );
}

