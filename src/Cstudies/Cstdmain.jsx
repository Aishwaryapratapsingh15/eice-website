"use client";
import React, { useState, useRef } from "react";
import { Link } from "@/nextNavigation";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";

import Cookies from "js-cookie";

// petroleum
const reli = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/reli.jpeg";
const petrosim = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/petrosim.jpeg";
const espct = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/ESPCT.jpg";
const cgd = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/cgd.jpg";
const simul = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/simul.jpg";
const dmg = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/dmg.jpg";
const scada = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/scada.jpg";
const femms = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/FEMMS.jpeg";
const bsa = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/bsa.jpeg";
const ogpd = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/ogpd.png";
const espDesign = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/ESPDesignAnalysis.jpeg";
const subsurfaceWorkflow = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Sub-surface_workflows_orchestration_hero_image.png";


// automobile
const evbm = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/evbm.jpg";
const adai = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/adai.jpeg";
const ccp = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/ccp.jpg";
const mpo = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/mpo.jpg";

// medical
const aipdt = "https://d3r43jacxrwsrp.cloudfront.net/medical/aipdt.jpeg";
const tmp = "https://d3r43jacxrwsrp.cloudfront.net/medical/tmp.jpeg";

// ai anmd ml

const AiLogistics = "https://d3r43jacxrwsrp.cloudfront.net/ai/logistics.jpg";
const AiInventory = "https://d3r43jacxrwsrp.cloudfront.net/ai/inventry.jpg";
const AiVoice = "https://d3r43jacxrwsrp.cloudfront.net/ai/voice.jpg";
const AiSentiments = "https://d3r43jacxrwsrp.cloudfront.net/ai/sentiments.jpg";

// legal
const legalIntake = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/legal-intake-matter-management-automation-us-law-firms.png";
const referralAgreementCompliance = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/referral-agreement-automation-digital-signatures-us-law-firms.png";



const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "gis" },
  // { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" },
  // { name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", id: "AiandMl" },
  { name: "AI And ML", id: "AiandMl" },
  { name: "LEGAL INDUSTRY", id: "legal" },
];

const projects = {
  gis: [
    {
      title: "RE.LI Monitor",
      description: "Developed a Real Time Sensor monitoring tool using SCADA.",
      link: "/case-studies/relimonitor",
      img :reli
      
    , __w: 1024, __h: 740},
    {
      title: "PetroSIM",
      description:
        "Comprehensive quality assurance and simulation tool for refinery operations.",
      link: "/case-studies/petro-sim",
      img : petrosim
    , __w: 1920, __h: 1282},
    {
      title: "ESPCT Quote",
      description: "Web Based Sales and Quotation Tool",
      link: "/case-studies/espct-quote",
      img : espct
    , __w: 960, __h: 640},
    {
      title: "City Gas Distribution",
      description: "Gas Distribution Analysis App for Adani Gas",
      link: "/case-studies/city-gas-adani",
      img : cgd
    , __w: 871, __h: 613},
    {
      title: "SimuLIFT",
      description:
        "Development of Quote & Sizing Tools for Artificial Lift Methods",
      link: "/case-studies/simu-lift",
      img : simul
    , __w: 1000, __h: 562},
    {
      title: "E&P Data Management on GIS",
      description:
        "An Integrated Exploration & Production Data Management System",
      link: "/case-studies/epgis",
      img : dmg
    , __w: 1000, __h: 668},
    {
      title: "Engineering Integration with SCADA",
      description: "Development of PLC Information Management System",
      link: "/case-studies/noralta-scada",
      img : scada
    , __w: 800, __h: 534},
    {
      title: "FEMMS",
      description:
        "Development of Fugitive Emission Monitoring, Estimation & Management System (FEMMS)",
      link: "/case-studies/noralta-femms",
      img : femms
    , __w: 1920, __h: 1280},
    {
      title: "Business Analytics Automation",
      description:
        "Development of Tool for Monitoring of Petroleum Financial Models",
      link: "/case-studies/schlumberger-baa",
      img : bsa
    , __w: 612, __h: 408},
    {
      title: "Oil & Gas Product Development",
      description:
        "Development of Design & Simulation Tool for Production Monitoring in Oil and Gas Industry for BORETS",
      link: "/case-studies/design-sim-borets",
      img : ogpd
    , __w: 2048, __h: 1366},
    {
      title: "ESP Design & Analysis Software",
      description:
        "Cloud-based ESP Design & Analysis Software platform modernizing engineering workflows for a global ESP manufacturer.",
      link: "/case-studies/esp-design-analysis",
      img : espDesign
    , __w: 1431, __h: 806},
    {
      title: "Subsurface Workflow Orchestration",
      description:
        "Automated orchestration connecting reservoir simulation and surface network models within an Integrated Asset Modelling platform.",
      link: "/case-studies/subsurface-workflow-orchestration",
      img : subsurfaceWorkflow
    , __w: 1672, __h: 941},
  ],
  // oil: [
  //   { title: "Offshore Platform Optimization", description: "Improved production efficiency by 25% through advanced AI-driven monitoring systems." },
  //   { title: "Pipeline Leak Detection System", description: "Reduced environmental risks with real-time leak detection, cutting response time by 60%." },
  //   { title: "Refinery Process Auto mation", description: "Implemented IoT sensors and machine learning to optimize refining processes, saving $5M annually." },
  //   { title: "Seismic Data Analysis Tool", description: "Developed a cloud-based platform for faster seismic data processing, reducing analysis time by 40%." },
  //   { title: "Predictive Maintenance Solution", description: "Created an AI model to predict equipment failures, reducing downtime by 30% and maintenance costs by $2M." },
  //   { title: "Smart Well Management", description: "Designed a real-time well monitoring system, increasing production by 15% across 500 wells." },
  //   { title: "Energy Trading Platform", description: "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%." }
  // ],
  auto: [
    {
      title: "Electric Vehicle Battery Management",
      description:
        "Developed an advanced BMS increasing EV range by 12% and battery lifespan by 2 years.",
        img : evbm
    , __w: 1920, __h: 1080},
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
        img : mpo
    , __w: 2075, __h: 916},
  ],
  health: [
    {
      title: "AI-Powered Diagnostic Tool",
      description:
        "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods.",
        img : aipdt
    , __w: 1400, __h: 787},
    {
      title: "Telemedicine Platform",
      description:
        "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations.",
        img : tmp
    , __w: 1032, __h: 581},
  ],

  AiandMl : [
    {
      title: "VOICE CALL ASSISTANT",
      description: "Development of an Advanced AI Voice Call Assistant: Revolutionizing Customer Interaction and Efficiency",
      link: "/case-studies/voice-call-ai",
      img : AiVoice
    , __w: 409, __h: 257},
    {
      title: "Product Review Using Sentimental Analysis",
      description:"Enhancing Product Insights with AI: Advanced Sentiment Analysis of Product Reviews",
      link: "/case-studies/sentimental-ai",
      img : AiSentiments
    , __w: 96, __h: 96},
    {
      title: "Logistics Using AI",
      description: "Transforming Logistics Operations with AI: Enhancing Efficiency and Accuracy", 
      link: "/case-studies/logistics-ai",
      img : AiLogistics
    , __w: 96, __h: 96},
    {
      title: "Inventory Management Using AI",
      description: "Revolutionizing Inventory Management with AI: Enhancing Accuracy and Efficiency",
      link: "/case-studies/inventory-ai",
      img : AiInventory
    , __w: 96, __h: 96},


  ],

  legal: [
    {
      title: "Legal Intake & Matter Management Automation",
      description:
        "How EICE Technology Helped a US Large Law Firm Automate Legal Intake and Matter Management",
      link: "/case-studies/legal-intake-matter-management",
      img: legalIntake,
      __w: 1693, __h: 929,
    },
    {
      title: "Referral Agreement Compliance & Digital Signature Automation",
      description:
        "How EICE Technology, an Indian IT Company, Helped a Large US Law Firm Automate Referral Agreement Compliance and Digital Signatures",
      link: "/case-studies/referral-agreement-compliance-digital-signatures",
      img: referralAgreementCompliance,
      __w: 1713, __h: 918,
    },
  ],
};

