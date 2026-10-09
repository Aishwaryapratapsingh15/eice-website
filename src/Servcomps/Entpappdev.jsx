"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import { MdArchitecture, MdChevronLeft, MdChevronRight } from "react-icons/md";

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
import { BiCloud, BiCode } from "react-icons/bi";
import { TiArrowSync } from "react-icons/ti";
import { BsPerson } from "react-icons/bs";
import { GrVirtualMachine } from "react-icons/gr";

const enterprise = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/enterpise.jpg";

function Entpappdev() {
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
                  Enterprise App Development
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Comprehensive App Development Services: Unlocking Your Digital Potential
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <div className="w-7/12">
                  <img src={enterprise} alt="Enterprise application development services" className="rounded-full" width="1024" height="603" />
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
              Comprehensive App Development Services :{" "}
              <span className="text-bloo">Unlocking Your Digital Potential</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                EICE Technology specialize in delivering
                comprehensive mobile and desktop app development
                services designed to transform your ideas into
                innovative and user-centric applications. Our
                team of experts provides end-to-end solutions,
                including strategic design, robust development,
                and ongoing maintenance and support.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                We cater to a broad range of platforms,
                including iOS, Android, Windows, and macOS,
                ensuring that your app achieves optimal
                performance and meets your specific business
                objectives. Partner with us to develop
                exceptional apps that drive success and stand
                out in todays competitive market.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our App Development Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiCode size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CUSTOM APP DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Specializing in custom mobile and desktop app
                development, we deliver innovative, scalable
                solutions from concept to creation, meeting your
                unique business needs and objectives.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdArchitecture size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                UI/UX DESIGN
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We focus on creating intuitive, visually
                engaging UI/UX designs that attract users, drive
                satisfaction, and ensure positive interactions
                with your application through audience
                understanding.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <TiArrowSync size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CROSS-PLATFORM DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Providing cross-platform development to ensure
                your app functions seamlessly on iOS, Android,
                Windows, and macOS, utilizing the latest
                technologies for a consistent and efficient user
                experience.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BsPerson size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                APP MAINTENANCE AND SUPPORT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer comprehensive app maintenance and
                support services to keep your application up-to-
                date, secure, and performing well, including
                regular updates, bug fixes, and technical
                support.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GrVirtualMachine size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                APP INTEGRATION AND TESTING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Handling app integration with existing systems,
                we perform rigorous testing for functionality,
                performance, and security, ensuring components
                work harmoniously and resolving issues for a
                smooth launch.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiCloud size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                STRATEGY, DEPLOYMENT AND ANALYTICS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Our team develops deployment strategies and
                provides performance analytics to set
                objectives, track metrics, and drive future app
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="Enterprise App Development" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Entpappdev;
