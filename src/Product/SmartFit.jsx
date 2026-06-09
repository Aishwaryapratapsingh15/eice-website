"use client";
import React from "react";
import { useNavigate } from "/src/nextNavigation";
import ProductFooter from "./ProductFooter";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import arrowIcon from "../assets/arrow.svg";
import kbtIcon from "/src/assets/isynclite/KBT.svg";
import challengeIcon from "../assets/smartfit/OIP.webp"
import cycIcon from "../assets/smartfit/CYC.svg";
import ecwIcon from "../assets/smartfit/ECW.svg"
import esIcon from "../assets/smartfit/ES.svg"
import ldmIcon from "../assets/smartfit/LDM.svg"
import mclIcon from "../assets/smartfit/MCL.svg"
import owmIcon from "../assets/smartfit/OWM.svg"
import rcIcon from "../assets/smartfit/RC.svg"
import sbsIcon from "../assets/smartfit/SBS.svg"
import sriIcon from "../assets/smartfit/SRI.svg"
import heroImg from "../assets/smartfit/SmartFit.png"
import eiceSmartfitIcon from "../assets/smartfit/SmartFit_Icon.svg";



const features = [
  {
    title: "Choose Your Container",
    text: "Pick from standard 20ft, 40ft, or 40ft High Cube containers — or enter your own custom dimensions and payload limits.",
    icon:cycIcon
  },
  {
    icon:ecwIcon,
    title: "Enter Cargo Your Way",
    text: "Type items directly into the grid, or import your cargo list from an Excel or CSV spreadsheet. Columns map automatically.",
  },
  {
    icon:owmIcon,
    title: "Optimize for What Matters",
    text: "Choose your priority: maximum space usage, best weight balance, or correct unloading order.",
  },
  {
    icon:sriIcon,
    title: "See the Results Instantly",
    text: "Interactive 3D view of your loaded container. Rotate, zoom, step through the loading sequence, and view from any angle. ",
  },
  {
    icon:sbsIcon,
    title: "Stay Balanced & Safe",
    text: "Real-time weight distribution shows front/rear and left/right balance with a clear Good / Amber / Red rating.",
  },
  {
    icon:esIcon,
    title: "Export & Share",
    text: "Generate professional PDF load plans with 3D snapshots, step-by-step loading instructions, and weight report. ",
  },
  {
    icon:mclIcon,
    title: "Multi-Container Loads",
    text: "When one container isn't enough, SmartFit automatically flows overflow cargo into additional containers with a shipment summary. ",
  },
  {
    icon:rcIcon,
    title: "Respect Constraints",
    text: "Mark items as fragile, upright-only, bottom only, or set stacking limits. SmartFit enforces every rule during placement.",
  },
  {
    icon:ldmIcon,
    title: "Light & Dark Mode",
    text: "Switch between light and dark themes with one click. Your preference is remembered across sessions. ",
  },
];

