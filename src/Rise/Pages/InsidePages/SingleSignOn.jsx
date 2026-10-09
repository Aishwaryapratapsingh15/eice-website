"use client";
import { useState, useEffect } from "react";
import { Link } from '@/nextNavigation';
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
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
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">RISE <span className="text-[#01B0F1]">SINGLE SIGN-ON</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Take command of your entire EICE Rise ecosystem with a powerful software administration console that manages users, roles, configurations, and system-wide settings from a single control panel.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="room booking" width="1621" height="847" />
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
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={middleImg} alt="" width="720" height="458" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            <strong>Our RISE – SINGLE SIGN-ON module</strong> is a comprehensive solution designed for centralized system administration. From user provisioning to module configuration, this feature offers a secure, intuitive interface for IT administrators, super admins, and management, ensuring complete control over the software environment, access policies, and operational configurations across all properties.
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
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Single Sign On)"}>
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

      {/* ================= FOOTER ================= */}
            <FooterUpperPart product="Single Sign-On" text1={footerUpperText.text1} text2= {<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={middleImg} />
            {!isEmbed && <FooterLower />}

    </>
  );
}