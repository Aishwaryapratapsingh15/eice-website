"use client";
import React from "react";
import { TbLetterG, TbLetterP, TbLetterT } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiJupyter, SiAnaconda, SiMongodb, SiExpress } from "react-icons/si";

const PANEL =
  "flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 p-[25px] rounded-[18px] shadow-lg";
const PANEL_TITLE =
  "font-general font-semibold text-[#373737] text-[20px] leading-[1.3] pb-4";

function Process() {
  return (
    <div>
      {/* Proven processes,  unparalleled expertise, top notch tools */}
      <div className="bg-zinc-50 px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
              Agile Software Development
            </p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-4xl mx-auto">
              Proven processes, unparalleled expertise, and top notch tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div className="justify-self-center bg-bannerai bg-cover w-[41vh] h-[38.3vh]"></div>
            <div className="flex flex-col gap-4">
              <h3 className="font-general font-semibold text-[#373737] text-[20px] leading-[1.3]">
                Generative AI
              </h3>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                In the fast-paced world of generative AI, staying ahead is
                crucial for business success. At EICE, we specialize in
                advanced AI/ML and generative AI solutions designed to
                transform your organization. Our expert team integrates
                industry knowledge with the latest AI advancements to deliver
                impactful results. We tailor our AI strategies to align with
                your specific business goals, enhancing operational efficiency
                and elevating customer experiences.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <h3 className={PANEL_TITLE}>Tech We Use</h3>
              <div className={`${PANEL} flex-1`}>
                <div className="grid grid-cols-3 gap-12">
                  <FaPython className="text-white text-4xl" />
                  <SiJupyter className="text-white text-4xl" />
                  <SiAnaconda className="text-white text-4xl" />
                  <div className="flex flex-row">
                    <TbLetterG className="text-white text-4xl" />
                    <TbLetterP className="text-white text-4xl" />
                    <TbLetterT className="text-white text-4xl" />
                  </div>
                  <SiMongodb className="text-white text-4xl" />
                  <SiExpress className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className={PANEL_TITLE}>Things We Make</h3>
              <div className={`${PANEL} flex-1`}>
                <div className="grid grid-cols-1 gap-4">
                  <p className="font-general font-semibold text-white text-[20px] leading-[1.3]">
                    ChatBots
                  </p>
                  <p className="font-general font-semibold text-white text-[20px] leading-[1.3]">
                    Dataset Generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
