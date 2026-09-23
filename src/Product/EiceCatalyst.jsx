"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "./ProductFooter";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const catalystHeroImg = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/eice_catalyst_hero.png";
const discoverIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/Discover.svg";
const defineIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/Define.svg";
const designIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/design.svg";
const productDevelopmentIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/product-development.svg";
const deliverIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-catalyst/deliver.svg";

const flow = ["Discover", "Engineer", "Automate", "Modernize", "Govern", "Measure"];

const capabilities = [
  {
    num: "01 / ENGINEERING",
    title: "AI-Enabled Engineering",
    tagline: "Build faster, with less friction, at every stage of the SDLC.",
    desc: "Applying AI across design, development, testing, documentation, and maintenance — including architecture recommendations, pair-programming, code generation, self-healing test suites, AI-generated documentation, and predictive code-health monitoring.",
    value: "Faster delivery cycles, higher developer productivity, better code quality, and less repetitive effort.",
  },
  {
    num: "02 / AGENTIC AI",
    title: "Agentic Delivery",
    tagline: "Digital teammates that plan, reason, and get work done.",
    desc: "Building and deploying intelligent agents that execute multi-step business and technology workflows, with autonomy calibrated to the task and human-in-the-loop checkpoints where oversight matters.",
    value: "End-to-end workflow automation that compresses cycle time without a linear increase in headcount.",
  },
  {
    num: "03 / MODERNIZATION",
    title: "AI-Powered Modernization",
    tagline: "Turn legacy complexity into a modern, cloud-ready estate.",
    desc: "AI-driven legacy code discovery, dependency mapping, automated comprehension and documentation, assisted refactoring and migration, cloud modernization acceleration, and technical debt quantification.",
    value: "Lower modernization effort and cost, reduced technical debt, and a faster path to modern architectures.",
  },
  {
    num: "04 / ENTERPRISE AI",
    title: "Enterprise AI Solutions",
    tagline: "Copilots and agents that know your business.",
    desc: "Designing copilots, knowledge assistants, RAG solutions, and AI agents integrated with enterprise platforms and data for contextual, secure decision support grounded in the organization's own systems.",
    value: "Secure, context-aware enterprise AI grounded in your data, systems, and processes.",
  },
  {
    num: "05 / TRUST",
    title: "Responsible AI & Governance",
    tagline: "AI you can trust, at scale, with proof to show for it.",
    desc: "Embedding security, privacy, compliance, observability, and human oversight into AI adoption — with guardrails, regulatory frameworks, model and agent observability, fairness checks, and governance controls.",
    value: "Controlled, compliant, trusted AI adoption that reduces organizational, operational, and regulatory risk.",
  },
  {
    num: "06 / VALUE",
    title: "AI Value Measurement",
    tagline: "Prove the return, not just the rollout.",
    desc: "Measuring productivity, quality, adoption, risk, and business outcomes with dashboards, defect-impact tracking, AI contribution and ROI attribution models, risk scorecards, and a continuous-improvement feedback loop.",
    value: "Measurable ROI, transparent reporting, and continuous improvement tied to business outcomes.",
    proof:
      "A structured, task-level record of AI tool usage and effort savings is already delivered for a real, currently-operating enterprise client.",
  },
];

const bullets = [
  {
    title: "Accelerate everyday engineering",
    desc: "Bring AI into the SDLC instead of limiting it to isolated experiments.",
  },
  {
    title: "Modernize with evidence",
    desc: "Understand dependencies and technical debt before transformation work begins.",
  },
  {
    title: "Deploy trustworthy enterprise AI",
    desc: "Ground AI in organizational data and systems with governance active from the start.",
  },
  {
    title: "Prove business value",
    desc: "Replace anecdotal productivity claims with measurable evidence and continuous feedback.",
  },
];

const steps = [
  { step: "01", title: "Discover", desc: "Assess which capabilities matter most for your AI maturity and technology estate.", icon: discoverIcon },
  { step: "02", title: "Define", desc: "Scope a starting point — typically one or two capabilities, not all six.", icon: defineIcon },
  { step: "03", title: "Design", desc: "Architect the specific engineering, governance, or modernization approach.", icon: designIcon },
  { step: "04", title: "Development", desc: "Build and validate against real systems and real data, not a demo environment.", icon: productDevelopmentIcon },
  { step: "05", title: "Delivery", desc: "Deploy with governance and measurement active from day one.", icon: deliverIcon },
];

