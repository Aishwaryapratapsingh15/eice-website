"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";
import { Link, useNavigate } from "@/nextNavigation";

// TODO: replace the remaining placeholder images below (Challenges, Why Choose, Governance, Deployment, banner) with real assets
const placeholderIconSm = "https://placehold.co/42x42/E6F4FD/012060?text=Icon";
const placeholderIcon = "https://placehold.co/56x56/E6F4FD/012060?text=Icon";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/eice-aim-hero.png";
const eiceAimIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/EICE_AIM_Logo.svg";
const Frame1Icon = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/Frame1.png";
const bgImage = "https://placehold.co/1625x371/EFF6FF/012060?text=Banner+Image";
const bgImage2 = "https://d3r43jacxrwsrp.cloudfront.net/common/Background.png";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const shieldIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/shield_02.svg";
const checkIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Check_all.svg";
// Same tick/cross icons used in Verilock.jsx's "Verilock vs Google Authenticator" comparison table
const tickIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/tick.svg";
const nilIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/nil.svg";

// Real Eice Aim icons (uploaded to the eice-aim CDN folder)
const EA = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim";
const outreach247Icon = `${EA}/24-7-outreach.svg`;
const configurablePersonasIcon = `${EA}/Configurable-personas.svg`;
const analyticsBuiltInIcon = `${EA}/Analytics-built-in.svg`;
const aiLeadGenIcon = `${EA}/AI-driven-lead-generation-qualification.svg`;
const smartCampaignIcon = `${EA}/Smart-campaign-management.svg`;
const dynamicFollowUpIcon = `${EA}/Dynamic-follow-up-logic.svg`;
const analyticsPerInteractionIcon = `${EA}/Analytics-for-every-interaction.svg`;
const cognitiveAutomationIcon = `${EA}/Cognitive-automation.svg`;
const realTimeAnalyticsIcon = `${EA}/Real-time-analytics.svg`;
const enterpriseSecurityIcon = `${EA}/Enterprise-security.svg`;
const globalScalabilityIcon = `${EA}/Global-scalability.svg`;
const instantIntegrationsIcon = `${EA}/Instant-integrations.svg`;
const continuousLearningIcon = `${EA}/Continuous-learning.svg`;
const deployIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Deploy.svg";
const planIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Plan.svg";
const scaleIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Scale.svg";
const optimizeIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Optimize.svg";
const alwaysOnOutreachIcon = `${EA}/Always-on-outreach.svg`;
const everyCallLoggedIcon = `${EA}/Every-call-logged.svg`;
const stat60Icon = `${EA}/25.svg`;
const stat25Icon = `${EA}/of-data-stays-within-your-own-infrastructure.svg`;
const cmmiImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/CMMI.png";
const isoImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/ISO.png";
const iecImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/IEC.png";
const ismsImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/ISMS.png"; 
const actionIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Action-Agent.svg"


const badges = [
  {
    title: "CMMI Level 3",
    desc: "Capability Maturity\nModel integration",
    icon: cmmiImg,
  __w: 319, __h: 98},
  {
    title: "ISO 9001",
    desc: "Quality Management\nSytem",
    icon: isoImg,
  __w: 117, __h: 118},
  {
    title: "ISO 27001",
    desc: "Information Security\nManagement",
    icon: ismsImg,
  __w: 128, __h: 173},
  {
    title: "ISO/IEC 20000",
    desc: "IT Service\nManagement",
    icon: iecImg,
  __w: 143, __h: 143},
];

const features = [
  { icon: outreach247Icon, title: "24×7 outreach", desc: "Always-on AI communication", __w: 42, __h: 42 },
  { icon: configurablePersonasIcon, title: "Configurable personas", desc: "Tuned per campaign and audience", __w: 42, __h: 42 },
  { icon: analyticsBuiltInIcon, title: "Analytics built in", desc: "Every call and interaction tracked", __w: 42, __h: 42 },
];