export default function SmartFit() {
     const navigate = useNavigate();
  return (
    <div className="w-full text-black">
      {/* HERO SECTION */}
      <section className="py-10 px-4 sm:px-8 md:px-20 lg:px-20 xl:px-40 bg-white text-center pt-24 sm:pt-32">
        <div className="flex justify-center mb-10">
          <img
            src={heroImg.src}
            alt="EICE SmartFit"
            className="w-full max-w-[650px] object-contain"
          />
        </div>
           <span className="inline-flex items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
          
          <img 
            src={eiceSmartfitIcon.src}
            alt="icon" 
            className="w-5 h-5 object-contain"
          />
        
          Container loading optimization software
        </span>

       <h1 className="text-[28px] sm:text-[32px] text-[#334155] md:text-[48px] mt-6 font-bold max-w-4xl mx-auto leading-tight">
         <span className="text-[#01B0F1]">Optimize </span> Every Load. <span className="text-[#01B0F1]">Maximize</span> Every Container.
         <span className="text-[#01B0F1]"> Minimize</span> Every Cost.
        </h1>

        {/* <h3 className = "font-semibold text-xl mb-10 text-[#012060] italic mb-5">Pack Smart. Ship Smart</h3> */}

       
          
           <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-base sm:text-[19px] font-semi-bold">
          Stop paying for wasted container space. Eice SmartFit uses intelligent 3D optimization to generate perfect load plans — maximizing capacity, balancing weight distribution, and ensuring correct cargo placement. Upload your cargo list, select a container, and get step-by-step loading instructions with real-time weight analysis. No installation required.
        </p>
         <div className="mt-8 flex flex-wrap justify-center gap-4">
        
              {/* Primary */}
              <button onClick={() => navigate("/products/form?embed=true&product=SmartFit")}  
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px] w-[250px] h-[56px]">
                Request a Demo
                  <img src={arrowIcon.src} alt="arrow"/>
        
              </button>
        
              {/* Secondary
              <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
                Talk to an Expert
              </button> */}
        
            </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col lg:flex-row gap-8 text-black">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* CHALLENGES */}
        <div className="flex-1 bg-white border border-[#E2E8F0] rounded-xl pt-4 pb-8 px-8">
          <h2 className="text-3xl font-bold text-[#334155] mb-8 text-center">
            Challenges
          </h2>

          <ul className="space-y-5">
            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                <img src={challengeIcon.src} className="w-6 h-6"/>
              </div>

              Wasted container space increases freight costs
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                <img src={challengeIcon.src} className="w-6 h-6"/>
              </div>

              Manual planning is slow and error-prone
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                 <img src={challengeIcon.src} className="w-6 h-6"/>
              </div>

              Improper weight balance causes safety risks
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                 <img src={challengeIcon.src} className="w-6 h-6"/>
              </div>

              Difficult unloading due to poor sequencing
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                 <img src={challengeIcon.src} className="w-6 h-6"/>
              </div>

              No visibility into remaining container capacity
            </li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div className="flex-1 bg-white border border-[#E2E8F0] rounded-xl pt-4 pb-8 px-8">
          <h2 className="text-3xl font-bold text-[#334155] mb-8 text-center">
            Solutions
          </h2>

          <ul className="space-y-5">
            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                <img src={kbtIcon.src}/>
              </div>

              Automated 3D optimized load plans
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                <img src={kbtIcon.src}/>
              </div>

              Generate plans in seconds
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                 <img src={kbtIcon.src}/>
              </div>

              Smart weight balance analysis
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
                <img src={kbtIcon.src}/>
              </div>

              Priority-based unloading system
            </li>

            <li className="flex items-start gap-4 text-[#64748B] leading-relaxed font-semibold">
              <div className="min-w-6 h-6">
               <img src={kbtIcon.src}/>
              </div>

              One-click capacity estimation
            </li>
          </ul>
        </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 px-5 md:px-20 lg:px-20 xl:px-40 bg-white mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#334155] mb-5">
            What You Can Do
          </h2>

          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto">
            Smart tools designed to optimize every shipment efficiently.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-[#E2E8F0] rounded-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* SVG */}
        <div className="rounded-lg flex items-start mb-5">
          <img src={feature.icon.src} alt="icon" className="w-14 h-14 object-contain" />
        </div>

              <h3 className="font-bold md:text-2xl text-2xl text-[#334155] whitespace-pre-line mb-2">
                {feature.title}
              </h3>

              <p className="text-[#64748B] md:text-lg text-lg leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>
            <section className="bg-gray-50 relative py-10 px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden mb-10">
              <h2 className="text-4xl md:text-4xl font-bold text-[#334155] mb-[14px] leading-tight text-center">
                Ready to Transform Your Container Optimization?
              </h2>
      
              <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-10 text-center">
            EICE SmartFit runs in your browser — no installation required. Upload your cargo, pick a container, and <br />get an optimized load plan in 
seconds. 
          </p>
      
              <button
                onClick={() => navigate("/products/form?embed=true&product=EiceSmartFit")}
                className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px] hover:bg-blue-800"
              >
                Request a Demo
                <img src={arrowIcon.src} alt="arrow" />
              </button>
            </section>
<ProductCarousel slides={productSlides} />

 <ProductFooter/>
    </div>
  );
}