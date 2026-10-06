"use client";
import React from "react";
import {
  FaCloud,
  FaCode,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";
const devops = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/devops.jpg";

import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous.jsx";

function DevOps() {
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
                  DevOps Services
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl text-left">
                  Streamlining Development and Operations for Accelerated Business Growth
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                
                  <img src={devops} alt="DevOps services for streamlined development and operations" className="rounded-full" width="415" height="300" />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Comprehensive <span className="text-bloo">DevOps</span>{" "}
              Bridging the Gap Between Development and Operations
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's fast-paced digital landscape, DevOps
                practices are essential for businesses to
                deliver high-quality software rapidly and
                efficiently. DevOps services play a crucial role
                in automating processes, improving
                collaboration, and ensuring continuous delivery
                and integration across the software development
                lifecycle.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology, we offer a comprehensive
                suite of DevOps services designed to streamline
                your development and operations processes,
                accelerate time-to-market, and enhance overall
                software quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our DevOps Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaCloud size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CLOUD INFRASTRUCTURE MANAGEMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide expert cloud infrastructure
                management services, helping you optimize your
                cloud resources, implement Infrastructure as
                Code (IaC), and ensure scalability and
                reliability of your applications.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaCode size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CONTINUOUS INTEGRATION AND DELIVERY (CI/CD)
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We design and implement robust CI/CD pipelines
                to automate your software delivery process,
                enabling faster releases, improved code quality,
                and reduced time-to-market.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaCogs size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CONFIGURATION MANAGEMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We implement efficient configuration management
                practices using tools like Ansible, Puppet, or
                Chef to ensure consistency across your
                infrastructure and applications.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaRocket size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CONTAINERIZATION AND ORCHESTRATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We leverage containerization technologies like
                Docker and orchestration platforms like
                Kubernetes to enhance application portability,
                scalability, and resource efficiency.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaChartLine size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                MONITORING AND PERFORMANCE OPTIMIZATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We implement comprehensive monitoring solutions
                and performance optimization strategies to
                ensure your applications run efficiently and
                issues are detected and resolved proactively.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaShieldAlt size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DEVSECOPS IMPLEMENTATION
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We integrate security practices into your DevOps
                processes, implementing DevSecOps to ensure that
                security is a core consideration throughout the
                development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="DevOps" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default DevOps;
