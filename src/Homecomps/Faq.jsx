"use client";
import React from "react";

const faqs = [
  {
    q: "What does EICE actually do?",
    a: "AI development, custom software, cloud infrastructure, and enterprise modernization — one engineering team across the full stack, not separate vendors stitched together.",
  },
  {
    q: "How much do your projects cost?",
    a: "Cost depends on scope, complexity, and integration requirements — not a single published rate. We'll give you a clear estimate after understanding your actual requirements, not a generic range that doesn't reflect the real work.",
  },
  {
    q: "How long does a typical project take?",
    a: "From a few weeks for a focused capability to several months for a full platform build — timeline depends on scope, not a fixed number we apply to every project.",
  },
  {
    q: "Who owns the code and IP after the project is complete?",
    a: "You do. Once contractual obligations are fulfilled, source code and intellectual property transfer fully to you — no hidden restrictions.",
  },
  {
    q: "Do you sign an NDA before discussing our project?",
    a: "Yes — every engagement starts with an NDA before we discuss specifics.",
  },
  {
    q: "How do you ensure security and compliance?",
    a: "CMMI Level 3, ISO 9001:2000, ISO 27001, and ISO/IEC 20000 certified practices — independently verified, not self-declared — combined with secure coding practices and regular security testing throughout delivery.",
  },
  {
    q: "Can we work with your team directly, or only through account managers?",
    a: "Directly — you get dedicated developers, designers, and a PM assigned to your project, not a rotating pool of generalists.",
  },
  {
    q: "Where is your team located, and how do you handle international collaboration?",
    a: "Our engineering hub is in Noida, Delhi NCR, with a Houston, USA office — overlapping working hours and shared documentation standards keep collaboration smooth regardless of where your team sits.",
  },
  {
    q: "Which industries do you have real experience in?",
    a: "Oil & Gas, Logistics, Hospitality, Legal, and Enterprise IT — with real, delivered engagements behind each, not generic claims.",
  },
  {
    q: "What's the first step to start a project?",
    a: "A discovery conversation to understand your actual problem — not a sales pitch. From there we scope, propose, and only move forward once you're confident it's the right fit.",
  },
];

export default function Faq() {
  return (
    <div className="py-4 sm:py-10">
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
          <details
            key={i}
            className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]"
          >
            <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
              <span>Q. {item.q}</span>
              <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mt-3">
              A. {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
    </div>
  );
}
