"use client";
import style from "./Styles/vendor.module.css";

import { Link } from '/src/nextNavigation';
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
const bpvmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/BPVM.png";
const camIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/CAM.png";
const cdtIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/CDT.png";
const phlIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/PHL.png";
const psrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/PSR.png";
const vcpIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VCP.png";
const vctIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VCT.png";
const vmdIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VMD.png";
const vroIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/VRO.png";
const bcmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bcm.png";
const bcoIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bco.jpg";
const bcrmIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bcrm.jpg";
const bescrIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/bescr.png";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/boe.jpg";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/hero-vendor.png";
// const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const ratedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/Rated.png";
const reliableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/Reliable.png";
const regulatedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/Regulated.png";
const overviewIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/vendor/vendorOverview.png";






export default function VendorManagement() {
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
      heading: "Vendor Registration",
      heading2: "& Onboarding",
      desc: "Digitize vendor onboarding with online registration forms, document collection (GST, PAN, bank details), and verification workflows for compliance-ready vendor profiles.",
      img: vroIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Vendor Master",
      heading2: "Database",
      desc: "Maintain a centralized vendor directory with contact details, service categories, payment terms, credit limits, and compliance documentation for quick reference.",
      img: vmdIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Performance",
      heading2: "Scoring & Rating",
      desc: "Rate vendors based on delivery timeliness, quality compliance, pricing competitiveness, and responsiveness with configurable scoring parameters.",
      img: psrIcon,
      width: "44px"
    },
    {
      key: 4,
      heading: "Contract",
      heading2: "Management",
      desc: "Store and manage vendor contracts, rate agreements, and service level agreements with renewal alerts, expiry notifications, and version-controlled documents.",
      img: camIcon,
      width: "44px"
    },
    {
      key: 5,
      heading: "Compliance &",
      heading2: "Document Tracking",
      desc: "Track vendor compliance documents — licenses, insurance, certifications, FSSAI — with expiry alerts and auto-blocking of non-compliant vendors.",
      img: cdtIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Vendor",
      heading2: "Comparison Tools",
      desc: "Compare vendors across parameters — pricing, quality, lead time, payment terms — with visual comparison matrices for informed selection.",
      img: vctIcon,
      width: "44px"
    },
    {
      key: 7,
      heading: "Blacklist &",
      heading2: "Preferred Management",
      desc: "Maintain preferred vendor lists and blacklist non-performing suppliers with documented reasons, ensuring procurement teams work with vetted partners.",
      img: bpvmIcon,
      width: "44px"
    },
    {
      key: 8,
      heading: "Payment History",
      heading2: "& Ledger",
      desc: "Track vendor-wise payment history, outstanding balances, and debit/credit notes with integration to Accounts & Finance for reconciliation.",
      img: phlIcon,
      width: "44px"
    },
    {
      key: 9,
      heading: "Vendor Communication",
      heading2: "Portal",
      desc: "Enable direct communication with vendors for quotation requests, order confirmations, and dispute resolution through a built-in messaging system.",
      img: vcpIcon,
      width: "44px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Supply Chain Reliability",
      desc: "Performance-rated vendors and preferred supplier lists ensure consistent quality and timely delivery of goods and services.",
      img: bescrIcon
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Digital onboarding, centralized documentation, and automated alerts reduce vendor management overhead significantly.",
      img: boeIcon
    },
    {
      key: 3,
      heading: "Cost Optimization",
      desc: "Vendor comparison tools and rate contract management ensure the best pricing and terms across all procurement categories.",
      img: bcoIcon
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single vendor portal for all properties, categories, and contracts provides complete supplier network visibility.",
      img: bcmIcon
    },
    {
      key: 5,
      heading: "Compliance & Risk Mitigation",
      desc: "Automated document tracking and compliance checks prevent engagement with non-compliant or blacklisted vendors.",
      img: bcrmIcon
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Vendor Management module, and who is it designed for?",
      answer: "A : The Vendor Management module handles the complete vendor lifecycle — registration, performance tracking, contract management, and compliance — for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve vendor quality?",
      answer: "A : It auto-rates vendors on delivery, quality, pricing, and responsiveness. Low-performing vendors are flagged or blacklisted, while top performers are prioritized in procurement workflows."
    },
    {
      question: "Q : Can the module manage vendor compliance documents?",
      answer: "A : Yes. It tracks all vendor documents — GST, FSSAI, insurance, licenses — with expiry alerts and auto-blocks vendors with expired or missing compliance documentation."
    },
    {
      question: "Q : Is the Vendor Management module integrated with purchasing?",
      answer: "A : Absolutely. It connects with the Purchase Module for vendor selection, Store & Inventory Management for GRN matching, and Accounts & Finance for payment processing and reconciliation."
    }
  ];

   const tag = [
            {
            icon:reliableIcon,
            title:"Reliable", 
            },
            
            {
              icon:ratedIcon,
              title:"Rated",
             }, 
             
             {
              icon:regulatedIcon,
              title:"Regulated"
        }
        ];
  

  const footerUpperText = {
    text1: "Build partnerships,",
    text2: "",
    text3: "not just vendor lists",
    img: overviewIcon
  };

  return (
    <>
      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>VENDOR <span style={{color:"#01B0F1"}}>MANAGEMENT</span></div>
              <div className={style.mainParaPhone}>
                Build and manage a trusted vendor ecosystem with comprehensive supplier profiles, performance tracking, contract management, and compliance monitoring.
              </div>
            </div>

            <div className={style.herosectionImgBoxPhone}>
              <img src={hero} style={{ width: "100%" }} />
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>
              
              <div className={style.headingBox}>
                <div className={style.mainHeading}>VENDOR <span style={{color:"#01B0F1"}}>MANAGEMENT</span></div>
                <div className={style.mainPara}>
                  Build and manage a trusted vendor ecosystem with comprehensive supplier profiles, performance tracking, contract management, and compliance monitoring.
                </div>
              </div>

              <div className={`${style.herosectionImgBox}`}>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* TAGWORDS */}
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
                Our Vendor Management module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline vendor lifecycle management for Hotels, Resorts, Clubs and Institutions. From vendor registration to performance evaluation, this feature provides a centralized, transparent platform for procurement teams, finance departments, and administrators, ensuring a reliable, cost-effective, and compliant supplier network.
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
      <section>
        <Link to="/products/eice-rise/form?product=EiceRise(Vendor Management)" style={{ color: "white", textDecoration: "none" }}>
          <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
            <div className={style.demoButton}>
              Request a Demo <FaArrowRightLong />
            </div>
          </div>
        </Link>
      </section>

      {/* BENEFITS */}
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