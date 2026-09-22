"use client";
import React, { useState } from "react";
import { useNavigate } from "@/nextNavigation";

const products = [
  {
    name: "Eice Voice",
    category: "ai",
    icon: "◉",
    type: "AI · Voice",
    description:
      "Voice-powered order management for hospitality, using an AI-driven NLU engine trained on hospitality vocabulary.",
    href: "https://www.eicetechnology.com/products/eice-voice",
  },
  {
    name: "AskEICE",
    category: "ai",
    icon: "✦",
    type: "AI · Knowledge",
    description:
      "A knowledge agent that delivers verified answers from your own documents through WhatsApp on mobile and desktop.",
    href: "https://www.eicetechnology.com/products/askeice",
  },
  {
    name: "EICEAIM",
    category: "ai",
    icon: "◎",
    type: "AI · Action",
    description:
      "An action agent for outreach, lead qualification, and follow-ups using configurable AI personas for 24×7 engagement.",
    href: "https://www.eicetechnology.com/products/eiceaim",
  },
  {
    name: "Fourth AI Product",
    category: "ai",
    icon: "◷",
    type: "AI · Coming Soon",
    description:
      "A fourth AI product is planned for this portfolio. Details will be added once the product is officially revealed.",
    comingSoon: true,
  },
  {
    name: "EICE Rise",
    category: "hospitality",
    icon: "▦",
    type: "Hospitality · ERP",
    description:
      "Hospitality ERP covering front desk, dining, billing, and back-office operations through modular components.",
    href: "https://www.eicetechnology.com/products/eicerise",
  },
  {
    name: "Easylogy",
    category: "logistics",
    icon: "▰",
    type: "Logistics · Fleet",
    description:
      "Real-time fleet tracking, automated driver updates, and optimized route planning for logistics operations.",
    href: "https://www.eicetechnology.com/products/easylogy",
  },
  {
    name: "EICE SmartFit",
    category: "logistics",
    icon: "◇",
    type: "Logistics · Optimization",
    description:
      "Browser-based container and cargo load optimization that generates an optimized load plan in seconds.",
    href: "https://www.eicetechnology.com/products/smartfit",
  },
  {
    name: "iSyncDrive",
    category: "enterprise",
    icon: "☁",
    type: "Enterprise IT · Files",
    description:
      "Enterprise cloud file sync with governance, role-based access control, compliance reporting, and flexible deployment.",
    href: "https://www.eicetechnology.com/products/isync-drive",
  },
  {
    name: "iSyncLite",
    category: "enterprise",
    icon: "↻",
    type: "Enterprise IT · Backup",
    description:
      "Lightweight automated backup, versioning, and fast recovery for growing teams.",
    href: "https://www.eicetechnology.com/products/isync-lite",
  },
  {
    name: "Verilock",
    category: "enterprise",
    icon: "⌾",
    type: "Security · Access",
    description:
      "Multi-factor authentication and access control with geo-fencing and zero-trust architecture.",
    href: "https://www.eicetechnology.com/products/verilock",
  },
  {
    name: "InfraSight",
    category: "enterprise",
    icon: "▣",
    type: "Enterprise IT · Observability",
    description:
      "Agentless infrastructure observability with multi-protocol monitoring, auto-discovery, and anomaly detection.",
    href: "https://www.eicetechnology.com/products/infrasight",
  },
  {
    name: "EiceOps",
    category: "enterprise",
    icon: "◌",
    type: "Enterprise IT · ITSM",
    description:
      "Help desk and IT service management with live SLA tracking, escalation, and a full audit trail.",
    href: "https://www.eicetechnology.com/products/eice-ops",
  },
];

