"use client";
import React, { useEffect } from "react";
import { Link } from "@/nextNavigation";
import ServicesGrid from "./ServicesGrid";

import { FaLaptopCode, FaPencilRuler, FaPeopleArrows } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { GrCloudSoftware } from "react-icons/gr";
import { IoIosBuild, IoIosChatboxes } from "react-icons/io";
import { LuBrainCircuit, LuCloudCog } from "react-icons/lu";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbLetterA, TbLetterI } from "react-icons/tb";

function Servmain() {
  useEffect(() => {
    const scrollTo = new URLSearchParams(window.location.search).get("scrollTo");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div>
      <div className="relative px-4 md:px-10 lg:px-20 xl:px-40 pt-32 sm:pt-32 2xl:pt-8 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Services</p>
          <h1 className="font-general font-semibold text-blackk text-left sm:text-center text-[32px] sm:text-[44px] leading-[1.1] mx-auto max-w-3xl">
            Explore What We Offer
          </h1>
          <div className="w-full rounded-xl max-w-screen-2xl mx-auto block">
            <div className="bg-indusbanner w-full h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-2xl sm:rounded-full"></div>
          </div>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl mx-auto text-left sm:text-center">
            At EICE, we offer a comprehensive suite of tech services designed to
            propel your business into the digital future. From cutting-edge app
            development to strategic consultancy, we're here to transform your
            ideas into reality.
          </p>
        </div>
      </div>
      <ServicesGrid />

      <div id="flagshipServices"></div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="relative px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Flagship Services</h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl mx-auto text-left sm:text-center">
                Discover EICE's core offerings that drive innovation and efficiency across industries. Our flagship services are designed to give your business a competitive edge in the digital landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <Link
                to="/services/digital-transformation"
                className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
              >
                <div className="mb-[19px] text-bloo flex items-center"><LuCloudCog size={44} /></div>
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                  DIGITAL TRANSFORMATION
                </h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                  Revolutionize your business with EICE's digital transformation services. We help you leverage cutting-edge technologies to streamline operations, enhance customer experiences, and drive growth.
                </p>
                <div className="mt-auto pt-[18px]">
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                    Explore More
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                  </span>
                </div>
              </Link>
              <Link
                to="/services/devops"
                className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
              >
                <div className="mb-[19px] text-bloo flex items-center"><IoIosBuild size={44} /></div>
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                  DEVOPS
                </h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                  Accelerate your software delivery with EICE's DevOps solutions. We integrate development and operations to improve collaboration, increase efficiency, and deliver high-quality software faster.
                </p>
                <div className="mt-auto pt-[18px]">
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                    Explore More
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                  </span>
                </div>
              </Link>
              <Link
                to="/services/ai-ml"
                className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
              >
                <div className="mb-[19px] text-bloo flex items-center">
                  <div className="flex">
                    <TbLetterA size={44} />
                    <TbLetterI size={44} className="-ml-7" />
                  </div>
                </div>
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                  GENERATIVE AI
                </h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                  Harness the power of AI with EICE's generative AI solutions. We develop custom AI models that can create content, generate ideas, and solve complex problems, giving your business a significant competitive advantage.
                </p>
                <div className="mt-auto pt-[18px]">
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                    Explore More
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex justify-center pt-8">
              <Link to="/services/flagship-services" className="inline-flex items-center gap-2 border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-[18px] font-semibold">
                View More
                <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" className="w-[24px] h-[24px] object-contain" width="24" height="24" style={{ filter: "brightness(0) saturate(100%) invert(11%) sepia(60%) saturate(800%) hue-rotate(200deg)" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="emergingTechnologies"></div>
      <div className="relative px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Emerging Technologies</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl mx-auto text-left sm:text-center">
              Stay ahead of the curve with EICE's expertise in cutting-edge technologies. We help businesses leverage the latest innovations to create new opportunities and drive unprecedented growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <Link
              to="/services/ai-ml"
              className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
            >
              <div className="mb-[19px] text-bloo flex items-center"><LuBrainCircuit size={44} /></div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                AI & ML
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Unlock the potential of your data with our AI and Machine Learning solutions. EICE helps you implement intelligent systems that learn and improve over time.
              </p>
              <div className="mt-auto pt-[18px]">
                <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                  Explore More
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                </span>
              </div>
            </Link>
            <Link
              to="/services/iot"
              className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
            >
              <div className="mb-[19px] text-bloo flex items-center"><GiCircuitry size={44} /></div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                INTERNET OF THINGS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Connect your devices and gather valuable data with EICE's IoT solutions. We help you create smart, interconnected systems that drive efficiency and innovation.
              </p>
              <div className="mt-auto pt-[18px]">
                <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                  Explore More
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                </span>
              </div>
            </Link>
            <Link
              to="/services/blockchain"
              className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
            >
              <div className="mb-[19px] text-bloo flex items-center"><SiBlockchaindotcom size={44} /></div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                BLOCKCHAIN DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                Enhance security and transparency with EICE's blockchain solutions. We develop decentralized applications and smart contracts tailored to your business needs.
              </p>
              <div className="mt-auto pt-[18px]">
                <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                  Explore More
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50" id="appDevelopment">
        <div className="relative px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">App Development Services</h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl mx-auto text-left sm:text-center">
                From mobile apps to complex enterprise solutions, EICE delivers cutting-edge software tailored to your unique business needs. Our expert developers use the latest technologies to create powerful, user-friendly applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <Link
                to="/services/saas"
                className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
              >
                <div className="mb-[19px] text-bloo flex items-center"><GrCloudSoftware size={44} /></div>
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                  SAAS DEVELOPMENT
                </h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                  Transform your software into a scalable service with EICE's SAAS development. We build cloud-based applications that offer flexibility and accessibility to your customers.
                </p>
                <div className="mt-auto pt-[18px]">
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                    Explore More
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                  </span>
                </div>
              </Link>
              <Link
                to="/services/web-development"
                className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
              >
                <div className="mb-[19px] text-bloo flex items-center"><FaLaptopCode size={44} /></div>
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                  WEB APP DEVELOPMENT
                </h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                  Create powerful web applications with EICE. We develop responsive, feature-rich web apps that work seamlessly across all devices and platforms.
                </p>
                <div className="mt-auto pt-[18px]">
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                    Explore More
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                  </span>
                </div>
              </Link>
              <Link
                to="/services/chatbot"
                className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
              >
                <div className="mb-[19px] text-bloo flex items-center"><IoIosChatboxes size={44} /></div>
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                  CHAT BOT DEVELOPMENT
                </h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                  Enhance customer service with EICE's chatbot solutions. We create intelligent, conversational AI bots that can handle queries, automate tasks, and improve user engagement.
                </p>
                <div className="mt-auto pt-[18px]">
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                    Explore More
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex justify-center pt-8">
              <Link to="/services/app-development" className="inline-flex items-center gap-2 border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-[18px] font-semibold">
                View More
                <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" className="w-[24px] h-[24px] object-contain" width="24" height="24" style={{ filter: "brightness(0) saturate(100%) invert(11%) sepia(60%) saturate(800%) hue-rotate(200deg)" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="consultancy" className="relative px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Consultancy Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            <Link
              to="/services/tech-consultancy"
              className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
            >
              <div className="mb-[19px] text-bloo flex items-center"><FaPeopleArrows size={44} /></div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                App Consulting
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                EICE provides expert guidance on app strategy, development, and optimization. Our consultants help you make informed decisions about technology stack, user experience, and market positioning to ensure your app's success.
              </p>
              <div className="mt-auto pt-[18px]">
                <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                  Explore More
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                </span>
              </div>
            </Link>
            <Link
              to="/services/ui-ux"
              className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
            >
              <div className="mb-[19px] text-bloo flex items-center"><FaPencilRuler size={44} /></div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                UI/UX Consulting
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                EICE offers specialized UI/UX consulting services to enhance your digital products. Our experts provide insights on user interface design and user experience. We help you create ensure your product stands out in the market and delivers exceptional user satisfaction.
              </p>
              <div className="mt-auto pt-[18px]">
                <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                  Explore More
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Servmain;
