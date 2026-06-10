"use client";
import style from "./Styles/feedback.module.css";

import { Link } from '/src/nextNavigation';
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const caIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/CA.png";
const dwrIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/DWR.png";
const ghpmIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/GHPM.png";
const retIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/RET.png";
const rtfaIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/RTFA.png";
const sadIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/SAD.png";
const bcmIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/BCM.jpg";
const beglIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/BEGL.jpg";
const boiIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/BOI.jpg";
const briIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/BRI.jpg";
const bsrIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/BSR.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/feedback/hero-feedback.jpg";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/section3Laptop/room.webp";
const insightfulIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/Insightful.png";
const realtimeIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/Realtime.png";
const actionableIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/Actionable.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/feedback/feedbackOverview.png";



export default function Feedback() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth <= 980);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Real-Time",
      heading2: "Feedback Alerts",
      desc: "Receive instant notifications for negative feedback or low ratings, enabling immediate intervention and service recovery before guest departure.",
      icon: rtfaIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Sentiment",
      heading2: "Analysis Dashboard",
      desc: "Visualize guest sentiment trends, satisfaction scores, and NPS across departments, outlets, and time periods through an interactive analytics dashboard.",
      icon: sadIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Department-Wise",
      heading2: "Routing",
      desc: "Automatically route feedback to the relevant department — housekeeping, F&B, front desk, maintenance — based on category for targeted resolution.",
      icon: dwrIcon,
      width: "44px"
    },
    {
      key: 4,
      heading: "Resolution &",
      heading2: "Escalation Tracking",
      desc: "Track feedback resolution from acknowledgement to closure with SLA timers, escalation rules, and manager override capabilities.",
      icon: retIcon,
      width: "44px"
    },
    {
      key: 5,
      heading: "Guest History",
      heading2: "& Preference Mapping",
      desc: "Link feedback to guest profiles, building a comprehensive preference and complaint history for personalised future interactions.",
      icon: ghpmIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Comparative",
      heading2: "Analytics",
      desc: "Benchmark feedback scores across properties, departments, and time periods to identify best practices and areas requiring improvement.",
      icon: caIcon,
      width: "44px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Guest Loyalty",
      desc: "Prompt acknowledgement and resolution of feedback demonstrates care, converting potentially dissatisfied guests into loyal advocates.",
      img: beglIcon
    },
    {
      key: 2,
      heading: "Operational Improvement",
      desc: "Data-driven insights from feedback trends help identify systemic issues and prioritize operational improvements.",
      img: boiIcon
    },
    {
      key: 3,
      heading: "Revenue Impact",
      desc: "Improved satisfaction scores directly correlate with higher repeat visits, positive reviews, and increased referral revenue.",
      img: briIcon
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single dashboard for all feedback across properties, channels, and departments provides complete visibility into guest sentiment.",
      img: bcmIcon
    },
    {
      key: 5,
      heading: "Service Recovery",
      desc: "Real-time alerts enable immediate intervention for negative experiences, turning potential complaints into service recovery success stories.",
      img: bsrIcon
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Feedback System module, and who is it designed for?",
      answer: "A : The Feedback System captures, analyzes, and manages guest feedback across multiple channels for hotels, resorts, clubs, and institutions, helping improve service quality and guest satisfaction."
    },
    {
      question: "Q : How does this module improve guest satisfaction?",
      answer: "A : Real-time negative feedback alerts enable immediate service recovery, while sentiment analytics help identify and fix systemic issues before they impact more guests."
    },
    {
      question: "Q : Can feedback be routed to specific departments automatically?",
      answer: "Yes. Feedback is auto-categorized and routed to the relevant department — F&B, housekeeping, front desk — with SLA timers and escalation rules for timely resolution."
    },
    {
      question: "Q : Is the Feedback System integrated with guest profiles?",
      answer: "A : Absolutely. Every feedback entry links to the guest’s profile in the Member Portal and Room Booking modules, building a comprehensive preference and interaction history."
    }
  ];


   const tag = [
        {
        icon:insightfulIcon,
        title:"Insightful", 
        },
        
        {
          icon:realtimeIcon,
          title:"Real Time",
         }, 
         
         {
          icon:actionableIcon,
          title:"Actionable"
    }
    ];


  const footerUpperText = {
    text1: "Listen more, ",
    text2: "",
    text3: "serve better",
    img: overviewIcon
  };

  return (
    <>
      {/* ================= HERO ================= */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>FEEDBACK <span style={{color:"01b0F1"}}>SYSTEM</span></div>
              <div className={style.mainParaPhone}>
                Capture, analyze, and act on guest feedback in real time, transforming opinions into operational improvements and enhanced guest satisfaction.
              </div>
            </div>

            <div className={style.herosectionImgBoxPhone}>
              <img style={{width : "100%"}} src={hero} alt={"feedback module"} />
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>
              
              <div className={style.headingBox}>
                <div className={style.mainHeading}>FEEDBACK <span style={{color:"#01B0F1"}}>SYSTEM</span></div>
                <div className={style.mainPara}>
                  Capture, analyze, and act on guest feedback in real time, transforming opinions into operational improvements and enhanced guest satisfaction.
                </div>
              </div>

              {/* 3 IMAGE GRID */}
              <div className={style.herosectionImgBox} style={{ display: "flex", gap: "10px" }}>
            
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= TAGWORDS ================= */}
      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} globalSectionSize`}>
          {tag.map((t, i) => (
            <div key={i} className={style.section2IconAndName}>
              <img src={t.icon?.src || t.icon} className={style.section2Icon} />
              <div className={style.iconName}>{t.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section>
        <div className={style.section3}>
          <div className={style.blueBoxSetion3}>
            <div className={`${style.laptopImgSection3}`}>
                                                  <div className={`${style.laptopImgBox}`} >
                                                      <img style={{ width: "100%" }} src={overviewIcon} alt="" />
                                                  </div>
                                              </div>

            <div className={style.section3Para}>
              <div className={style.paragraph}>
                Our Feedback System module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to capture and manage guest feedback for Hotels, Resorts, Clubs and Institutions. From dining experiences to room comfort, banquet service, this feature provides multi-channel feedback collection, sentiment analysis, ensuring every guest voice is heard and acted upon.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.keyFeatureHeading}>Key Features</div>

          <div className={style.featureContainer}>
            {features.map((item, index) => (
              <div key={item.key ?? index} className={style.featureInnerBox}>
                <div className={style.headingAndIconFeatures}>
                  <div style={{ width: item.width }}>
                    <img src={item.icon?.src || item.icon} style={{ width: "100%" }} />
                  </div>

                  <div className={style.featureHeading}>
                    <div>{item.heading}</div>
                    <div>{item.heading2}</div>
                  </div>
                </div>

                <div className={style.featureDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section>
        <Link to="/products/eice-rise/form?product=EiceRise(Feedback)" style={{ color: "white",  textDecoration: "none" }}>
          <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
            <div className={style.demoButton}>
              Request a Demo <FaArrowRightLong />
            </div>
          </div>
        </Link>
      </section>

      {/* ================= BENEFITS ================= */}
      <section style={{ background: "#f5f5f5" }}>
        <div className={`${style.section5} globalSectionSize`}>
          <div className={style.benefitSectionHeading}>Benefits</div>

          {benefits.map((item, index) =>
            index % 2 === 0 ? (
              <div key={index} className="GlobalBenefitBox1">
                <div className="GlobalBenefitImgBox">
                  <img src={item.img?.src || item.img} style={{ width: "100%" }} />
                </div>
                <div className="GlobalBenefitTextBox">
                  <div className={style.innerHeadingBenifit}>{item.heading}</div>
                  <div className={style.innerDescBenifit}>{item.desc}</div>
                </div>
              </div>
            ) : (
              <div key={index} className="GlobalBenefitBox2">
                <div className="GlobalBenefitImgBox">
                  <img src={item.img?.src || item.img} style={{ width: "100%" }} />
                </div>
                <div className="GlobalBenefitTextBox">
                  <div className={style.innerHeadingBenifit}>{item.heading}</div>
                  <div className={style.innerDescBenifit}>{item.desc}</div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section>
        <div className={`${style.FAQsection} globalSectionSize`}>
          <div className={style.FAQHeading}>Frequently Asked Questions</div>

          <div className={style.FAQContainer}>
            {query.map((item, i) => (
              <Accordion key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

     
           {/* ================= FOOTER ================= */}
                           <Certificate />
                           <FooterUpperPart text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
                           {!isEmbed && <FooterLower />}
               
    </>
  );
}