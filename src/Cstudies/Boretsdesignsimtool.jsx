import React from "react";
import ProductFooter from "/src/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
import borets1 from "../assets/Compressed/Borets1.png";
import borets2 from "../assets/Compressed/Borets2.png";
import { GiVirtualMarker } from "react-icons/gi";

function Boretsdesignsimtool() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2 py-2">
            Oil &amp; Gas Product Development
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Design &amp; Simulation Tool for Production Monitoring — BORETS
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/60 fontsize_3 pt-4 px-4">
            A comprehensive design and simulation platform developed for BORETS,
            enabling engineers to model, monitor, and optimize production
            performance across oil and gas wells with advanced analytical
            capabilities.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={borets1.src} alt="BORETS Design Tool" className="w-full h-full object-fit rounded-lg" />
            <img src={borets2.src} alt="BORETS Simulation Dashboard" className="w-full h-full object-fit rounded-lg" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Accurately modelling complex downhole conditions and fluid dynamics for a wide range of well types</p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Integrating real-time production data with simulation outputs for live performance monitoring</p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Building a flexible design engine that supports multiple ESP and artificial lift configurations</p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Ensuring calculation accuracy while maintaining acceptable performance for field engineers</p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">05</h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Delivering a tool that scales from single-well analysis to portfolio-level production monitoring</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">About Our Client</h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">BORETS</h2>
          <p className="fontweight_1 text-blackk/60 fontsize_3 pt-4">
            BORETS is a global leader in the design, manufacturing, and servicing of electric submersible pumping systems for the oil and gas industry.
            Operating across major production basins worldwide, they required a sophisticated design and simulation tool to support their engineering
            teams in selecting, sizing, and monitoring ESP systems for optimal production performance.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">Unlocking Success</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">IDEATION:</h1>
                <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">We designed a unified platform combining well design, ESP sizing, and production simulation, enabling BORETS engineers to move from initial design to performance prediction without switching tools.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">We built a modular calculation engine covering inflow performance, multiphase flow correlations, and ESP curve matching. A real-time data integration layer connects field sensor feeds to the simulation model for live deviation monitoring.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">The tool accelerated ESP design cycles and improved production monitoring accuracy. Real-time simulation deviation alerts enabled proactive intervention before production losses occurred.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Project Outcomes</h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Delivered a fully integrated design and simulation tool covering ESP sizing, inflow modelling, and production monitoring</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Reduced engineering design cycle time through automated sizing calculations and instant performance predictions</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Real-time production deviation alerts enabled proactive field interventions and reduced unplanned downtime</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">Scalable architecture supports both single-well and multi-well portfolio analysis for BORETS global operations</p>
          </div>
        </div>
      </div>
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default Boretsdesignsimtool;
