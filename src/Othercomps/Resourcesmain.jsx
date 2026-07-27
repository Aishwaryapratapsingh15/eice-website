import React from "react";
import { Link } from "@/nextNavigation";
import Talktous from "../Othercomps/Talktous";

const budget1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/budget1.jpg";
const budget2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/budget2.jpg";
const budget3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/budget3.jpg";

const UnclearRequirements = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/ConstrainedBudget.svg";
const EvolvingScope = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Evolvingscope.svg";
const ConstrainedBudget = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/UnclearRequirements.svg";
const resoucres_cs = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/resources_cs.jpg";

function Resourcesmain() {
  return (
    <div>
      <div className="bg-gradient-to-br mt-10 sm:mt-24 from-cyan-100/10 to-bloo/10 w-screen h-auto sm:h-[60vh] 2xl:h-[35vh] bg-cover bg-no-repeat ">
        <div className=" max-w-7xl mx-auto w-full h-full">
          <div className="2xl:pt-0 flex flex-col items-start sm:items-center justify-start sm:justify-center w-full h-full py-8 sm:py-0 px-5 sm:px-0">
            <h1 className="text-blackk fontweight_1 text-left sm:text-center text-[32px] sm:text-[35px] py-2">
              EICE Resources
            </h1>
            <h2 className="text-bloo font-semibold text-left sm:text-center text-[32px] sm:text-2xl md:text-3xl lg:text-[32px] max-w-3xl py-4">
              Case Studies, Blogs and more
            </h2>
            <h2 className="text-blackk/70 font-medium text-left sm:text-center text-[16px] sm:text-lg lg:text-xl max-w-6xl py-2">
              Explore a wealth of knowledge and insights designed to help you
              navigate the complexities of digital transformation and stay ahead
              in your industry. Our resources are curated by experts to provide
              valuable information, practical strategies, and innovative
              solutions that drive business success.
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-5 sm:px-6 lg:px-8">
        <h2 className="text-blackk fontweight_1 text-left sm:text-center text-[32px] sm:text-3xl lg:text-4xl max-w-3xl sm:mx-auto mb-4 sm:mb-12">
          Discover, Innovate and Excel with EICE
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-0 gap-4 sm:gap-12 justify-center items-center">
          <div className="flex flex-col col-span-2">
            <h2 className="text-blackk text-left fontweight_1 text-[32px] sm:text-3xl lg:text-4xl mb-4">
              Case Studies
            </h2>
            <p className="font-medium text-blackk/70 max-w-2xl text-[16px] sm:text-lg mb-4 sm:mb-6">
              Learn from real-world success stories where EICE has helped
              clients overcome challenges and achieve significant results. Our
              case studies highlight our approach, solutions, and the measurable
              impact of our work.
            </p>
            <Link href="/case-studies" className="self-start">
              <button className="w-full sm:w-auto py-3 px-8 sm:px-12 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                Learn More
              </button>
            </Link>
          </div>
          <div className="lg:order-last lg:block hidden order-first justify-end items-end relative w-full h-64 sm:h-80 rounded-full overflow-hidden">
            <img
              src={resoucres_cs}
              alt="Case Study"
              className="w-full h-full object-cover rounded-full"
             width="72" height="72" />
            {/* <div className="absolute inset-0 bg-slate-800/80 rounded-full"></div> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-0 gap-4 sm:gap-12 justify-center items-center">
          <div className="flex flex-col col-span-2">
            <h2 className="text-blackk text-left fontweight_1 text-[32px] sm:text-3xl lg:text-4xl mb-4">
              Blog
            </h2>
            <p className="font-medium text-blackk/70 max-w-2xl text-[16px] sm:text-lg mb-4 sm:mb-6">
              Read our latest insights, product updates, and industry knowledge —
              from AI and cloud infrastructure to cybersecurity and digital
              transformation strategy.
            </p>
            <Link href="/blog" className="self-start">
              <button className="w-full sm:w-auto py-3 px-8 sm:px-12 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                Learn More
              </button>
            </Link>
          </div>
          <div className="lg:order-last lg:block hidden order-first justify-end items-end relative w-full h-64 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#012060] to-bloo">
          </div>
        </div>
      </div>
      <Talktous />
    </div>
  );
}

export default Resourcesmain;