const challenges = [
  { oldWay: "Manual telecalling, limited to business hours", newWay: "24×7 AI-powered outreach, always on" },
  { oldWay: "Follow-ups depend on rep memory and bandwidth", newWay: "Dynamic follow-up logic that adapts to every prospect automatically" },
  { oldWay: "Lead scoring done by hand, after the fact", newWay: "Automated AI-driven lead generation and qualification, in real time" },
  { oldWay: "Campaign performance is hard to see until month-end", newWay: "Comprehensive analytics and reporting on every call and interaction" },
];

const architecture = [
  { icon: aiLeadGenIcon, title: "AI-driven Lead Generation & Qualification", desc: "Identify, score, and prioritize prospects automatically." },
  { icon: smartCampaignIcon, title: "Smart Campaign Management", desc: "Multi-channel campaigns with configurable AI personas." },
  { icon: dynamicFollowUpIcon, title: "Dynamic Follow-up Logic", desc: "Contextual responses that adapt to prospect behavior." },
  { icon: analyticsPerInteractionIcon, title: "Analytics for Every Interaction", desc: "Deep insights into campaign performance and conversion drivers." },
];

const platformFeatures = [
  { icon: cognitiveAutomationIcon, title: "Cognitive Automation", desc: "Agents that think, learn, and adapt outreach in real time." },
  { icon: realTimeAnalyticsIcon, title: "Real-time Analytics", desc: "Live dashboards on calls, campaigns, and conversions." },
  { icon: enterpriseSecurityIcon, title: "Enterprise Security", desc: "ISO-grade encryption protecting every prospect interaction." },
  { icon: globalScalabilityIcon, title: "Global Scalability", desc: "Run campaigns across regions without adding headcount." },
  { icon: instantIntegrationsIcon, title: "Instant Integrations", desc: "Connect easily with your existing CRM and data systems." },
  { icon: continuousLearningIcon, title: "Continuous Learning", desc: "Personas improve with every call and outcome." },
];

const steps = [
  { icon: planIcon, step: "01", title: "Import", desc: "Import contact lists, define your audience, and prepare targeted outreach campaigns." },
  { icon: deployIcon, step: "02", title: "Configure", desc: "Configure AI personas, conversation goals, and qualification logic for every campaign." },
  { icon: scaleIcon, step: "03", title: "Engage", desc: "AI agents handle calls, capture responses, and analyze conversations and sentiment in real time." },
  { icon: optimizeIcon, step: "04", title: "Follow Up", desc: "Identify high-intent leads and trigger personalized follow-ups to keep conversations moving." },
];

const impactStats = [
  { icon: stat25Icon, color: "text-[#1BA23D]", value: "60%", label: "reduction in cost per lead" },
  { icon: stat60Icon, color: "text-[#6322C5]", value: "~25%", label: "increase in lead conversions" },
];

const campaignControls = [
  { icon: alwaysOnOutreachIcon, title: "Always-on outreach", desc: "24×7 AI-powered communication — no missed follow-up window." },
  // TODO: no matching icon was uploaded for "Multi-channel campaigns" — still a placeholder
  { icon: smartCampaignIcon, title: "Multi-channel campaigns", desc: "Run in parallel across every prospect list, optimized in real time." },
  { icon: everyCallLoggedIcon, title: "Every call logged", desc: "Comprehensive analytics and reporting for coaching and forecasting." },
];


const faqs = [
  { q: "Q. Does EICEAIM replace our sales team?", a: "A. No — it acts as your team's always-on outreach partner. EICEAIM automates the repetitive parts of the funnel (outreach, qualification, follow-up) so your reps spend their time on qualified conversations and closing, not cold-dialing." },
  { q: "Q. What does 24×7 AI-powered outreach actually mean in practice?", a: "A. EICEAIM runs outreach and follow-up continuously, not just during business hours. Its dynamic follow-up logic adapts to each prospect automatically, so no lead sits waiting on a rep's schedule or memory." },
  { q: "Q. How does lead qualification work?", a: "A. EICEAIM scores and prioritizes prospects automatically as it engages them, using AI-driven qualification logic — so your team sees ranked, sales-ready leads instead of a raw, unsorted contact list." },
  { q: "Q. Can we customize how EICEAIM sounds or approaches different audiences?", a: "A. Yes. EICEAIM supports configurable AI personas, so you can run multiple campaigns with different tones, scripts, and approaches for different segments, all managed centrally." },
  { q: "Q. What reporting do we get on performance?", a: "A. Every call and interaction is logged automatically. You get comprehensive analytics and reporting on campaign performance and conversion drivers, so you can see what's working without waiting on manual call logs." },
];

