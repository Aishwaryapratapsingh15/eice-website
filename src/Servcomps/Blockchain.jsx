"use client";
import React from "react";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";
import {
  MdChevronLeft,
  MdChevronRight,
  MdConveyorBelt,
  MdSecurity,
} from "react-icons/md";

const dtransbanner = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtransbanner.jpg";
const servicebannerpattern = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

const dtdigital = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdigital.svg";
const dtdesign = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtdesign.svg";
const dtconsulting = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/dtconsulting.svg";
const blockHero = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/blockchain-hero.png";



import Footer from "../Othercomps/Footer.jsx";
import ProductFooter from "@/Product/ProductFooter";
import TalkToUs from "../Othercomps/Talktous";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";
import Process from "../Homecomps/Process.jsx";
import { SiHiveBlockchain } from "react-icons/si";
import { GiContract, GiSecurityGate } from "react-icons/gi";
import { RiNftFill } from "react-icons/ri";
import { BsCash } from "react-icons/bs";

const blockchain = "https://d3r43jacxrwsrp.cloudfront.net/Service_and_technology/blockchain.jpg";

function Blockchain() {
  return (
    <div>
      <div className="bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-4">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-3 xl:px-4">
            <div className="absolute -z-20 inset-0 right-[75%]">
              <img src={servicebannerpattern} alt="" width="427" height="426" />
            </div>
            <div className="flex lg:flex-row flex-col py-10 gap-4 items-center">
              <div className="w-full flex flex-col gap-4">
                <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">
                  Blockchain Development
                </h1>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl text-left">
                  Leading Blockchain Development Services Pioneering the Future of Digital Solutions
                </p>
                </div>
                   <div className="lg:flex hidden items-center justify-end">
                
                  <img src={blockHero} alt="Blockchain development services" className="rounded-full" width="415" height="300" />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
              Cutting-Edge{" "}
              <span className="text-bloo">Blockchain Development Services</span>{" "}
              Transforming Businesses with Secure Digital Solutions
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Blockchain technology has evolved beyond its
                initial application in cryptocurrency to become
                a transformative force across various
                industries. Its decentralized, transparent, and
                secure nature offers innovative solutions for
                businesses seeking to enhance their operations
                and build trust with users.
              </p>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                At EICE Technology we offer cutting-edge
                blockchain development services designed to
                unlock the full potential of this groundbreaking
                technology. Our expert team is committed to
                delivering innovative, high-quality blockchain
                solutions that meet your specific business
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Blockchain Development Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mx-auto max-w-3xl">Our Digital Transformation Expertise</h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <SiHiveBlockchain size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                CUSTOM BLOCKCHAIN DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We create custom blockchain solutions tailored
                to your needs, including new platforms, Apps,
                and blockchain networks, with strategic
                planning, consensus selection, and architecture
                development for diverse use cases.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <GiContract size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                SMART CONTRACT DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We develop and deploy smart contracts that
                automate processes, reduce intermediaries, and
                enhance transparency. Our services cover design,
                coding, testing, and deployment for secure,
                efficient contracts.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <RiNftFill size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                NFT DEVELOPMENT
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer comprehensive NFT development services,
                including token creation, marketplaces, and
                platforms for trading digital assets like art,
                collectibles, and games, tapping into the NFT
                market.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdSecurity size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                BLOCKCHAIN SECURITY AUDITS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We provide blockchain security audits with
                vulnerability assessments, penetration testing,
                and code reviews to identify risks, ensure
                security, and comply with industry standards for
                your applications.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <BsCash size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                DECENTRALIZED FINANCE (DeFi) SOLUTIONS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We develop DeFi solutions, including
                decentralized exchanges, lending platforms, and
                stablecoins, offering innovative, secure, and
                efficient alternatives to traditional financial
                services using blockchain technology.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
              <div className="mb-[19px] text-bloo flex items-center">
                <MdConveyorBelt size={44} />
              </div>
              <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                BLOCKCHAIN BASED SUPPLY CHAIN SOLUTIONS
              </h3>
              <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                We offer blockchain-based supply chain solutions
                for end-to-end visibility, traceability, and
                efficiency, including tracking systems, smart
                contracts, and fraud reduction for improved
                operations and authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs product="Blockchain" />
      {/* <Footer /> */}
      <ProductFooter />
    </div>
  );
}

export default Blockchain;
