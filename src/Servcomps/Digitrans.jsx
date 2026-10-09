"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";
const digital = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/digital.png";

import { FiCheckCircle } from "react-icons/fi";

const dtdigital = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdigital.svg";
const dtdesign = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdesign.svg";
const dtconsulting = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtconsulting.svg";

import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";

function Digitrans() {
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
                  Digital Transformation
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Revolutionize Your Business Harness the Power of Digital Transformation for Sustainable Growth
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
               
                  <img src={digital} alt="Digital transformation services" className="rounded-full" width="415" height="1412" />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Embrace the Digital Future
              <span className="text-bloo"> Transformation </span>
              for Competitive Advantage
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's digital landscape, businesses must
                adapt to stay relevant. EICE offers
                comprehensive digital transformation services to
                propel your organization forward.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Our strategic approach ensures alignment with
                your objectives, combining industry insights and
                cutting-edge technologies to drive meaningful
                change.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                We develop strategies that enhance operational
                efficiency, capabilities, and customer
                experiences. Partner with EICE to navigate the
                digital revolution and achieve long-term
                success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Core Competencies</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <img src={dtdigital} alt="" className="w-11 h-11 object-contain" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DIGITAL INNOVATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We identify and implement cutting-edge digital
                solutions to drive innovation and create new
                value streams for your business.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <img src={dtconsulting} alt="" className="w-11 h-11 object-contain" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DATA-DRIVEN INSIGHTS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We leverage advanced analytics and AI to extract
                actionable insights, enabling data-driven
                decision-making across your organization.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <img src={dtdesign} alt="" className="w-11 h-11 object-contain" width="44" height="44" />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DIGITAL EXPERIENCE DESIGN
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We create seamless, intuitive digital
                experiences that delight users across all
                devices and platforms, enhancing customer
                engagement and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F9FF]">
        <div className="relative pt-10 pb-10">
          <div className="max-w-7xl mx-auto px-3 xl:px-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
              Why Choose EICE
            </p>
            <h2 className="sm:max-w-4xl mx-auto font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center pt-4">
              Key Advantages of Partnering with EICE for Your AI/ML and Generative
              AI Journey
            </h2>
            <div className="grid grid-cols-1 gap-10 pt-8 sm:max-w-5xl mx-auto">
              {[
                {
                  title: "Holistic Approach",
                  content:
                    "We offer end-to-end digital transformation solutions, from strategy to implementation and beyond.",
                },
                {
                  title: "Agile Methodologies",
                  content:
                    "Our agile approach ensures flexibility, rapid iterations, and continuous improvement throughout the transformation process.",
                },
                {
                  title: "Collaborative Partnership",
                  content:
                    "We work closely with your team, fostering knowledge transfer and ensuring alignment with your organization's goals.",
                },
                {
                  title: "Industry Expertise",
                  content:
                    "Our team of experts brings deep knowledge across various industries, ensuring tailored solutions for your specific sector.",
                },
                {
                  title: "Innovative Technologies",
                  content:
                    "We leverage cutting-edge technologies like AI, IoT, and blockchain to drive innovation and create competitive advantages.",
                },
                {
                  title: "Proven Track Record",
                  content:
                    "Our successful implementations across various industries demonstrate our ability to deliver tangible results and ROI.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-inter font-normal text-blackk/70 text-[16px] leading-[1.6]">
                      <span className="font-general font-semibold text-blackk">
                        {item.title}:{" "}
                      </span>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="Digital Transformation" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Digitrans;
