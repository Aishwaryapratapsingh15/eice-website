"use client";
import React, { useState } from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "./ProductFooter";

const easylogyIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Easylogy.svg";
const eiceriseIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/EiceRise.svg";
const eicevoiceIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/EiceVoice.svg";
const infrasightIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/infrasight.svg";
const isyncdriveIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/isyncdrive.svg";
const isyncliteIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/isynclite.svg";
const verilockIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Verilock.svg";
const eiceAgentIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/EiceAiAgent.svg";
const askEiceIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Knowledge-agent.svg";
const eiceAimIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Action-Agent.svg";
const eiceSmartfitIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SmartFit_Icon.svg";
const eiceopsIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/EICEOPS.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const productHeroImg = "https://d3r43jacxrwsrp.cloudfront.net/product/product_hero.png";


const products = [
  {
    name: "Eice Voice",
    category: "ai",
    icon: eicevoiceIcon,
    type: "AI · Voice",
    description:
      "Voice-powered order management for hospitality, using an AI-driven NLU engine trained on hospitality vocabulary.",
    href: "/products/eice-voice",
  },
  {
    name: "AskEICE",
    category: "ai",
    icon: askEiceIcon,
    type: "AI · Knowledge",
    description:
      "A knowledge agent that delivers verified answers from your own documents through WhatsApp on mobile and desktop.",
    href: "/products/ask-eice",
  },
  {
    name: "EICEAIM",
    category: "ai",
    icon: eiceAimIcon,
    type: "AI · Action",
    description:
      "An action agent for outreach, lead qualification, and follow-ups using configurable AI personas for 24×7 engagement.",
    href: "/products/eice-aim",
  },
  {
    name: "EICE Catalyst",
    category: "ai",
    icon: eiceAgentIcon,
    type: "AI · Platform",
    description:
      "An integrated AI platform for engineering acceleration, agentic delivery, modernization, enterprise AI, governance, and measurable value.",
    href: "/products/eice-catalyst",
  },
  {
    name: "EICE Rise",
    category: "hospitality",
    icon: eiceriseIcon,
    type: "Hospitality · ERP",
    description:
      "Hospitality ERP covering front desk, dining, billing, and back-office operations through modular components.",
    href: "/products/eicerise",
  },
  {
    name: "Easylogy",
    category: "logistics",
    icon: easylogyIcon,
    type: "Logistics · Fleet",
    description:
      "Real-time fleet tracking, automated driver updates, and optimized route planning for logistics operations.",
    href: "/products/easylogy",
  },
  {
    name: "EICE SmartFit",
    category: "logistics",
    icon: eiceSmartfitIcon,
    type: "Logistics · Optimization",
    description:
      "Browser-based container and cargo load optimization that generates an optimized load plan in seconds.",
    href: "/products/smartfit",
  },
  {
    name: "iSyncDrive",
    category: "enterprise",
    icon: isyncdriveIcon,
    type: "Enterprise IT · Files",
    description:
      "Enterprise cloud file sync with governance, role-based access control, compliance reporting, and flexible deployment.",
    href: "/products/isync-drive",
  },
  {
    name: "iSyncLite",
    category: "enterprise",
    icon: isyncliteIcon,
    type: "Enterprise IT · Backup",
    description:
      "Lightweight automated backup, versioning, and fast recovery for growing teams.",
    href: "/products/isync-lite",
  },
  {
    name: "Verilock",
    category: "enterprise",
    icon: verilockIcon,
    type: "Security · Access",
    description:
      "Multi-factor authentication and access control with geo-fencing and zero-trust architecture.",
    href: "/products/verilock",
  },
  {
    name: "InfraSight",
    category: "enterprise",
    icon: infrasightIcon,
    type: "Enterprise IT · Observability",
    description:
      "Agentless infrastructure observability with multi-protocol monitoring, auto-discovery, and anomaly detection.",
    href: "/products/infrasight",
  },
  {
    name: "EiceOps",
    category: "enterprise",
    icon: eiceopsIcon,
    type: "Enterprise IT · ITSM",
    description:
      "Help desk and IT service management with live SLA tracking, escalation, and a full audit trail.",
    href: "/products/eice-ops",
  },
];

