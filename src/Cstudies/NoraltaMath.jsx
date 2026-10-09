"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const noraltamath1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/noraltamath1.png";
const noraltamath2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/noraltamath2.png";
import { GiVirtualMarker } from "react-icons/gi";

function NoraltaMath() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">FEMMS</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">Fugitive Emission Monitoring, Estimation and Management System</h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            FEMMS is a purpose-built platform for detecting, quantifying, and managing fugitive emissions across oil and
            gas facilities, helping operators meet regulatory requirements and sustainability targets through automated
            monitoring and reporting workflows.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center grid grid-cols-2 gap-4">
            <img src={noraltamath1} alt="FEMMS Platform" className="w-full h-full object-fit rounded-lg"  width="308" height="406" />
            <img src={noraltamath2} alt="FEMMS Dashboard" className="w-full h-full object-fit rounded-lg"  width="160" height="96" />
          </div>
        </div>
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Accurately detecting and quantifying fugitive emissions from diverse equipment types across large facilities</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Automating emission estimation calculations in compliance with EPA and local regulatory methodologies</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Managing inspection schedules, repair workflows, and re-inspection tracking for thousands of components</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Generating audit-ready regulatory reports with full data traceability and evidence documentation</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Supporting mobile data collection by field technicians in areas with limited connectivity</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">About Our Client</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Noralta</h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            Noralta operates energy facilities in Canada's oil sands region and is committed to environmental stewardship and regulatory compliance.
            Facing increasing scrutiny around fugitive emissions, they required a digital solution to replace paper-based LDAR programmes with an
            integrated system that could track every component, automate estimation, and generate defensible regulatory submissions.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-10 pb-10">
<div>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Unlocking Success</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">IDEATION:</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We envisioned a component-level LDAR platform that digitises every step of the fugitive emission lifecycle, from initial survey and leak detection, through estimation and repair scheduling, to final regulatory reporting, in one integrated system.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUR APPROACH</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We built a component registry, mobile field data capture app, and back-office estimation engine implementing EPA Method 21 and correlation equations. Automated repair workflows with deadline tracking and re-inspection reminders were integrated with the reporting module.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUTCOMES</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">FEMMS transformed Noralta's emissions management from a manual, error-prone process into a fully auditable digital programme. Regulatory reporting time was dramatically reduced, repair SLAs improved, and the system provided a defensible data trail for environmental audits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
        <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Project Outcomes</h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Delivered a fully digital LDAR system replacing paper-based processes across all Noralta facilities</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Automated emission estimation using EPA-approved methodologies, eliminating manual calculation errors</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Significantly reduced regulatory reporting preparation time through automated report generation</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Provided a complete audit trail for environmental compliance, supporting regulatory inspections with full data traceability</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Ready to Prove Your Emissions Compliance?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about fugitive emissions monitoring, estimation, and management systems.</p>
          <button onClick={() => navigate("/demo-form?product=Oil%20%26%20Gas")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Oil &amp; Gas Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}

export default NoraltaMath;


