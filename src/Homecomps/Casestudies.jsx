"use client";

import React from "react";
import { Link } from "@/nextNavigation";
const casestudiesImage = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/case-study-laptop.png";
const casestudiesbgImage = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/case-study-bg.png";


function Casestudies() {
  return (
    <div
      className="font-poppins py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${casestudiesbgImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-bloo font-bold text-[18px] sm:text-[25px] py-2">
            Case Studies
          </h2>
          <h1 className="text-blackk font-bold text-[26px] sm:text-3xl lg:text-[32px] leading-tight mb-6">
            Proven impact across complex enterprise environments
          </h1>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 py-3 px-6 border-2 border-blue-900 text-blue-900 font-semibold rounded-md hover:bg-blue-900 hover:text-white transition duration-200"
          >
            See Our CaseStudies →
          </Link>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <img
            src={casestudiesImage}
            alt="Case study showcase on laptop"
            className="w-full max-w-md h-auto"
            width="500"
            height="375"
          />
        </div>
      </div>
    </div>
  );
}

export default Casestudies;
