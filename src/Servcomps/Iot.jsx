"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import {
  MdArchitecture,
  MdCheckBox,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

const dtdigital = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdigital.svg";
const dtdesign = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdesign.svg";
const dtconsulting = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtconsulting.svg";

import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";
import Process from "../Homecomps/Process.jsx";
import { SiDiscover } from "react-icons/si";
import { GiTalk } from "react-icons/gi";
import { BiCloud, BiCode } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

const iot = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/iot.png";

function Iot() {
  return (
    <div>
      <div className="bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-4">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-3 xl:px-4">
            <div className="absolute -z-20 inset-0 right-[75%]">
              <img src={servicebannerpattern} alt="" width="427" height="426" />
            </div>
            <div className="flex lg:flex-row flex-col py-10 gap-4 items-center">
              <div className="w-full flex flex-col gap-4">
                <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">
                  Internet of Things
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Empowering Businesses with IoT Transformative Connectivity and Innovation
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end ">
             
                <img src={iot} alt="Internet of Things (IoT) services" className="rounded-full"  width="415" height="200" />
              
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Empowering Businesses with{" "}
              <span className="text-bloo">IoT</span> Transformative
              Connectivity and Innovation
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's technologically advanced world,
                businesses across various sectors are
                integrating their equipment and sensors with the
                Internet. This shift towards the Internet of
                Things (IoT) aims to enhance customer
                experiences, optimize energy usage, boost
                productivity, and create new revenue streams.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                The connectivity provided by IoT is
                revolutionizing industries by enabling smarter
                operations and data-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our IOT Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiTalk size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DISCOVERY AND REQUIREMENT GATHERING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We identify and implement cutting-edge digital
                solutions to drive innovation and create new
                value streams for your business.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdArchitecture size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DESIGN AND ARCHITECTURE PLANNING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We leverage advanced analytics and AI to extract
                actionable insights, enabling data-driven
                decision-making across your organization.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdCheckBox size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                PROTOTYPING AND VALIDATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We create seamless, intuitive digital
                experiences that delight users across all
                devices and platforms, enhancing customer
                engagement and loyalty.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiCode size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DEVELOPMENT AND INTEGRATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We develop and integrate intelligent IoT
                solutions that seamlessly connect devices,
                systems, and data, enabling real-time
                monitoring, automation, and smarter decision-
                making across connected environments.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiCloud size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DEPLOYMENT AND IMPLEMENTATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We create seamless, intuitive digital
                experiences that delight users across all
                devices and platforms, enhancing customer
                engagement and loyalty.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BsPerson size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                MAINTENANCE AND SUPPORT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide reliable maintenance and ongoing
                support to keep your IoT solutions secure,
                optimized, and running smoothly, ensuring
                consistent performance, timely issue resolution,
                and long-term system reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="IoT" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Iot;
