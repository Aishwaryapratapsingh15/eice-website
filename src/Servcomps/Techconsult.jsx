"use client";
import {
  FaLightbulb,
  FaChartLine,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaRobot,
  FaProjectDiagram,
} from "react-icons/fa";
import React from "react";
const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";
const consult = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/consulting.jpg";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous.jsx";

function TechnologyConsulting() {
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
                  Technology Consulting Services
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Empowering Businesses with Strategic Technology Solutions
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <img src={consult} alt="Technology consulting and IT strategy services" className="rounded-full" width="415" height="200" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Comprehensive{" "}
              <span className="text-bloo">Technology Consulting</span> :
              Driving Digital Transformation and Innovation
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's rapidly evolving digital landscape,
                leveraging the right technologies is crucial for
                business success. Technology consulting plays a
                vital role in helping organizations navigate
                complex tech ecosystems, make informed
                decisions, and implement solutions that drive
                growth and efficiency.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology, we offer comprehensive
                technology consulting services designed to align
                your IT strategy with your business objectives,
                optimize your technology investments, and
                accelerate your digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Technology Consulting Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Technology Consulting Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaLightbulb size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                TECHNOLOGY STRATEGY AND ROADMAP
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We help you develop a comprehensive technology
                strategy aligned with your business goals,
                creating a clear roadmap for digital
                transformation and innovation initiatives.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaChartLine size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DIGITAL TRANSFORMATION CONSULTING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We guide you through the digital transformation
                process, helping you leverage emerging
                technologies to improve operational efficiency,
                enhance customer experiences, and drive business
                growth.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaCloudUploadAlt size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CLOUD STRATEGY AND MIGRATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide expert guidance on cloud adoption
                strategies, helping you choose the right cloud
                platforms and services, and manage the migration
                of your applications and infrastructure to the
                cloud.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaShieldAlt size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CYBERSECURITY CONSULTING
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We assess your cybersecurity posture, identify
                vulnerabilities, and develop comprehensive
                security strategies to protect your digital
                assets and ensure compliance with industry
                regulations.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaRobot size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                AI AND MACHINE LEARNING IMPLEMENTATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We help you harness the power of AI and machine
                learning technologies, identifying use cases,
                developing proof-of-concepts, and implementing
                AI-driven solutions to enhance decision-making
                and automate processes.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaProjectDiagram size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                IT INFRASTRUCTURE OPTIMIZATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We analyze your current IT infrastructure and
                provide recommendations for optimization,
                helping you improve performance, reduce costs,
                and enhance scalability through modernization
                and best practices implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="Tech Consultancy" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default TechnologyConsulting;
