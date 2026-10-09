"use client";
import { useState, useEffect } from "react";
import { Link } from '@/nextNavigation'
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const abpIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/ABP.png";
const brrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/BRR.png";
const cepIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/CEP.png";
const dwaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/DWA.png";
const ipIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/IP.png";
const hcIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/HC.png";
const mpcIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/MPC.png";
const varIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/VAR.png";
const mqtIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/MQT.png";
const barIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/BAR.jpg";
const bcoIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/BCO.jpg";
const bfdIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/BFD.png";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/BOE.jpg";
const bspIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/BSP.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/hero-budget.png";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const plannedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/Planned.png";
const preciseIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/Precise.png";
const predictIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/Predict.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/budget/budgetOverview.png";


export default function Budget() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);

  const features = [
    {
      icon: abpIcon,
      title: "Annual Budget Preparation",
      desc: "Create detailed annual budgets by department, cost center, and GL account with revenue projections, expense estimates, and capital expenditure planning"
    , __w: 50, __h: 50},
    {
      icon: dwaIcon,
      title: "Department-Wise Allocation",
      desc: "Allocate budgets to individual departments with sub-category breakdowns — manpower, materials, utilities, maintenance — for granular cost control."
    , __w: 50, __h: 50},
    {
      icon: mqtIcon,
      title: "Monthly & Quarterly Tracking",
      desc: "Compare actual spend against budgeted amounts on a monthly and quarterly basis with auto-calculated variances and trend visualizations."
    , __w: 50, __h: 50},
    {
      icon: varIcon,
      title: "Variance Analysis & Alerts",
      desc: "Receive automated alerts when spending exceeds budget thresholds at 80%, 90%, and 100% levels, enabling proactive cost management."
    , __w: 50, __h: 50},
    {
      icon: brrIcon,
      title: "Budget Revision & Reforecast",
      desc: "Submit and approve mid-year budget revisions with version control, maintaining a clear audit trail of all changes and their justifications."
    , __w: 50, __h: 50},
    {
      icon: cepIcon,
      title: "Capital Expenditure (CAPEX) Planning",
      desc: "Plan and track capital investments separately with ROI projections, approval workflows, and disbursement schedules."
    , __w: 50, __h: 50},
    {
      icon: mpcIcon,
      title: "Multi-Property Consolidation",
      desc: "Consolidate budgets across multiple properties into a unified corporate view while maintaining property-level granularity."
    , __w: 50, __h: 50},
    {
      icon: hcIcon,
      title: "Historical Comparison",
      desc: "Compare current budgets and actuals against previous years’ data for trend analysis, seasonal adjustments, and more accurate forecasting."
    , __w: 50, __h: 50},
    {
      icon: ipIcon,
      title: "Integration with Purchase",
      desc: "Auto-feed actual expenditure data from Purchase and Accounts modules for real-time budget utilization without manual data entry."
    , __w: 50, __h: 50}
  ];

  const benefits = [
    {
      icon: bfdIcon,
      title: "Financial Discipline",
      desc: "Threshold-based alerts and approval workflows enforce spending discipline across all departments and properties."
    , __w: 1068, __h: 1017},
    {
      icon: boeIcon,
      title: "Operational Efficiency",
      desc: "Automated variance calculations and report generation save finance teams hours of manual reconciliation work."
    , __w: 1068, __h: 1017},
    {
      icon: bspIcon,
      title: "Strategic Planning",
      desc: "Historical comparisons and trend analytics enable more accurate forecasting and informed financial decisions."
    , __w: 1068, __h: 1017},
    {
      icon: bcoIcon,
      title: "Centralized Oversight",
      desc: "Multi-property budget consolidation gives leadership a complete financial picture across the entire organization."
    , __w: 1068, __h: 1017},
    {
      icon: barIcon,
      title: "Audit Readiness",
      desc: "Version-controlled revisions, approval trails, and automated feeds ensure transparent, audit-ready budget documentation."
    , __w: 1068, __h: 1017}
  ];

  const faqs = [
    {
      q: "Q: What is the Budget module, and who is it designed for?",
      a: "A : The Budget module enables comprehensive financial planning, allocation, and tracking for hotels, resorts, clubs, and institutions. It serves finance teams, department heads, and senior management."
    },
    {
      q: "Q: How does this module help control overspending?",
      a: "A : It provides threshold alerts at 80%, 90%, and 100% budget utilization, integrates with Purchase for pre-purchase validation, and requires approvals for over-budget expenditures."
    },
    {
      q: "Q: Can the module handle multi-property budget planning?",
      a: "A : Yes. It supports property-level budget preparation with corporate-level consolidation, enabling both granular and organizational financial oversight."
    },
    {
      q: "Q: Is the Budget module integrated with other financial modules?",
      a: "A : Absolutely. It connects with Purchase, Payroll, Accounts & Finance, and the Indent workflow to auto-capture actual expenditure data in real time."
    }
  ];

  const tag = [
      {
      icon:plannedIcon,
      title:"Planned", 
      __w: 60, __h: 60},
      
      {
        icon:preciseIcon,
        title:"Precise",
       __w: 60, __h: 60}, 
       
       {
        icon:predictIcon,
        title:"Predictive"
  , __w: 60, __h: 60}
  ];
  


  
  const footerUpperText = {
    text1: "Plan with precision, ",
    text2: " ",
    text3: "spend with purpose",
    img: overviewIcon
  };
 return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">BUDGET</h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Plan, allocate, and monitor budgets across departments and properties with real-time variance tracking and intelligent forecasting tools.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="budget module" width="1121" height="923" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          {tag.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={t.icon?.src || t.icon} alt="" width={t.__w} height={t.__h} />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">{t.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={overviewIcon} alt="" width="720" height="458" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            Our Budget module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline financial planning and budget control for Hotels, Resorts, Clubs and Institutions. From annual budget preparation to monthly variance analysis, this feature provides a powerful, user-friendly interface for finance teams, department heads, and management, ensuring fiscal discipline and data-driven financial decisions.
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
                <img className="w-[44px] mb-[19px]" src={f.icon?.src || f.icon} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Budget)"}>
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
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={b.icon?.src || b.icon} alt="" width={b.__w} height={b.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{b.title}</h3>
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
            {faqs.map((item, i) => (
              <details key={i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
                <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
                  <span>{item.q}</span>
                  <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

     {/* ================= FOOTER ================= */}
                 <FooterUpperPart product="Budget" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                 {!isEmbed && <FooterLower />}
     
      
    </>
  );
}
