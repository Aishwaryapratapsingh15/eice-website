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



const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "gis" },
  // { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" },
  // { name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", id: "AiandMl" },
  { name: "AI And ML", id: "AiandMl" },
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

    
  ]
};

const CaseStudy = ({ link, title, description, image, __w, __h }) => (
  <Link href={link} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={image?.src || image}
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
  </Link>
);

function Cstdmain() {
  
  const [activeIndustry, setActiveIndustry] = useState("gis");

  

  return (
    <div className="font-manrope  xl:-mt-4">
      <header className="bg-gradient-to-r from-cyan-100/10 to-bloo/10 w-screen text-white 2xl:py-8 pt-32 pb-8 text-center px-5 sm:px-0">
        <h1 className="text-blackk fontsize_6 fontweight_1 mb-4">
          CASE STUDIES
        </h1>
        <p className="text-blackk text-xl fontweight_1  md:text-2xl max-w-3xl py-2 mx-auto px-5 sm:px-4">
          Explore{" "}
          <span className="text-bloo fontweight_2">Real-World Examples</span> of
          how EICE has transformed businesses across industries through
          innovative software solutions and unparalleled expertise.
        </p>
      </header>
      <main className="container mx-auto max-w-7xl pt-8 px-5 sm:px-0">
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
                  link={project.link}
                 __w={project.__w} __h={project.__h}/>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Cstdmain;
