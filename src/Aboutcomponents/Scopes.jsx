import React from "react";
const budget1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/budget1.jpg";
const budget2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/budget2.jpg";
const budget3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/budget3.jpg";

const UnclearRequirements = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/ConstrainedBudget.svg";
const EvolvingScope = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Evolvingscope.svg";
const ConstrainedBudget = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/UnclearRequirements.svg";

import { FaArrowRight } from "react-icons/fa";

function Scopes() {
  return (
    <div className="w-full py-4 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 xl:px-4">
      <div className="text-center text-blackk mb-8">
        <div className="flex flex-col sm:items-center sm:justify-center items-start sm:text-center">
          <h1 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
            Engage With Us
          </h1>
          <h2 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl py-1">
            Choosing an appropriate engagement method<br className="hidden sm:inline" /> for your project
          </h2>
        </div>
        <div className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] lg:px-32 mt-2">
          <p>
            The working model between the client and company plays a massive
            part in catering to each unique project. After an assessment of
            cost, time and scope; Our robust, simple and flexible models can be
            utilised to cater to your every need.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 sm:items-center sm:justify-center items-start">
        <div className="lg:grid lg:grid-cols-2 flex flex-col sm:items-center sm:justify-center items-start w-full h-full">
          <div className="relative w-full sm:w-11/12 h-[30rem] items-center justify-center flex justify-self-start">
            <div className="flex flex-col lg:p-16 ps:p-5  absolute inset-0 justify-center">
              <div className="z-20 pb-8 justify-start flex w-full px-4">
                <img src={ConstrainedBudget} alt="" className="scale-[1.2]"  width="100" height="100" />
              </div>
              <h1 className="text-white z-20 font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] pb-4 px-2">
                Constrained Budget
              </h1>
              <p className="font-inter font-normal z-20 text-white/90 text-[16px] sm:text-[18px] leading-[1.6] px-2 text-left">
                Well defined project guidelines & complete scope. Allows us to
                give you a fixed cost and timeline.
              </p>
            </div>
            <img src={budget1} alt="" className="w-full h-full object-cover"  width="96" height="96" />
            <div className="absolute inset-0 bg-cyan-600/80"></div>
          </div>
          <div className="flex flex-col sm:px-8 px-0 py-4">
            <h1 className="font-general w-full text-center text-blackk/50 font-semibold text-2xl pb-2">
              When to Choose
            </h1>
            <h1 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl py-1 pb-8">
              Constrained Budget Engagement
            </h1>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Clear, Constricted scope with requirements that are unlikely to
                change throughout the project
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Long term milestones can be defined irrespective of the chosen
                development model (ie; Agile, Spiral, etc.)
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Clear, Constricted scope with requirements that are unlikely to
                change throughout the project
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col sm:items-center sm:justify-center items-start w-full h-full">
          <div className="relative w-full sm:w-11/12 h-[30rem] items-center justify-center flex justify-self-end">
            <div className="flex flex-col  lg:p-16 ps:p-5  justify-center absolute inset-0 ">
              <div className="z-20 pb-8  flex w-full">
                <img src={EvolvingScope} alt="" className="scale-[1.2]"  width="100" height="100" />
              </div>
              <h1 className="text-white z-20 font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] pb-4 px-2">
                Evolving Scope
              </h1>
              <p className="font-inter font-normal z-20 text-white/90 text-[16px] sm:text-[18px] leading-[1.6] px-2 text-left">
                Adaptable approach, accommodating changing project needs and
                dynamics throughout the development lifecycle.
              </p>
            </div>
            <img src={budget2} alt="" className="w-full h-full object-cover"  width="96" height="96" />
            <div className="absolute inset-0 bg-slate-800/80"></div>
          </div>
          <div className="flex flex-col sm:px-8 px-0 py-4">
            <h1 className="font-general w-full text-center text-blackk/50 font-semibold text-2xl pb-2">
              When to Choose
            </h1>
            <h1 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl py-1 pb-8">
              Evolving Scope Engagement
            </h1>

            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Flexible Scope allows projects to evolve freely, adapting to
                changes without rigid constraints.
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Dynamic Needs adapt to evolving business, market dynamics, and
                stakeholder feedback effectively.
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Continuous feedback fosters iterative improvements and aligns
                with evolving project objectives effectively.
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 hidden items-center justify-center w-full h-full">
          <div className="flex flex-col sm:px-8 px-0 py-4">
            <h1 className="font-general w-full text-center text-blackk/50 font-semibold text-2xl pb-2">
              When to Choose
            </h1>
            <h1 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl py-1 pb-8">
              Evolving Scope Engagement
            </h1>

            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Flexible Scope allows projects to evolve freely, adapting to
                changes without rigid constraints.
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Dynamic Needs adapt to evolving business, market dynamics, and
                stakeholder feedback effectively.
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Continuous feedback fosters iterative improvements and aligns
                with evolving project objectives effectively.
              </h2>
            </div>
          </div>
          <div className="relative w-full sm:w-11/12 h-[30rem] items-center justify-center flex justify-self-end">
            <div className="flex flex-col p-16  justify-center absolute inset-0 ">
              <div className="z-20 pb-8 px-4 flex w-full">
                <img src={EvolvingScope} alt="" className="scale-[1.2]"  width="100" height="100" />
              </div>
              <h1 className="text-white z-20 font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] pb-4 px-2">
                Evolving Scope
              </h1>
              <p className="font-inter font-normal z-20 text-white/90 text-[16px] sm:text-[18px] leading-[1.6] px-2 text-left">
                Adaptable approach, accommodating changing project needs and
                dynamics throughout the development lifecycle.
              </p>
            </div>
            <img src={budget2} alt="" className="w-full h-full object-cover"  width="96" height="96" />
            <div className="absolute inset-0 bg-slate-800/80"></div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col sm:items-center sm:justify-center items-start w-full h-full">
          <div className="relative w-full sm:w-11/12 h-[30rem] items-center justify-center flex justify-self-start">
            <div className="flex flex-col lg:p-16 ps:p-5  justify-center absolute inset-0">
              <div className="z-20 pb-8 px-4  flex w-full">
                <img src={UnclearRequirements} alt="" className="scale-[1.2]"  width="100" height="100" />
              </div>
              <h1 className="text-white z-20 px-2 font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] pb-4">
                Unclear Requirements
              </h1>
              <p className="font-inter font-normal z-20 text-white/90 text-[16px] sm:text-[18px] leading-[1.6] px-2 text-left">
                Ambiguous project requires a lack of specificity, posing
                challenges in defining clear development objectives.
              </p>
            </div>
            <img src={budget3} alt="" className="w-full h-full object-cover"  width="96" height="96" />
            <div className="absolute inset-0 bg-teal-700/80"></div>
          </div>
          <div className="flex flex-col sm:px-8 px-0 py-4">
            <h1 className="font-general w-full text-center text-blackk/50 font-semibold text-2xl">
              When to Choose
            </h1>
            <h1 className="text-blackk 2xl:text-nowrap text-wrap font-general font-semibold text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl py-1 pb-8">
              Unclear Requirement Engagement
            </h1>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Initial project requirements are not well-defined, allowing
                flexibility for discovery and refinement as the project
                progresses.
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Particularly suited for exploratory or innovative projects where
                the outcomes are not fully known at the outset.
              </h2>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <FaArrowRight size={30} className="text-blackk/70" />
              <h2 className="font-inter font-normal text-blackk/70 text-[15px] sm:text-[16px] leading-[1.6]">
                Enables continuous discovery and definition of requirements
                throughout the project lifecycle, adapting to evolving insights
                and stakeholder needs
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Scopes;

