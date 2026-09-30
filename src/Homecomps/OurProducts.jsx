"use client";
import React from "react";
import { Link } from "@/nextNavigation";

const askEiceIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Knowledge-agent.svg";
const eiceAimIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Action-Agent.svg";
const eiceSmartfitIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SmartFit_Icon.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

function ArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" />
    </svg>
  );
}

const products = [
  {
    icon: askEiceIcon,
    name: "ASK EICE",
    tagline: "The Knowledge Agent",
    description:
      "Verified answers from your own documents, delivered through WhatsApp with no new app, login, or learning curve.",
    href: "/products/ask-eice",
    cta: "Explore Ask EICE",
  },
  {
    icon: eiceAimIcon,
    name: "EICEAIM",
    tagline: "The Action Agent",
    description:
      "Automates outreach, lead qualification, and follow ups with configurable AI personas, replacing manual telecalling with 24×7 engagement.",
    href: "/products/eice-aim",
    cta: "Explore EICE AIM",
  },
  {
    icon: eiceSmartfitIcon,
    name: "SmartFit",
    tagline: "Smart container loading optimization",
    description:
      "A smart logistics platform that maximizes container space, optimizes cargo placement, balances weight distribution, and helps reduce wasted capacity and freight costs.",
    href: "/products/smartfit",
    cta: "Explore SmartFit",
  },
];

export default function OurProducts() {
  return (
    <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
      <div className="text-left sm:text-center mb-8">
        <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
          Our Products
        </h2>
        <h1 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
          Built as a Unified Enterprise Intelligence Ecosystem
        </h1>
        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
          Modular platforms designed to work independently or together,
          <br className="hidden min-[1000px]:inline" /> based on your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
          >
            <div className="mb-[19px] flex h-16 w-16 items-center justify-center rounded-lg bg-[#E6F4FD]">
              <img src={product.icon} alt="" className="h-[41px] w-[41px] object-contain" width="41" height="41" />
            </div>
            <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{product.name}</h3>
            <p className="text-bloo font-semibold text-sm mb-3">{product.tagline}</p>
            <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">{product.description}</p>
            <Link
              href={product.href}
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] hover:text-blue-900 transition"
            >
              {product.cta} <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-10">
        <Link
          href="/products"
          className="inline-flex items-center justify-center py-4 px-7 border border-blue-900 bg-blue-900 text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30"
        >
          Explore our Products <img src={arrowIcon} alt="" className="ml-2 w-5 h-5" width="20" height="20" />
        </Link>
      </div>
    </div>
  );
}
