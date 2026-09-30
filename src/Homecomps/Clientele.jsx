import React from "react";
import Clients from "./Clients";

function Clientele() {
  return (
    <div className="relative text-blackk py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="bg-map bg-no-repeat bg-cover bg-center h-full w-full opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="font-general font-semibold text-bloo text-left sm:text-center text-[12px] sm:text-[14px] uppercase tracking-[0.12em] mb-2 sm:mb-3">
          Journey so far
        </h2>
        <h1 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] mb-8">
          Milestones and Achievements
        </h1>

        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12"> */}
        <div style={{display :"flex" , justifyContent : "space-between" , columnGap : "1rem" }}>
          <Milestone number="16+" text="Years" smallText="Of Experience" />
          <Milestone
            number="180+"
            text="Projects"
            smallText="Delivered Successfully"
          />
          <Milestone number="60+" text="Clients" smallText="Globally" />
       
        </div>
        
      </div>
    </div>
  );
}

function Milestone({ number, text, smallText }) {
  return (
    <div className="text-center">
      <div className="text-bloo font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2">
        {number}
      </div>
      <div className="font-semibold text-base sm:text-lg lg:text-xl mb-1">
        {text}
      </div>
      <div className="text-sm lg:text-base text-gray-600">{smallText}</div>
    </div>
  );
}

export default Clientele;