const whyEice = [
  {
    title: "Certified practices",
    desc: "CMMI Level 3, ISO 9001:2000, ISO 27001, and ISO/IEC 20000 certified — engineering and security practices independently verified, not self-declared.",
  },
  {
    title: "On-time delivery",
    desc: "Agile sprint planning keeps delivery structured and aligned to project schedules.",
  },
  {
    title: "Dedicated teams",
    desc: "Your own developers, designers, and PM — not outsourced generalists.",
  },
  {
    title: "Post-launch support",
    desc: "Ongoing monitoring, updates, and support after go-live, included.",
  },
];

const faqs = [
  {
    q: "Do we need to adopt all six capabilities, or can we start with one?",
    a: "Most organizations start with one or two — typically AI-Enabled Engineering or AI Value Measurement — and expand as the platform proves value.",
  },
  {
    q: "How is this different from your individual AI services pages?",
    a: "Those pages describe standalone capabilities you can engage separately. EICE Catalyst is the integrated version — one platform, one governance layer, one measurement framework spanning all of them together.",
  },
  {
    q: "Is Responsible AI & Governance a separate add-on, or built in from the start?",
    a: "Built in from the start — governance and value measurement are designed as core layers of the platform, not features bolted on after adoption.",
  },
  {
    q: "What does “AI-Powered Modernization” actually involve for a legacy system?",
    a: "Discovery and dependency mapping first, then a prioritized, quantified view of technical debt before any refactoring or migration work begins.",
  },
  {
    q: "Can this integrate with enterprise platforms we already run, like SAP or Salesforce?",
    a: "Yes — Enterprise AI Solutions is specifically designed to integrate with core enterprise and data platforms rather than operating as a disconnected AI layer.",
  },
];

