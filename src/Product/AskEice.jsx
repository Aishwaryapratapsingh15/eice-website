"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductFooter from "./ProductFooter";
import { Link, useNavigate } from "@/nextNavigation";

// TODO: replace every placeholder image below with the real AskEICE asset (same width/height)
const Frame2Icon = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/Frame2.png";
const placeholderIconSm = "https://placehold.co/42x42/E6F4FD/012060?text=Icon";
const placeholderIcon = "https://placehold.co/56x56/E6F4FD/012060?text=Icon";
const heroImg = "https://placehold.co/873x404/EFF6FF/012060?text=Hero+Image";
const bgImage = "https://placehold.co/1625x371/EFF6FF/012060?text=Banner+Image";
const bgImage2 = "https://d3r43jacxrwsrp.cloudfront.net/common/Background.png";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const shieldIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/shield_02.svg";
const checkIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Check_all.svg";
const planIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Plan.svg";
const deployIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Deploy.svg";
const scaleIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Scale.svg";
const optimizeIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Optimize.svg";

const features = [
  { icon: placeholderIconSm, title: "RAG-based search", desc: "Semantic, context-aware answers", __w: 42, __h: 42 },
  { icon: placeholderIconSm, title: "WhatsApp-native", desc: "No new app, no login", __w: 42, __h: 42 },
  { icon: placeholderIconSm, title: "Data stays in-house", desc: "100% within your infrastructure", __w: 42, __h: 42 },
];

const challenges = [
  { icon: placeholderIcon, title: "Manual Document Search", desc: "Manual document search" },
  { icon: placeholderIcon, title: "Hours Spent Digging", desc: "Hours spent digging through folders, PDFs, and shared drives" },
  { icon: placeholderIcon, title: "Knowledge Locked Away", desc: "Knowledge locked away with whoever wrote the document" },
  { icon: placeholderIcon, title: "Inconsistent Answers", desc: "Inconsistent answers depending on who you ask" },
];

const architecture = [
  { icon: placeholderIcon, title: "PDF Documents", desc: "" },
  { icon: placeholderIcon, title: "Scanned Images", desc: "" },
  { icon: placeholderIcon, title: "OCR Text Extraction", desc: "" },
  { icon: placeholderIcon, title: "Office Files", desc: "" },
];

const ingestionCallouts = [
  { icon: placeholderIcon, title: "No manual uploads", desc: "Documents flow in automatically from your existing systems." },
  { icon: placeholderIcon, title: "No third-party exposure", desc: "Every file stays inside your own secure infrastructure." },
  { icon: placeholderIcon, title: "Built-in OCR", desc: "Scanned images and image-based PDFs become fully searchable text." },
];

const accessPills = ["Access anywhere: Web Portal", "WhatsApp — Mobile & Desktop"];

const platformFeatures = [
  { icon: placeholderIcon, title: "Meet users where they are", desc: "500M+ WhatsApp users in India. No new app, no login." },
  { icon: placeholderIcon, title: "Instant answers, anytime", desc: "24×7 availability across HR, policy, and operational queries." },
  { icon: placeholderIcon, title: "Works for everyone", desc: "Office staff, managers, and field technicians alike." },
  { icon: placeholderIcon, title: "Natural conversations", desc: "Ask in plain language and receive source-backed answers instantly." },
  { icon: placeholderIcon, title: "Reduce HR & admin load", desc: "Automate repetitive employee questions." },
  { icon: placeholderIcon, title: "Access management", desc: "Whitelist users and control access from a central dashboard." },
];

const byomModels = [
  { org: "Finance Org", model: "Model A" },
  { org: "Operations Org", model: "Model B" },
  { org: "Legal Org", model: "Model C" },
];

const byomPoints = [
  "Configure different models per organization or use case",
  "Swap providers as your needs evolve — no platform migration",
  "Avoid being locked into a single AI vendor's roadmap",
];