const CaseStudy = ({ link, title, description, image, __w, __h }) => {
  const content = (
    <>
      <img
        src={image?.src || image}
        alt={title}
        className={`w-full h-48 object-cover transition duration-300 filter grayscale ${link ? "group-hover:grayscale-0" : ""}`}
        width={__w}
        height={__h}
      />
      <div className="pt-[19px] px-[25px] pb-[25px] flex flex-col flex-1">
        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
          {title}
        </h3>
        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
          {description}
        </p>
        {link && (
          <span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
            Explore More
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (!link) {
    return (
      <div className="h-full overflow-hidden rounded-[18px] border border-[#E6EAF1] bg-white flex flex-col">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={link}
      className="group h-full overflow-hidden rounded-[18px] border border-[#E6EAF1] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col"
    >
      {content}
    </Link>
  );
};

function Cstdmain() {
  const [activeIndustry, setActiveIndustry] = useState("gis");

  return (
    <div>
      <header className="bg-gradient-to-r from-cyan-100/10 to-bloo/10 pt-4 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-7xl mx-auto flex flex-col items-start sm:items-center gap-4 py-10 text-left sm:text-center">
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">
            CASE STUDIES
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl">
            Explore{" "}
            <span className="text-bloo font-semibold">Real-World Examples</span>{" "}
            of how EICE has transformed businesses across industries through
            innovative software solutions and unparalleled expertise.
          </p>
        </div>
      </header>
      <main className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <nav>
            <ul className="flex flex-wrap justify-start sm:justify-center gap-4">
              {industries.map((industry) => (
                <li key={industry.id}>
                  <button
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`font-general font-semibold flex w-fit items-center gap-2 px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide transition ${
                      activeIndustry === industry.id
                        ? "bg-[#012060] text-white border border-[#012060]"
                        : "bg-white text-blackk border border-[#E6EAF1] hover:border-[#01B0F1]/60"
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
              className={`pt-8 ${
                activeIndustry === industry.id ? "block" : "hidden"
              }`}
            >
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left">
                {industry.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                {projects[industry.id].map((project, index) => (
                  <CaseStudy
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.img}
                    link={project.link}
                    __w={project.__w}
                    __h={project.__h}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Cstdmain;
