"use client";
import React from "react";
import { Link } from "@/nextNavigation";

const askEiceIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Knowledge-agent.svg";
const eiceAimIcon = "https://d3r43jacxrwsrp.cloudfront.net/eice-aim/Action-Agent.svg";
const eiceSmartfitIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SmartFit_Icon.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

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
    tagline: "Intelligent container loading optimization",
    description:
      "A smart logistics platform that maximizes container space, optimizes cargo placement, balances weight distribution, and helps reduce wasted capacity and freight costs.",
    href: "/products/smartfit",
    cta: "Explore SmartFit",
  },
];

export default function OurProducts() {
  return (
    <div className="font-poppins py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-left sm:text-center mb-8">
          <h2 className="text-bloo text-xs font-extrabold uppercase tracking-[0.12em] py-2">
            Our Products
          </h2>
          <h1 className="text-blackk fontweight_1 text-[26px] sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Built as a Unified Enterprise Intelligence Ecosystem
          </h1>
          <p className="text-blackk/70 font-semibold text-[16px] sm:text-lg max-w-2xl mx-auto mt-2">
            Modular platforms designed to work independently or together, based on your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
            >
              <div className="mb-[19px] flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F4FD]">
                <img src={product.icon} alt="" className="h-6 w-6 object-contain" width="24" height="24" />
              </div>
              <h3 className="text-[#373737] text-[20px] font-bold mb-[7px]">{product.name}</h3>
              <p className="text-bloo font-semibold text-sm mb-3">{product.tagline}</p>
              <p className="text-[#64748B] text-[16px] font-normal leading-relaxed mb-[18px]">{product.description}</p>
              <Link
                href={product.href}
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] hover:text-blue-900 transition"
              >
                {product.cta} <img src={arrowIcon} alt="" className="w-4 h-4" width="16" height="16" />
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
    </div>
  );
}