const steps = [
  { icon: planIcon, step: "01", title: "Plan", desc: "Define goals, identify data sources, and map AI opportunities." },
  { icon: deployIcon, step: "02", title: "Deploy", desc: "Configure agents, integrate systems, and launch operations." },
  { icon: scaleIcon, step: "03", title: "Scale", desc: "Expand across teams and automate more workflows." },
  { icon: optimizeIcon, step: "04", title: "Optimize", desc: "Analyze results, refine models, and enhance performance." },
];

const governanceCards = [
  { icon: placeholderIcon, title: "Multi-organization support", desc: "Isolated data, models, and permission sets for each organization — all under one platform." },
  { icon: placeholderIcon, title: "Role-based access control", desc: "Superadmin to end-user tiers, with granular document-level control." },
  { icon: placeholderIcon, title: "Governed access points", desc: "Every access point controlled — from superadmins down to individual documents." },
];

const impactStats = [
  { icon: placeholderIconSm, value: "97%", label: "reduction in knowledge discovery time" },
  { icon: placeholderIconSm, value: "~25%", label: "reduction in document search time" },
  { icon: placeholderIconSm, value: "100%", label: "of data stays within your own infrastructure" },
  { icon: placeholderIconSm, value: "Up to 4", label: "validation layers for document compliance" },
];

const microStats = [
  { value: "24×7", label: "Employee self-service" },
  { value: "3", label: "Supported file formats (PDF, DOCX, DOC)" },
  { value: "3", label: "OCR engines available" },
  { value: "3", label: "Configurable extraction modes" },
];

const flowSteps = ["Ingest", "Index", "Ask", "Answer"];

const trustBadges = [
  { code: "CMMI Level 3", desc: "Process maturity & quality assurance" },
  { code: "ISO 9001:2000", desc: "Quality management systems" },
  { code: "ISO 27001", desc: "Information security management" },
  { code: "ISO/IEC 20000", desc: "IT service management standard" },
];

const trustedClients = ["Halliburton", "Tata", "Norton Rose Fulbright", "P&G", "IndianOil", "SLB", "GAIL (India)", "ADNOC", "Hexaware", "WAPCOS", "JUSCO", "+ 15 more"];

const faqs = [
  { q: "What types of documents can AskEICE ingest and search?", a: "AskEICE ingests PDFs, scanned images, OCR-processed files, and standard office documents. Everything is indexed automatically as it's added — no manual uploads or reformatting required." },
  { q: "Does our document data ever leave our own infrastructure?", a: "No. AskEICE is deployed entirely within your own environment. There is no third-party exposure — every file, index, and query stays inside your infrastructure." },
  { q: "How is this different from a regular keyword search tool like SharePoint search?", a: "Traditional search matches literal keywords. AskEICE uses retrieval-augmented generation (RAG), so it understands intent and context — an employee can ask a question in plain English and get a direct answer with the exact source document and page cited, instead of a list of files that might be relevant." },
  { q: "Do employees need to download an app or create a new login?", a: "No. AskEICE is WhatsApp-native, so employees access it through an app they already use daily — no new software, no login, no training." },
  { q: "Are we locked into one AI provider?", a: "No. AskEICE is model-agnostic — you can configure different AI models per organization or use case, and swap providers later without migrating platforms." },
];

const Bullets = ({ items }) => (
  <ul className="space-y-3 text-[#64748B]">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <img src={checkIcon} alt="check" className="w-5 h-5 mt-0.5" width="20" height="20" />
        {item}
      </li>
    ))}
  </ul>
);

