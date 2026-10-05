"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "./ProductFooter";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const kbtIcon = "https://d3r43jacxrwsrp.cloudfront.net/isynclite/KBT.svg";
const challengeIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/OIP.webp";
const cycIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/CYC.svg";
const ecwIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/ECW.svg";
const esIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/ES.svg";
const ldmIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/LDM.svg";
const mclIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/MCL.svg";
const owmIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/OWM.svg";
const rcIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/RC.svg";
const sbsIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SBS.svg";
const sriIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SRI.svg";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SmartFit.png";
const eiceSmartfitIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SmartFit_Icon.svg";



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
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white text-left sm:text-center">
        <div className="flex justify-center sm:mb-10 pb-4">
          <img
            src={heroImg}
            alt="EICE SmartFit"
            className="w-full max-w-[650px] object-contain"
           width="1355" height="535" />
        </div>
           <span className="font-general font-semibold flex w-fit mx-auto items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide sm:mb-4">

          <img
            src={eiceSmartfitIcon}
            alt="icon"
            className="w-5 h-5 object-contain"
           width="20" height="20" />

          Container loading optimization software
        </span>

       <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk mt-[10px] max-w-4xl mx-auto py-1">
         <span className="text-bloo">Optimize </span> Every Load. <span className="text-bloo">Maximize</span> Every Container.
         <span className="text-bloo"> Minimize</span> Every Cost.
        </h1>

        {/* <h3 className = "font-semibold text-xl mb-10 text-[#012060] italic mb-5">Pack Smart. Ship Smart</h3> */}



           <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
          Stop paying for wasted container space. Eice SmartFit uses intelligent 3D optimization to generate perfect load plans — maximizing capacity, balancing weight distribution, and ensuring correct cargo placement. Upload your cargo list, select a container, and get step-by-step loading instructions with real-time weight analysis. No installation required.
        </p>
         <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
        
              {/* Primary */}
              <button onClick={() => navigate("/products/eicerise/form?product=Eice%20SmartFit")}  
              className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
                Request a Demo
                  <img src={arrowIcon} alt="arrow" width="24" height="24" />
        
              </button>
        
              {/* Secondary
              <button className="border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg font-semibold">
                Talk to an Expert
              </button> */}
        
            </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 py-4 sm:py-10 max-w-7xl mx-auto text-black">

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
        {/* CHALLENGES */}
        <div className="flex-1 rounded-[18px] border border-[#E6EAF1] bg-white p-[25px]">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8 text-center">
            Challenges
          </h2>

          <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4 sm:space-y-5">
            <li className="flex items-start gap-4">
              <div className="min-w-6 h-6">
                <img src={challengeIcon} className="w-7 h-7" width="28" height="28" />
              </div>

              Wasted container space increases freight costs
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-6 h-6">
                <img src={challengeIcon} className="w-7 h-7" width="28" height="28" />
              </div>

              Manual planning is slow and error-prone
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-6 h-6">
                 <img src={challengeIcon} className="w-7 h-7" width="28" height="28" />
              </div>

              Improper weight balance causes safety risks
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-6 h-6">
                 <img src={challengeIcon} className="w-7 h-7" width="28" height="28" />
              </div>

              Difficult unloading due to poor sequencing
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-6 h-6">
                 <img src={challengeIcon} className="w-7 h-7" width="28" height="28" />
              </div>

              No visibility into remaining container capacity
            </li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div className="flex-1 rounded-[18px] border border-[#E6EAF1] bg-white p-[25px]">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8 text-center">
            Solutions
          </h2>

          <ul className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B] space-y-4 sm:space-y-5">
            <li className="flex items-start gap-4">
              <div className="min-w-7 h-7">
                <img src={kbtIcon} width="28" height="28" />
              </div>

              Automated 3D optimized load plans
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-7 h-7">
                <img src={kbtIcon} width="28" height="28" />
              </div>

              Generate plans in seconds
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-7 h-7">
                 <img src={kbtIcon} width="28" height="28" />
              </div>

              Smart weight balance analysis
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-7 h-7">
                <img src={kbtIcon} width="28" height="28" />
              </div>

              Priority-based unloading system
            </li>

            <li className="flex items-start gap-4">
              <div className="min-w-7 h-7">
               <img src={kbtIcon} width="28" height="28" />
              </div>

              One-click capacity estimation
            </li>
          </ul>
        </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            What You Can Do
          </h2>

          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6] text-blackk/70 max-w-3xl mx-auto mt-2">
            Smart tools designed to optimize every shipment efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]"
            >
              {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
          <img src={feature.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">
                {feature.title}
              </h3>

              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProductVideo
        eyebrow="Smart Cargo Optimization"
        heading="See SmartFit in Action"
        subtext="See how intelligent 3D optimization creates efficient load plans, maximizes available space, and maintains balanced cargo distribution."
        videoId="T5DCCbJBq6M"
      />

            <section className="bg-gray-50 relative overflow-hidden">
             <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
              <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk text-center mx-auto max-w-4xl py-1">
                Ready to Transform Your Container Optimization?
              </h2>

              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70 mt-2 mb-8 text-center">
            EICE SmartFit runs in your browser — no installation required. Upload your cargo, pick a container, and <br />get an optimized load plan in
seconds.
          </p>

              <button
                onClick={() => navigate("/products/eicerise/form?product=Eice%20SmartFit")}
                className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto text-[18px] hover:bg-[#1E40AF]"
              >
                Request a Demo
                <img src={arrowIcon} alt="arrow"  width="24" height="24" />
              </button>
             </div>
            </section>
<ProductCarousel slides={productSlides} />

 <ProductFooter/>
    </div>
  );
}