"use client";

const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/new/posH.webp";
const icon1 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/section3/icon1.png";
const icon2 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/section3/icon2.png";
const icon3 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/section3/icon3.png";

import { Link } from '@/nextNavigation'

// features
const ips = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/ips.png";
const it = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/it.png";
const kds = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/kds.png";
const oc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/oc.png";
const plp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/plp.png";
const rtmm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/rtmm.png";
const rtsr = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/rtsr.png";
const tm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/tm.png";
const ufi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/ufi.png";

// benifits

const b1 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/benefit/b1.webp";
const b2 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/benefit/b2.webp";
const b3 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/benefit/b3.webp";
const b4 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/benefit/b4.webp";
const b5 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/benefit/b5.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/pos2.webp";
import FooterLower from "../../Components/Footer/FooterLower.jsx"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"

import { useState, useEffect } from "react"





export default function Pos() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);


    const features = [
        {
            key: 1,
            heading: "User-Friendly Interface",
            desc: "Enjoy an intuitive, tablet-based POS system that allows staff to quickly and efficiently manage orders, reducing wait times and improving service quality.",
            img: ufi,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 2,
            heading: "Real-Time Menu Management",
            desc: "Easily update the menu with daily specials, seasonal items, and pricing changes. Reflect these updates instantly across all devices to ensure consistent information.",
            img: rtmm,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 3,
            heading: "Order Customization",
            desc: "Enable guests to customize their orders with specific preferences, such as dietary restrictions or ingredient substitutions, ensuring a personalized dining experience.",
            img: oc,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 4,
            heading: "Table Management",
            desc: "Visually manage table assignments, seating, and reservations with a dynamic table layout. Optimize table turnover and seating arrangements for better service flow.",
            img: tm,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 5,
            heading: "Integrated Payment Solutions",
            desc: "Accept multiple payment methods, including credit/debit cards, UPI, mobile wallets, and contactless payments. Split bills or apply discounts seamlessly at checkout.",
            img: ips,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 6,
            heading: "Inventory Tracking",
            desc: "Automatically track ingredient usage and monitor stock levels in real time. Get low-stock alerts to ensure timely replenishment and avoid service disruptions.",
            img: it,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 7,
            heading: "Kitchen Display System (KDS) Integration",
            desc: "Orders are directly sent to the kitchen display system, streamlining communication between the wait staff and kitchen team for faster, error-free order preparation.",
            img: kds,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 8,
            heading: "Promotions and Loyalty Programs",
            desc: "Easily set up special offers, happy hours, and loyalty programs to engage customers and drive repeat business. Track customer preferences for targeted promotions.",
            img: plp,
            width: "54px",
        __w: 200, __h: 200},
        {
            key: 9,
            heading: "Real-Time Sales Reporting",
            desc: "Access detailed sales reports and analytics to gain insights into daily revenue, top-selling items, and customer preferences, helping you make informed business decisions.",
            img: rtsr,
            width: "54px",
        __w: 200, __h: 200}
    ];




    const benefits = [
        {
            key: 1,
            heading: "Enhanced Customer Satisfaction",
            desc: "Streamlines the ordering process with a user-friendly interface, reducing wait times and improving service quality, leading to higher customer satisfaction.",
            img: b1,

        __w: 1068, __h: 1017},
        {
            key: 2,
            heading: "Operational Efficiency",
            desc: "Real-time menu updates and automated order management significantly reduce manual work, ensuring smooth operations across all dining outlets.",
            img: b2,

        __w: 1068, __h: 1017},
        {
            key: 3,
            heading: "Personalized Dining Experience",
            desc: "Customizable orders allow guests to specify dietary restrictions or preferences, providing a personalized dining experience that boosts customer loyalty.",
            img: b3,

        __w: 1068, __h: 1017},
        {
            key: 4,
            heading: "Optimized Resource Utilization",
            desc: "Dynamic table management and real-time inventory tracking enable better management of seating arrangements, stock levels, and ingredient usage, optimizing resource utilization.",
            img: b4,

        __w: 1068, __h: 1017},

        {
            key: 5,
            heading: "Data-Driven Decision Making",
            desc: "Real-time sales reporting and analytics provide valuable insights into customer preferences, top-selling items, and daily performance, enabling data-driven business decisions",
            img: b5,


        __w: 1068, __h: 1017}
    ];











    const query = [
        {
            question: "Q : How does the Dining (POS) module handle split bills or group payments?",
            answer: "A: The Dining (POS) module offers an intuitive split-billing feature, allowing guests to divide payments among multiple parties or payment methods seamlessly."
        },
        {
            question: "Q : Can the module manage menu customization and promotions in real-time?",
            answer: "A : Absolutely. The system allows real-time updates to menus, pricing, and promotional offers, ensuring your dining services are always up-to-date and aligned with your marketing strategies."
        },
        {
            question: "Q : Does the Dining (POS) module support table reservations and service tracking?",
            answer: "A : Yes, the module includes features for managing table reservations and tracking service status, helping staff deliver timely and personalized guest experiences."
        },
        {
            question: "Q : What analytics and reporting capabilities does the Dining (POS) module offer?",
            answer: "A : The system provides detailed insights into sales trends, popular menu items, and customer preferences through customizable reports, empowering data-driven decision-making."
        }
    ];


    const footerUpperText = {

        text1: 'Revolutionize',
        text2: "",
        text3: 'your dining experience.',
        img: laptop
    }





    return (
        <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">DINING<span className="text-bloo"> (POS)</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Simplify your dining operations with a robust POS system designed for quick billing, smooth transactions, and enhanced customer satisfaction.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="Pos module" width="746" height="543" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon1} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Effortless</div><div>Operations</div></div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon2} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Personalized</div><div>Experience</div></div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon3} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Smart</div><div>Insights</div></div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1280" height="739" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The <strong className="font-semibold">Dining (POS)</strong>  module of EICE Rise ERP is designed to revolutionize the food and beverage services in your hospitality establishment. It offers a robust, user-friendly Point of Sale (POS) system tailored for <strong className="font-semibold">Restaurants, Cafes, Bars, and Banquet services</strong> . Whether you are managing a <strong className="font-semibold">single restaurant or multiple dining outlets</strong> , this module provides a seamless, integrated experience that enhances operational efficiency and customer satisfaction
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={f.key ?? i} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={f.img?.src || f.img} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.heading}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Dining Pos)"}>
              Request a Demo <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" width="20" height="20" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Benefits</h2>

          <div className="flex flex-col gap-4">
            {benefits.map((b, i) => (
              <div key={b.key ?? i} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={b.img?.src || b.img} alt="" width={b.__w} height={b.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{b.heading}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] text-left">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="text-left sm:text-center mb-8">
            <div className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">FAQs</div>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {query.map((item, i) => (
              <details key={item.key ?? i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
                <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
                  <span>{item.question}</span>
                  <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

            {/*
            <div >
                <Footer3 />

            </div> */}

            <div >
                <FooterUpperPart product="POS Dining" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={footerUpperText.img} />
                {!isEmbed && <FooterLower />}

            </div>

        </>
    )
}

