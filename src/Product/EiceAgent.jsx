"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";
import arrowIcon from "../assets/arrow.svg";
import deployIcon from "../assets/common/Deploy.svg";
import planIcon from "../assets/common/Plan.svg";
import scaleIcon from "../assets/common/Scale.svg";
import optimizeIcon from "../assets/common/Optimize.svg";
import cognitiveIcon from "../assets/EiceAgent/Cognitive_Automation.svg";
import continuousIcon from "../assets/EiceAgent/Continuous_Learning.svg";
import enterpriseIcon from "../assets/EiceAgent/Enterprise_Security.svg";
import globalIcon from "../assets/EiceAgent/Global_Scalability.svg";
import instantIcon from "../assets/EiceAgent/Instant_Integrations.svg";
import realIcon from "../assets/EiceAgent/Real-time_Analytics.svg";
import adaptiveIntelligenceIcon from "../assets/isyncdrive/Adaptive_Intelligence.svg";
import unifiedEcosystemIcon from "../assets/isyncdrive/Unified_Ecosystem.svg";
import enterpriseRIcon from "../assets/EiceAgent/Enterprise_Reliability.svg";
import isoIcon from "../assets/EiceAgent/ISO_Compliant.svg";
import TwentyIcon from "../assets/EiceAgent/20.svg";
import TwentyFiveIcon from "../assets/EiceAgent/25.svg";
import SixtyIcon from "../assets/EiceAgent/60.svg";
import NintyIcon from "../assets/EiceAgent/90.svg";
import bgImage2 from "../assets/common/Background.png";
import Frame1Icon from "../assets/EiceAgent/Frame1.png";
import Frame2Icon from "../assets/EiceAgent/Frame2.png";
import askLogoIcon from "../assets/EiceAgent/Ask_Eice_Logo.svg";
import eiceAimIcon from "../assets/EiceAgent/EICE_AIM_Logo.svg";
import actionIcon from "../assets/EiceAgent/Action_Agent.png";
import knowledgeIcon from "../assets/EiceAgent/Knowledge_Agent.png";
import aiIcon from "../assets/EiceAgent/agents/AI_Lead_Generation.svg";
import aeIcon from "../assets/EiceAgent/agents/AEIAI.svg";
import dfIcon from "../assets/EiceAgent/agents/DFLogic.svg";
import checkIcon from "../assets/common/Check_all.svg";
import scmIcon from "../assets/EiceAgent/agents/SCM.svg";
import reductionIcon from "../assets/EiceAgent/agents/Reduction_Time.svg";
import semanticIcon from "../assets/EiceAgent/agents/Semantic_Search.svg";
import racIcon from "../assets/EiceAgent/agents/RAC.svg";
import cmmiImg from "../assets/EiceAgent/CMMI.png";
import isoImg  from "../assets/EiceAgent/ISO.png";
import iecImg from "../assets/EiceAgent/IEC.png";
import ismsImg from "../assets/EiceAgent/ISMS.png"; 
import shieldIcon from "../assets/common/shield_02.svg";
import { useNavigate } from "/src/nextNavigation";

const steps = [
  {
    icon: planIcon,
    step: "01",
    title: "Plan",
    desc: "Define goals, identify data sources, map AI opportunities",
  },
  {
    icon: deployIcon,
    step: "02",
    title: "Deploy",
    desc: "Configure agents, integrate systems, launch operations.",
  },
  {
    icon: scaleIcon,
    step: "03",
    title: "Scale",
    desc: "Expand across teams, automate workflows.",
  },
  {
    icon: optimizeIcon,
    step: "04",
    title: "Optimize",
    desc: "Analyze results, refine models, enhance performance.",
  },
];

const stats = [
  {
    icon: SixtyIcon,
    value: "60%",
    color: "text-green-500",
    label: "Reduction in cost per lead",
  },
  {
    icon: TwentyFiveIcon,
    value: "~25%",
    color: "text-[#1DA1F2]",
    label: "Increase in lead conversions",
  },
  {
    icon: TwentyIcon,
    value: "~25%",
    color: "text-purple-500",
    label: "Reduction in document search time",
  },
  {
    icon: NintyIcon,
    value: "90%",
    color: "text-orange-500",
    label: "Reduction in knowledge discovery time",
  },
];


