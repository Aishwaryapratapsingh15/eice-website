import React from "react";

function Company() {
  return (
    <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-40 sm:max-w-7xl w-screen 2xl:pt-12 sm:pt-28 pt-36 pb-4 sm:pb-10">
      {/* <div className="w-full h-full bg-bloo/5 -rotate-45 absolute left-[75%] blur-[400px]"></div> */}

      <div className="text-center mb-8">
        <h1 className="font-general font-semibold text-bloo text-center text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
          Our Foundation
        </h1>
        <h2 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl py-1">
          Expertise, Integrity & Collaboration
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col px-1 sm:gap-24 gap-12 sm:items-center sm:justify-center items-start justify-start text-center text-blackk">
        <div className="">
          <h1 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl">
            Who We Are
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-2">
            EICE is a global software services organization dedicated to
            delivering high-quality solutions to Fortune 1000 companies. We
            leverage specialized domain knowledge, cutting-edge technologies,
            and flexible engagement models to meet our clients' IT needs. With
            over 14+ years of experience, we operate from our headquarters in
            Houston, Texas, and our office in Noida, India, servicing customers
            in Financial Services and Enterprise Services.
          </p>
        </div>
        <div>
          <h1 className="font-general font-semibold text-blackk text-center text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-3xl">
            Our Strength
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-2">
            Our strength lies in our deep domain knowledge of the oil and gas
            industry and our ability to provide innovative solutions to complex
            technology challenges. We collaborate with leading global operators
            and service companies across the energy value chain. By combining
            engineering analysis, applied science, and numerical algorithm
            expertise, we deliver reliable and responsive solutions that meet
            our clients' technical and business objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Company;

