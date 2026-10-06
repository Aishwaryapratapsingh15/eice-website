"use client";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  FaMapMarkedAlt,
  FaDatabase,
  FaGlobe,
  FaSatellite,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";
const gis = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/gis.jpg";

import { FiCheckCircle } from "react-icons/fi";

const dtdigital = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdigital.svg";
const dtdesign = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdesign.svg";
const dtconsulting = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtconsulting.svg";

import TalkToUs from "../Othercomps/Talktous.jsx";
import Clients from "../Homecomps/Clients.jsx";
import Clientele from "../Homecomps/Clientele.jsx";
import Process from "../Homecomps/Process.jsx";

function GIS() {
  return (
    <div>
      <div className="bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-4">
        <div className="relative px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="max-w-7xl mx-auto">
            <div className="absolute -z-20 inset-0 right-[75%]">
              <img src={servicebannerpattern} alt="" width="427" height="426" />
            </div>
            <div className="flex lg:flex-row flex-col py-10 gap-4 items-center">
              <div className="w-full flex flex-col gap-4">
                <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">
                  GIS Services
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl text-left">
                  Comprehensive GIS Solutions: Transforming Spatial Data into Actionable Insights
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <img src={gis} alt="Geographic Information Systems (GIS) services" className="rounded-full" width="415" height="200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Comprehensive <span className="text-bloo">GIS Services</span> :
              Leveraging Spatial Intelligence for Business Success
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's data-driven world, Geographic
                Information Systems (GIS) are crucial for
                businesses to gain spatial insights, make
                informed decisions, and optimize operations. GIS
                services play a vital role in analyzing
                geographic data, creating interactive maps, and
                providing location-based intelligence across
                various industries.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology, we offer a comprehensive
                suite of GIS services designed to harness the
                power of spatial data and transform it into
                actionable insights for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our GIS Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our GIS Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaMapMarkedAlt size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SPATIAL ANALYSIS AND MAPPING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide advanced spatial analysis and custom
                mapping solutions to help you visualize and
                interpret complex geographical data, enabling
                better decision-making and strategic planning.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaDatabase size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                GIS DATABASE MANAGEMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer comprehensive GIS database management
                services, including data collection,
                integration, and maintenance, ensuring your
                spatial data is accurate, up-to-date, and easily
                accessible.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaGlobe size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                WEB GIS DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We develop custom web-based GIS applications
                that allow you to share interactive maps and
                spatial data across your organization or with
                the public, enhancing collaboration and
                engagement.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaSatellite size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                REMOTE SENSING AND IMAGERY ANALYSIS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide expert remote sensing services,
                including satellite and aerial imagery analysis,
                to extract valuable information for
                environmental monitoring, urban planning, and
                resource management.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaChartLine size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                GEOSPATIAL BUSINESS INTELLIGENCE
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We integrate GIS with business intelligence
                tools to provide location-based insights,
                helping you uncover patterns, trends, and
                opportunities that drive business growth and
                efficiency.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaRobot size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                AI AND MACHINE LEARNING IN GIS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We leverage AI and machine learning technologies
                to enhance GIS capabilities, enabling advanced
                predictive modeling, automated feature
                extraction, and intelligent spatial analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="GIS" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default GIS;