const platformFeatures = [
      {
    icon: cognitiveIcon,
    title: "Cognitive Automation",
    desc: "AI-powered decision-making that learns and adapts to your business context",
  },
     {
    icon: realIcon,
    title: "Real-time Analytics",
    desc: "Continuous monitoring and insights across all operations and interactions",
  },
  {
    icon: enterpriseIcon,
    title: "Enterprise Security",
    desc: "ISO-grade encryption,compliance, and role-based access control",
  },
  {
    icon: globalIcon,
    title: "Global Scalability",
    desc: "Deploy across regions and teams without compromising performance",
  },
  {
    icon: instantIcon,
    title: "Instant Integrations",
    desc: "Seamless connection to your existing tools, CRMs, and data sources",
  },
  {
    icon: continuousIcon,
    title: "Continuous Learning",
    desc: "Models that improve over time with every interaction and feedback loop",
  },
];

const badges = [
  {
    title: "CMMI Level 3",
    desc: "Capability Maturity\nModel integration",
    icon: cmmiImg,
  },
  {
    title: "ISO 9001",
    desc: "Quality Management\nSytem",
    icon: isoImg,
  },
  {
    title: "ISO 27001",
    desc: "Information Security\nManagement",
    icon: ismsImg,
  },
  {
    title: "ISO/IEC 20000",
    desc: "IT Service\nManagement",
    icon: iecImg,
  },
];

export default function EiceAgent() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      {/* <section className="mt-20 py-10 px-60">
        <div className="mt-5 max-w-[1200px] mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-4xl font-bold">
            An AI-driven ecosystem to <span className = "italic text-[#01B0F1] font-semibold"> automate, optimize, and scale </span>enterprise intelligence
          </h1>

          <p className="mt-5 text-gray-600 px-30 text-xl leading-relaxed">
            Transform routine processes into intelligent, data-driven workflows across sales, operations, and decision-making.
          </p>

       

        </div>
      </section> */}
      <section className="mt-20 py-10 px-4 md:px-10 lg:px-20 xl:px-40">
  <div className="mt-5 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      An AI-driven ecosystem to 
      <span className="italic text-[#01B0F1] font-semibold">
        {" "}automate,<br /> optimize, and scale{" "}
      </span>
      enterprise intelligence
    </h1>

    <p className="mt-5 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
      Transform routine processes into intelligent, data-driven workflows across sales, operations, and decision-making.
    </p>

  </div>