export default function EiceCatalystPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-poppins">
      {/* HERO */}
      <section className="text-left sm:text-center py-4 px-5 bg-white">
        <div className="mt-5 flex justify-center">
          <img
            src={catalystHeroImg}
            alt="EICE Catalyst — AI Engineering, Agentic Delivery, Modernization, Enterprise AI, Governance, and Value Measurement"
            className="mx-auto mb-6 w-full max-w-xl"
            width="1321"
            height="1191"
          />
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
          Integrated AI Platform
        </span>

        <h1 className="text-[40px] text-[#334155] md:text-[40px] mt-6 font-bold max-w-4xl mx-auto leading-tight">
          From AI Adoption to <span className="text-[#01B0F1]">AI-Driven Engineering</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto">
          EICE Catalyst is an integrated AI platform that helps organizations build faster,
          modernize smarter, automate intelligently, and prove the value of every AI
          investment — one connected platform, not six disconnected services.
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button
            onClick={() => navigate("/products/eicerise/form?product=EICE%20Catalyst")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]"
          >
            Request a Demo
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4">
            One connected path from trying AI to embedding it.
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
            Most enterprise AI initiatives fail the same way: a pilot proves a point, then
            the value quietly evaporates because there was never a connected path from
            &ldquo;we tried AI&rdquo; to &ldquo;AI is embedded in how we actually build and
            run software.&rdquo;
          </p>
          <p className="mt-4 text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
            EICE Catalyst exists to close that gap — one platform spanning the full arc from
            engineering acceleration through legacy modernization, agentic automation,
            enterprise AI, governance, and measurable value.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-start gap-2 sm:justify-center">
            {flow.map((stage, i) => (
              <React.Fragment key={stage}>
                <span className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-extrabold text-[#012060]">
                  {stage}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-[#01B0F1]" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* THE SIX CAPABILITIES */}
      <section id="capabilities" className="bg-[#F4F9FF] py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto mb-8 max-w-3xl text-left sm:text-center">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4">
              Designed as a platform, not a collection of services.
            </h2>
            <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
              Accelerate everyday engineering work, safely modernize legacy systems, deploy
              trustworthy enterprise AI, and prove return on investment — under real safety,
              compliance, and uptime pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((cap) => (
              <article
                key={cap.title}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#01B0F1]">
                  {cap.num}
                </div>
                <h3 className="mt-2 text-[22px] font-bold text-[#334155]">{cap.title}</h3>
                <p className="mt-1 font-bold text-[#33445E]">{cap.tagline}</p>
                <p className="mt-3 text-[#64748B] leading-relaxed">{cap.desc}</p>
                <div className="mt-4 border-t border-[#E2E8F0] pt-4 text-sm text-[#012060]">
                  <strong className="text-[#01B0F1]">Customer value:</strong> {cap.value}
                </div>
                {cap.proof && (
                  <div className="mt-4 rounded-xl border border-[#C7EDF9] bg-[#ECF9FE] px-4 py-3 text-sm text-[#17415D]">
                    <strong className="text-[#012060]">Proof today:</strong> {cap.proof}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-14 items-center">
          <div className="rounded-[30px] bg-gradient-to-br from-[#012060] to-[#063b91] text-white p-8 sm:p-10 min-h-[280px] flex flex-col justify-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#6EDBFF]">
              Why This Matters
            </div>
            <h3 className="mt-3 text-[28px] sm:text-[34px] font-bold leading-tight">
              AI cannot stay a layer on top of an estate it does not understand.
            </h3>
            <p className="mt-3 text-[#D6E7F6]">
              Catalyst connects engineering acceleration, modernization, enterprise AI,
              governance, and value measurement around the reality of complex technology
              estates.
            </p>
          </div>

          <div>
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-6">
              Modern platforms. Decades-old systems. One accountable path.
            </h2>

            <div className="grid gap-5">
              {bullets.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E9F8FD] font-black text-[#01B0F1]">
                    ✓
                  </span>
                  <div>
                    <b className="text-[#012060]">{b.title}</b>
                    <p className="mt-0.5 text-[#64748B]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process" className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-4 sm:mb-12">
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] font-poppins">
            Start focused. Build against reality. Scale with proof.
          </h2>
          <p className="text-[#64748B] mt-3 text-[16px] sm:text-lg">
            Most organizations begin with one or two capabilities, then expand as the
            platform proves value.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col gap-4 min-h-[220px]">
              <span className="absolute top-5 right-5 text-4xl font-bold text-[#CBD5E1]">{s.step}</span>
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-lg text-xl">
                <img src={s.icon} alt="icon" width="48" height="48" />
              </div>
              <h3 className="text-2xl text-[#334155] font-bold">{s.title}</h3>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">{s.desc}</p>
            </div>
            ))}
          </div>
      </section>

      {/* WHY EICE */}
      <section id="why-eice" className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto mb-8 max-w-3xl text-left sm:text-center">
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">
              Engineering discipline behind the AI platform.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyEice.map((item) => (
              <div key={item.title} className="border border-[#E2E8F0] rounded-2xl bg-white p-6">
                <h3 className="text-[18px] font-bold text-[#334155] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F4F9FF] py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 sm:mb-10 text-left sm:text-center">
            <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
              FAQs
            </div>
            <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155]">
              Questions enterprises ask first.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-[#334155] text-[16px] sm:text-lg hover:text-[#01B0F1] transition">
                  {item.q}
                  <span className="text-[#012060] text-xl leading-none">+</span>
                </summary>
                <p className="text-[#64748B] mt-3 text-[16px] sm:text-lg leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id ="contact" className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-[24px] bg-gray-50">
          <div className="flex flex-col items-center gap-6 px-6 py-10 text-left sm:px-16 sm:py-14 sm:text-center">
            <div>
              <h2 className="text-[32px] sm:text-4xl font-bold leading-tight text-gray-800">
                Ready to Move From AI Adoption to AI-Driven Engineering?
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-gray-500">
                Talk to our team about which capabilities fit your current technology estate
                and AI maturity.
              </p>
            </div>

            <a
              href="mailto:business@eicetechnology.com"
              className="inline-flex items-center gap-2 rounded-md bg-[#012060] px-10 py-3 text-[18px] text-white transition hover:bg-blue-800"
            >
              Talk to Our Catalyst Team →
            </a>
          </div>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}
