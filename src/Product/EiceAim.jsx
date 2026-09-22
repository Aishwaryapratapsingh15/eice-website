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
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="text-left sm:text-center py-4 px-5 bg-white">
        <div className="flex flex-col items-center">
          <img
            src={heroImg}
            alt="product"
            className="mx-auto w-[180px] h-[70px] md:w-96 lg:w-[180px]"
            width="873" height="404" />
          <img
            src={Frame1Icon}
            alt="product"
            className="mx-auto mb-6 md:w-96 lg:w-[380px]"
            width="873" height="404" />
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
          <img
            src={actionIcon}
            alt="icon"
            className="w-5 h-5 object-contain"
            width="20" height="20" />
          The Action Agent · EICE Agent Suite
        </span>

        <h1 className="text-[40px] text-[#334155] md:text-[40px] mt-6 font-bold max-w-4xl mx-auto leading-tight">
          The AI sales partner that <span className="text-[#01B0F1]">never stops selling.</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto">
          EICEAIM replaces traditional telecalling with a scalable, 24×7 AI-powered communication system — automating outreach, lead qualification, and follow-up with precision and personalization.
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button onClick={() => navigate("/products/eicerise/form?product=EiceAim")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]">
            Request a Demo
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sm:pt-4 sm:pb-10 px-4 max-w-7xl mx-auto md:px-10 lg:px-20 xl:px-40 bg-white grid md:grid-cols-3 text-center">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1 pb-2">
            <div className=" px-6 rounded-xl">
              <img src={item.icon} alt="icon" width={item.__w} height={item.__h} />
            </div>
            <h3 className="font-bold text-[24px] sm:text-xl leading-relaxed text-[#334155]">
              {item.title}
            </h3>
            <p className="text-[#64748B] font-semibold text-[16px] sm:text-md leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* WHAT IS */}
      <section className="bg-[#F4F9FF] py-4 sm:py-8 px-4 md:px-10 lg:px-20 xl:px-40 bg-[#F4F9FF]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 max-w-6xl mx-auto items-center">
          <div>
            <h2 className="text-[32px] sm:text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
              What is EICEAIM?
            </h2>
          </div>
          <div className="text-[#64748B] font-semibold mb-6 leading-8 space-y-4 sm:space-y-6">
            <p>EICEAIM is the Action Agent inside the EICE Agent Suite — an AI-driven ecosystem built to automate, optimize, and scale enterprise intelligence.</p>
            <p>It acts as your intelligent sales partner, automating outreach, lead qualification, and follow-ups with precision and personalization — replacing traditional telecalling with a scalable, always-on communication system.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES — styled like Verilock's "Verilock vs Google Authenticator" comparison table */}
      <section className="py-4 sm:py-10 px-5 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#1E293B] mb-4">
              From cold calling to consistent conversion
            </h2>
            <p className="text-[#64748B] text-[16px] sm:text-lg">
              Traditional telecalling doesn&apos;t scale, and it doesn&apos;t stay consistent. EICEAIM gives every < br />prospect the same disciplined follow-through — day or night.
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
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-[32px] sm:text-4xl text-[#334155] font-bold text-center leading-relaxed mb-4">
          Outreach, qualification, and follow-up fully automated
        </h2>
        <p className="text-[#64748B] text-center text-[16px] sm:text-lg max-w-3xl mx-auto sm:mb-10">
          EICEAIM acts as your intelligent sales partner, automating outreach, lead qualification, and follow-ups with precision and personalization.
        </p>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {architecture.map((item, i) => (
            <div key={i} className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start gap-4">
              <div className="rounded-lg flex items-start">
                <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" width="56" height="56" />
              </div>
              <h3 className="font-bold text-2xl text-[#334155] whitespace-pre-line">{item.title}</h3>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

            {/* IMPLEMENTATION */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-4 sm:mb-12">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] font-poppins">
            A proven, continuous journey
          </h2>
          <p className="text-[#64748B] mt-3 text-[16px] sm:text-lg">
            From planning your first campaign to continuously improving conversion.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, i) => (
            <div key={i} className="relative bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col gap-4 min-h-[220px]">
              <span className="absolute top-5 right-5 text-4xl font-bold text-[#CBD5E1]">{item.step}</span>
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-lg text-xl">
                <img src={item.icon} alt="icon" width="48" height="48" />
              </div>
              <h3 className="text-2xl text-[#334155] font-bold">{item.title}</h3>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* UNIFIED PLATFORM */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-[32px] sm:text-3xl font-bold text-center text-[#334155] mb-5">
          Core capabilities
        </h2>
        <h4 className="text-[22px] sm:text-xl text-[#64748B] font-semibold text-center mb-4 sm:mb-10 max-w-3xl mx-auto">
          Built to run outreach at enterprise scale
        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {platformFeatures.map((item, i) => (
            <div key={i} className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start w-auto h-auto sm:h-[300px] gap-4">
              <div className="rounded-lg flex items-start">
                <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" width="56" height="56" />
              </div>
              <h3 className="font-bold text-[24px] sm:text-2xl">{item.title}</h3>
              <p className="text-gray-500 text-[16px] sm:text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* MEASURABLE IMPACT */}
      <section className="relative py-4 sm:py-10 overflow-hidden px-4 md:px-10 lg:px-20 xl:px-40" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-14">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">Real results from AI-powered outreach</h2>
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {impactStats.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm text-center">
                <div className="flex items-center justify-center mb-3 gap-4">
                  <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" width="24" height="24" />
                
                <h3 className={`text-[40px] font-bold ${item.color}`}>{item.value}</h3></div>
                <p className="text-[#64748B] font-semibold text-[16px] sm:text-lg mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN CONTROLS */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-14">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">What that impact actually looks like</h2>
          <p className="mt-4 text-[#64748B] text-[16px] sm:text-lg">The numbers above come from three concrete operating changes.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {campaignControls.map((item, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6">
              <div className="rounded-lg flex items-start mb-3">
                <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" width="40" height="40" />
              </div>
              <h3 className="text-xl font-bold text-[#334155]">{item.title}</h3>
              <p className="text-[#64748B] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


    
      {/* SECURITY, COMPLIANCE & TRUST */}
        <section className="bg-white py-4 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-[1200px] mx-auto px-0 text-center">

        {/* Top Tag */}
        <div className="inline-flex border-2 border-[#228441] items-center gap-2 bg-[#F0FDF4] text-[#2e7d32] px-4 py-2 rounded-full text-sm font-medium mb-2">
          <img src={shieldIcon} alt="icon" className="w-4 h-4 object-contain"  width="16" height="16" /> Enterprise-Grade Security
        </div>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4">
          Security, Compliance & Trust
        </h2>

        {/* Subtitle */}
        <p className="text-[#64748B] font-semibold text-[16px] sm:text-lg mb-4 sm:mb-10 max-w-2xl mx-auto">
          Your data security is our foundation. Built with enterprise compliance at every layer.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {badges.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e2e8f0] rounded-xl py-8 px-6 shadow-sm"
            >

              {/* Title */}
              <h3 className="text-[24px] sm:text-[20px] font-bold text-[#334155] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748B] font-semibold text-[15px] whitespace-pre-line leading-relaxed mb-6">
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
      <section className="bg-[#F4F9FF] py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-10">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-[#334155] text-[16px] sm:text-lg hover:text-[#01B0F1] transition">
                  {item.q}
                  <span className="text-[#012060] text-xl leading-none">+</span>
                </summary>
                <p className="text-[#64748B] mt-3 text-[16px] sm:text-lg leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800">
            Ready to put your outreach on autopilot?
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking enterprises that trust EICEAIM for scalable, always-on lead generation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate("/products/eicerise/form?product=EiceAim")}
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-blue-800 transition text-[18px]">
              Request a Demo
              <img src={arrowIcon} alt="arrow" width="24" height="24" />
            </button>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="border border-gray-200 bg-gray-100 rounded-xl py-6 px-4">
            <h3 className="text-xl font-bold text-gray-600">4–8 weeks</h3>
            <p className="mt-2 text-gray-700 text-lg">to get started</p>
          </div>
          <div className="border border-gray-200 bg-gray-100 rounded-xl py-6 px-4">
            <h3 className="text-xl font-bold text-gray-600">24/7</h3>
            <p className="mt-2 text-gray-700 text-lg">expert support</p>
          </div>
          <div className="border border-gray-200 bg-gray-100 rounded-xl py-6 px-4">
            <h3 className="text-xl font-bold text-gray-600">ISO-certified</h3>
            <p className="mt-2 text-gray-700 text-lg">infrastructure</p>
          </div>
        </div>
      </section>

      <ProductCarousel slides={productSlides} />
      <ProductFooter />
    </div>
  );
}
