"use client";
import style from "./Styles/SingleSignOn.module.css";
import { useState, useEffect } from "react";
import { Link } from '@/nextNavigation';
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
import Accordion from "../../Components/Accordian/Accordian.jsx";
const malIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/MAL.png";
const mpcIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/MPC.png";
const nacIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/NAC.png";
const rbacIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/RBAC.png";
const salIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/SAL.png";
const umpIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/UMP.png";
const bcgIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/BCG.jpg";
const bcscIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/BCSC.jpg";
const besIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/BES.png";
const boeIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/BOE.png";
const bsIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/BS.png";
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";
const hero = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/hero-singleSignOn.png";
const centralizedIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/Centralized.png";
const configurableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/COnfigrable.png";
const controllableIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/Controlled.png";
const middleImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/singleSignOn/singleSignOnOverview.png";






export default function SingleSignOn() {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
  {
    icon: umpIcon,
    title: "User Management & Provisioning",
    desc: "Create, modify, and deactivate user accounts with role assignments, department mapping, and property-level access in a centralised directory."
  , __w: 50, __h: 50},
  {
    icon: rbacIcon,
    title: "Role-Based Access Control (RBAC)",
    desc: "Define granular permission sets by role — admin, manager, operator, viewer — controlling access to modules, screens, actions, and data at the field level."
  , __w: 50, __h: 50},
  {
    icon: mpcIcon,
    title: "Multi-Property Configuration",
    desc: "Manage configurations for multiple properties from a single admin panel with property-specific settings for taxes, currencies, policies, and workflows."
  , __w: 50, __h: 50},
  {
    icon: malIcon,
    title: "Module Activation & Licensing",
    desc: "Enable or disable EICE Rise modules per property based on requirement and utilization."
  , __w: 50, __h: 50},
  {
    icon: salIcon,
    title: "System Audit Logs",
    desc: "Maintain detailed audit trails of every administrative action — user changes, configuration edits, permission modifications — with timestamps and actor identification."
  , __w: 50, __h: 50},
  {
    icon: nacIcon,
    title: "Notification & Alert Configuration",
    desc: "Set up system-wide notification rules — email, SMS, in-app — for approvals, escalations, system events, and threshold alerts across all modules."
  , __w: 50, __h: 50}
];

 const benefits = [
  {
    icon: bcscIcon,
    title: "Complete System Control",
    desc: "Provides a single command center for all administrative functions, eliminating the need to manage settings across individual modules."
  , __w: 1068, __h: 1017},
  {
    icon: besIcon,
    title: "Enhanced Security",
    desc: "Granular RBAC and comprehensive audit logs ensure that every access and action is authorized, tracked, and accountable."
  , __w: 1068, __h: 1017},
  {
    icon: boeIcon,
    title: "Operational Efficiency",
    desc: "Centralized user and configuration management reduces IT overhead and speeds up onboarding of new users and properties."
  , __w: 1068, __h: 1017},
  {
    icon: bsIcon,
    title: "Scalability",
    desc: "Multi-property support with modular activation makes it easy to scale operations as the organization grows."
  , __w: 1068, __h: 1017},
  {
    icon: bcgIcon,
    title: "Compliance & Governance",
    desc: "Audit trails, access controls, and backup configurations ensure regulatory compliance and organizational governance standards."
  , __w: 1068, __h: 1017}
];

  const query = [
    {
      question: "Q : What is the SINGLE SIGN-ON module, and who is it designed for?",
      answer: "A : SINGLE SIGN-ON is the central administration console for EICE Rise ERP, designed for IT administrators and super admins to manage users, roles, configurations, and system settings across all properties and modules."
    },
    {
      question: "Q : How does this module enhance system security?",
      answer: "A : It provides role-based access control levels, comprehensive audit logs for every administrative action, and configurable session and password policies to maintain strict security standards."
    },
    {
      question: "Q : Can SINGLE SIGN-ON manage multiple properties from one console?",
      answer: "A : Yes. It supports multi-property administration with property-specific configurations for module activation from a single unified dashboard."
    },
    {
      question: "Q : Is the SINGLE SIGN-ON module integrated with all other EICE Rise modules?",
      answer: "A : Absolutely. SINGLE SIGN-ON serves as the backbone for user access and configuration across every EICE Rise module — any permission, master data, or notification setting configured here applies system-wide."
    }
  ];

  const tag = [
    {
      icon:centralizedIcon,
      title:"Centralized",
    __w: 60, __h: 60},
    {
      icon:configurableIcon,
      title: "Configurable",
     __w: 60, __h: 60},
     { 
      icon:controllableIcon,
      title:"Controlled"
, __w: 60, __h: 60}
];

