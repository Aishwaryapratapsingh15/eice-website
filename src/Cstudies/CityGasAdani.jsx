import React from "react";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const adanigas1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/adanigas1.png";
const adanigas2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/adanigas2.png";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function CityGasAdani() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2 py-2">
            City Gas Distribution
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Construction and Operational Management System
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            Development of a GIS-based real-time construction and operational
            management system for City Gas Distribution in Faridabad, India,
            integrating multiple data sources for comprehensive project
            execution and monitoring.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={adanigas1} alt="City Gas Distribution App" className="w-full h-full object-fit rounded-lg" />
            <img src={adanigas2} alt="City Gas Distribution Dashboard" className="w-full h-full object-fit rounded-lg" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                01
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Implementing real-time construction data updates on a GIS platform
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Integrating diverse data sources (Customer data, Honeywell SCADA, SAP) into a unified GIS system
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Developing a final pipe book in APDM format
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Ensuring seamless data flow between construction, operational, and financial systems
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Creating a scalable solution that could be adapted for other city gas projects, particularly in the Middle East
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
            About Our Client
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Adani Gas
          </h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            Adani Gas Limited is one of India's leading city gas distribution
            companies, supplying natural gas to households, commercial
            establishments, and industries across multiple cities. As part of
            the Adani Group, they are committed to expanding India's gas
            infrastructure and promoting cleaner energy adoption through a
            robust and safe distribution network.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
            Unlocking Success
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    IDEATION:
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">
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
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    OUR APPROACH
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">
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
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    OUTCOMES
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">
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
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              01
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Delivered a real-time gas distribution monitoring dashboard
              covering pressure, flow, and safety metrics across the network
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Automated fault detection and alerting reduced incident response
              time significantly
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Integrated analytics and reporting tools improved regulatory
              compliance and operational decision-making
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Enhanced network-wide visibility resulting in improved safety
              standards and distribution efficiency for Adani Gas
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default CityGasAdani;

