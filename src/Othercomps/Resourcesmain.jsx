import React from "react";
import { Link } from "@/nextNavigation";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const resoucres_cs = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/resources_cs.jpg";

function Resourcesmain() {
  return (
    <div>
      <div className="bg-gradient-to-br from-cyan-100/10 to-bloo/10 w-full mt-10 pt-4">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="max-w-7xl mx-auto flex flex-col items-start sm:items-center gap-4 py-10 text-left sm:text-center">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">
              EICE Resources
            </h1>
            <h2 className="font-general font-semibold text-bloo text-[24px] sm:text-[32px] leading-[1.2] max-w-3xl">
              Case Studies, Blogs and more
            </h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl">
              Explore a wealth of knowledge and insights designed to help you
              navigate the complexities of digital transformation and stay ahead
              in your industry. Our resources are curated by experts to provide
              valuable information, practical strategies, and innovative
              solutions that drive business success.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl sm:mx-auto">
            Discover, Innovate and Excel with EICE
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 items-center pt-8">
            <div className="flex flex-col items-start gap-4 col-span-2">
              <h3 className="font-general font-semibold text-[#373737] text-[20px] leading-[1.3]">
                Case Studies
              </h3>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">
                Learn from real-world success stories where EICE has helped
                clients overcome challenges and achieve significant results. Our
                case studies highlight our approach, solutions, and the
                measurable impact of our work.
              </p>
              <Link href="/case-studies">
                <button className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
                  Learn More
                  <img src={arrowIcon} alt="arrow" width="24" height="24" />
                </button>
              </Link>
            </div>
            <div className="lg:order-last lg:block hidden order-first justify-end items-end relative w-full h-64 sm:h-80 rounded-full overflow-hidden">
              <img
                src={resoucres_cs}
                alt="Case Study"
                className="w-full h-full object-cover rounded-full"
                width="72"
                height="72"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 items-center">
            <div className="flex flex-col items-start gap-4 col-span-2">
              <h3 className="font-general font-semibold text-[#373737] text-[20px] leading-[1.3]">
                Blog
              </h3>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">
                Read our latest insights, product updates, and industry
                knowledge — from AI and cloud infrastructure to cybersecurity
                and digital transformation strategy.
              </p>
              <Link href="/blog">
                <button className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
                  Learn More
                  <img src={arrowIcon} alt="arrow" width="24" height="24" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resourcesmain;