const footerUpperText = {

        text1: 'One console, ',
        text2: " ",
        text3: 'total control',
        img: middleImg
    }

  return (
    <>

      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>

            <div className={style.herosectionImgBoxPhone}>
              <img style={{width : "100%"}} src={hero} alt={"room booking"}  width="1621" height="847" />
            </div>

            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>
                RISE <span style={{ color: "#01B0F1" }}>SINGLE SIGN-ON</span>
              </div>

              <div className={style.mainParaPhone}>
                Take command of your entire EICE Rise ecosystem with a powerful software administration console that manages users, roles, configurations, and system-wide settings from a single control panel.
              </div>
            </div>

          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>

            <div className={style.contentConatiner}>

              <div className={style.headingBox}>
                <div className={style.mainHeading}>
                  RISE <span style={{ color: "#01B0F1" }}>SINGLE SIGN-ON</span>
                </div>

                <div className={style.mainPara}>
                  Take command of your entire EICE Rise ecosystem with a powerful software administration console that manages users, roles, configurations, and system-wide settings from a single control panel.
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
                <img src={t.icon?.src || t.icon} width={t.__w} height={t.__h} />
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
                                          <img style={{ width: "100%" }} src={middleImg} alt=""  width="720" height="458" />
                                      </div>
                                  </div>

            <div className={style.section3Para}>
              <div className={style.paragraph}>
                <strong>Our RISE – SINGLE SIGN-ON module</strong> is a comprehensive solution designed for centralized system administration. From user provisioning to module configuration, this feature offers a secure, intuitive interface for IT administrators, super admins, and management, ensuring complete control over the software environment, access policies, and operational configurations across all properties.
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
      {features.map((f, i) => (
        <div key={i} className={style.featureInnerBox}>

          {/* ICON + HEADING */}
          <div className={style.headingAndIconFeatures}>
            <div style={{ width: "44px" }}>
              <img src={f.icon?.src || f.icon} style={{ width: "100%" }}  width={f.__w} height={f.__h} />
            </div>

            <div className={style.featureHeading}>
              {f.title}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className={style.featureDesc}>
            {f.desc}
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* CTA */}
      <Link style={{ color: "white" }} className="linkClass" to={"/products/eicerise/form?product=EiceRise(Single Sign On)"}>
      <section className={style.requestDemoBtn}>
        <div className={`${style.demoBtnWrapper} globalSectionSize`}>
          <div className={style.demoButton}>
            Request a Demo →
          </div>
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
    
    {/* IMAGE SIDE */}
    <div className="GlobalBenefitImgBox">
      <div style={{ display: "flex", gap: "10px" }}>
        <img src={b.icon?.src || b.icon} width="350px"  width={b.__w} height={b.__h} />
        {/* <img src="/placeholders/benefit.jpg" width="80" />
        <img src="/placeholders/benefit.jpg" width="80" /> */}
      </div>
    </div>

    {/* TEXT SIDE */}
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
            {query.map((item, i) => (
              <Accordion key={i} question={item.question} answer={item.answer} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
            <Certificate />
            <FooterUpperPart product="Single Sign-On" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={middleImg} />
            {!isEmbed && <FooterLower />}

    </>
  );
}