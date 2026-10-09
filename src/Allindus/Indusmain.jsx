import React from "react";
import Talktous from "../Othercomps/Talktous";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";
import { FiArrowRight } from "react-icons/fi";

const indus_oilandgas = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-oilandgas.png";
const indus_education = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-education.png";
const indus_law = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-law.png";
const indus_healthcare = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-healthcare.png";
const indus_digimedia = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-digimedia.png";
const indus_financial = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-financial.png";
const indus_logistics = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-logistics.png";
const indus_enterprise = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/indus-enterprise.png";

import { Link } from "@/nextNavigation";

const IndustryCard = ({ to, color, Icon, title, description, cta }) => (

    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
      <div className="mb-[19px] flex h-16 w-16 items-center justify-center rounded-lg">
          <img src={Icon} className="text-blackk" />
      </div>
      <div>
        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{title}</h3>
        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px] line-clamp-4">
          {description}
        </p>
        <Link
                     to={to}
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] hover:text-blue-900 transition"
                    >
                      {cta || `Explore ${title} Solutions`} <FiArrowRight className="w-4 h-4" />
                    </Link>
      </div>
    </div>
);

function Indusmain() {
  const industries = [
    {
      color: "blue",
      Icon: indus_oilandgas,
      title: "Oil and Gas",
      to: "/industries/oil-and-gas",
      description:
        "Pioneering the Future of Oil and Gas with State-of-the-Art Solutions.",
      cta: "Explore Oil and Gas Solutions",  
    },
    {
      color: "purple",
      Icon: indus_education,
      title: "Education",
      to: "/industries/education",
      description:
        "Empowering Education Through Innovative Technology Solutions.",
      cta: "Explore Education Solutions",  
    },
    {
      color: "emerald",
      Icon: indus_law,
      title: "Legal",
      to: "/industries/legal",
      description:
        "Innovative Legal Software Solutions for a Modern Legal Practice.",
      cta: "Explore Legal Solutions",  
    },
    {
      color: "amber",
      Icon: indus_healthcare,
      title: "Healthcare",
      to: "/industries/healthcare",
      description:
        "Elevate Your Digital Health Solutions with Our Expert Software Development Services.",
      cta: "Explore Healthcare Solutions",  
    },
    {
      color: "pink",
      Icon: indus_digimedia,
      title: "Digital Media",
      to: "/industries/digital-media",
      description:
        "Transforming the Media Landscape with Innovative Technology Solutions.",
      cta: "Explore Digital Media Solutions",  
    },
    {
      color: "rose",
      Icon: indus_financial,
      title: "Financial Services",
      to: "/industries/financial",
      description:
        "Revolutionizing Financial Services Through Advanced Technology Solutions.",
    },
    {
      color: "amber",
      Icon: indus_logistics,
      title: "Logistics",
      to: "/industries/logistics",
      description:
        "Driving Logistics Excellence with Intelligent Software Solutions.",
    },
    {
      color: "rose",
      Icon: indus_enterprise,
      title: "Enterprise",
      to: "/industries/enterprise",
      description:
        "Driving Enterprise Excellence with Intelligent Software Solutions.",
    },
    {
      color: "cyan",
      Icon: indus_healthcare,
      title: "Hospitality",
      to: "/industries/hospitality",
      description:
        "Powering Hospitality Excellence with ERP and AI Solutions.",
    },
  ];

  return (
    <div id="indusmain-root">
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-32 sm:pt-32 2xl:pt-8">
        <section className="flex flex-col gap-4 text-left sm:text-center pb-10 sm:pb-4">
          <h1 className="text-blackk font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1]">
            Driving <span className="text-bloo">Digital Transformation </span>
            <br className ="hidden sm:block"/> Across Industries
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:text-center sm:max-w-4xl sm:mx-auto">
            EICE empowers businesses to thrive in the digital age by leveraging
            cutting-edge technologies and innovative strategies, revolutionizing
            operations and enhancing competitiveness.
          </p>
        </section>

        <div className="w-full max-w-screen-2xl mx-auto hidden sm:block pb-10">
          <div className="bg-indusbanner w-full h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-full"></div>
        </div>

        <section className="flex flex-col gap-4 text-left sm:text-center pt-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
            Industry Solutions
          </p>
          <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] sm:max-w-4xl sm:mx-auto">
            Transforming Sectors Through Digital Innovation
          </h2>
        </section>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 pb-10">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              to={industry.to}
              color={industry.color}
              Icon={industry.Icon}
              title={industry.title}
              description={industry.description}
              cta={industry.cta}
            />
          ))}
        </div>

        <div className="pt-10 pb-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
          <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] flex items-center justify-start sm:justify-center">
            Why Choose EICE
          </h2>
          <p className="text-blackk/70 font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6]">
            <span className="">Partner with EICE</span> to accelerate your
            digital transformation journey. Our expertise in emerging
            technologies and industry-specific solutions will help you
            <span className="text-bloo"> innovate, optimize, and lead</span> in
            the digital era.
          </p>
        </div>
      
      </div>
      <Talktous />
    </div>
  );
}

export default Indusmain;

