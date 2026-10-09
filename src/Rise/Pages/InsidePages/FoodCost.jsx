"use client";




const eh = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/ICONS/EH.png";
const ep = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/ICONS/EP.png";



import { Link } from '@/nextNavigation'



const COGSc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/COGSc.png";
const dpca = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/dpca.png";
const im = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/im.png";
const me = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/me.png";
const rc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/rc.png";
const rtct = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/rtct.png";
const smpo = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/smpo.png";
const spi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/spi.png";
const wlm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/foodFeatures/wlm.png";



const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/foodh.webp";




const cc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/benefits/cc.webp";
const emm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/benefits/emm.webp";
const esn = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/benefits/esn.webp";
const ioe = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/benefits/ioe.webp";
const po = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/food/benefits/po.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/food.webp";

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"


import { useState, useEffect } from "react"

export default function FoodCost() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);




  const features = [
    {
      key: 1,
      heading: "Real-Time Cost Tracking",
      desc: "Monitor the cost of ingredients, resources, and overhead in real time, ensuring that all food and beverage transactions, from procurement to sale, are tracked and analyzed for accurate cost control.",
      img: rtct,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 2,
      heading: "Recipe Costing",
      desc: "Track detailed recipes, including ingredient quantities, preparation methods, and associated costs. The system automatically calculates the cost per dish or drink, helping businesses make accurate pricing decisions.",
      img: rc,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 3,
      heading: "Menu Engineering",
      desc: "Analyze the profitability of menu items by evaluating cost versus price. This helps identify high-cost or low-margin items and suggests ways to adjust pricing, optimize menu offerings, and implement portion control to boost profitability.",
      img: me,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 4,
      heading: "Supplier Management & Purchase Orders",
      desc: "Monitor supplier prices and purchase orders to ensure the best deals on ingredients. The system helps compare supplier prices, manage inventory efficiently, and negotiate better prices to reduce the cost of goods sold (COGS).",
      img: smpo,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 5,
      heading: "COGS Calculation",
      desc: "Track and calculate the cost of goods sold on a daily, weekly, or monthly basis. This feature provides insights into the total cost of ingredients used and evaluates the profitability of each food and beverage sale.",
      img: COGSc,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 6,
      heading: "Waste and Loss Management",
      desc: "Identify and reduce food and beverage wastage, whether caused by over-portioning, spoilage, or incorrect inventory practices. This feature helps minimize loss and optimize resource utilization.",
      img: wlm,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 7,
      heading: "Dynamic Pricing and Cost Adjustments",
      desc: "Adjust pricing strategies based on demand fluctuations, seasonality, or special events. The system enables businesses to set flexible pricing options for peak periods, offering promotions or discounts while maintaining profitability.",
      img: dpca,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 8,
      heading: "Inventory Management",
      desc: "Efficiently manage inventory levels to avoid overstocking or stockouts. This system integrates inventory and purchasing to ensure stock availability, reduce waste, and maintain optimal ingredient levels.",
      img: im,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 9,
      heading: "Sales Performance Insights",
      desc: "Analyze the sales performance of menu items and identify top-performing dishes and beverages. Use these insights to adjust menu offerings and match customer preferences.",
      img: spi,
      width: "44px",
    __w: 300, __h: 300},

  ];






  const benefits = [
    {
      key: 1,
      heading: "Profitability Optimization",
      desc: "Gain insights into ingredient costs, portion sizes, and menu profitability to adjust pricing, eliminate waste, and improve profit margins.",
      img: po,
    __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Cost Control",
      desc: "Track F&B expenses in real-time from procurement to sale, reducing unexpected costs and ensuring better financial control.",
      img: cc,
    __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Efficient Menu Management",
      desc: "Optimize menu items based on profitability, removing low-margin dishes and adjusting portions to meet customer demand while ensuring profitability.",
      img: emm,
    __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Enhanced Supplier Negotiation",
      desc: "Track supplier prices and evaluate cost-effectiveness to negotiate better terms and reduce ingredient costs.",
      img: esn,
    __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Increased Operational Efficiency",
      desc: "Automated calculations, real-time tracking, and insightful analytics streamline daily operations, improving efficiency and guest experiences.",
      img: ioe,
    __w: 1068, __h: 1017}
  ];


  const query = [
    {
      key: 1,
      question: "Q : How does the module track food and beverage costs?",
      answer: "A : The system tracks the cost of ingredients, resources, and overhead in real-time, helping businesses maintain control over food and beverage transactions."
    },
    {
      key: 2,
      question: "Q : Can the module help with menu pricing?",
      answer: "A : Yes, it analyzes menu item profitability by evaluating cost vs. price, helping businesses adjust pricing and optimize menu offerings."
    },
    {
      key: 3,
      question: "Q : Does the module assist with waste reduction?",
      answer: "A : Yes, it identifies and reduces food wastage by tracking over-portioning, spoilage, and inefficient inventory practices, helping optimize resource utilization."
    },
    {
      key: 4,
      question: "Q : How does the system manage suppliers and inventory?",
      answer: "A : It helps businesses monitor supplier prices, manage purchase orders, and maintain optimal inventory levels to reduce food costs and ensure efficient stock management."
    },
    {
      key: 5,
      question: "Q : Can I generate detailed financial reports for F&B costs?",
      answer: "A : Yes, the system provides detailed reports on F&B costs, profit margins, and pricing strategies, helping businesses make informed decisions for operational efficiency."
    }
  ];








  const footerUpperText = {

    text1: "Optimize food costs",
    text2: "",
    text3: "with realtime analysis and insights",
    img: laptop
  }



  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]"><>FOOD & BEVERAGE<span className="text-bloo"> COST ANALYSIS</span></></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Maximize profitability with accurate food and beverage cost tracking, helping you make informed business decisions.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="room booking" width="618" height="473" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={eh} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Efficiency in</div>
              <div>Hospitality</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={ep} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Enhancing</div>
              <div>Profitability</div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The  <strong className="font-semibold">Food & Beverage (F&B) Cost Analysis module</strong>   in EICE Rise ERP helps hospitality businesses <strong className="font-semibold">monitor and optimize F&B costs</strong> monitor and optimize F&B costs. It offers <strong className="font-semibold">real-time tracking, cost analysis, and strategic insights</strong>  to improve efficiency, reduce wastage, and enhance profitability.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div key={item.key ?? index} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={item.img?.src || item.img} alt="" width={item.__w} height={item.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.heading}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Food Cost)"}>
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
            {benefits.map((item, index) => (
              <div key={index} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={item.img?.src || item.img} alt="" width={item.__w} height={item.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{item.heading}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] text-left">{item.desc}</p>
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

      <div >
        <FooterUpperPart product="Food Cost" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
        {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}


