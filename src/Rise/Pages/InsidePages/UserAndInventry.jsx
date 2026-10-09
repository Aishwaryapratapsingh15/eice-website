"use client";


const au = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/section2icon/au.png";
const ir = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/section2icon/ir.png";
const sv = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/section2icon/sv.png";


const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/new/inventaryH.webp";


import { Link } from '@/nextNavigation'


const ara = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/featuresIcon/ara.png";
const cum = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/featuresIcon/cum.png";
const esm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/featuresIcon/esm.png";
const mls = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/featuresIcon/mls.png";
const rtic = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/featuresIcon/rtic.png";
const serpi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/featuresIcon/serpi.png";







const co = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/benefits/co.webp";
const iic = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/benefits/iic.webp";
const oe = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/benefits/oe.webp";
const rti = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/benefits/rti.webp";
const s = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/inventry/benefits/s.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/store.webp";

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"

import { useEffect, useState } from "react"

export default function UserAndInventry() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);


    const features = [
        {
            key: 1,
            heading: "Centralized User Management",
            desc: "Streamline user access store-wise with customizable roles and permissions.",
            img: cum,
            width: "44px"
        , __w: 300, __h: 300},
        {
            key: 2,
            heading: "Efficient Store Management",
            desc: "Manage multiple stores from one dashboard, tracking performance, inventory, and sales trends for optimized success.",
            img: esm,
            width: "44px"
        , __w: 300, __h: 300},
        {
            key: 3,
            heading: "Real-Time Inventory Control",
            desc: "Get live updates on inventory levels with automated synchronization and low stock alerts to ensure smooth operations.",
            img: rtic,
            width: "44px"
        , __w: 300, __h: 300},
        {
            key: 4,
            heading: "Advanced Reporting and Analytics",
            desc: "Leverage real-time, customizable reports to gain valuable insights into sales, stock turnover, and user activities.",
            img: ara,
            width: "44px"
        , __w: 300, __h: 300},
        {
            key: 5,
            heading: "Multi-Location Support",
            desc: "Manage multiple stores from a central platform, transfer stock between locations, and monitor regional inventory needs.",
            img: mls,
            width: "44px"
        , __w: 300, __h: 300},
        {
            key: 6,
            heading: "Seamless ERP Integration",
            desc: "Sync data across your systems automatically, reducing manual data entry and enhancing operational efficiency.",
            img: serpi,
            width: "44px"
        , __w: 300, __h: 300}
    ];





    const benefits = [
        {
            key: 1,
            heading: "Operational Efficiency",
            desc: "Reduce manual errors, accelerate processes, and free up resources for strategic tasks.",
            img: oe,
        __w: 1068, __h: 1017},
        {
            key: 2,
            heading: "Real-Time Insights",
            desc: "Get instant visibility into inventory, store performance, and user activity to make faster decisions.",
            img: rti,
        __w: 1068, __h: 1017},
        {
            key: 3,
            heading: "Cost Optimization",
            desc: "Automate restocking and inventory updates to minimize costs, prevent overstocking, and boost profit margins.",
            img: co,

        __w: 1068, __h: 1017},
        {
            key: 4,
            heading: "Scalability",
            desc: "Easily manage multiple locations as your business grows with customizable configurations and consistent performance.",
            img: s,
        __w: 1068, __h: 1017},
        {
            key: 5,
            heading: "Improved Inventory Control",
            desc: "Accurate, automated inventory management ensures real-time stock updates, enhancing the customer experience.",
            img: iic,
        __w: 1068, __h: 1017},


    ];


    const query = [
        {
            key: 1,
            question: "Q : How does the User and Store Inventory Management Portal streamline inventory management?",
            answer: "A : The portal offers real-time inventory updates, automates restocking, and provides centralized visibility of inventory across multiple store locations."
        },
        {
            key: 2,
            question: "Q : Does the system allow management of multiple store locations?",
            answer: "A : Yes, businesses can manage multiple stores from a single platform, transferring stock between locations and tracking regional inventory needs."
        },
        {
            key: 3,
            question: "Q : How does the portal help in tracking store performance?",
            answer: "A : It provides real-time reports on sales, stock turnover, and user activity, giving businesses the insights needed to optimize operations and boost performance."
        },
        {
            key: 4,
            question: "Q : Can I integrate the system with other ERP modules?",
            answer: "A : Yes, the portal seamlessly integrates with other ERP systems, reducing manual data entry and ensuring smooth data flow across functions."
        },
        {
            key: 5,
            question: "Q : How does the portal help reduce inventory costs?",
            answer: "A : The portal automates inventory updates, prevents overstocking, and optimizes restocking processes, reducing unnecessary costs and improving profit margins."
        }
    ];



    const footerUpperText = {

        text1: "Track inventory",
        text2: "",
        text3: "with precision using our robust management system",
        img: laptop
    }











  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]"><span>USER STORE</span><span className="text-[#01B0F1]"> &amp; INVENTORY</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Manage inventory effortlessly with real-time tracking, stock updates, and streamlined procurement processes
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="room booking" width="838" height="451" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={sv} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
                <div>Stock</div>
                <div>Visibility</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={au} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
                <div>Automated</div>
                <div>Updates</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={ir} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
                <div>Inventory</div>
                <div>Reports</div>
              </div>
            </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The User and Store Inventory Management Portal <strong>simplifies the management of users</strong> who place requests to stores for issuing raw materials, store operator supplies the material as per user request across locations. It <strong>enhances visibility, automates tracking, and optimizes performance, helping businesses reduce costs and improve efficiency</strong>.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={f.img?.src || f.img} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.heading}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(User Store and Inventory)"}>
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
              <div key={i} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
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
              <details key={i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
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
                <FooterUpperPart product="Userstore Inventory" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
                {!isEmbed &&<FooterLower />}

            </div>

        </>
    )
}

