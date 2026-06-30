"use client";
import style from "./Styles/audience.module.css";

import { Link } from '/src/nextNavigation';
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const bcmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/BCM.jpg";
const bemeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/BEME.png";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/BOE.jpg";
const briIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/BRI.jpg";
const bscIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/BSC.jpg";
const camIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/CAM.png";
const daIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/DA.png";
const eamIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/EAM.png";
const gvrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/GVR.png";
const matIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/MAT.png";
const rtotIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/RTOT.png";
const vwurIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/VWUR.png";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/hero-audience.png";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const trackIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/Tracked.png";
const transparentIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/Transparent.png";
const realtimeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/Realtime.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/audience/audienceOverview.png";


export default function AudienceAttendance() {
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
      heading: "Real-Time",
      heading2: "Occupancy Tracking",
      desc: "Monitor live attendance across all venues — gym, pool, restaurant, banquet hall, sports facilities — with real-time headcounts and capacity indicators.",
      img: rtotIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Guest & Visitor",
      heading2: "Registration",
      desc: "Register non-member guests and visitors with host details, purpose of visit, and time-stamped entry/exit logs for security and compliance.",
      img: gvrIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Capacity Alerts",
      heading2: "& Management",
      desc: "Set maximum capacity limits per venue and receive alerts when occupancy approaches or reaches limits, ensuring safety compliance and comfort.",
      img: camIcon,
      width: "44px"
    },
    {
      key: 4,
      heading: "Venue-Wise",
      heading2: "Utilization Reports",
      desc: "Generate detailed reports on venue usage patterns — peak hours, popular days, average duration of stay — for infrastructure planning and scheduling.",
      img: vwurIcon,
      width: "44px"
    },
    {
      key: 5,
      heading: "Member Activity",
      heading2: "Tracking",
      desc: "Track individual member venue visits, frequency, and activity preferences to understand usage patterns and drive personalized engagement.",
      img: matIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Event Attendance",
      heading2: "Management",
      desc: "Record and manage attendance for events, workshops, and programs with pre-registration, walk-in tracking, and post-event attendance reports.",
      img: eamIcon,
      width: "44px"
    },
    {
      key: 7,
      heading: "Dashboard &",
      heading2: "Analytics",
      desc: "Visualize attendance trends, peak-hour heatmaps, and venue comparison metrics through an interactive dashboard for strategic facility management.",
      img: daIcon,
      width: "44px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Fast, frictionless check-in methods and capacity management ensure a comfortable, well-managed venue experience.",
      img: bemeIcon
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automated attendance capture eliminates manual tracking, freeing staff to focus on member service and facility management.",
      img: boeIcon
    },
    {
      key: 3,
      heading: "Revenue Insights",
      desc: "Utilization data helps identify underused venues for revenue programs and justifies investment in high-demand facilities.",
      img: briIcon
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single dashboard provides real-time visibility into all venue occupancy and member activity across the entire property.",
      img: bcmIcon
    },
    {
      key: 5,
      heading: "Safety & Compliance",
      desc: "Capacity alerts and visitor logs ensure regulatory compliance and enable swift head counts during emergency situations.",
      img: bscIcon
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Audience Attendance module, and who is it designed for?",
      answer: "A : The Audience Attendance module tracks real-time occupancy and member attendance across all facilities — gym, pool, banquet halls, sports venues — for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve facility management?",
      answer: "A : It provides real-time occupancy data, utilization analytics, and capacity alerts, enabling managers to optimize scheduling, staffing, and infrastructure decisions."
    },
    {
      question: "Q : What check-in methods are supported?",
      answer: "A : The module supports RFID card, biometric scan, and manual check-in methods, integrating with existing access control hardware."
    },
    {
      question: "Q : Is the Venue Attendance module integrated with Member Portal?",
      answer: "A : Absolutely. Member visit data syncs with their profiles in the Member Portal, enabling personalized engagement and activity-based communications."
    }
  ];

  const tag = [
    {
      icon: trackIcon,
      title: "Tracked",
    },

    {
      icon: transparentIcon,
      title: "Transparent",
    },

    {
      icon: realtimeIcon,
      title: "Real-Time"
    }
  ];


  const footerUpperText = {
    text1: "Every visit counted,",
    text2: "",
    text3: "every venue optimized",
    img: laptop
  };

  return (
    <>
      {/* ================= HERO ================= */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.herosectionImgBoxPhone}>
              <img style={{ width: "100%" }} src={hero} alt={"wifi module"} />
            </div>

            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>AUDIENCE <span style={{ color: "#01B0F1" }}>ATTENDANCE</span></div>
              <div className={style.mainParaPhone}>
                Monitor and manage banquet-wise footfall and attendance with real-time tracking, capacity management, and detailed utilization analytics.
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>

              <div className={style.headingBox}>
                <div className={style.mainHeading}>AUDIENCE <span style={{ color: "#01B0F1" }}>ATTENDANCE</span></div>
                <div className={style.mainPara}>
                  Monitor and manage banquet-wise footfall and attendance with real-time tracking, capacity management, and detailed utilization analytics.
                </div>
              </div>

              <div className={`${style.herosectionImgBox}`}>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= TAGWORDS ================= */}
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
                Our Audience Attendance module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to track and manage attendance across venues for Hotels, Resorts, Clubs and Institutions. From conference halls to swimming pools, this feature provides real-time occupancy monitoring, member check-in tracking, and venue utilization analytics, ensuring optimal capacity management and member engagement.
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

      {/* ================= CTA ================= */}
      <section className={style.requestDemoBtn}>
        <Link to="/products/eicerise/form?product=EiceRise(Audience Attendance)" style={{ color: "white",  textDecoration: "none" }}>
          <div className={`${style.demoBtnWrapper} globalSectionSize`}>
            <div className={style.demoButton}>
              Request a Demo <FaArrowRightLong />
            </div>
          </div>
        </Link>
      </section>

      {/* ================= BENEFITS ================= */}
      <section style={{ background: "#f5f5f5" }} className={style.section5Wrapper}>
        <div className={`${style.section5} globalSectionSize`}>
          <div className={style.benefitSectionHeading}>Benefits</div>

          {benefits.map((item, index) =>
            index % 2 === 0 ? (
              <div key={index} className="GlobalBenefitBox1">

                <div className="GlobalBenefitBox1">
                  <div className="GlobalBenefitImgBox">
                    <img src={item.img?.src || item.img} style={{ width: "100%" }} />
                  </div>
                  <div className="GlobalBenefitTextBox">
                    <div className={style.innerHeadingBenifit}>{item.heading}</div>
                    <div className={style.innerDescBenifit}>{item.desc}</div>
                  </div>
                </div></div>
            ) : (
              <div key={index} className="GlobalBenefitBox1">

                <div className="GlobalBenefitBox2">
                  <div className="GlobalBenefitImgBox">
                    <img src={item.img?.src || item.img} style={{ width: "100%" }} />
                  </div>
                  <div className="GlobalBenefitTextBox">
                    <div className={style.innerHeadingBenifit}>{item.heading}</div>
                    <div className={style.innerDescBenifit}>{item.desc}</div>
                  </div>
                </div></div>
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
      <FooterUpperPart text1={footerUpperText.text1} text2={<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
      {!isEmbed && <FooterLower />}

    </>
  );
}