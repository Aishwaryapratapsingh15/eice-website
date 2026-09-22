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
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/ask-eice-hero.png";
// TODO: replace with the real AskEICE chat-panel screenshot/mockup image
const contextPanelImg = "https://placehold.co/700x500/EFF6FF/012060?text=Chat+Panel+Image";
const bgImage = "https://placehold.co/1625x371/EFF6FF/012060?text=Banner+Image";
const bgImage2 = "https://d3r43jacxrwsrp.cloudfront.net/common/Background.png";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const shieldIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/shield_02.svg";
const checkIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Check_all.svg";
const ingestIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Ingest.svg";
const indexIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Index.svg";
const askIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/ask.svg";
const answerIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/answer.svg";
const tickIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/tick.svg";
const nilIcon = "https://d3r43jacxrwsrp.cloudfront.net/verilock/nil.svg";

const ragIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/RAG-based search.svg";
const whatsappIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/WhatsApp-native.svg";
const dataStaysInHouseIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Data-stays-in-house.svg";
const pdfIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/PDF-Documents.svg";
const scannedImagesIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Scanned-Images.svg";
const ocrIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/OCR-Text-Extraction.svg";
const officeFilesIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Office-Files.svg";
const meetUsersIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Meet-users-where-they-are.svg";
const instantAnswersIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Instant-answers-anytime.svg";
const worksForEveryoneIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Works-for-everyone.svg";
const naturalConversationsIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Natural-conversations.svg";
const reduceHRAdminLoadIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Reduce-HR-admin-load.svg";
const accessManagementIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Access-management.svg";
const multiOrganizationSupportIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Multi-organization-support.svg";
const roleBasedAccessControlIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Role-based-access-control.svg";
const governedAccessPointsIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/Governed-access-points.svg";
const NintyIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/90.svg";
const TwentyIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/20.svg";
const ofdatastaysIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/of-data-stays-within-your-own-infrastructure.svg";
const validationLayersIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/validation-layers-for-document-compliance.svg";
const contextKeywordsIcon = "https://d3r43jacxrwsrp.cloudfront.net/ask-eice/context-keywords.png";
const cmmiImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/CMMI.png";
const isoImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/ISO.png";
const iecImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/IEC.png";
const ismsImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/ISMS.png"; 
const knowledgeAgentIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Knowledge-agent.svg";


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
  { icon: ragIcon, title: "RAG-based search", desc: "Semantic, context-aware answers", __w: 42, __h: 42 },
  { icon: whatsappIcon, title: "WhatsApp-native", desc: "No new app, no login", __w: 42, __h: 42 },
  { icon: dataStaysInHouseIcon, title: "Data stays in-house", desc: "100% within your infrastructure", __w: 42, __h: 42 },
];

const challenges = [
  { oldWay: "Manual telecalling, limited to business hours", newWay: "24×7 AI-powered outreach, always on" },
  { oldWay: "Follow-ups depend on rep memory and bandwidth", newWay: "Dynamic follow-up logic that adapts to every prospect automatically" },
  { oldWay: "Lead scoring done by hand, after the fact", newWay: "Automated AI-driven lead generation and qualification, in real time" },
  { oldWay: "Campaign performance is hard to see until month-end", newWay: "Comprehensive analytics and reporting on every call and interaction" },
];

const architecture = [
  { icon: pdfIcon, title: "PDF Documents", desc: "" },
  { icon: scannedImagesIcon, title: "Scanned Images", desc: "" },
  { icon: ocrIcon, title: "OCR Text Extraction", desc: "" },
  { icon: officeFilesIcon, title: "Office Files", desc: "" },
];

const ingestionCallouts = [
  { title: "No manual uploads", desc: "Documents flow in automatically from your existing systems." },
  { title: "No third-party exposure", desc: "Every file stays inside your own secure infrastructure." },
  { title: "Built-in OCR", desc: "Scanned images and image-based PDFs become fully searchable text." },
];

const accessPills = ["Access anywhere: Web Portal", "WhatsApp — Mobile & Desktop"];

const platformFeatures = [
  { icon: meetUsersIcon, title: "Meet users where they are", desc: "500M+ WhatsApp users in India. No new app, no login." },
  { icon: instantAnswersIcon, title: "Instant answers, anytime", desc: "24×7 availability across HR, policy, and operational queries." },
  { icon: worksForEveryoneIcon, title: "Works for everyone", desc: "Office staff, managers, and field technicians alike." },
  { icon: naturalConversationsIcon, title: "Natural conversations", desc: "Ask in plain language and receive source-backed answers instantly." },
  { icon: reduceHRAdminLoadIcon, title: "Reduce HR & admin load", desc: "Automate repetitive employee questions." },
  { icon: accessManagementIcon, title: "Access management", desc: "Whitelist users and control access from a central dashboard." },
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
  { icon: ingestIcon, step: "01", title: "Ingest", desc: "Automatically ingest documents from your existing systems." },
  { icon: indexIcon, step: "02", title: "Index", desc: "Automatically index documents so they’re searchable across your organization." },
  { icon: askIcon, step: "03", title: "Ask", desc: "Ask questions in plain language and understand context, not just keywords." },
  { icon: answerIcon, step: "04", title: "Answer", desc: "Get instant, verified answers with full source traceability." },
];

const governanceCards = [
  { icon: multiOrganizationSupportIcon, title: "Multi-organization support", desc: "Isolated data, models, and permission sets for each organization — all under one platform." },
  { icon: roleBasedAccessControlIcon, title: "Role-based access control", desc: "Superadmin to end-user tiers, with granular document-level control." },
  { icon: governedAccessPointsIcon, title: "Governed access points", desc: "Every access point controlled — from superadmins down to individual documents." },
];