export default function EiceAim() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="text-left sm:text-center py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="flex flex-col items-center">
          <img
            src={heroImg}
            alt="product"
            className="mx-auto w-[180px] h-[80px] md:w-96 lg:w-[180px]"
            width="873" height="404" />
          <img
            src={Frame1Icon}
            alt="product"
            className="mx-auto mb-6 md:w-96 lg:w-[380px]"
            width="873" height="404" />
        </div>

        <span className="font-general font-semibold flex w-fit mx-auto items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
          <img
            src={actionIcon}
            alt="icon"
            className="w-5 h-5 object-contain"
            width="20" height="20" />
          The Action Agent · EICE Agent Suite
        </span>

        <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk mt-[10px] max-w-4xl mx-auto py-1">
          The AI sales partner that <span className="text-bloo">never <br className="hidden sm:block"/> stops selling.</span>
        </h1>

        <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
          EICEAIM replaces traditional telecalling with a scalable, 24×7 AI-powered communication system — automating outreach, lead qualification, and follow-up with <br className="hidden sm:block"/> precision and personalization.
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button onClick={() => navigate("/products/eicerise/form?product=EiceAim")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
            Request a Demo
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white grid md:grid-cols-3 text-center">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className=" px-6 rounded-xl">
              <img src={item.icon} alt="icon" width={item.__w} height={item.__h} />
            </div>
            <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
              {item.title}
            </h3>
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
              What is EICEAIM?
            </h2>
          </div>
          <div className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4 sm:space-y-3">
            <p>EICEAIM is an AI-powered lead generation and sales engagement platform designed to automate outreach, lead qualification, and follow-ups at scale. It helps businesses engage prospects continuously through configurable AI personas, intelligent qualification logic, and personalized follow-up workflows.</p>
          </div>
       </div>
      </section>

      {/* CHALLENGES — styled like Verilock's "Verilock vs Google Authenticator" comparison table */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
        <div>
          <div className="text-center mb-8">
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
              From cold calling to consistent conversion
            </h2>
            <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
              Traditional telecalling doesn&apos;t scale, and it doesn&apos;t stay consistent. EICEAIM gives every <br />prospect the same disciplined follow-through — day or night.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm overflow-x-auto">
            <div className="grid grid-cols-2 bg-white text-sm font-semibold tracking-wide">
              <div className="p-5 text-left text-[#1E293B]">The Old Way</div>
              <div className="p-5 text-left text-[#1E293B]">With EICEAIM</div>
            </div>

            {challenges.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#F8FBFF]"} border-t border-[#E2E8F0]`}>
                <div className="p-5 flex items-start gap-2 text-left">
                  <img src={nilIcon} alt="" className="w-4 h-4 mt-1" width="16" height="16" />
                  <span className="text-[#94A3B8]">{row.oldWay}</span>
                </div>
                <div className="p-5 flex items-start gap-2 text-left">
                  <img src={tickIcon} alt="" className="w-4 h-4 mt-1" width="16" height="16" />
                  <span className="text-[#94A3B8] font-medium">{row.newWay}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
            Outreach, qualification, and follow-up fully automated
          </h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
            EICEAIM acts as your intelligent sales partner, automating outreach, lead qualification, and follow-ups with precision and personalization.
          </p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {architecture.map((item, i) => (
            <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="rounded-lg flex items-start mb-[19px]">
                <img src={item.icon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">{item.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

            {/* IMPLEMENTATION */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
            A proven, continuous journey
          </h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">
            From planning your first campaign to continuously improving conversion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, i) => (
            <div key={i} className="relative rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col min-h-[220px]">
              <span className="absolute top-5 right-5 text-4xl font-bold text-[#CBD5E1]">{item.step}</span>
              <div className="w-11 h-11 flex items-center justify-center bg-blue-900 text-white rounded-lg text-xl mb-[19px]">
                <img src={item.icon} alt="icon" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">{item.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* UNIFIED PLATFORM */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
            Core capabilities
          </h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
            Built to run outreach at enterprise scale
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {platformFeatures.map((item, i) => (
            <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start w-auto h-auto sm:h-auto">
              <div className="rounded-lg flex items-start mb-[19px]">
                <img src={item.icon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">{item.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* MEASURABLE IMPACT */}
      <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgImage2})` }}>
       <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk">Real results from AI-powered outreach</h2>
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {impactStats.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] text-center transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <div className="flex items-center justify-center mb-3 gap-4">
                  <img src={item.icon} alt="icon" className="w-16 h-16 object-contain" width="64" height="64" />

                <h3 className={`font-general font-semibold text-[40px] leading-[1.1] ${item.color}`}>{item.value}</h3></div>
                <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">{item.label}</p>
              </div>
            ))}
          </div>
       </div>
      </section>

      {/* CAMPAIGN CONTROLS */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">What that impact actually looks like</h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 mt-2">The numbers above come from three concrete operating changes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {campaignControls.map((item, i) => (
            <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
              <div className="rounded-lg flex items-start mb-[19px]">
                <img src={item.icon} alt="icon" className="w-11 h-11 object-contain" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">{item.title}</h3>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


    
      {/* SECURITY, COMPLIANCE & TRUST */}
        <section className="bg-white py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
      <div className="text-center">

        {/* Top Tag */}
        <div className="inline-flex border-2 border-[#228441] items-center gap-2 bg-[#F0FDF4] text-[#2e7d32] px-4 py-2 rounded-full font-general font-semibold text-[12px] sm:text-[14px] uppercase tracking-[0.12em]">
          <img src={shieldIcon} alt="icon" className="w-4 h-4 object-contain"  width="16" height="16" /> Enterprise-Grade Security
        </div>

        {/* Heading */}
        <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mt-3">
          Security, Compliance & Trust
        </h2>

        {/* Subtitle */}
        <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2 mb-8">
          Your data security is our foundation. Built with enterprise compliance at every layer.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {badges.map((item, i) => (
            <div
              key={i}
              className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
            >

              {/* Title */}
              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] whitespace-pre-line mb-[18px]">
                {item.desc}
              </p>

              {/* Image */}
              <div className="flex sm:justify-center">
                <img
                  src={item.icon}
                  alt="badge"
                  className="h-16 object-contain"
                 width={item.__w} height={item.__h} />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>

      {/* FAQ */}
      <section className="py-4 sm:py-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="text-left sm:text-center mb-8">
            <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
              FAQs
            </h2>
            <h1 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
                <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
                  <span>{item.q}</span>
                  <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mt-3">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-50 text-center">
       <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk py-1">
            Ready to put your outreach on autopilot?
          </h2>
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70 max-w-2xl mx-auto mt-2">
            Join forward-thinking enterprises that trust EICEAIM for scalable,<br className="hidden sm:inline" /> always-on lead generation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate("/products/eicerise/form?product=EiceAim")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-[#1E40AF] transition text-[18px]">
              Request a Demo
              <img src={arrowIcon} alt="arrow" width="24" height="24" />
            </button>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="border border-[#E6EAF1] bg-gray-100 rounded-[18px] py-6 px-4">
            <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">4–8 weeks</h3>
            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">to get started</p>
          </div>
          <div className="border border-[#E6EAF1] bg-gray-100 rounded-[18px] py-6 px-4">
            <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">24/7</h3>
            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">expert support</p>
          </div>
          <div className="border border-[#E6EAF1] bg-gray-100 rounded-[18px] py-6 px-4">
            <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">ISO-certified</h3>
            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] mt-2">infrastructure</p>
          </div>
        </div>
       </div>
      </section>

      <ProductCarousel slides={productSlides} />
      <ProductFooter />
    </div>
  );
}
