import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Workflow() {
  return (
    <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-40 sm:max-w-7xl w-screen py-4 sm:py-10">
      {/* <div className="w-screen h-1/4 bg-bloo/10 rotate-45 absolute top-0 z-1 left-[50%] blur-[300px]"></div> */}
      {/* <div className="w-full h-full bg-bloo/5 -rotate-45 absolute right-[75%] blur-[400px]"></div> */}
      <div className="flex flex-col sm:items-center sm:justify-center items-start text-center mb-8">
        <h1 className="font-general font-semibold text-bloo text-center text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
          Our Values
        </h1>
        <h2 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
          Delivering Reliable and Quality Software<br className="hidden sm:inline" /> Development Services
        </h2>
        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mt-2">
          Ensuring clarity and visibility throughout the development process to
          enhance collaboration and efficiency. Our workflow is well organized
          and flexible at its core.
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex flex-col sm:items-center sm:justify-center items-start justify-start">
          <div className="lg:w-52 lg:h-52 w-full h-52 border-2 border-bloo rounded-lg">
            <div className="flex flex-col text-center w-full h-full items-center justify-center">
              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] pb-4 text-bloo">Discover</h1>
              <p className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Assessing the Requirements
              </p>
            </div>
          </div>
          <div className="lg:p-4 p-1 lg:scale-100 scale-75">
            <FaArrowRight
              size={30}
              className="text-blackk/50 lg:rotate-0 rotate-90"
            />
          </div>
          <div className="lg:w-52 lg:h-52 w-full h-52 border-2 border-amber-500 rounded-lg">
            <div className="flex flex-col text-center w-full h-full items-center justify-center">
              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] pb-4 text-amber-500">Define</h1>
              <p className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Determining the scope and creating an SRS
              </p>
            </div>
          </div>
          <div className="lg:p-4 p-1 lg:scale-100 scale-75">
            <FaArrowRight
              size={30}
              className="text-blackk/50 lg:rotate-0 rotate-90"
            />
          </div>
          <div className="lg:w-52 lg:h-52 w-full h-52 border-2 border-emerald-400 rounded-lg">
            <div className="flex flex-col text-center w-full h-full items-center justify-center">
              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] pb-4 text-emerald-500">Design</h1>
              <p className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                System Design, UI/UX, Wireframing
              </p>
            </div>
          </div>
          <div className="lg:p-4 p-1 lg:scale-100 scale-75">
            <FaArrowRight
              size={30}
              className="text-blackk/50 lg:rotate-0 rotate-90"
            />
          </div>
          <div className="lg:w-52 lg:h-52 w-full h-52 border-2 border-cyan-400 rounded-lg">
            <div className="flex flex-col text-center w-full h-full items-center justify-center">
              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] pb-4 text-cyan-500">
                Product Development
              </h1>
              <p className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Coding APIs, Testing, Debuggings
              </p>
            </div>
          </div>
          <div className="lg:p-4 p-1 lg:scale-100 scale-75">
            <FaArrowRight
              size={30}
              className="text-blackk/50 lg:rotate-0 rotate-90"
            />
          </div>
          <div className="lg:w-52 lg:h-52 w-full h-52 border-2 border-rose-400 rounded-lg">
            <div className="flex flex-col text-center w-full h-full items-center justify-center">
              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] pb-4 text-rose-400">Delivery</h1>
              <p className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Maintenance and Support
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Workflow;

