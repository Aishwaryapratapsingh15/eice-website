"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const logistics = "https://d3r43jacxrwsrp.cloudfront.net/ai/logistics.jpg";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function LogisticsAi() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Logistics Using AI</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">Transforming Logistics Operations with AI: Enhancing Efficiency and Accuracy</h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            An AI-powered logistics optimisation platform that automates route planning, demand forecasting, and shipment
            tracking, enabling logistics operators to reduce costs, improve delivery accuracy, and respond dynamically
            to supply chain disruptions.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center">
            <img src={logistics} alt="Logistics AI Platform" className="w-full max-h-96 object-cover rounded-lg"  width="96" height="96" />
          </div>
        </div>
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Optimising multi-stop delivery routes across large fleets in real time accounting for traffic and capacity constraints</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Accurately forecasting demand fluctuations to prevent stockouts and overstock situations across the supply chain</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Integrating data from disparate warehouse management, TMS, and ERP systems into a unified operational view</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Detecting and responding to supply chain disruptions including delays, route changes, and capacity shortfalls in real time</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Providing end-to-end shipment visibility to both operations teams and end customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">About the Project</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">AI-Driven Supply Chain Optimisation</h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            The client manages a complex logistics network spanning multiple regions with thousands of daily shipments. Manual planning
            processes were unable to keep pace with volume and variability, leading to inefficient routes, missed delivery windows, and
            high operational costs. They required an AI-driven platform to automate planning, improve delivery accuracy, and provide
            real-time visibility across the entire supply chain.
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
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We designed an AI operations layer that continuously optimises route plans, predicts demand signals, and alerts operators to emerging disruptions, replacing reactive manual planning with a proactive, data-driven workflow.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUR APPROACH</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We built a vehicle routing optimisation engine using constraint-based AI, a demand forecasting module trained on historical shipment patterns, and a real-time tracking dashboard integrating GPS, WMS, and ERP data. Disruption detection algorithms trigger automated re-routing and stakeholder notifications.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUTCOMES</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">The platform significantly reduced fuel and operational costs through optimised routing, improved on-time delivery rates, and gave operations teams real-time visibility to intervene before delays escalate. Demand forecasting accuracy reduced both stockouts and overstock across the network.</p>
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
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Optimised multi-stop routing reduced fuel consumption and vehicle operating costs across the fleet</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Improved on-time delivery rates through AI route planning and real-time disruption response</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Demand forecasting accuracy reduced inventory waste and stockout incidents across the supply chain</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">End-to-end shipment visibility improved customer satisfaction and reduced inbound delivery enquiries</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-full">
            <Link href="/case-studies/voice-call-ai" className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col">
              <div className="h-full">
                <div className="flex flex-col">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">Voice Call Assistant</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Advanced AI Voice Call Assistant Revolutionizing Customer Interaction</p>
<span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">Explore More <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-full">
            <Link href="/case-studies/sentimental-ai" className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col">
              <div className="h-full">
                <div className="flex flex-col">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">Product Review Sentiment Analysis</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Enhancing Product Insights with AI-Powered Sentiment Analysis</p>
<span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">Explore More <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-full">
            <Link href="/case-studies/inventory-ai" className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col">
              <div className="h-full">
                <div className="flex flex-col">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">Inventory Management Using AI</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Revolutionizing Inventory Management with AI</p>
<span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">Explore More <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Ready to Automate Your Dispatch Decisions?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about AI-driven logistics and operations automation.</p>
          <button onClick={() => navigate("/demo-form?product=Logistics")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Logistics Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}

export default LogisticsAi;


