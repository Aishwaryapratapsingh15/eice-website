"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const temp = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/temp.png";
const temp2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/temp2.png";
const espctquote1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/espctquote1.png";
const espctquote2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/espctquote2.png";

import { GiVirtualMarker } from "react-icons/gi";

function EspctQuote() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">ESPCT Quote</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">A Sales and Quotation Tool</h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            A web-based sales automation and quotation tool for engineering
            products, offering customizable configurations, admin-assisted
            optimization, and interactive user support.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center grid grid-cols-2 gap-4">
            <img
              src={espctquote1}
              alt="ESPCT Quote sales quotation tool — product configuration screen"
              className="w-full h-full object-fit"
             width="506" height="335" />
            <img
              src={espctquote2}
              alt="ESPCT Quote sales quotation tool — quote generation interface"
              className="w-full h-full object-fit"
             width="405" height="330" />
          </div>
        </div>
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Key Challenges
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Developing a user-friendly web interface for complex engineering
                product configurations
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Integrating admin support for optimal assembly suggestions and
                quotations
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Implementing a system for real-time user-admin communication
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Ensuring accurate and up-to-date product information across
                various systems and components
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Balancing user customization options with admin-guided
                recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
            About Our Client
          </p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            ESPCT : ESP Completion Technologies
          </h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            ESPCT designs, manufactures and installs proprietary completion
            equipment for electric submersible pump (ESP) systems to meet the
            needs of ESP OEMs and E&P operators. ESPCT is headquartered in
            Missouri City, Texas with three service centers located across the
            United States. They specialize in dual parallel and dual concentric
            installations, providing all equipment as a integrated system from
            the wellhead to the motor base. Having hundreds of successful
            installations, ESPCT is a leader in the submersible pump field.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-10 pb-10">
<div>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">
            Unlocking Success
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
          <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiVirtualMarker size={44} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col text-start">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                    IDEATION:
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                    We envisioned a comprehensive web-based tool that would
                    simplify the complex process of configuring and quoting
                    engineering products. Our focus was on creating a platform
                    that balances user flexibility with expert guidance to
                    ensure optimal product selection and pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiVirtualMarker size={44} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col text-start">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                    OUR APPROACH
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                    We prioritized user experience by developing an intuitive
                    interface that allows for easy product configuration. By
                    integrating admin support, we aimed to provide expert
                    guidance throughout the quotation process. We also
                    implemented a communication system to facilitate user-admin
                    interactions, ensuring that customers can make informed
                    decisions with professional assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <div className="grid grid-cols-2 gap-4">
                  <GiVirtualMarker size={44} className="text-bloo" />
                </div>
              </div>
              <div>
                <div className="flex flex-col text-start">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                    OUTCOMES
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                    The ESPCT Quote tool has revolutionized the sales process
                    for engineering products by providing a user-friendly
                    platform for configuration and quotation. Its ability to
                    combine user customization with admin-guided optimization
                    has significantly improved the accuracy and efficiency of
                    the quoting process. The implementation of a review and Q&A
                    system has enhanced customer satisfaction by providing
                    direct access to expert advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
        <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Successfully developed a web-based sales and quote tool for
              engineering products
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Implemented user-configurable options for tools and assemblies
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Integrated admin support for suggesting optimal assemblies and
              providing best quotes
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Created a review and Q&A system for users to interact with admins
            </p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
              Streamlined the quotation process for complex engineering systems
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Looking to Modernize Your Sales &amp; Quotation Process?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about building a web-based quotation platform for your equipment or services.</p>
          <button onClick={() => navigate("/products/eicerise/form?product=Oil%20%26%20Gas")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Oil &amp; Gas Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default EspctQuote;