const filters = [
  { label: "All Products", value: "all" },
  { label: "AI & Automation", value: "ai" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Logistics", value: "logistics" },
  { label: "Enterprise IT & Security", value: "enterprise" },
];

const useCases = {
  ai: {
    overline: "Where AI can work",
    heading: "Move AI from experiment to workflow.",
    intro:
      "Think about the moments where employees or customers need an answer, an interaction, or an action. Those are the points where focused AI capabilities can become useful.",
    items: [
      { title: "Knowledge access", desc: "Find answers across internal documents, policies and business information." },
      { title: "Customer & employee support", desc: "Make information easier to access without adding another complicated workflow." },
      { title: "Lead engagement", desc: "Support outreach, qualification and follow-up activities at scale." },
      { title: "Hospitality interactions", desc: "Enable staff to interact naturally with order-management workflows through voice." },
      { title: "Internal knowledge", desc: "Help teams retrieve relevant business information when they need it." },
      { title: "High-volume engagement", desc: "Support repetitive communication with configurable AI-assisted workflows." },
    ],
  },
  hospitality: {
    overline: "Where it fits",
    heading: "Map the platform to the operation.",
    intro:
      "Hospitality is a connected workflow. A guest-facing interaction can affect POS, billing, finance, inventory and other back-office processes.",
    items: [
      { title: "Front desk operations", desc: "Support core guest-facing workflows and connect front-office activity." },
      { title: "Food & beverage", desc: "Connect dining and POS workflows with broader operations." },
      { title: "Banquets & events", desc: "Support booking, billing and related event workflows." },
      { title: "Finance & billing", desc: "Bring financial and billing activities into the operational environment." },
      { title: "Membership", desc: "Support member-facing workflows through dedicated modules." },
      { title: "Inventory & purchasing", desc: "Connect inventory, purchasing and vendor-related processes." },
    ],
  },
  logistics: {
    overline: "Where logistics technology helps",
    heading: "Connect visibility with planning.",
    intro:
      "Different logistics teams may start with different problems — vehicle visibility, driver communication, route planning or cargo utilization.",
    items: [
      { title: "Fleet visibility", desc: "Improve visibility across vehicles and ongoing transportation activity." },
      { title: "Driver communication", desc: "Automate driver updates and reduce repetitive operational communication." },
      { title: "Route planning", desc: "Support more efficient planning of vehicle routes and transportation activity." },
      { title: "Cargo planning", desc: "Create optimized container and cargo load plans based on requirements." },
      { title: "Container utilization", desc: "Improve how available container space is planned and utilized." },
      { title: "Shipment preparation", desc: "Move cargo planning toward a faster browser-based workflow." },
    ],
  },
  enterprise: {
    overline: "Where enterprise IT fits",
    heading: "Address the infrastructure behind the business.",
    intro:
      "Enterprise technology needs span information, identity, infrastructure and service operations. Start with the layer that needs attention.",
    items: [
      { title: "File governance", desc: "Bring greater control and visibility to enterprise file environments." },
      { title: "Backup & recovery", desc: "Support automated backup, versioning and recovery workflows." },
      { title: "Identity & access", desc: "Strengthen authentication and control access to enterprise resources." },
      { title: "Infrastructure monitoring", desc: "Gain visibility through agentless monitoring and automated discovery." },
      { title: "Anomaly detection", desc: "Identify unusual infrastructure behavior and operational issues." },
      { title: "IT service management", desc: "Track SLAs, manage escalations and maintain service audit trails." },
    ],
  },
};

export default function ProductsPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <main className="min-h-screen bg-white text-[#101828]">
      {/* Hero */}
      <section className="bg-white px-5 py-4 text-left sm:text-center sm:mt-10">
        {/* Hero image — placeholder until the real product image is ready */}
        <div className="mt-10 flex justify-center">
          <img
            src={productHeroImg}
            alt="EICE product ecosystem — AI & Automation, Logistics, Hospitality, and Enterprise IT"
            className="mx-auto mb-6 w-full max-w-xl"
            width="1496"
            height="1051"
          />
        </div>

        <span className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-[#012060]">
          EICE Product Ecosystem
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-[40px] font-bold leading-tight text-[#334155] md:text-[40px]">
          Software built to{" "}
          <span className="text-[#01B0F1]">solve the job.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[#64748B]">
          From AI agents and hospitality operations to logistics, security,
          and infrastructure — explore purpose-built products designed
          around real business workflows.
        </p>

        <div className="mt-8 flex flex-wrap justify-start gap-4 sm:justify-center">
          <button
            onClick={() => navigate("/products/eicerise/form?product=Products")}
            className="flex items-center gap-2 rounded-md bg-[#012060] px-10 py-3 text-[18px] text-white transition hover:bg-blue-800"
          >
            Talk to Our Team
            <img src={arrowIcon} alt="" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-4 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="mx-auto mb-10 max-w-[760px] text-left sm:text-center">
            <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
              Explore the portfolio
            </div>

            <h2 className="mb-3 text-[32px] font-bold leading-tight text-[#012060] sm:text-4xl">
              One ecosystem. Distinct products.
            </h2>

            <p className="text-base text-[#667085] sm:text-lg">
              Each product is designed around a specific operational need,
              while fitting into a broader EICE technology ecosystem.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-[30px] flex flex-wrap justify-start gap-2 sm:justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-[14px] py-[9px] text-xs font-extrabold transition ${
                  activeFilter === filter.value
                    ? "border-[#012060] bg-[#012060] text-white"
                    : "border-[#E6EAF1] bg-white text-[#475467] hover:border-[#012060] hover:bg-[#012060] hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const CardContent = (
                <>
                  <div
                    className={`relative z-[1] mb-[19px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] ${
                      product.comingSoon
                        ? "bg-[#E8EDF7]"
                        : "bg-[#EDF5FF]"
                    }`}
                  >
                    <img
                      src={product.icon}
                      alt=""
                      className="h-6 w-6 object-contain"
                      width="24"
                      height="24"
                    />
                  </div>

                  <h3 className="mb-[7px] text-[24px] font-bold sm:text-xl text-[#012060]">
                    {product.name}

                    {product.comingSoon && (
                      <span className="ml-1.5 rounded-full border border-[#E6EAF1] bg-white px-2 py-[3px] text-xs text-[#667085]">
                        Coming Soon
                      </span>
                    )}
                  </h3>

                  <p className="flex-1 text-[16px] leading-relaxed text-[#667085]">
                    {product.description}
                  </p>

                  <span className="mt-3 inline-block text-xs font-extrabold uppercase tracking-[0.08em] text-[#98A2B3]">
                    {product.type}
                  </span>

                  {!product.comingSoon && (
                    <span className="mt-[18px] inline-flex items-center gap-1.5 text-sm font-extrabold text-[#01B0F1]">
                      View Product →
                    </span>
                  )}
                </>
              );

              if (product.comingSoon) {
                return (
                  <div
                    key={product.name}
                    className="relative flex min-h-[255px] flex-col overflow-hidden rounded-[18px] border border-dashed border-[#E6EAF1] bg-gradient-to-br from-[#F7F9FC] to-[#EEF4FA] p-[25px]"
                  >
                    {CardContent}
                  </div>
                );
              }

              return (
                <a
                  key={product.name}
                  href={product.href}
                  className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
                >
                  {/* Decorative circle */}
                  <span className="absolute -right-[30px] -top-[30px] h-[90px] w-[90px] rounded-full bg-[#01B0F1]/[0.07]" />

                  {CardContent}
                </a>
              );
            })}
          </div>

          {/* Use cases */}
          {activeFilter !== "all" && useCases[activeFilter] && (
            <div className="mt-16">
              <div className="mx-auto mb-8 max-w-[760px] text-left sm:text-center">
                <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
                  {useCases[activeFilter].overline}
                </div>
                <h3 className="mb-2.5 text-2xl font-bold leading-tight text-[#012060]">
                  {useCases[activeFilter].heading}
                </h3>
                <p className="text-sm leading-relaxed text-[#667085]">
                  {useCases[activeFilter].intro}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {useCases[activeFilter].items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[13px] border border-[#E6EAF1] bg-white p-[18px]"
                    >
                      <strong className="mb-1 block text-sm text-[#012060]">
                        {item.title}
                      </strong>
                      <span className="text-xs leading-relaxed text-[#667085]">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F6F9FD] py-4 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="mx-auto mb-8 max-w-[760px] text-left sm:text-center">
            <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
              Product philosophy
            </div>

            <h2 className="mb-3 text-[32px] font-bold leading-tight text-[#012060] sm:text-4xl">
              Purpose-built by design.
            </h2>

            <p className="text-base leading-[1.75] text-[#667085] sm:text-lg">
              EICE products are built around defined business jobs rather
              than forcing every workflow into one oversized platform. That
              keeps the value proposition clear: a focused product can stand
              on its own, while multiple products can work together when the
              business needs them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Focused by default",
                "Each product has a clear operational purpose.",
              ],
              [
                "Designed to integrate",
                "Products can complement the systems teams already use.",
              ],
              [
                "Built for real workflows",
                "Solutions map to practical business operations.",
              ],
              [
                "Backed by engineering",
                "EICE applies the same engineering standards across its product portfolio.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="border-t border-[#E6EAF1] pt-[18px]">
                <b className="text-sm text-[#012060]">{title}</b>
                <p className="mt-1 text-sm text-[#667085]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        id="contact"
        className=""
      >
        <section className="overflow-hidden bg-gray-50">
          <div className="flex flex-col items-center gap-7 px-6 py-10 text-left sm:px-[70px] sm:py-[62px] sm:text-center">
            <div>
              <h2 className="mb-2 text-[32px] font-bold leading-tight text-gray-800 sm:text-4xl">
                Have a business problem to solve?
              </h2>

              <p className="mx-auto max-w-[620px] text-sm text-gray-500">
                Tell us what your team is trying to improve. We can help
                identify the relevant EICE product or <br />scope a solution around
                your workflow.
              </p>
            </div>

            <a
              href="mailto:info@eicetechnology.com"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#012060] px-10 py-3 text-[18px] text-white transition hover:bg-blue-800"
            >
              Talk to Our Team →
            </a>
          </div>
        </section>
      </div>

      <ProductFooter />
    </main>
  );
}