"use client";
import React from "react";
import { Link } from "@/nextNavigation";

const capabilities = [
  {
    num: "01",
    title: "AI Development Services",
    desc: "Machine learning and generative AI, engineered for production.",
  },
  {
    num: "02",
    title: "Chatbot Development",
    desc: "Turn enterprise knowledge into contextual answers, content and actionable insights.",
  },
  {
    num: "03",
    title: "AI Agents & Automation",
    desc: "Detect patterns, anomalies and signals before they become business problems.",
  },
  {
    num: "04",
    title: "AI-Enabled Engineering Excellence Center",
    desc: "Governance and AI value measurement at scale.",
  },
];

export default function AiCapability() {
  return (
    <div className="font-poppins py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-br from-[#010F33] to-[#012060] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left sm:text-center mb-8">
          <h2 className="text-[#6EDBFF] text-xs font-extrabold uppercase tracking-[0.12em] py-2">
            Our AI Capability
          </h2>
          <h1 className="text-white fontweight_1 text-[26px] sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            From Data to Intelligence to Action
          </h1>
          <p className="text-[#C7D3EB] font-semibold text-[16px] sm:text-lg max-w-2xl mx-auto mt-2">
            AI at EICE is focused on practical enterprise outcomes, automating work, finding intelligence in business data and helping teams make faster decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="rounded-[18px] border border-white/15 bg-white/[0.04] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
            >
              <div className="text-bloo font-extrabold text-sm mb-[19px]">{cap.num}</div>
              <h3 className="text-white text-[20px] font-bold mb-[7px]">{cap.title}</h3>
              <p className="text-[#C7D3EB] text-[16px] font-normal leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <Link
            href="/services/ai-ml"
            className="inline-flex items-center justify-center py-4 px-7 rounded-md bg-bloo text-white font-semibold text-lg transition duration-200 hover:bg-[#009fdc]"
          >
            Explore AI Capabilities
          </Link>
        </div>
      </div>
    </div>
  );
}
