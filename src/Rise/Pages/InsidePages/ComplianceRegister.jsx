"use client";
import style from "./Styles/compliance.module.css";

import { Link } from '@/nextNavigation';
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const dwabIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/DWAB.png";
const pdaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/PDA.png";
const pprIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/PPR.png";
const rtaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/RTA.png";
const rtptIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/RTPT.png";
const serIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/SER.png";
const tadIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/TAD.png";
const bcvIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BCV.png";
const bdddIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BDDD.jpg";
const beaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BEA.jpg";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BOE.jpg";
const bsqIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/BSQ.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/hero-compliance.png";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const visibleIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/Visible.png";
const accountableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/Accountable.png";
const connectedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/Connected.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/compliance/complianceOverview.png";


export default function ComplianceRegister() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth <= 980);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Task Assignment",
      heading2: "& Delegation",
      desc: "Assign tasks with priority levels, deadlines, attachments, and detailed instructions from a centralized task management dashboard.",
      img: tadIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Real-Time",
      heading2: "Progress Tracking",
      desc: "Monitor task status — pending, in-progress, completed, overdue — in real time with progress percentages and timeline views.",
      img: rtptIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Department-Wise",
      heading2: "Activity Boards",
      desc: "Organize activities by department — housekeeping, maintenance, F&B, front office — with customizable boards, filters, and views.",
      img: dwabIcon,
      width: "60px"
    },
    {
      key: 4,
      heading: "Recurring Task",
      heading2: "Automation",
      desc: "Set up recurring tasks for monthly operations like room inspections, equipment servicing, and compliance checks with auto-assignment.",
      img: rtaIcon,
      width: "60px"
    },
    {
      key: 5,
      heading: "SLA &",
      heading2: "Escalation Rules",
      desc: "Define Service Level Agreements for task categories with automated escalation to supervisors and managers when deadlines are breached.",
      img: serIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Photo & Document",
      heading2: "Attachments",
      desc: "Allow staff to attach before/after photos, inspection reports, and documents to tasks as proof of completion for audit trails.",
      img: pdaIcon,
      width: "4opx"
    },
    {
      key: 7,
      heading: "Performance",
      heading2: "Reports",
      desc: "Generate individual and team performance reports — completion rates, average resolution time, SLA compliance — for workforce optimization.",
      img: pprIcon,
      width: "60px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Accountability",
      desc: "Clear task ownership, deadlines, and audit trails ensure every activity has a responsible person and a documented outcome.",
      img: beaIcon
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automated recurring tasks and reduce supervisor follow-up effort and keep operations running smoothly.",
      img: boeIcon
    },
    {
      key: 3,
      heading: "Service Quality",
      desc: "SLA-driven task management ensures guest-impacting activities are prioritized and completed within acceptable timeframes.",
      img: bsqIcon
    },
    {
      key: 4,
      heading: "Centralized Visibility",
      desc: "Management gets a bird’s-eye view of all operational activities across departments and properties from a single dashboard.",
      img: bcvIcon
    },
    {
      key: 5,
      heading: "Data-Driven Decisions",
      desc: "Performance analytics help identify bottlenecks, reward top performers, and allocate resources more effectively.",
      img: bdddIcon
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Compliance Register module, and who is it designed for?",
      answer: "A : The Compliance Register manages task assignment, progress tracking, and performance monitoring across all operational departments for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve operational accountability?",
      answer: "A : Every task has a clear owner, deadline, and digital audit trail. SLA rules auto-escalate overdue tasks, and photo attachments provide completion evidence."
    },
    {
      question: "Q : Can the module handle recurring operational tasks?",
      answer: "A : Yes. Daily room inspections, weekly equipment checks, and monthly compliance reviews can all be configured as auto-recurring tasks with preset assignment rules."
    },
    {
      question: "Q : Is the Activity Tracker integrated with other EICE Rise modules?",
      answer: "A : Absolutely. It connects with Housekeeping, Maintenance, HRMS to auto-generate tasks from guest complaints, inspection results, and work orders."
    }
  ];

  const tag = [
          {
          icon:visibleIcon,
          title:"Visible", 
          },
          
          {
            icon:accountableIcon,
            title:"Accountable",
           }, 
           
           {
            icon:connectedIcon,
            title:"Connected"
      }
      ];

  const footerUpperText = {
    text1: "Track every task,",
    text2: "",
    text3: "deliver every promise",
    img: overviewIcon
  };

  return (
    <>
      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.herosectionImgBoxPhone}>
              <img src={hero}style={{ width: "100%" }} />
            </div>

            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>COMPLIANCE <span style={{color:"#01B0F1"}}>REGISTER</span></div>
              <div className={style.mainParaPhone}>
                Track, assign, and monitor operational activities and tasks across departments in real time, ensuring accountability and timely completion.
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>
              
              <div className={style.headingBox}>
                <div className={style.mainHeading}>COMPLIANCE <span style={{color:"#01B0F1"}}>REGISTER</span></div>
                <div className={style.mainPara}>
                  Track, assign, and monitor operational activities and tasks across departments in real time, ensuring accountability and timely completion.
                </div>
              </div>

              <div className={`${style.herosectionImgBox}`}>
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
              <img src={t.icon?.src || t.icon} className={style.section2Icon} />
              <div className={style.iconName}>{t.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 */}
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
              Our Compliance Register module  is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to manage and monitor departmental tasks, organization compliance register and activities for Hotels, Resorts, Clubs and Institutions. From daily housekeeping checklists to maintenance work orders, this feature provides a task assignment, progress tracking, and performance analytics platform, ensuring every operational activity is visible, accountable, and completed on time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.keyFeatureHeading}>Key Features</div>

          <div className={style.featureContainer}>
            {features.map((item, index) => (
              <div key={item.key ?? index} className={style.featureInnerBox}>
                <div className={style.headingAndIconFeatures}>
                  <div style={{ width: item.width }}>
                    <img src={item.img?.src || item.img} style={{ width: "100%" }} />
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

      {/* CTA */}
      <section className={style.requestDemoBtn}>
        <Link to="/products/eicerise/form?product=EiceRise(Compliance Register)" style={{ color: "white",  textDecoration: "none" }}>
          <div className={`${style.demoBtnWrapper} globalSectionSize`}>
            <div className={style.demoButton}>
              Request a Demo <FaArrowRightLong />
            </div>
          </div>
        </Link>
      </section>

      {/* BENEFITS */}
      <section style={{ background: "#f5f5f5" }} className={style.section5Wrapper}>
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

      {/* FAQ */}
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