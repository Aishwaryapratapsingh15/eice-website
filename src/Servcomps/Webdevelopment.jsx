"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import {
  MdChevronLeft,
  MdChevronRight,
  MdDesignServices,
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
import TalkToUs from "../Othercomps/Talktous";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";
import Process from "../Homecomps/Process.jsx";
import { BiCode, BiShoppingBag, BiSupport } from "react-icons/bi";
import { PiMonitorDuotone } from "react-icons/pi";
import { CiMonitor } from "react-icons/ci";
import { LuMonitor } from "react-icons/lu";
import { CgDesignmodo } from "react-icons/cg";
import { FaPeopleArrows } from "react-icons/fa";

const web = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/web.png";

function Webdevelopment() {
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
                  Web App Development
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Cutting-Edge Web App Development Services Transforming Ideas into High-Impact Digital Solutions
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <div className="lg:w-7/12 w-1/2">
                  <img src={web} alt="Web application development services" className="rounded-full" width="980" height="634" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Cutting-Edge{" "}
              <span className="text-bloo">Web App Development Services</span>{" "}
              Transforming Ideas into High Impact Digital Solutions
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In an era where digital presence is crucial for
                business success, web applications have become a
                key component of a company's strategy. A well-
                designed web app can drive user engagement,
                streamline operations, and boost growth.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology we offer comprehensive web
                app development services that combine
                innovation, technology, and user-centric design
                to deliver exceptional digital solutions. Our
                team of experts is dedicated to creating web
                applications that not only meet but exceed
                client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Web App Development Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiCode size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CUSTOM WEB APP DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We build custom web applications tailored to
                your needs, from vision to deployment, covering
                design, development, and integration to create
                unique, goal-oriented solutions for a
                competitive market.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiShoppingBag size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                E-COMMERCE WEB APP DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                In the competitive e-commerce landscape, we
                create user-friendly, feature-rich online stores
                with appealing storefronts, secure payment
                gateways, and advanced management features for a
                seamless shopping experience.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <LuMonitor size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                PROGRESSIVE WEB APP (PWA) DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We develop Progressive Web Apps (PWAs) that
                blend web and mobile features for a fast,
                reliable, engaging experience, with offline
                capabilities, push notifications, and cross-
                platform compatibility.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdDesignServices size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                WEB APP DESIGN AND UX
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                A great web app begins with exceptional design.
                Our team creates intuitive, visually appealing
                interfaces that enhance user engagement,
                ensuring easy navigation and a seamless
                experience across devices.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiSupport size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                MAINTENANCE AND SUPPORT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Post-launch maintenance ensures your web app's
                success. We offer updates, bug fixes,
                performance optimization, and support to keep
                your app secure, efficient, and current with
                industry trends.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdIntegrationInstructions size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                INTEGRATION AND MIGRATION SERVICES
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We integrate web apps with APIs for payment
                gateways, CRM, and social media, while offering
                expert migration services for smooth transitions
                to new platforms, servers, or the cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="Web Development" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Webdevelopment;