export default function AskEice() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="text-left sm:text-center py-4 px-5 bg-white">
        <div className="mt-5 flex justify-center">
          <img
            src={heroImg}
            alt="product"
            className="mx-auto mb-6 md:w-96 lg:w-[480px]"
            width="873" height="404" />
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
          <img
            src={shieldIcon}
            alt="icon"
            className="w-5 h-5 object-contain"
            width="20" height="20" />
          The Knowledge Agent
        </span>

        <h1 className="text-[40px] text-[#334155] md:text-[40px] mt-6 font-bold max-w-4xl mx-auto leading-tight">
          Turn your organization&apos;s documents into <span className="text-[#01B0F1]">instant, verified answers</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto">
          AskEICE brings retrieval-augmented AI to your enterprise knowledge base — searchable from a web portal or straight from WhatsApp, entirely within your own secure infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button onClick={() => navigate("/products/eicerise/form?product=AskEICE")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]">
            Request a Demo
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-4 sm:pb-10 px-4 max-w-7xl mx-auto md:px-10 lg:px-20 xl:px-40 bg-white grid md:grid-cols-3 text-center">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
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
      <section className="bg-[#F4F9FF] py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-[#F4F9FF]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 max-w-6xl mx-auto items-center">
          <div>
            <h2 className="text-[32px] sm:text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
              What is AskEICE?
            </h2>
          </div>
          <div className="text-[#64748B] font-semibold mb-6 leading-8 space-y-4 sm:space-y-6">
            <p>AskEICE is the Knowledge Agent inside the EICE Agent Suite — an AI-driven ecosystem built to automate, optimize, and scale enterprise intelligence.</p>
            <p>It empowers your teams to ask natural-language questions and receive contextual, verified answers instantly, turning scattered documents into a single, trustworthy source of truth.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <h1 className="text-[32px] sm:text-4xl text-[#334155] font-bold text-center leading-relaxed mb-5">
          From searching for answers to simply asking for them
        </h1>
        <h4 className="text-[22px] sm:text-lg md:text-xl text-[#64748B] text-center mb-4 sm:mb-12 max-w-2xl mx-auto">
          Enterprise knowledge is scattered, uncontrolled, and hard to trust. AskEICE empowers your teams to ask natural-language questions and receive contextual, verified answers — instantly.
        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {challenges.map((item, i) => (
            <div key={i} className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start gap-4">
              <div className="rounded-lg flex items-start">
                <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" width="56" height="56" />
              </div>
              <h3 className="font-bold text-2xl">{item.title}</h3>
              <p className="text-gray-500 text-[16px] sm:text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE — Secure Document Ingestion formats */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-[32px] sm:text-4xl text-[#334155] font-bold text-center leading-relaxed mb-4 sm:mb-10">
          Point it at your documents. It takes care of the rest.
        </h2>
        <p className="text-[#64748B] text-center text-[16px] sm:text-lg max-w-2xl mx-auto -mt-6 mb-4 sm:mb-10">
          PDFs, scanned images, and OCR-processed files are ingested and indexed automatically — entirely within your own environment.
        </p>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {architecture.map((item, i) => (
            <div key={i} className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start gap-4">
              <div className="rounded-lg flex items-start">
                <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" width="56" height="56" />
              </div>
              <h3 className="font-bold text-2xl text-[#334155] whitespace-pre-line">{item.title}</h3>
              {item.desc && <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">{item.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* INGESTION CALLOUTS */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {ingestionCallouts.map((item, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6">
              <div className="rounded-lg flex items-start mb-3">
                <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" width="40" height="40" />
              </div>
              <h3 className="text-xl font-bold text-[#334155]">{item.title}</h3>
              <p className="text-[#64748B] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-4 sm:mt-10">
          {accessPills.map((p) => (
            <span key={p} className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-[#64748B] text-sm font-medium">{p}</span>
          ))}
        </div>
      </section>

      {/* IMAGE + TEXT SECTION */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={bgImage}
            alt="platform"
            className="w-full rounded-xl"
            width="1625" height="371" />
          <p className="mt-4 text-gray-400 text-xl max-w-3xl mx-auto">
            [Banner image caption]
          </p>
        </div>
      </section>

      {/* WHY CHOOSE — Context, not just keywords */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-14">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">
            Context, not just keywords
          </h2>
          <p className="mt-4 text-[#64748B] text-[16px] sm:text-lg font-semibold max-w-2xl mx-auto">
            Powered by retrieval-augmented generation, AskEICE understands what you mean — not just what you typed. Every answer comes with full source traceability.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-lg">
                <img src={placeholderIconSm} alt="icon" width="42" height="42" />
              </div>
              <h3 className="text-2xl font-bold text-[#334155]">Full traceability</h3>
            </div>
            <p className="text-[#64748B] leading-relaxed">Every answer links back to its exact source document and page.</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-lg">
                <img src={placeholderIconSm} alt="icon" width="42" height="42" />
              </div>
              <h3 className="text-2xl font-bold text-[#334155]">Context, not just keywords</h3>
            </div>
            <p className="text-[#64748B] leading-relaxed">Understands intent and meaning across your full document set.</p>
          </div>
        </div>
      </section>

      {/* UNIFIED PLATFORM — Enterprise knowledge on WhatsApp */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-[32px] sm:text-3xl font-bold text-center text-[#334155] mb-5">
          Meet employees where they already are
        </h2>
        <h4 className="text-[22px] sm:text-xl text-[#64748B] font-semibold text-center mb-4 sm:mb-10 max-w-3xl mx-auto">
          Enterprise knowledge on WhatsApp
        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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

      {/* BRING YOUR OWN MODEL */}
      <section className="bg-[#F4F9FF] py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:gap-10 items-center">
          <div className="space-y-3">
            {byomModels.map((item) => (
              <div key={item.org} className="flex items-center justify-between gap-4 border border-[#E2E8F0] rounded-xl bg-white p-4">
                <div>
                  <p className="font-bold text-[#334155] text-[16px]">{item.org}</p>
                  <p className="text-[#64748B] text-sm mt-1">{item.model}</p>
                </div>
                <span className="flex items-center gap-2 text-xs font-bold text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Active
                </span>
              </div>
            ))}
            <p className="text-[#64748B] text-sm mt-2">Independently selected and configured — switch anytime.</p>
          </div>
          <div>
            <h2 className="text-[32px] sm:text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
              Model-agnostic by design
            </h2>
            <p className="text-[#64748B] text-[16px] sm:text-lg mb-6">
              Choose from industry-leading AI models, configured per organization or use case. Complete flexibility, zero vendor lock-in.
            </p>
            <Bullets items={byomPoints} />
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-4 sm:mb-12">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] font-poppins">
            A proven, continuous journey
          </h2>
          <p className="text-[#64748B] mt-3 text-[16px] sm:text-lg">
            From planning your rollout to continuously refining accuracy.
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

      {/* GOVERNANCE — Enterprise grade, multi-org isolation */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-r from-[#eef4fb] to-[#e6f0fa] bg-cover bg-center font-poppins" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-14">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">
            Multi-organization isolation, under one platform
          </h2>
          <p className="mt-4 text-[#64748B] text-[16px] sm:text-lg">
            Granular access control and completely isolated environments for every organization you serve.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {governanceCards.map((item, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex items-start gap-3">
              <div className="py-1 rounded-lg">
                <img src={item.icon} alt="icon" className="w-14 h-14" width="56" height="56" />
              </div>
              <div>
                <h3 className="text-[24px] sm:text-xl font-semibold text-[#334155]">{item.title}</h3>
                <p className="text-[#64748B] mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-10">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">
            [Deployment section heading]
          </h2>
          <p className="mt-4 text-[#64748B] text-[16px] sm:text-lg">
            [Deployment section subtext]
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#EFFAFF] border border-[#E2E8F0] rounded-xl p-4 sm:p-8 text-left sm:text-center">
            <div className="w-14 h-14 mx-0 sm:mx-auto flex items-center justify-center rounded-lg mb-6">
              <img src={placeholderIcon} alt="icon" width="56" height="56" />
            </div>
            <h3 className="text-[24px] sm:text-xl font-bold text-[#334155]">[Deployment option 1 title]</h3>
            <p className="text-[#64748B] mt-2 mb-6">[Deployment option 1 description]</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 1, point 1]
              </li>
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 1, point 2]
              </li>
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 1, point 3]
              </li>
            </ul>
          </div>

          <div className="bg-[#EFFAFF] border border-[#E2E8F0] rounded-xl p-4 sm:p-8 text-left sm:text-center">
            <div className="w-14 h-14 mx-0 sm:mx-auto flex items-center justify-center rounded-lg mb-6">
              <img src={placeholderIcon} alt="icon" width="56" height="56" />
            </div>
            <h3 className="text-[24px] sm:text-xl font-semibold text-gray-800">[Deployment option 2 title]</h3>
            <p className="text-gray-500 mt-2 mb-6">[Deployment option 2 description]</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 2, point 1]
              </li>
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 2, point 2]
              </li>
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 2, point 3]
              </li>
            </ul>
          </div>

          <div className="bg-[#EFFAFF] border border-[#E2E8F0] rounded-xl p-4 sm:p-8 text-left sm:text-center">
            <div className="w-14 h-14 mx-0 sm:mx-auto flex items-center justify-center rounded-lg mb-6">
              <img src={placeholderIcon} alt="icon" width="56" height="56" />
            </div>
            <h3 className="text-[24px] sm:text-xl font-semibold text-gray-800">[Deployment option 3 title]</h3>
            <p className="text-gray-500 mt-2 mb-6">[Deployment option 3 description]</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 3, point 1]
              </li>
              <li className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" width="20" height="20" />
                [Deployment option 3, point 2]
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEASURABLE IMPACT */}
      <section className="relative py-4 sm:py-10 overflow-hidden px-4 md:px-10 lg:px-20 xl:px-40" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-14">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">Real results from AI-powered knowledge discovery</h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm text-center">
                <div className="flex justify-center mb-3">
                  <img src={item.icon} alt="icon" className="w-8 h-8 object-contain" width="24" height="24" />
                </div>
                <h3 className="text-[40px] font-bold text-[#01B0F1]">{item.value}</h3>
                <p className="text-[#64748B] font-semibold text-[16px] mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-4 sm:mt-10 pt-4 sm:pt-10 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {microStats.map((item, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-[#334155]">{item.value}</p>
                <p className="text-[#64748B] text-[16px] mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-4 sm:mt-10 flex items-center justify-between gap-2 sm:gap-4">
            {flowSteps.map((label, i) => (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#EFFAFF] border border-[#E2E8F0] flex items-center justify-center font-bold text-[#012060]">{i + 1}</div>
                  <p className="text-[#334155] font-bold text-[16px]">{label}</p>
                </div>
                {i < flowSteps.length - 1 && <span className="text-[#CBD5E1] text-2xl">→</span>}
              </React.Fragment>
            ))}
          </div>

          <p className="text-center mt-4 sm:mt-10 text-[#64748B] text-[16px] sm:text-lg">From document chaos to instant clarity — without your data ever leaving home.</p>
        </div>
      </section>

      {/* WHY EICE TECHNOLOGY */}
      <section className="bg-white py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4 sm:mb-10">A proven enterprise software partner — trusted since 2010</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {trustBadges.map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl py-6 px-4 text-center shadow-sm">
                <p className="font-bold text-sm text-[#334155]">{item.code}</p>
                <p className="text-[#64748B] text-xs mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4 sm:mt-10">
            {trustedClients.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-[#64748B] text-sm font-medium">{c}</span>
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
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-[#334155] text-[16px] sm:text-lg">
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
      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-gray-50 text-center mb-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800">
            Ready to turn your documents into instant answers?
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking enterprises that trust AskEICE for secure, verified, and instant knowledge discovery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate("/products/eicerise/form?product=AskEICE")}
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

      {/* CROSS PRODUCT */}
      <section className="bg-white py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold tracking-wide text-[#64748B] uppercase mb-2">Our Products</p>
          <h2 className="text-center text-2xl font-bold text-[#334155] mb-6">Part of the EICE Agent Suite</h2>
          <Link href="/products/eice-aim" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#E2E8F0] rounded-xl p-6 hover:border-[#01B0F1] transition">
            <div>
              <p className="font-bold text-[#012060] text-lg">EICEAIM</p>
              <p className="text-[#64748B] text-sm mt-1">The Action Agent · Outreach • Qualification • Follow-up</p>
            </div>
            <span className="text-[#01B0F1] font-bold text-sm whitespace-nowrap">Explore EICEAIM →</span>
          </Link>
        </div>
      </section>

      <ProductCarousel slides={productSlides} />
      <ProductFooter />
    </div>
  );
}
