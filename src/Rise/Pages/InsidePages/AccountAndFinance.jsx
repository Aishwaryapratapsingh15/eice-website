"use client";

import { Link } from '@/nextNavigation'


const afw = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financeSection2/afw.png";
const ddfi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financeSection2/ddfi.png";
const rtet = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financeSection2/rtet.png";






const ara = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/ara.png";
const bf = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/bf.png";

const cfm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/cfm.png";
const iib = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/iib.png";
const pgi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/pgi.png";
const rtfd = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/rtfd.png";
const tmc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/tmc.png";
const vsp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/icon/vsp.png";





import { useState, useEffect } from "react"

const ac = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financebenefit/ac.webp";
const ca = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financebenefit/ca.webp";
const cc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financebenefit/cc.webp";
const icfm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financebenefit/icfm.webp";
const oe = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/account/financebenefit/oe.webp";

const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/accounth.webp";

const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/account.webp";



import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"


export default function AccountAndFinance() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);





  
  const features = [
    {
      key: 1,
      heading: "Comprehensive Financial Management",
      desc: "Manage all core financial functions, including accounts receivable, accounts payable, debit & credit notes, taxation, balance sheets, and general ledger. Streamline processes and ensure timely payments and collections.",
      img: cfm,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 2,
      heading: "Real-Time Financial Data",
      desc: "Access up-to-date financial data at any time, empowering managers to make data-driven decisions that enhance profitability and financial health.",
      img: rtfd,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 3,
      heading: "Integrated Invoicing and Billing",
      desc: "Automatically generate invoices and billing statements for room bookings, event bookings, dining, and more. Customizable invoice templates ensure branding consistency and accuracy.",
      img: iib,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 4,
      heading: "Tax Management and Compliance",
      desc: "Stay compliant with regional and international tax regulations. Automate tax calculations based on local laws and apply them seamlessly to invoices and payments.",
      img: tmc,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 5,
      heading: "Advanced Reporting and Analytics",
      desc: "Create custom financial reports that provide deeper insights into revenue, expenditures, profit margins, etc. Analyze trends and generate forecasts to support future planning.",
      img: ara,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 6,
      heading: "Payment Gateway Integration",
      desc: "Integrated with secure payment gateways, businesses can process payments efficiently and track financial transactions in real-time.",
      img: pgi,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 7,
      heading: "Budgeting and Forecasting",
      desc: "Plan and monitor your budget effectively with integrated forecasting tools. Track expenses, and revenues, and allocate resources for better financial planning.",
      img: bf,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 8,
      heading: "Cash Flow Management",
      desc: "Monitor cash flow with real-time reporting to ensure liquidity, helping businesses manage operational costs and optimize cash reserves.",
      img: cfm,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 9,
      heading: "Vendor and Supplier Payments",
      desc: "Easily manage payments to vendors and suppliers, track due invoices, and ensure timely settlements with the automated payment tracking system.",
      img: vsp,
      width: "44px",
    __w: 300, __h: 300},

  ];




  const benefits = [
    {
      key: 1,
      heading: "Financial Accuracy",
      desc: "Reduce human error in financial reporting and ensure accuracy in all transactions and documentation.",
      img: ac,

    __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine financial tasks, freeing up time for finance teams to focus on strategic decision-making.",
      img: oe

    , __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Cost Control",
      desc: "Monitor expenses, analyze spending patterns, and optimize cost management across departments.",
      img: cc,

    __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Compliance Assurance",
      desc: "Stay compliant with industry standards and tax regulations, avoiding penalties and ensuring financial transparency.",
      img: ca,

    __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Improved Cash Flow Management",
      desc: "With real-time tracking and reporting, businesses can manage their cash flow more effectively, improving financial stability.",
      img: icfm,

    __w: 1068, __h: 1017},


    // {
    //   key: 6,
    //   heading: "Enhanced Decision Making",
    //   desc: "Gain valuable financial insights that drive informed decision-making and business growth.",
    //   img: b1,

    // },
    // {
    //   key: 7,
    //   heading: "Seamless Integration with Other Modules",
    //   desc: "Fully integrates with other EICE Rise ERP modules (like Room Booking, Banquet & Billing, Dining (POS), Member Portal, Employee Portal, Payroll, User & Store Inventory, Food & Beverage, and Purchase & Vendor Portal) for consistent data flow and synchronized financial records.",
    //   img: b2,
    // }
  ];



  const query = [
    {
      key: 1,
      question: "Q : What financial functions does the Accounts & Finance module manage?",
      answer: "A : The module manages accounts receivable, accounts payable, debit & credit notes, taxation, balance sheets, and general ledger. It streamlines processes and ensures accurate financial operations."
    },
    {
      key: 2,
      question: "Q : How does the module help in financial decision-making?",
      answer: "A : It provides real-time financial data and advanced reporting tools, enabling managers to make data-driven decisions that enhance profitability and financial stability."
    },
    {
      key: 3,
      question: "Q : How does the system handle tax compliance?",
      answer: "A : The module automates tax calculations based on regional and international tax regulations, ensuring compliance and applying taxes seamlessly to invoices and payments."
    },
    {
      key: 4,
      question: "Q : Can the Accounts & Finance module integrate with other systems?",
      answer: "A : Yes, it integrates fully with other EICE Rise ERP modules like Room Booking, Banquet & Billing, Dining (POS), and more, ensuring synchronized financial records and consistent data flow."
    },
    {
      key: 5,
      question: "Q : How does the system assist in managing cash flow?",
      answer: "A : It provides real-time tracking and reporting, helping businesses monitor cash flow, ensuring liquidity, and optimizing cash reserves."
    }
  ];




  const footerUpperText = {

    text1: "Gain control ",
    text2: "",
    text3: "of your finances with automated workflows and insights.",
    img: laptop
  }













  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">ACCOUNTS<span className="text-[#01B0F1]"> & FINANCE</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Gain full financial control with real-time accounting and financial insights, tailored for accuracy and business growth.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="room booking" width="854" height="545" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={ddfi} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Data Driver Financial Insights</div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={afw} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Automated Financial Workflows</div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={rtet} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Real Time Expense Tracking</div>
            </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The Accounts and Finance module in EICE Rise ERP <strong className="font-semibold">streamlines financial management for hospitality operations</strong> . It automates workflows, ensuring accurate records, compliance, and improved financial decision-making. This module enhances control and transparency in financial activities from budgeting, forecasting, invoicing, and taxation to financial reporting.
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
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Account and Finance)"}>
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
              <div key={item.key ?? index} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
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
       <FooterUpperPart product="Account & Finance" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
       {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}

