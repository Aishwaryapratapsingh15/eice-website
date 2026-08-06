"use client";
import { useState, useEffect } from "react";
import style from "./Styles/budget.module.css";
import { Link } from '@/nextNavigation'
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
import Accordion from "../../Components/Accordian/Accordian.jsx"
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
  const [isPhone, setIsPhone] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 980);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.herosectionImgBoxPhone}>
              <img style={{width : "100%"}} src={hero} alt={"wifi module"}  width="1121" height="923" />
            </div>

            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>BUDGET</div>
              <div className={style.mainParaPhone}>
                Plan, allocate, and monitor budgets across departments and properties with real-time variance tracking and intelligent forecasting tools.
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>
              <div className={style.headingBox}>
                <div className={style.mainHeading}>BUDGET</div>
                <div className={style.mainPara}>
                  Plan, allocate, and monitor budgets across departments and properties with real-time variance tracking and intelligent forecasting tools.
                </div>
              </div>

              <div className={style.herosectionImgBox}>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAGWORDS */}
      <section style={{ backgroundColor: "#f5f5f5" }} className={style.section2Wrapper}>
        <div className={`${style.section2} globalSectionSize`}>
          {tag.map((t, i) => (
            <div key={i} className={style.section2IconAndName}>
              <div className={style.section2Icon}>
                <img src={t.icon?.src || t.icon}  width={t.__w} height={t.__h} />
              </div>
              <div className={style.iconName}>{t.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOCKUP */}
      <section>
        <div className={style.section3}>
          <div className={style.blueBoxSetion3}>
           <div className={`${style.laptopImgSection3}`}>
                                      <div className={`${style.laptopImgBox}`} >
                                          <img style={{ width: "100%" }} src={overviewIcon} alt=""  width="720" height="458" />
                                      </div>
                                  </div>

            <div className={style.section3Para}>
              <div className={style.paragraph}>
                Our Budget module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline financial planning and budget control for Hotels, Resorts, Clubs and Institutions. From annual budget preparation to monthly variance analysis, this feature provides a powerful, user-friendly interface for finance teams, department heads, and management, ensuring fiscal discipline and data-driven financial decisions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      {/* <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.paragraph}>
            
          </div>
        </div>
      </section>  */}

      {/* FEATURES */}
      <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.keyFeatureHeading}>Key Features</div>

          <div className={style.featureContainer}>
            {features.map((f, i) => (
              <div key={i} className={style.featureInnerBox}>
                <div className={style.headingAndIconFeatures}>
                  <div style={{ width: "44px" }}>
                    <img src={f.icon?.src || f.icon} style={{ width: "100%" }}  width={f.__w} height={f.__h} />
                  </div>
                  <div className={style.featureHeading}>{f.title}</div>
                </div>

                <div className={style.featureDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
       <Link style={{ color: "white" }} className="linkClass" to={"/products/eicerise/form?product=EiceRise(Budget)"}>
      <section className={style.requestDemoBtn}>
        <div className={`${style.demoBtnWrapper} globalSectionSize`}>
          <div className={style.demoButton}>Request a Demo →</div>
        </div>
      </section>
      </Link>

      {/* BENEFITS */}
      <section style={{ background: "#f5f5f5" }} className={style.section5Wrapper}>
        <div className={`${style.section5} globalSectionSize`}>
          <div className={style.benefitSectionHeading}>Benefits</div>

          {benefits.map((b, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "GlobalBenefitBox1" : "GlobalBenefitBox2"}
            >
              <div className="GlobalBenefitImgBox">
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={b.icon?.src || b.icon} width="350px"  width={b.__w} height={b.__h} />
                  {/* <img src="/p2.jpg" width="80" />
                  <img src="/p3.jpg" width="80" /> */}
                </div>
              </div>

              <div className="GlobalBenefitTextBox">
                <div className={style.innerHeadingBenifit}>{b.title}</div>
                <div className={style.innerDescBenifit}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className={`${style.FAQsection} globalSectionSize`}>
          <div className={style.FAQHeading}>Frequently Asked Questions</div>

          <div className={style.FAQContainer}>
            {faqs.map((item, i) => (
              <Accordion key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

     {/* ================= FOOTER ================= */}
                 <Certificate />
                 <FooterUpperPart product="Budget" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                 {!isEmbed && <FooterLower />}
     
      
    </>
  );
}
