"use client";
import React from "react";

const ai = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/ai.png";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";

import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous";
import Process from "../Homecomps/Process";

import { FaLightbulb } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GrVirtualMachine } from "react-icons/gr";
import { FiCheckCircle } from "react-icons/fi";

function Aiml() {
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
                  Generative AI and Machine Learning
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Revolutionize Your Business Harness the Power of AI for Sustainable Growth
                </p>
              </div>
              <div className="lg:flex hidden items-center justify-end">
                <div className="w-1/2">
                  <img src={ai} alt="Artificial intelligence and machine learning services" className="rounded-full" width="1280" height="720" />
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
              Embrace the AI Future
              <span className="text-bloo"> Innovation </span>
              for Competitive Advantage
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In today's rapidly evolving AI landscape, businesses must adapt
                to stay relevant. At EICE, we offer comprehensive AI/ML and
                generative AI services to propel your organization into the
                future.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Our strategic approach ensures alignment with your business
                objectives. Our experts combine industry insights with
                cutting-edge AI technologies to implement solutions that drive
                meaningful change.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                We develop AI strategies that not only meet your goals but also
                enhance operational efficiency, capabilities, and customer
                experiences. Partner with EICE to navigate the AI revolution and
                achieve long-term success in the age of artificial
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Process />

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Core Competencies</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <FaLightbulb size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">AI INNOVATION</h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We identify and implement cutting-edge digital solutions to drive innovation and create new value streams for your business.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <LuBrainCircuit size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">MACHINE LEARNING INSIGHTS</h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We leverage advanced analytics and AI to extract actionable insights, enabling data-driven decision-making across your organization.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GrVirtualMachine size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">GENERATIVE AI SOLUTIONS</h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We create seamless, intuitive digital experiences that delight users across all devices and platforms, enhancing customer engagement and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50">
        <div className="relative pt-10 pb-10">
          <div className="max-w-7xl mx-auto px-3 xl:px-4">
            <div className="flex flex-col gap-4">
              <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Why Choose EICE</p>
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-4xl">
                Key Advantages of Partnering with EICE for Your AI/ML and
                Generative AI Journey
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
              {[
                {
                  title: "Holistic Approach",
                  content:
                    "We offer end-to-end AI solutions, from strategy to implementation and beyond.",
                },
                {
                  title: "State-of-the-Art AI Models",
                  content:
                    "Our approach leverages the latest AI models and techniques, ensuring cutting-edge solutions for your business challenges.",
                },
                {
                  title: "Collaborative Partnership",
                  content:
                    "We work closely with your team, fostering AI knowledge transfer and ensuring alignment with your organization's goals.",
                },
                {
                  title: "AI Industry Expertise",
                  content:
                    "Our team of AI experts brings deep knowledge across various industries, ensuring tailored AI solutions for your specific sector.",
                },
                {
                  title: "Innovative AI Technologies",
                  content:
                    "We leverage cutting-edge AI technologies like deep learning, natural language processing, and computer vision to drive innovation and create competitive advantages.",
                },
                {
                  title: "Proven AI Track Record",
                  content:
                    "Our successful AI implementations across various industries demonstrate our ability to deliver tangible results and ROI.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
                >
                  <div className="mb-[19px] text-bloo flex items-center">
                    <FiCheckCircle size={44} />
                  </div>
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.title}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="AI/ML" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Aiml;
