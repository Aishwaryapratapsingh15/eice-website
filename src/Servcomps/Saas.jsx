"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import {
  MdArchitecture,
  MdChevronLeft,
  MdChevronRight,
  MdIntegrationInstructions,
} from "react-icons/md";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

const dtdigital = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdigital.svg";
const dtdesign = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdesign.svg";
const dtconsulting = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtconsulting.svg";

import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous.jsx";
import Clients from "../Homecomps/Clients.jsx";
import Clientele from "../Homecomps/Clientele.jsx";
import Process from "../Homecomps/Process.jsx";
import { HiSaveAs } from "react-icons/hi";
import { SiConsul, SiMaas } from "react-icons/si";
import { CgSoftwareDownload } from "react-icons/cg";
import { GrCloudSoftware, GrIntegration } from "react-icons/gr";
import { GiTalk } from "react-icons/gi";
import { BiRecycle } from "react-icons/bi";

const saas = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/sass.jpg";

function Saas() {
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
                  SaaS Development
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl text-left">
                  Leading SaaS Development Services: Transforming Ideas into Scalable Software Solutions
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <div className="w-3/4">
                  <img src={saas} alt="SaaS product development and cloud software services" className="rounded-full" width="700" height="394" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Leading{" "}
              <span className="text-bloo">SaaS Development Services</span> :
              Transforming Ideas into Scalable Software Solutions
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In the ever-evolving digital landscape, Software
                as a Service (SaaS) has emerged as a dominant
                model for delivering applications over the
                internet. By offering scalable, accessible, and
                cost-effective software solutions, SaaS enables
                businesses to innovate and grow without the
                complexities of traditional software management.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology we provide comprehensive SaaS
                development services designed to help you create
                powerful, user-friendly applications that meet
                your unique business needs and drive success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our SaaS Development Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GrCloudSoftware size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CUSTOM SaaS APPLICATION DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We specialize in custom SaaS application
                development, handling all stages from concept to
                deployment. Our solutions are scalable, high-
                performance, and tailored to your specific
                business needs.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiTalk size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SaaS PRODUCT STRATEGY AND CONSULTING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Our SaaS product strategy services help define
                your market position, target audience, and
                business model with market research, competitive
                analysis, and growth strategies for SaaS
                success.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdArchitecture size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SaaS PLATFORM DESIGN AND ARCHITECTURE
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We design scalable, secure SaaS platform
                architectures, defining technology stacks,
                database schemas, and infrastructures for multi-
                tenancy, high availability, and performance,
                ensuring growth and adaptability.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiRecycle size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SaaS DEVELOPMENT LIFECYCLE MANAGEMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We manage the entire SaaS development lifecycle,
                from planning and development to testing,
                deployment, and maintenance, using Agile methods
                for iterative development and timely feature
                delivery.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GrIntegration size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SaaS INTEGRATION SERVICES
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer SaaS integration services to connect
                your application with APIs, payment gateways,
                and CRM systems, enhancing functionality,
                streamlining processes, and creating a cohesive
                technology ecosystem.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdIntegrationInstructions size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SaaS MIGRATION SERVICES
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer SaaS migration services for
                transitioning from on-premises solutions to the
                cloud or between platforms, including data
                migration, re-architecture, and testing for
                minimal downtime and data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="SaaS" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Saas;
