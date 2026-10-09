"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const adanigas1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/adanigas1.png";
const adanigas2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/adanigas2.png";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function CityGasAdani() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">City Gas Distribution</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">Construction and Operational Management System</h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            Development of a GIS-based real-time construction and operational
            management system for City Gas Distribution in Faridabad, India,
            integrating multiple data sources for comprehensive project
            execution and monitoring.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center grid grid-cols-2 gap-4">
            <img src={adanigas1} alt="City Gas Distribution App" className="w-full h-full object-fit rounded-lg"  width="517" height="208" />
            <img src={adanigas2} alt="City Gas Distribution Dashboard" className="w-full h-full object-fit rounded-lg"  width="368" height="247" />
          </div>
        </div>
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Key Challenges
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Implementing real-time construction data updates on a GIS platform
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Integrating diverse data sources (Customer data, Honeywell SCADA, SAP) into a unified GIS system
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Developing a final pipe book in APDM format
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Ensuring seamless data flow between construction, operational, and financial systems
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Creating a scalable solution that could be adapted for other city gas projects, particularly in the Middle East
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
            About Our Client
          </p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Adani Gas
          </h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            Adani Gas Limited is one of India's leading city gas distribution
            companies, supplying natural gas to households, commercial
            establishments, and industries across multiple cities. As part of
            the Adani Group, they are committed to expanding India's gas
            infrastructure and promoting cleaner energy adoption through a
            robust and safe distribution network.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-10 pb-10">
<div>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">
            Unlocking Success
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
          <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiVirtualMarker size={44} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col text-start">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                    IDEATION:
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                    We designed a centralized gas distribution analysis
                    platform that consolidates data from across the network,
                    enabling operators to gain real-time visibility into flow
                    rates, pressure levels, and safety parameters throughout
                    Adani Gas's city distribution infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiVirtualMarker size={44} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col text-start">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                    OUR APPROACH
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                    We built a robust data integration layer to connect field
                    sensors and SCADA systems, then developed an intuitive
                    dashboard for monitoring and analysis. The application
                    incorporates automated alerts for anomaly detection and
                    compliance reporting to support safe and efficient
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiVirtualMarker size={44} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col text-start">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                    OUTCOMES
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                    The platform significantly improved operational visibility
                    and safety compliance for Adani Gas. Real-time monitoring
                    and automated fault detection reduced response times, while
                    data-driven analytics empowered management to make informed
                    decisions and optimize distribution efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
        <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Delivered a real-time gas distribution monitoring dashboard
              covering pressure, flow, and safety metrics across the network
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Automated fault detection and alerting reduced incident response
              time significantly
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Integrated analytics and reporting tools improved regulatory
              compliance and operational decision-making
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Enhanced network-wide visibility resulting in improved safety
              standards and distribution efficiency for Adani Gas
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Need Better Visibility Into Your Distribution Network?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about analytics tooling for gas or utility distribution operations.</p>
          <button onClick={() => navigate("/demo-form?product=Oil%20%26%20Gas")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Oil &amp; Gas Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default CityGasAdani;

