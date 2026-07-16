import React from "react";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const noraltamath1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/noraltamath1.png";
const noraltamath2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/noraltamath2.png";
import { GiVirtualMarker } from "react-icons/gi";

function NoraltaMath() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h2 className="text-bloo fontweight_1 text-center fontsize_2 py-2">FEMMS</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Fugitive Emission Monitoring, Estimation and Management System
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            FEMMS is a purpose-built platform for detecting, quantifying, and managing fugitive emissions across oil and
            gas facilities, helping operators meet regulatory requirements and sustainability targets through automated
            monitoring and reporting workflows.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={noraltamath1} alt="FEMMS Platform" className="w-full h-full object-fit rounded-lg"  width="308" height="406" />
            <img src={noraltamath2} alt="FEMMS Dashboard" className="w-full h-full object-fit rounded-lg"  width="160" height="96" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Accurately detecting and quantifying fugitive emissions from diverse equipment types across large facilities</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Automating emission estimation calculations in compliance with EPA and local regulatory methodologies</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Managing inspection schedules, repair workflows, and re-inspection tracking for thousands of components</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Generating audit-ready regulatory reports with full data traceability and evidence documentation</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">05</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Supporting mobile data collection by field technicians in areas with limited connectivity</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">About Our Client</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Noralta</h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            Noralta operates energy facilities in Canada's oil sands region and is committed to environmental stewardship and regulatory compliance.
            Facing increasing scrutiny around fugitive emissions, they required a digital solution to replace paper-based LDAR programmes with an
            integrated system that could track every component, automate estimation, and generate defensible regulatory submissions.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">Unlocking Success</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">IDEATION:</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We envisioned a component-level LDAR platform that digitises every step of the fugitive emission lifecycle, from initial survey and leak detection, through estimation and repair scheduling, to final regulatory reporting, in one integrated system.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We built a component registry, mobile field data capture app, and back-office estimation engine implementing EPA Method 21 and correlation equations. Automated repair workflows with deadline tracking and re-inspection reminders were integrated with the reporting module.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">FEMMS transformed Noralta's emissions management from a manual, error-prone process into a fully auditable digital programme. Regulatory reporting time was dramatically reduced, repair SLAs improved, and the system provided a defensible data trail for environmental audits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Project Outcomes</h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Delivered a fully digital LDAR system replacing paper-based processes across all Noralta facilities</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Automated emission estimation using EPA-approved methodologies, eliminating manual calculation errors</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Significantly reduced regulatory reporting preparation time through automated report generation</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Provided a complete audit trail for environmental compliance, supporting regulatory inspections with full data traceability</p>
          </div>
        </div>
      </div>
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default NoraltaMath;


