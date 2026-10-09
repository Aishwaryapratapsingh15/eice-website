"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import { MdCheckBox, MdChevronLeft, MdChevronRight } from "react-icons/md";

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
import { SiConsul } from "react-icons/si";
import { FaHandshake, FaPeopleArrows } from "react-icons/fa";
import { BiQuestionMark, BiUser } from "react-icons/bi";
import { IoInformation } from "react-icons/io5";
import { GiWireframeGlobe } from "react-icons/gi";

const uiux = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/uiux.jpg";

function Uiux() {
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
                  UI/UX Services
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Comprehensive UI/UX Consulting Services Enhancing User Experience and Engagement
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <img src={uiux} alt="UI/UX design and consulting services" className="rounded-full" width="415" height="200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Comprehensive <span className="text-bloo">UI/UX</span>{" "}
              Enhancing User Experience and Engagement
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's competitive digital landscape,
                delivering exceptional user experiences is
                crucial for retaining customers, driving
                engagement, and achieving business success.
                UI/UX consulting plays a pivotal role in
                understanding user needs, optimizing interfaces,
                and creating intuitive designs that enhance
                usability.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology, we offer a comprehensive
                suite of UI/UX consulting services designed to
                ensure the effectiveness, appeal, and user-
                friendliness of your digital products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our UI/UX Services</p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaPeopleArrows size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                UI/UX STRATEGY AND CONSULTING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide expert consulting services to help
                you develop a robust UI/UX strategy. Our team
                works closely with you to understand your
                business objectives, user needs, and market
                trends, creating a roadmap for successful
                implementation.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BiUser size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                USER RESEARCH AND ANALYSIS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We conduct extensive user research and analysis
                to gain deep insights into user behavior,
                preferences, and pain points. Our methods
                include surveys, interviews, usability testing,
                and analytics to inform data-driven design
                decisions.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <IoInformation size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                INFORMATION ARCHITECTURE
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We design clear and intuitive information
                architectures that organize content logically,
                making it easy for users to find information and
                navigate your digital products. Our approach
                ensures a seamless and efficient user journey.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiWireframeGlobe size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                WIREFRAMING AND PROTOTYPING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We create detailed wireframes and interactive
                prototypes to visualize the structure and
                functionality of your digital products. This
                allows for early testing and feedback, ensuring
                that the final design meets user expectations
                and business goals.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdCheckBox size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                UI / UX AUDITS AND REVIEWS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We conduct detailed UI/UX audits and reviews to
                assess the current state of your digital
                products. Our evaluations identify areas for
                improvement and provide strategic
                recommendations to enhance the overall user
                experience.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaHandshake size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CONTINUOUS IMPROVEMENT AND SUPPORT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer ongoing support and continuous
                improvement services to ensure that your UI/UX
                design evolves with user needs and market
                trends. Our team provides regular updates,
                enhancements, and optimizations to keep your
                digital products at the forefront of user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="UI/UX" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Uiux;