const impactStats = [
  { icon: NintyIcon, value: "97%", color: "text-orange-500",label: "reduction in knowledge discovery time" },
  { icon: TwentyIcon, value: "~25%", color: "text-purple-500", label: "reduction in document search time" },
  { icon: validationLayersIcon, value: "100%", color: "text-green-500", label: "of data stays within your own infrastructure" },
  { icon: ofdatastaysIcon, value: "Up to 4", color: "text-blue-500", label: "validation layers for document compliance" },
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
        <div className="flex flex-col items-center">
         <img
            src={heroImg}
            alt="product"
            className="mx-auto w-[250px] h-[70px] md:w-96 lg:w-[280px] lg:h-[80px]"
            width="873" height="404" />
          <img
            src={Frame2Icon}
            alt="product"
            className="mx-auto mb-6 md:w-96 lg:w-[380px]"
            width="873" height="404" />
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
          <img
            src={knowledgeAgentIcon}
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
              What is AskEICE?
            </h2>
          </div>
          <div className="text-[#64748B] font-semibold leading-8 space-y-4 sm:space-y-6">
            <p>AskEICE is the Knowledge Agent inside the EICE Agent Suite — an AI-driven ecosystem built to automate, optimize, and scale enterprise intelligence.</p>
            <p>It empowers your teams to ask natural-language questions and receive contextual, verified answers instantly, turning scattered documents into a single, trustworthy source of truth.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
          <section className="py-4 sm:py-10 px-5 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#1E293B] mb-4">
              From searching for answers to simply asking for them
            </h2>
            <p className="text-[#64748B] text-[16px] sm:text-lg">
             Enterprise knowledge is scattered, uncontrolled, and hard to trust. AskEICE empowers your teams to ask natural-language questions and receive contextual, verified answers — instantly.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm overflow-x-auto">
            <div className="grid grid-cols-2 bg-white text-sm font-semibold tracking-wide">
              <div className="p-5 text-left text-[#1E293B]">The Old Way</div>
              <div className="p-5 text-left text-[#1E293B]">With AskEICE</div>
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
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {ingestionCallouts.map((item, i) => (
            <div key={i} className="border-t-2 border-[#01B0F1] pt-5">
              <h3 className="text-[16px] font-bold text-[#334155]">{item.title}</h3>
              <p className="text-[#64748B] mt-2 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center sm:mt-6">
          {accessPills.map((p) => (
            <span key={p} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E2E8F0] bg-white text-[#334155] text-sm font-semibold">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#01B0F1" strokeWidth="2.4"><circle cx="12" cy="12" r="10" /></svg>
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* CONTEXT, NOT JUST KEYWORDS */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <p className="text-[#01B0F1] text-xs font-bold tracking-[0.15em] uppercase mb-3">RAG-based semantic search</p>
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4">Context, not just keywords</h2>
            <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed mb-8">
              Powered by retrieval-augmented generation, AskEICE understands what you mean — not just what you typed. Every answer comes with full source traceability.
            </p>
            <div className="bg-[#F4F7FD] py-4 px-8 rounded-full flex items-center gap-2 w-full max-w-[450px]">
            <h3 className="text-[56px] sm:text-[36px] font-extrabold text-[#012060] leading-none">97%</h3>
            <p className="text-[#64748B] text-[18px] mt-2">Reduction in knowledge discovery time</p></div>
          </div>
          <div>
            <img src={contextKeywordsIcon} alt="AskEICE chat panel" className="w-full rounded-2xl" width="700" height="600" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-14">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#334155] mb-2">Full traceability</h3>
            <p className="text-[#64748B] leading-relaxed">Every answer links back to its exact source document and page.</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#334155] mb-2">Context, not just keywords</h3>
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

      {/* BRING YOUR OWN MODEL */}
      <section className="bg-[#F4F9FF] py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:gap-10 items-center">
            <div>
            <h2 className="text-[32px] sm:text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
              Model-agnostic by design
            </h2>
            <p className="text-[#64748B] text-[16px] sm:text-lg mb-6">
              Choose from industry-leading AI models, configured per organization or use case. Complete flexibility, zero vendor lock-in.
            </p>
            <Bullets items={byomPoints} />
          </div>
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
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col items-start gap-3">
              <div className="rounded-lg flex items-start">
                <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" width="56" height="56" />
              </div>
              <div>
                <h3 className="text-[24px] sm:text-xl font-semibold text-[#334155]">{item.title}</h3>
                <p className="text-[#64748B] mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    {/* MEASURABLE IMPACT */}
      <section className="relative py-4 sm:py-10 overflow-hidden px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-14">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">Real results from AI-powered knowledge discovery</h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-4 shadow-sm text-center">
                <div className="flex sm:justify-center mb-3">
                  <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" width="24" height="24" />
                </div>
                <h3 className={`text-[40px] font-bold ${item.color}`}>{item.value}</h3>
                <p className="text-[#64748B] font-semibold text-[16px] mt-2">{item.label}</p>
              </div>
            ))}
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
           From document chaos to instant clarity — without your data ever leaving home..
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


      {/* WHY EICE TECHNOLOGY */}
      {/* <section className="bg-white py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
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
      </section> */}

    
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
      <section className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-gray-50 text-center">
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

      <ProductCarousel slides={productSlides} />
      <ProductFooter />
    </div>
  );
}
