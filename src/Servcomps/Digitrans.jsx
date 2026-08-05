"use client";
import React, { useState, useRef } from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

const dtdigital = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdigital.svg";
const dtdesign = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdesign.svg";
const dtconsulting = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtconsulting.svg";

import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright.jsx";
import TalkToUs from "../Othercomps/Talktous";
import Reviews from "../Homecomps/Reviews";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";


// cs images

const opo = "https://d3r43jacxrwsrp.cloudfront.net/Cs/opo.jpg";
const etp = "https://d3r43jacxrwsrp.cloudfront.net/Cs/etp.jpg";

const adai = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/adai.jpeg";
const ccp = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/ccp.jpg";
const mpo = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/mpo.jpg";

const aipdt = "https://d3r43jacxrwsrp.cloudfront.net/medical/aipdt.jpeg";
const tmp = "https://d3r43jacxrwsrp.cloudfront.net/medical/tmp.jpeg";

const digital = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/digital.png";



const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" },
];

const projects = {
  oil: [
    {
      title: "Offshore Platform Optimization",
      description:
        "Improved production efficiency by 25% through advanced AI-driven monitoring systems.",
        img : opo
        
    , __w: 6000, __h: 4000},
    {
      title: "Energy Trading Platform",
      description:
        "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%.",
        img : etp
    , __w: 1468, __h: 1000},
  ],
  auto: [
    
    {
      title: "Autonomous Driving AI",
      description:
        "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions.",
        img : adai
    , __w: 1200, __h: 800},
    {
      title: "Connected Car Platform",
      description:
        "Designed a cloud-based system enabling OTA updates and predictive maintenance for 100,000+ vehicles.",
    img : ccp
      , __w: 1200, __h: 675},
    {
      title: "Manufacturing Process Optimization",
      description:
        "Implemented an AI-driven system reducing production line downtime by 40% and improving quality control.",
        img :mpo
    , __w: 2075, __h: 916},
  ],
  health: [
    {
      title: "AI-Powered Diagnostic Tool",
      description:
        "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods.",
        img : adai
    , __w: 1200, __h: 800},
    {
      title: "Telemedicine Platform",
      description:
        "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations.",
        img :tmp
    , __w: 1032, __h: 581},
  ],
};


const CaseStudy = ({ title, description, image, __w, __h }) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
       width={__w} height={__h}/>
      <div className="p-3 md:p-4">
        <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  </div>
);

function Cstdmain() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

  return (
    <div className="font-manrope px-5 sm:px-6 lg:px-8 ">
      <h2 className="text-bloo text-center text-xl sm:text-2xl lg:text-3xl fontweight_1 mb-2 sm:mb-4 py-1">
        Case Studies
      </h2>
      <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-7xl py-1 pb-8">
        Explore how we digitally transformed other businesses
      </h1>
      <main className=" mx-auto max-w-7xl">
        <nav className="mb-8 sm:mb-12">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {industries.map((industry) => (
              <li key={industry.id}>
                <button
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${
                    activeIndustry === industry.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {industry.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {industries.map((industry) => (
          <section
            key={industry.id}
            className={`mb-12 px-2 ${
              activeIndustry === industry.id ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">
              {industry.name}
            </h2>
            <div className="flex flex-wrap -mx-2">
              {projects[industry.id].map((project, index) => (
                <CaseStudy
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.img}
                 __w={project.__w} __h={project.__h}/>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function Digitrans() {
  return (
    <div>
      <div className="bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-4">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
          <div className="absolute -z-20 inset-0 right-[75%]">
            <img src={servicebannerpattern} alt=""  width="427" height="426" />
          </div>
          <div className="flex lg:flex-row flex-col px-5 py-12 sm:py-20 items-center">
            <div className="w-full">
              <h1 className="text-blackk  fontweight_1 text-[40px] sm:text-[35px] ">
                Digital Transformation
              </h1>
              <h2 className="text-blackk/70 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-[16px] sm:leading-tight leading-snug text-left">
                {
                  "Revolutionize Your Business  Harness the Power of Digital Transformation for Sustainable Growth"
                }
              </h2>
            </div>
            <div className="lg:flex hidden items-center justify-end ">
              <div className="w-2/5">
                <img src={digital} alt="Digital transformation services" className="rounded-full"  width="2400" height="1412" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-20 lg:py-16">
        <div className="relative font-manrope mx-auto px-5 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h1 className="text-blackk  text-[22px] sm:text-[25px] fontweight_1">
                Embrace the Digital Future
                <span className="text-bloo"> Transformation </span>
                for Competitive Advantage
              </h1>
            </div>
            <div>
              <p className="font-medium text-blackk/70 sm:text-xl text-[16px] ">
                In today's digital landscape, businesses must adapt to stay
                relevant. EICE offers comprehensive digital transformation
                services to propel your organization forward.
              </p>
              <p className="font-medium text-blackk/70 sm:text-xl text-[16px]  py-2">
                Our strategic approach ensures alignment with your objectives,
                combining industry insights and cutting-edge technologies to
                drive meaningful change.
              </p>
              <p className="font-medium text-blackk/70 sm:text-xl text-[16px] ">
                We develop strategies that enhance operational efficiency,
                capabilities, and customer experiences. Partner with EICE to
                navigate the digital revolution and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-4">
        <h1 className="px-5 text-bloo fontweight_1 text-center text-[22px] sm:text-[25px]  py-2">
          Core Competencies
        </h1>
        <h2 className="px-5 text-blackk  fontweight_1 text-center text-[32px] sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Our Digital Transformation Expertise
        </h2>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 sm:pt-8">
          <div className="group p-4 sm:p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className="rounded-full flex items-start w-full">
              <img src={dtdigital} alt=""  width="100" height="100" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl ">
                DIGITAL INNOVATION
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-[16px] ">
                We identify and implement cutting-edge digital solutions to
                drive innovation and create new value streams for your business.
              </p>
            </div>
          </div>
          <div className="group p-4 sm:p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <img src={dtconsulting} alt="" className="scale-[0.85]"  width="100" height="100" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                DATA-DRIVEN INSIGHTS
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-[16px] ">
                We leverage advanced analytics and AI to extract actionable
                insights, enabling data-driven decision-making across your
                organization.
              </p>
            </div>
          </div>
          <div className="group p-4 sm:p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <img src={dtdesign} alt="" className="scale-[0.8]"  width="100" height="100" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                DIGITAL EXPERIENCE DESIGN
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-[16px] ">
                We create seamless, intuitive digital experiences that delight
                users across all devices and platforms, enhancing customer
                engagement and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 pb-16 ">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen pt-8">
          <h1 className="px-5 text-bloo responsiveFont1 text-center">
            Why Choose EICE
          </h1>
          <h2 className="px-5 text-blackk responsiveFont2 text-center px-4 mt-4">
            Key Advantages of Partnering with EICE for Your AI/ML and Generative
            AI Journey
          </h2>
        </div>
        <div className="">
          <div className="relative px-4 font-manrope mx-auto sm:max-w-7xl w-screen pt-16">
            <div className="grid grid-cols-1 gap-10">
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
                <div key={index} className="flex items-start space-x-8 ">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium text-blackk/70 sm:text-xl text-[16px]">
                      <span className="text-blackk fontweight_1 text-lg pt-1 pb-3 sm:text-xl">
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
      <Cstdmain />
      <Reviews />
      <TalkToUs />
      {/* <Footer /> */}
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default Digitrans;