const filters = [
  { label: "All Products", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Logistics", value: "logistics" },
  { label: "Enterprise IT & Security", value: "enterprise" },
];

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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_38%,rgba(1,176,241,.25),transparent_27%),radial-gradient(circle_at_95%_0%,rgba(86,212,255,.12),transparent_30%),linear-gradient(120deg,#010f33_0%,#012060_62%,#062b6c_100%)] text-white">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(90deg,#000 20%,transparent 82%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[500px] w-[calc(100%-28px)] max-w-[1180px] items-center gap-12 py-16 sm:w-[calc(100%-40px)] lg:grid-cols-[1.02fr_.98fr] lg:gap-11 lg:py-[70px]">
          {/* Hero Content */}
          <div>
            <div className="mb-[18px] inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#01B0F1] shadow-[0_0_0_6px_rgba(1,176,241,.12)]" />
              EICE Product Ecosystem
            </div>

            <h1 className="mb-6 max-w-[690px] text-[43px] font-black leading-[1.01] tracking-[-2.4px] sm:text-5xl md:text-6xl lg:text-[67px] lg:tracking-[-3.5px]">
              Software built to{" "}
              <span className="text-[#01B0F1]">solve the job.</span>
            </h1>

            <p className="mb-8 max-w-[610px] text-[15px] leading-[1.7] text-[#C7D3EB] sm:text-[17px]">
              From AI agents and hospitality operations to logistics,
              security, and infrastructure — explore purpose-built products
              designed around real business workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#01B0F1] px-[19px] py-[14px] text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(1,176,241,.24)] transition hover:bg-[#009fdc]"
              >
                Explore Products →
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/25 bg-white/[0.06] px-[19px] py-[14px] text-sm font-extrabold text-white transition hover:bg-white/[0.11]"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden h-[390px] items-center justify-center lg:flex">
            <div className="absolute h-[330px] w-[330px] rounded-full border border-white/10">
              <span className="absolute left-[19%] top-[12%] h-2 w-2 rounded-full bg-[#01B0F1] shadow-[0_0_28px_rgba(1,176,241,.8)]" />
              <span className="absolute bottom-[27%] right-[8%] h-1.5 w-1.5 rounded-full bg-[#01B0F1] shadow-[0_0_28px_rgba(1,176,241,.8)]" />
            </div>

            <div className="relative z-10 flex h-[175px] w-[175px] items-center justify-center rounded-full bg-gradient-to-br from-white to-[#DCEFFF] shadow-[0_28px_80px_rgba(0,0,0,.28)]">
              <div className="flex h-[124px] w-[124px] items-center justify-center rounded-full bg-[#012060] text-[26px] font-black tracking-[-1.5px] text-white">
                EICE
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute right-0 top-[12%] rounded-[13px] border border-white/15 bg-[#03163A]/75 px-[15px] py-[13px] text-xs font-bold shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl">
              AI & Automation
              <small className="mt-0.5 block text-[10px] font-semibold text-[#8EA3C9]">
                Voice · Knowledge · Action
              </small>
            </div>

            <div className="absolute bottom-[15%] left-[3%] rounded-[13px] border border-white/15 bg-[#03163A]/75 px-[15px] py-[13px] text-xs font-bold shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl">
              Hospitality
              <small className="mt-0.5 block text-[10px] font-semibold text-[#8EA3C9]">
                ERP · Operations
              </small>
            </div>

            <div className="absolute bottom-[5%] right-[13%] rounded-[13px] border border-white/15 bg-[#03163A]/75 px-[15px] py-[13px] text-xs font-bold shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl">
              Enterprise IT
              <small className="mt-0.5 block text-[10px] font-semibold text-[#8EA3C9]">
                Security · Observability
              </small>
            </div>

            <div className="absolute left-0 top-[29%] rounded-[13px] border border-white/15 bg-[#03163A]/75 px-[15px] py-[13px] text-xs font-bold shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl">
              Logistics
              <small className="mt-0.5 block text-[10px] font-semibold text-[#8EA3C9]">
                Fleet · Cargo
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b border-[#E6EAF1] bg-white">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 sm:grid-cols-4">
          {[
            ["180+", "Projects Delivered"],
            ["60+", "Clients"],
            ["10+", "Countries"],
            ["12", "Products"],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`border-[#E6EAF1] px-5 py-6 text-center ${
                index < 2 ? "border-b sm:border-b-0" : ""
              } ${index % 2 === 0 ? "border-r" : "sm:border-r"} ${
                index === 1 ? "sm:border-r" : ""
              }`}
            >
              <strong className="block text-[25px] font-bold tracking-[-0.7px] text-[#012060]">
                {number}
              </strong>
              <span className="text-xs text-[#667085]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-[86px]">
        <div className="mx-auto w-[calc(100%-28px)] max-w-[1180px] sm:w-[calc(100%-40px)]">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
              Explore the portfolio
            </div>

            <h2 className="mb-3 text-[29px] font-bold leading-[1.12] tracking-[-1.7px] text-[#012060] sm:text-4xl">
              One ecosystem. Distinct products.
            </h2>

            <p className="text-[15px] text-[#667085] sm:text-base">
              Each product is designed around a specific operational need,
              while fitting into a broader EICE technology ecosystem.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-[30px] flex flex-wrap gap-2">
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
                    className={`relative z-[1] mb-[19px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] text-xl ${
                      product.comingSoon
                        ? "bg-[#E8EDF7]"
                        : "bg-[#EDF5FF]"
                    } text-[#012060]`}
                  >
                    {product.icon}
                  </div>

                  <h3 className="mb-[7px] text-[19px] font-bold tracking-[-0.4px] text-[#012060]">
                    {product.name}

                    {product.comingSoon && (
                      <span className="ml-1.5 rounded-full border border-[#E6EAF1] bg-white px-2 py-[3px] text-[9px] text-[#667085]">
                        Coming Soon
                      </span>
                    )}
                  </h3>

                  <p className="flex-1 text-[13.5px] leading-[1.65] text-[#667085]">
                    {product.description}
                  </p>

                  <span className="mt-3 inline-block text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#98A2B3]">
                    {product.type}
                  </span>

                  {!product.comingSoon && (
                    <span className="mt-[18px] inline-flex items-center gap-1.5 text-[12.5px] font-extrabold text-[#007EAF]">
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F6F9FD] py-16 sm:py-[86px]">
        <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1180px] gap-8 sm:w-[calc(100%-40px)] lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#01B0F1]">
              Product philosophy
            </div>

            <div className="text-[80px] font-black leading-[0.8] tracking-[-9px] text-[#E9F1FB] sm:text-[120px]">
              01
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-[29px] font-bold leading-[1.12] tracking-[-1.7px] text-[#012060] sm:text-4xl">
              Purpose-built by design.
            </h2>

            <p className="text-base leading-[1.75] text-[#667085]">
              EICE products are built around defined business jobs rather
              than forcing every workflow into one oversized platform. That
              keeps the value proposition clear: a focused product can stand
              on its own, while multiple products can work together when the
              business needs them.
            </p>

            <div className="mt-[26px] grid grid-cols-1 gap-[22px] sm:grid-cols-2">
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
                <div
                  key={title}
                  className="border-t border-[#E6EAF1] pt-[18px]"
                >
                  <b className="text-sm text-[#012060]">{title}</b>
                  <p className="mt-1 text-[13px] text-[#667085]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        id="contact"
        className="mx-auto w-[calc(100%-28px)] max-w-[1180px] sm:w-[calc(100%-40px)]"
      >
        <section className="mb-16 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#010F33] to-[#012060] sm:mb-[86px]">
          <div className="flex flex-col justify-between gap-7 px-6 py-10 sm:px-[70px] sm:py-[62px] lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-[28px] font-bold tracking-[-1.5px] text-white sm:text-[34px]">
                Have a business problem to solve?
              </h2>

              <p className="max-w-[620px] text-sm text-[#B9C7E8]">
                Tell us what your team is trying to improve. We can help
                identify the relevant EICE product or scope a solution around
                your workflow.
              </p>
            </div>

            <a
              href="mailto:info@eicetechnology.com"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#01B0F1] px-[19px] py-[14px] text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(1,176,241,.24)] transition hover:bg-[#009fdc]"
            >
              Talk to Our Team →
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#010B25] px-0 py-[55px] text-[#9CAFCF]">
        <div className="mx-auto w-[calc(100%-28px)] max-w-[1180px] sm:w-[calc(100%-40px)]">
          <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-2.5 text-xl font-black text-white">
                EIC<span className="text-[#01B0F1]">E</span> Technology
              </div>

              <p className="max-w-[340px] text-[12.5px] leading-[1.7]">
                A global software services organization offering high-quality
                technology solutions using specialized domain knowledge and
                flexible engagement models.
              </p>
            </div>

            <FooterColumn
              title="AI"
              links={[
                ["Eice Voice", "/products/eice-voice"],
                ["AskEICE", "/products/askeice"],
                ["EICEAIM", "/products/eiceaim"],
              ]}
            />

            <FooterColumn
              title="OPERATIONS"
              links={[
                ["EICE Rise", "/products/eicerise"],
                ["Easylogy", "/products/easylogy"],
                ["EICE SmartFit", "/products/smartfit"],
              ]}
            />

            <FooterColumn
              title="ENTERPRISE IT"
              links={[
                ["iSyncDrive", "/products/isync-drive"],
                ["iSyncLite", "/products/isync-lite"],
                ["Verilock", "/products/verilock"],
                ["InfraSight", "/products/infrasight"],
                ["EiceOps", "/products/eice-ops"],
              ]}
            />
          </div>

          <div className="flex flex-col justify-between gap-4 pt-5 text-[11px] sm:flex-row sm:flex-wrap">
            <span>© 2026 EICE Technology Pvt. Ltd. All rights reserved.</span>

            <span>Terms & Conditions · Privacy Policy</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-[14px] text-[11px] font-bold tracking-[0.1em] text-white">
        {title}
      </h4>

      <ul className="space-y-[9px]">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-[12.5px] transition hover:text-[#01B0F1]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}