"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const scadanoralta1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/scadanoralta1.png";
const scadanoralta2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/scadanoralta2.png";
import { GiVirtualMarker } from "react-icons/gi";

function ScadaNoralta() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Engineering Integration with SCADA</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">Development of PLC Information Management System</h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            A PLC-integrated information management system built for Noralta, connecting SCADA infrastructure with
            operational data workflows to deliver real-time visibility and control across field engineering assets.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center grid grid-cols-2 gap-4">
            <img src={scadanoralta1} alt="SCADA Noralta System" className="w-full h-full object-fit rounded-lg"  width="390" height="529" />
            <img src={scadanoralta2} alt="SCADA Noralta Dashboard" className="w-full h-full object-fit rounded-lg"  width="1500" height="753" />
          </div>
        </div>
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Integrating heterogeneous PLC hardware from multiple vendors into a unified SCADA communication layer</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Managing high-frequency real-time data streams from distributed field instruments without data loss</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Providing an intuitive operator interface for monitoring and controlling field equipment remotely</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Ensuring high system availability and failover resilience for critical field operations</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Maintaining cybersecurity standards for OT network connectivity across remote field locations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">About Our Client</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Noralta</h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            Noralta is a Canadian energy services company providing workforce accommodations and integrated field support services to the oil sands
            and resource sectors. They required a robust PLC information management system integrated with their SCADA infrastructure to improve
            operational visibility, reduce manual data entry, and streamline maintenance workflows across remote facilities.
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
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We conceptualised a middleware layer bridging PLC hardware and the SCADA system, enabling standardised data collection, event logging, and operator control across all field assets through a single management interface.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUR APPROACH</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We built an OPC-UA based integration framework connecting diverse PLCs to the SCADA platform, with a real-time data historian, alarm management module, and role-based operator HMI. Redundant communication paths ensured high availability for critical control loops.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUTCOMES</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">The system gave Noralta's operations team unified visibility over all field PLC assets, reducing manual data collection and enabling faster fault response. Centralised alarm management improved operational safety and audit trail compliance.</p>
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
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Delivered a unified PLC information management system integrated with the existing Noralta SCADA infrastructure</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Centralised alarm and event management improved field safety and reduced mean time to respond to incidents</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Eliminated manual data collection workflows, reducing operator workload and transcription errors</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">High-availability architecture ensured continuous operation of critical control systems across remote locations</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Need to Bring Your PLC Data Under One Roof?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about SCADA and PLC information management integration.</p>
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

export default ScadaNoralta;