</section>


    <section className="bg-white mb-10">
      {/* <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8 px-60"> */}
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">

        {/* LEFT CARD */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl py-4  text-center shadow-sm">

          {/* LOGO */}
           <div className="flex justify-center mb-1">
            <img
              src={askLogoIcon.src}
              alt="knowledge"
              className=" object-contain"
            />
          </div>
          <p className="text-gray-500 text-[12px] leading-relaxed max-w-[420px] mx-auto">
           The Knowledge Agent.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mb-4">
            <img
              src={Frame1Icon.src}
              alt="knowledge"
              className="w-full max-w-lg h-[80px] sm:h-[100px] object-contain"
            />
          </div>

          {/* TEXT */}
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-[420px] mx-auto">
            Unlock instant insights from your enterprise knowledge base. AskEICE uses natural language processing and RAG-based semantic search to deliver answers in seconds, not hours.
          </p>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl py-4 text-center shadow-sm">

          {/* LOGO */}
           <div className="flex justify-center mb-1">
            <img
              src={eiceAimIcon.src}
              alt="action"
              className="object-contain"
            />
          </div>

          <p className="text-gray-500 text-[12px] leading-relaxed max-w-[420px] mx-auto">
           The Action Agent.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mb-4">
            <img
              src={Frame2Icon.src}
              alt="action"
              className="w-full max-w-lg h-[80px] sm:h-[100px] object-contain"
            />
          </div>

          {/* TEXT */}
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-[420px] mx-auto">
            Replace traditional outreach with AI-powered lead generation and qualification. EICEAIM operates 24/7, managing campaigns, follow-ups, and analytics with precision.
          </p>

        </div>

      </div>
    </section>  

<section className = "flex justify-center mb-10">
    {/* <button className="bg-[#012060] text-white px-14 py-5 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-lg"> */}
    <button onClick={() => navigate("/products/form?embed=true&product=EiceAgent")} 
    className="bg-[#012060] text-white px-10 py-5 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px] w-[250px] h-[56px]">
            Request a Demo
              <img src={arrowIcon.src} alt="arrow"/>
    
          </button>
          </section>


     <section className="bg-gray-50 border-1 border border-[#E2E8F0] py-2 mb-10">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

          {/* ITEM 1 */}
          <div className="flex items-center gap-3">
            <img src={checkIcon.src} alt="check" className="w-5 h-5" />
            <span className="text-[16px] font-medium text-[#2f3b4a]">
              AI-driven ecosystem
            </span>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-3">
            <img src={checkIcon.src} alt="check" className="w-5 h-5" />
            <span className="text-[16px] font-medium text-[#2f3b4a]">
              Action + Knowledge agents
            </span>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-3">
            <img src={checkIcon.src} alt="check" className="w-5 h-5" />
            <span className="text-[16px] font-medium text-[#2f3b4a]">
              Built for enterprise-scale
            </span>
          </div>

        </div>

      </div>
    </section>

      {/* WHAT IS */}
      {/* <section className="bg-[#F4F9FF] py-10 px-40"> */}
      <section className="bg-[#F4F9FF] py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto items-center">
          <div>
            {/* <h2 className="text-3xl font-bold leading-relaxed text-[#334155]"> */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
              What is EICE AI Agent Suite?
            </h2>
          </div>

          <div className="text-[#64748B] font-semibold mb-6 leading-8 space-y-6">
            <p>
              The EICE Agent Suite is a powerful AI-driven ecosystem designed to automate, optimize, 
and scale enterprise intelligence.
It brings together two specialized agents—EICEAIM (The Action Agent) and AskEICE (The 
Knowledge Agent)—to deliver measurable impact across sales, operations, and decision
making. Together, they enable organizations to transform routine processes into intelligent, 
data-driven workflows.
            </p>
          </div>
        </div>
      </section>

      {/* EICE Inteliigent right side image */}

       {/* <section className="bg-white py-10 px-40"> */}
       <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[34px] font-bold text-[#334155] mb-16">
          The EICE Intelligence Ecosystem
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h3 className="text-[28px] font-bold text-[#334155] mb-4">
              The Action Agent (EICE AIM)
            </h3>

            <p className="text-[#64748B] text-[16px] leading-relaxed mb-2">
              Transform outreach and lead management with AI that never sleeps.
            </p>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-8">
              EICEAIM handles generation, qualification, and nurturing at scale.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-6">

              {/* ITEM */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg flex items-center justify-center">
                  <img src={aiIcon.src} alt="icon"/>
                </div>
                <div>
                  <h4 className="font-small text-[#334155] text-[17px]">
                    AI-driven Lead Generation & Qualification
                  </h4>
                  <p className="text-[#64748B] text-[15px]">
                    Identify, score, and prioritize prospects automatically
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg flex items-center justify-center">
                  <img src={scmIcon.src} alt="icon"/>
                </div>
                <div>
                  <h4 className="font-small text-[#334155] text-[17px]">
                    Smart Campaign Management
                  </h4>
                  <p className="text-[#64748B] text-[15px]">
                    Multi-channel campaigns optimized by AI in real-time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg flex items-center justify-center">
                  <img src={dfIcon.src} alt="icon"/>
                </div>
                <div>
                  <h4 className="font-small text-[#334155] text-[17px]">
                    Dynamic Follow-up Logic
                  </h4>
                  <p className="text-[#64748B] text-[15px]">
                    Contextual responses that adapt to prospect behavior
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg flex items-center justify-center">
                  <img src={aeIcon.src} alt="icon"/>
                </div>
                <div>
                  <h4 className="font-small text-[#334155] text-[17px]">
                    Analytics for Every Interaction
                  </h4>
                  <p className="text-[#64748B] text-[15px]">
                    Deep insights into campaign performance and conversion drivers
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center">

            {/* IMAGE */}
            <div className="rounded-[24px] overflow-hidden shadow-sm mt-10">
              {/* <img
                src={actionIcon.src}
                alt="ai"
                className="w-[420px] h-[360px] object-cover"
              /> */}
              <img
  src={actionIcon.src}
  className="w-full max-w-[420px] h-auto object-cover"
/>
            </div>

            {/* STATS */}
            {/* <div className="flex gap-4 mt-6">

              <div className="bg-[#eef2f6] px-2 rounded-full flex items-center gap-2">
                <span className="text-[28px] font-bold text-[#334155]">
                  60%
                </span>
                <span className="text-[13px] text-[#6b7c93] font-semibold leading-tight">
                  Cost per lead <br /> reduction
                </span>
              </div>

              <div className="bg-[#eef2f6] px-2 rounded-full flex items-center gap-2">
                <span className="text-[28px] font-semibold text-[#2f3b4a]">
                  ~25%
                </span>
                <span className="text-[13px] text-[#6b7c93] font-semibold leading-tight">
                  increase in conversions
                </span>
              </div>

            </div> */}
            {/* <div className="flex gap-4 mt-6"> */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">

  <div className="bg-[#F4F7FD] px-4 py-2 rounded-full flex items-center gap-2 w-[200px] justify-center">
    <span className="text-[28px] font-bold text-[#334155]">
      60%
    </span>
    <span className="text-[13px] text-[#6b7c93] font-semibold leading-tight text-left">
      Cost per lead <br /> reduction
    </span>
  </div>

  <div className="bg-[#F4F7FD] px-4 py-2 rounded-full flex items-center gap-2 w-[200px] justify-center">
    <span className="text-[28px] font-semibold text-[#2f3b4a]">
      ~25%
    </span>
    <span className="text-[13px] text-[#6b7c93] font-semibold leading-tight text-left">
      increase in conversions
    </span>
  </div>

</div>

          </div>

        </div>

      </div>
    </section>

    {/* Eice Intelligent left side image */}
    {/* <section className="bg-white py-10 px-40"> */}
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start gap-6">

          {/* IMAGE */}
          <div className="rounded-[28px] overflow-hidden">
            {/* <img
              src={knowledgeIcon.src}
              alt="knowledge"
              className="w-[440px] h-[320px] object-cover"
            /> */}
            <img
  src={knowledgeIcon.src}
  className="w-full max-w-[440px] h-auto object-cover"
/>
          </div>

          {/* STAT */}
          <div className="mt-6 bg-[#F4F7FD] px-8 rounded-full flex items-center gap-2 w-full max-w-[450px]">
            <span className="text-[28px] font-bold text-[#334155] px-4">
              90%
            </span>
            <span className="text-[14px] text-[#64748B] font-semibold leading-tight">
              Reduction in knowledge discovery time
            </span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* HEADING */}
          <h3 className="text-[28px] font-bold text-[#334155] mb-4">
            The Knowledge Agent (AskEICE)
          </h3>

          {/* SUBTEXT */}
          <p className="text-text-[#64748B] text-[16px] leading-relaxed mb-2">
            Discover insights instantly from your enterprise knowledge base with natural language queries and AI-powered semantic search.
          </p>

          {/* FEATURES */}
          <div className="space-y-6">

            {/* ITEM */}
            {/* <div className="flex items-start gap-4">
              <div className="rounded-lg flex items-center justify-center">
                  <img src={reductionIcon.src} alt="icon"/>
                </div>
              <div>
                <h4 className="text-[17px] font-medium text-[#334155]">
                  Reduction in knowledge time
                </h4>
                <p className="text-[#64748B] text-[15px]">
                  Up to 90% reduction in knowledge discovery time
                </p>
              </div>
            </div> */}
              <div className="flex items-start gap-4">
  <div className="flex-shrink-0">
    <img src={reductionIcon.src} alt="icon" />
  </div>
  <div>
    <h4 className="text-base sm:text-[17px] font-medium text-[#334155]">
      Reduction in knowledge time
    </h4>
    <p className="text-sm sm:text-[15px] text-[#64748B]">
      Up to 90% reduction in knowledge discovery time
    </p>
  </div>
</div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg flex items-center justify-center">
                  <img src={scmIcon.src} alt="icon"/>
                </div>
              <div>
                <h4 className="text-[17px] font-medium text-[#334155]">
                  Secure Document Ingestion
                </h4>
                <p className="text-[#64748B] text-[15px]">
                  PDFs, images, OCR – all processed securely within your infrastructure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg flex items-center justify-center">
                  <img src={semanticIcon.src} alt="icon"/>
                </div>
              <div>
                <h4 className="text-[17px] font-medium text-[#334155]">
                  RAG-based Semantic Search
                </h4>
                <p className="text-[#64748B] text-[15px]">
                  Advanced retrieval-augmented generation for contextual accuracy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg flex items-center justify-center">
                  <img src={racIcon.src} alt="icon"/>
                </div>
              <div>
                <h4 className="text-[17px] font-medium text-[#334155]">
                  Role-based Access Control
                </h4>
                <p className="text-[#64748B] text-[15px]">
                  Granular permissions ensure the right people access the right information
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    {/* how it works */}   

      {/* <section className="py-10 px-20 bg-white"> */}
      <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">

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
        className="relative bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 min-h-[220px]"
      >

        {/* STEP NUMBER (top right) */}
        <span className="absolute top-5 right-5 text-5xl font-bold text-[#CBD5E1]">
          {item.step}
        </span>

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

{/* Core Capabilities */ }

     {/* <section className="py-10 px-20 bg-white"> */}
     <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        {/* <h2 className="text-4xl text-[#334155] font-bold text-center mb-5"> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#334155] font-bold text-center mb-5">
          Core Capabilities
        </h2>
        <h4 className="text-xl text-[#64748B] font-semibold text-center mb-10 max-w-3xl mx-auto">
          Along with secure storage, iSyncDrive enables controlled file and folder sharing to support collaborations across teams and locations        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {platformFeatures.map((item, i) => (
             <div
        key={i}
        className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col items-start text-start gap-4"
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

{/* Why Eice Agent Suite */}
{/* <section className="py-10 px-20 bg-white"> */}
<section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">

  {/* Heading */}
  <div className="max-w-5xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-[#334155] mb-5">
      Why EICE Agent Suite
    </h2>
    <p className="text-[#64748B] text-xl font-semibold mb-10 max-w-2xl mx-auto">
      The intelligent choice for enterprises demanding more from their AI
    </p>
  </div>

  {/* Cards */}
  {/* <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8"> */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

    {/* CARD 1 */}
    <div className="bg-white border border-gray-200 rounded-xl py-4 px-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="rounded-lg">
          <img src={unifiedEcosystemIcon.src} alt="icon" className="w-[70px] h-[70px]"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Unified AI Ecosystem
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] font-semibold leading-relaxed">
       Not just tools—an 
integrated platform 
where knowledge and 
action agents work in 
harmony to amplify 
enterprise intelligence.
      </p>

    </div>

    {/* CARD 2 */}
    <div className="bg-white border border-gray-200 rounded-xl py-4 px-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="rounded-lg">
          <img src={adaptiveIntelligenceIcon.src} alt="icon" className="w-[70px] h-[70px]"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Adaptive Intelligence
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] font-semibold leading-relaxed">
        AI that learns from your data, adapts to your workflows, and continuously improves with every interaction.
      </p>

    </div>

    { /* CARD 3 */}
     <div className="bg-white border border-gray-200 rounded-xl py-4 px-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="rounded-lg">
          <img src={enterpriseRIcon.src} alt="icon" className="w-[70px] h-[70px]"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          Enterprise Reliability
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] font-semibold leading-relaxed">
        Built for mission-critical 
operations with 99.9% 
uptime, redundancy, and 
24/7 support from our 
expert team.
      </p>

    </div>

    {/* CARD 4 */}
     <div className="bg-white border border-gray-200 rounded-xl py-4 px-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="rounded-lg">
          <img src={isoIcon.src} alt="icon" className="w-[70px] h-[70px]"/>
        </div>
        <h3 className="text-2xl font-bold text-[#334155]">
          ISO-Compliant
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#64748B] font-semibold leading-relaxed">
        CMMI Level 3, ISO 9001, ISO 
27001, and ISO/IEC 20000 
certified. Your data security 
is our foundation.
      </p>

    </div>

  </div>

</section>   

{/* Measurable Business Impact */ }

 {/* <section className="relative py-10 overflow-hidden px-20" style={{ backgroundImage: `url(${bgImage2})` }}> */}
 <section className="relative py-10 overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20" style={{ backgroundImage: `url(${bgImage2})` }}>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#334155] mb-4">
          Measurable Business Impact
        </h2>

        <p className="text-center text-[#64748B] font-semibold text-xl mt-3 mb-10">
          Real results from enterprises that transformed their operations with EICE Agent Suite
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >

              {/* Icon */}
              <div
                className={`rounded-lg flex items-start justify-start text-white text-lg mb-4`}
              >
                  <img src={item.icon.src} alt="icon" className="w-12 h-12 object-contain" />
              </div>

              {/* Value */}
              <h3 className={`text-[32px] font-semibold ${item.color}`}>
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-[#64748B] font-semibold text-[16px] leading-relaxed mt-2">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>

    {/* Security and Compliance */ }

    {/* <section className="bg-white py-10 px-20"> */}
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Top Tag */}
        <div className="inline-flex border-2 border-[#228441] items-center gap-2 bg-[#F0FDF4] text-[#2e7d32] px-4 py-2 rounded-full text-sm font-medium mb-2">
          <img src={shieldIcon.src} alt="icon" className="w-4 h-4 object-contain" /> Enterprise-Grade Security
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#334155] mb-4">
          Security, Compliance & Trust
        </h2>

        {/* Subtitle */}
        <p className="text-[#64748B] font-semibold text-lg mb-10 max-w-2xl mx-auto">
          Your data security is our foundation. Built with enterprise compliance at every layer.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {badges.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e2e8f0] rounded-xl py-8 px-6 shadow-sm"
            >

              {/* Title */}
              <h3 className="text-[20px] font-bold text-[#334155] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748B] font-semibold text-[15px] whitespace-pre-line leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={item.icon.src}
                  alt="badge"
                  className="h-16 object-contain"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>

{/* Final CTA */}
  {/* <section className="py-10 px-20 bg-gray-100 text-center mb-10"> */}
  <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50 text-center mb-10">
  
    {/* Heading */}
    <div className="max-w-6xl mx-auto">
      {/* <h2 className="text-4xl font-bold text-[#334155] mb-4"> */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#334155] mb-4">
        Ready to Transform Your File Management?
      </h2>
  
      <p className="mt-5 text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
        Join forward-thinking enterprises that trust iSyncDrive for secure, scalable, and governed file storage
      </p>
  
      {/* Buttons */}
      {/* <div className="mt-8 flex flex-wrap justify-center gap-4"> */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
  
        {/* Primary */}
           <button onClick={() => navigate("/products/form?embed=true&product=EiceAgent")} 
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
  
    {/* Bottom Cards */}
    <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
  
      <div className="bg-gray-100 rounded-xl py-6 px-4">
        <h3 className="text-lg font-semibold text-[#64748B]">
          Get Started
        </h3>
        <p className="mt-2 text-[#334155] text-xl font-bold">
          Within 4-8 Weeks
        </p>
      </div>
  
      <div className="bg-gray-100 rounded-xl py-6 px-4">
        <h3 className="text-lg font-semibold text-[#64748B]">
          Expert Support
        </h3>
        <p className="mt-2 text-[#334155] text-xl font-bold">
          24/7 availability
        </p>
      </div>
  
      <div className="bg-gray-100 rounded-xl py-6 px-4">
        <h3 className="text-lg font-semibold text-[#64748B]">
          Security
        </h3>
        <p className="mt-2 text-[#334155] text-xl font-bold">
          ISO-certified infrastructure
        </p>
      </div>
  
    </div>
  
  </section>  

<ProductCarousel slides={productSlides} />

 <ProductFooter/>

    </div>
  );
}