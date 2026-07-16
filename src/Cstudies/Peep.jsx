import React from "react";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const peep1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Peep1.png";
const peep2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Peep2.png";
import { GiVirtualMarker } from "react-icons/gi";

function Peep() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h2 className="text-bloo fontweight_1 text-center fontsize_2 py-2">Business Analytics Automation</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Tool for Monitoring of Petroleum Financial Models - Schlumberger
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            A business analytics automation platform developed for Schlumberger, enabling real-time monitoring and
            analysis of petroleum financial models to support data-driven decision-making across global operations.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={peep1} alt="Schlumberger BAA Platform" className="w-full h-full object-fit rounded-lg"  width="422" height="212" />
            <img src={peep2} alt="Schlumberger BAA Dashboard" className="w-full h-full object-fit rounded-lg"  width="474" height="221" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Aggregating financial and production data from multiple source systems into a coherent analytical model</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Automating the refresh and recalculation of complex petroleum financial models on a scheduled basis</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Delivering actionable KPI dashboards accessible to both financial and technical stakeholders</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Ensuring data accuracy and reconciliation across heterogeneous upstream and financial data sources</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">05</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Supporting scenario modelling and sensitivity analysis for forward-looking petroleum economics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">About Our Client</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Schlumberger</h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            Schlumberger (now SLB) is the world's leading provider of technology and services to the energy industry. Operating across more than
            120 countries, they required an automated analytics platform to monitor petroleum financial models at scale, reducing the manual effort
            involved in financial reporting and enabling faster, more accurate economic assessments for their global portfolio of projects.
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
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We designed a centralised analytics engine that automatically ingests upstream production and cost data, runs petroleum financial model calculations, and presents results through role-specific dashboards, eliminating manual spreadsheet workflows.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We built a data integration pipeline connecting production, cost, and market price feeds, then implemented an automated model recalculation engine with configurable scheduling. A visualisation layer delivered KPI dashboards, variance reports, and scenario comparison tools.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">The platform eliminated manual financial model updates and reduced reporting cycle time. Scenario modelling capabilities improved the speed and confidence of investment decisions across Schlumberger's global project portfolio.</p>
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
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Delivered an automated petroleum financial model monitoring platform eliminating manual spreadsheet workflows</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Reduced financial reporting cycle time significantly through scheduled automated model recalculation</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Scenario modelling tools accelerated investment decision-making across Schlumberger's global project portfolio</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Role-specific dashboards improved cross-functional alignment between financial and technical teams</p>
          </div>
        </div>
      </div>
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default Peep;


