import React from "react";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const logistics = "https://d3r43jacxrwsrp.cloudfront.net/ai/logistics.jpg";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function LogisticsAi() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h2 className="text-bloo fontweight_1 text-center fontsize_2 py-2">Logistics Using AI</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Transforming Logistics Operations with AI: Enhancing Efficiency and Accuracy
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            An AI-powered logistics optimisation platform that automates route planning, demand forecasting, and shipment
            tracking, enabling logistics operators to reduce costs, improve delivery accuracy, and respond dynamically
            to supply chain disruptions.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4">
            <img src={logistics} alt="Logistics AI Platform" className="w-full max-h-96 object-cover rounded-lg"  width="96" height="96" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Optimising multi-stop delivery routes across large fleets in real time accounting for traffic and capacity constraints</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Accurately forecasting demand fluctuations to prevent stockouts and overstock situations across the supply chain</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Integrating data from disparate warehouse management, TMS, and ERP systems into a unified operational view</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Detecting and responding to supply chain disruptions including delays, route changes, and capacity shortfalls in real time</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">05</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Providing end-to-end shipment visibility to both operations teams and end customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">About the Project</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">AI-Driven Supply Chain Optimisation</h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            The client manages a complex logistics network spanning multiple regions with thousands of daily shipments. Manual planning
            processes were unable to keep pace with volume and variability, leading to inefficient routes, missed delivery windows, and
            high operational costs. They required an AI-driven platform to automate planning, improve delivery accuracy, and provide
            real-time visibility across the entire supply chain.
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
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We designed an AI operations layer that continuously optimises route plans, predicts demand signals, and alerts operators to emerging disruptions, replacing reactive manual planning with a proactive, data-driven workflow.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We built a vehicle routing optimisation engine using constraint-based AI, a demand forecasting module trained on historical shipment patterns, and a real-time tracking dashboard integrating GPS, WMS, and ERP data. Disruption detection algorithms trigger automated re-routing and stakeholder notifications.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">The platform significantly reduced fuel and operational costs through optimised routing, improved on-time delivery rates, and gave operations teams real-time visibility to intervene before delays escalate. Demand forecasting accuracy reduced both stockouts and overstock across the network.</p>
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
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Optimised multi-stop routing reduced fuel consumption and vehicle operating costs across the fleet</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Improved on-time delivery rates through AI route planning and real-time disruption response</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Demand forecasting accuracy reduced inventory waste and stockout incidents across the supply chain</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">End-to-end shipment visibility improved customer satisfaction and reduced inbound delivery enquiries</p>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <div className="max-w-7xl mx-auto" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/voice-call-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Voice Call Assistant</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Advanced AI Voice Call Assistant Revolutionizing Customer Interaction</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/sentimental-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Product Review Sentiment Analysis</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Enhancing Product Insights with AI-Powered Sentiment Analysis</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/inventory-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Inventory Management Using AI</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Revolutionizing Inventory Management with AI</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default LogisticsAi;


