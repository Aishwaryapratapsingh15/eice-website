"use client";
import React from "react";

const cmmiImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/CMMI.png";
const isoImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/ISO.png";
const iecImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/IEC.png";
const ismsImg = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/ISMS.png";

const badges = [
  { title: "CMMI Level 3", desc: "Capability Maturity\nModel integration", icon: cmmiImg, __w: 319, __h: 98 },
  { title: "ISO 9001", desc: "Quality Management\nSytem", icon: isoImg, __w: 117, __h: 118 },
  { title: "ISO 27001", desc: "Information Security\nManagement", icon: ismsImg, __w: 128, __h: 173 },
  { title: "ISO/IEC 20000", desc: "IT Service\nManagement", icon: iecImg, __w: 143, __h: 143 },
];

export default function SecurityCompliance() {
  return (
    <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left sm:text-center mb-8">
          <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
            Enterprise-Grade Security
          </h2>
          <h1 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
            Security, Compliance & Trust
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            Your data security is our foundation. Built with enterprise compliance at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((item, i) => (
            <div key={i} className="bg-white border border-[#E6EAF1] rounded-[18px] p-[25px] text-center">
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                {item.title}
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] whitespace-pre-line mb-[18px]">
                {item.desc}
              </p>
              <div className="flex justify-center">
                <img
                  src={item.icon}
                  alt="badge"
                  className="h-16 object-contain"
                  width={item.__w}
                  height={item.__h}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
