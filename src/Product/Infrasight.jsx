"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
import ProductVideo from "./ProductVideo";
import ProductFooter from "./ProductFooter";
const cobIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/COB.svg";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const infraSightHero = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/infrasight.png";
const aemIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/AEM.svg";
const dvIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/DV.svg";
const mcIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/MC.svg";
const ttmIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/TTM.svg";
const uramIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/URAM.svg";
const hgmIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/HGM.svg";
const adbIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/ADB.svg";
const adtIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/ADT.svg";
const codIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/COD.svg";
const esIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/ES.svg";
const mpmcIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/MPMC.svg";
const aaeIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/AAE.svg";
const sidebgIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/whatis.png";
const fvIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/FV.svg";
const mcoIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/MCO.svg";
const nscIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/NSC.svg";
const nescIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/NESC.svg";
import { useNavigate } from "@/nextNavigation";
const infrabannerIcon = "https://d3r43jacxrwsrp.cloudfront.net/infraSight/infraBanner.png";





const features = [
  { icon: "10+", title: "Protocols", desc: "SNMP, IPMI, JMX, SSH, HTTP, ICMP, WMI, MQTT & more" },
  { icon: "0", title: "Agent Required", desc: "Fully agentless deployment on all monitored systems" },
  { icon: "∞", title: "Scale", desc: "Millions of metrics from hundreds of thousands of endpoints" },
];

const challenges = [
  {
    icon: fvIcon,
    title: "Fragmented visibility",
    desc: "Infrastructure data scattered across disconnected tools with no unified monitoring view",
  },
  {
    icon: mcoIcon,
    title: "Manual setup overload",
    desc: "New devices require manual setup — slowing response when infrastructure scales rapidly.",
  },
  {
    icon: nescIcon,
    title: "Reactive incident response",
    desc: "Teams only discover problems after outages, rather than detecting anomalies before impact.",
  },
  {
    icon: nscIcon,
    title: "No enterprise security controls",
    desc: "Lack of RBAC, audit trails, and SSO/MFA support across monitoring platforms.",
  },
];

const platformFeatures = [
      {
    icon: mpmcIcon,
    title: "Multi-Protocol Metric Collection",
    // desc: "Secure file and folder sharing combined with inteliigent synchronization for seamless collaborations across devices",
    desc: "Collect metrics via SNMP v1/2c/3, IPMI, JMX, SSH/Telnet, HTTP/HTTPS, ICMP, WMI, ODBC, Prometheus, MQTT, and Modbus. Supports agent-based and agentless collection in any combination."
  },
     {
    icon: adtIcon,
    title: "Auto-Discovery & Templates",
    desc: "Automatically scan IP ranges to discover hosts, network interfaces, services, containers, and file systems. Apply pre built monitoring templates to newly discovered devices instantly.",
  },
  {
    icon: adbIcon,
    title: "Anomaly Detection & Baselining",
    desc: "Detect anomalies by comparing incoming metrics against dynamically calculated baselines. Use trend-prediction functions to forecast future threshold breaches and act proactively.",
  },
  {
    icon: aaeIcon,
    title: "Automated Alerts & Escalation",
    desc: "Multi-step escalation workflows notify via email, Slack, MS Teams, Telegram, PagerDuty, or custom webhooks. Auto remediation scripts restart services or rescale resources automatically.",
  },
  {
    icon: codIcon,
    title: "Centralised Observability Dashboard",
    desc: "Widget-based multi-page dashboards display live metrics, infrastructure maps, geo-maps, graphs, and SLA status. Drag and-drop customisation with role-specific views",
  },
  {
    icon: esIcon,
    title: "Enterprise\nScalability",
    desc: "Proxy-based distributed monitoring across multiple sites and DMZs. High availability configuration with automatic failover. Collect millions of metrics from hundreds of thousands of endpoints.",
  },
];

const capabilities =[
{ 
  title: "Performance Monitoring",
  icon:"1.",
  desc:"Track CPU, memory, disk I/O, network throughput, and custom application metrics. Identify bottlenecks using historical trend graphs before they impact users.",
},
{
  title: "Infrastructure Availability",
  icon:"2.",
  desc:"Register and organise hosts by IP, hostname, and host group. Monitor uptime, latency, and service response across your entire estate in real time.",
},
{
  title:"Log & Event Monitoring",
  icon:"3.",
  desc:"Collect and filter log file entries and Windows Event Log records. Trigger alerts based on log pattern matches or event counts.",
},
{
  title:"Alert & Incident Management",
  icon:"4.",
  desc:"Receive, acknowledge, and resolve alerts through a structured incident workflow with full audit trail. Suppress maintenance-window noise automatically.",
},
{
  title:"SLA & Business Service Monitoring",
  icon:"5.",
  desc:"Define service trees and calculate SLA compliance. Simulate outages to see business-level impact and receive scheduled PDF reports for stakeholders.",
},
{
 title:"Role-Based Access Control",
 icon:"6.",
 desc:"Granular permissions for Super Admins, Admins, and Operators. LDAP, SAML, SSO, and MFA authentication support. Full audit log of all configuration changes."
}          
]

const steps = [
    {
      title: "Discover & Group",
      desc: "Auto-scan IP ranges. Organise hosts into logical groups.",
    },
    {
      title: "Add Templates",
      desc: "Instantly apply pre-built or custom monitoring templates.",
    },
    {
      title: "Configure Items",
      desc: "Define metrics, intervals, and data transformations.",
    },
    {
      title: "Define Triggers",
      desc: "Set smart thresholds, baselines, and trend-prediction rules.",
    },
    {
      title: "Monitor & Respond",
      desc: "Track alerts, escalate via channels, auto-remediate incidents.",
    },
  ];

  const modules =[
{ 
  title: "Host & Group Management",
  icon: hgmIcon,
  desc:"Register, organise, and auto-discover servers, VMs, containers, and network devices by host groups with custom metadata tags.",
},
{
  title: "Monitoring Configuration",
  icon: mcIcon,
  desc:"Define monitoring items, collection intervals, data transformation rules, and pre-processing steps per host or template."
},
{
  title:"Trigger & Threshold Management",
  icon: ttmIcon,
  desc:"Set simple or complex threshold rules using functions, trend prediction, and baseline comparisons for proactive issue detection.",
},
{
  title:"Dashboard & Visualisation",
  icon: dvIcon,
  desc:"Customisable widget dashboards with graphs, geo-maps, topology maps, pie/gauge charts, and honeycomb views for live infrastructure status.",
},
{
  title:"User, Role & Auth Management",
  icon: uramIcon,
  desc:"Admin, Operator, and custom roles with LDAP/SAML/SSO integration, MFA, and JIT user provisioning via SCIM.",
},
{
 title:"Alert & Escalation Management",
 icon: aemIcon,
 desc:"Structured multi-step escalation, alert suppression for maintenance windows, acknowledgement workflow, and full audit trail."
}          
]

// const infra = [
//       {
//     icon: "",
//     title: "Multi-Protocol Flexibility",
//     // desc: "Secure file and folder sharing combined with inteliigent synchronization for seamless collaborations across devices",
//     desc: "Monitor any device using SNMP, IPMI, JMX, SSH, HTTP, ICMP, Prometheus, MQTT, or custom scripts — no vendor lock-in."
//   },
//      {
//     icon: "",
//     title: "Auto-Discovery at Scale",
//     desc: "Automatically detect and onboard new infrastructure. Apply templates instantly to eliminate manual setup overhead.",
//   },
//   {
//     icon: "",
//     title: "Proactive Anomaly Detection",
//     desc: "Go beyond static thresholds with AI based baselining and trend prediction that flags problems before they become outages.",
//   },
//   {
//     icon: "",
//     title: "Lightweight, Agentless Deployment",
//     desc: "No agent installation required on any monitored endpoint. Deploy in minutes with zero maintenance footprint.",
//   },
//   {
//     icon: "",
//     title: "Enterprise-Grade Security",
//     desc: "TLS encryption, LDAP/SAML/SSO/MFA authentication, granular RBAC, secret vaulting, and full configuration audit trail.",
//   },
//   {
//     icon: "",
//     title: "Unified Observability",
//     desc: "Single pane of glass for servers, networks, cloud, containers, applications, logs, and business services — including SLA tracking and scheduled PDF reports.",
//   },
// ];



export default function InfraSight() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-[#334155]">

      {/* ================= HERO / OVERVIEW ================= */}

       <section className="bg-white py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
         <div className="sm:mt-5 mt-10 flex justify-center">
                    <img
                             src={infraSightHero}
                             alt="product"
                             className="mx-auto sm:mb-6 md:w-full lg:w-[480px] pb-4 pt-14"
                            width="2326" height="900" />
                 </div>
      <div className="max-w-4xl mx-auto text-left sm:text-center">

        {/* TAG */}
        <div className="font-general font-semibold flex w-fit mx-auto items-center gap-2 rounded-full bg-bloo/10 px-4 py-1.5 text-[12px] sm:text-[14px] tracking-wide text-[#012060] mb-6">
          ENTERPRISE OBSERVABILITY PLATFORM
        </div>

        {/* HEADING */}
        <h1 className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-blackk py-1">
          Intelligent Infrastructure <br />
          <span className="text-bloo">Observability</span> Platform
        </h1>

        {/* SUBTEXT */}
        <p className="font-inter font-normal text-blackk/70 max-w-3xl mx-auto text-[16px] sm:text-[18px] leading-[1.6] mt-2">
          Real-time visibility into servers, networks, applications, cloud
          services, and IoT devices — all from a unified dashboard. No agent
          installation required.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-start sm:justify-center gap-4 mt-10">
                          <button  onClick={() => navigate("/demo-form?product=Infrasight")} 
                          className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]">
                            Request a Demo
                              <img src={arrowIcon} alt="arrow" width="24" height="24" />
                    
                          </button>

        </div>

      </div>
    </section>

          {/* FEATURES */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white grid md:grid-cols-3 text-center gap-4 sm:gap-8">

  {features.map((item, i) => (
    <div key={i} className="flex flex-col items-center">

      {/* ICON (Rounded Rectangle) */}
      <div className="px-6 rounded-xl mb-[19px]">
       <h3 className="font-general font-bold text-3xl leading-relaxed text-[#01B0F1]">{item.icon}</h3>
      </div>

      {/* TITLE */}
      <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] max-w-xs">
        {item.desc}
      </p>

    </div>
  ))}

</section>



<section className="bg-[#F4F9FF]">
  <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 grid md:grid-cols-[1.1fr_1fr] gap-4 sm:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mb-8">
        What is InfraSight?
      </h2>

      {/* DESCRIPTION */}
      <p className="font-inter font-normal text-blackk/70 mt-2 leading-[1.6] max-w-[600px] text-[15px] sm:text-[16px]">
        InfraSight is EICE Technology's enterprise observability
platform designed to provide real-time visibility into servers,
networks, applications, cloud services, and IoT devices — all
from a unified dashboard.
Built on a flexible multi-protocol architecture supporting SNMP,
IPMI, JMX, HTTP/HTTPS, ICMP, SSH, and agentless checks,
InfraSight empowers IT and DevOps teams to auto-discover
infrastructure, detect anomalies proactively, and resolve
incidents rapidly — no agent installation required on monitored
systems.
      </p>

    </div>

    {/* RIGHT SIDE (IMAGE SPACE) */}
    <div className="hidden md:block h-full">
      {/* Placeholder for image */}
      <div className="w-full h-[350px]">
        <img src={sidebgIcon} alt="What is InfraSight" className="w-full h-full object-cover rounded-xl"  width="772" height="654" />
      </div>
    </div>

  </div>
</section>

      {/* ================= VIDEO ================= */}
      <ProductVideo
        eyebrow="Infrastructure Observability"
        heading="See InfraSight in Action"
        subtext="Explore how real-time infrastructure visibility, intelligent monitoring, and anomaly detection help teams identify issues before they impact operations."
        videoId="jpXgqTEj18Q"
      />



      {/* ================= PROBLEM ================= */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  <div className="text-center mb-8">
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Infrastructure monitoring challenges
    </h2>

    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
      Traditional monitoring tools fall short of modern enterprise observability needs
    </p>
  </div>

  {/* 4 CARDS ROW */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

    {challenges.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>

      </div>
    ))}

  </div>
</section>

      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Real-time observability <br />for modern IT infrastructure
          </h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            InfraSight continuously monitors and alerts <br />across every layer of your
infrastructure </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {platformFeatures.map((item, i) => (
             <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>

      </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      {/* <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            "Multi-Protocol Metric Collection",
            "Auto-Discovery & Templates",
            "Anomaly Detection & Baselining",
            "Automated Alerts & Escalation",
            "Centralised Dashboard",
            "Enterprise Scalability",
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section> */}

      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

        <div className="text-center">

          {/* IMAGE */}
          <img
            src={infrabannerIcon}
            alt="platform"
            className="w-full rounded-xl"
           width="2094" height="494" />

           <p className="font-inter font-normal mt-4 text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto">
      Real-time observability, intelligent monitoring, and proactive issue resolution across your entire IT infrastructure.
    </p>

        </div>

      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Core Observability Capabilities
          </h2>

          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-center max-w-3xl mx-auto mt-2">
            Everything you need to monitor, detect, and<br /> resolve infrastructure incidents </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 justify-center">
          {capabilities.map((item, i) => (
            <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start max-w-[550px] w-full h-auto"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start gap-2 mb-[7px]">
          <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">{item.icon}</h3>

           <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737]">
          {item.title}
        </h3>
        </div>
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>

            </div>
          ))}
        </div>
      </section>

      <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

        <div className="text-center">

           <div className="mb-8">
             <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
               Centralised observability architecture
             </h2>

             <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2"> high-performance Monitoring Engine at the centre of your entire
infrastructure</p>
           </div>

          {/* IMAGE */}
          <img
            src={cobIcon}
            alt="platform"
            className="w-full rounded-xl"
           width="535" height="254" />
  
        </div>
      
      </section>


      {/* ================= MODULES ================= */}
   <section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
            Product Modules
          </h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            Six purpose-built modules covering the full observability lifecycle </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((item, i) => (
             <div
        key={i}
        className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start mb-[19px]">
          <img src={item.icon} alt="icon" className="w-11 h-11 object-contain"  width="44" height="44" />
        </div>

        {/* TITLE */}
        <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] mb-[7px]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">
          {item.desc}
        </p>

      </div>
          ))}
        </div>
      </section>


            {/* ================= WORKFLOW ================= */}
<section className="bg-[#012060]">
      <div className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 text-center">

        <div className="mb-8">
          <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-white mx-auto max-w-4xl py-1">
            Monitoring Workflow
          </h2>

          <p className="font-inter font-normal text-white/70 text-[16px] sm:text-[18px] leading-[1.6] mt-2">
            Five simple steps from discovery to full observability
          </p>
        </div>

        {/* STEPPER */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-6 left-28 right-28 h-[4px] bg-[#01B0F1] z-0"></div>

          {/* STEPS */}
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2">

                {/* CIRCLE */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-[20px] font-bold mb-6
                  ${
                    i === 0
                      ? "bg-white border-2 border-[#01B0F1] text-[#01B0F1] shadow-md"
                      : "border-2 border-[#01B0F1] text-[#01B0F1] bg-[#eaf1f7]"
                  }`}
                >
                  {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="font-general font-semibold text-white text-[18px] sm:text-[20px] leading-[1.3] mb-2">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="font-inter font-normal text-[13px] sm:text-[14px] leading-[1.5] text-white/70 max-w-[180px] mb-5">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>


{/* ================= WHY ================= */}
<section className="py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 bg-white">

  <div className="text-center mb-8">
    {/* Heading */}
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Why enterprises choose InfraSight?
    </h2>

    {/* Subheading */}
    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
      Built for organizations that require complete infrastructure <br /> control and observability
    </p>
  </div>

  {/* Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">

    {/* LEFT COLUMN */}
    <div className="font-inter font-normal space-y-4 sm:space-y-6 text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70">
      <p>
        <span className="font-general font-semibold text-blackk">1. Multi-Protocol Flexibility :</span> Monitor any device using SNMP, IPMI, JMX, SSH, HTTP, ICMP, Prometheus, MQTT, or custom scripts — no vendor lock-in.
      </p>

      <p>
        <span className="font-general font-semibold text-blackk">2. Auto-Discovery at Scale :</span> Automatically detect and onboard new infrastructure. Apply templates instantly to eliminate manual setup overhead.
      </p>

      <p>
        <span className="font-general font-semibold text-blackk">3. Proactive Anomaly Detection :</span> Go beyond static thresholds with AI-based baselining and trend prediction that flags problems before they become outages.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="font-inter font-normal space-y-4 sm:space-y-6 text-[15px] sm:text-[16px] leading-[1.6] text-blackk/70">
      <p>
        <span className="font-general font-semibold text-blackk">4. Lightweight, Agentless Deployment :</span> No agent installation required on any monitored endpoint. Deploy in minutes with zero maintenance footprint.
      </p>

      <p>
        <span className="font-general font-semibold text-blackk">5. Enterprise-Grade Security :</span> TLS encryption, LDAP/SAML/SSO/MFA authentication, granular RBAC, secret vaulting, and full configuration audit trail.
      </p>

      <p>
        <span className="font-general font-semibold text-blackk">6. Unified Observability :</span> Single pane of glass for servers, networks, cloud, containers, applications, logs, and business services — including SLA tracking and scheduled PDF reports.
      </p>
    </div>

  </div>
</section>


      {/* ================= CTA ================= */}
<section className="bg-gray-50 relative overflow-hidden">

  {/* CONTENT */}
  <div className="relative z-10 py-4 sm:py-10 max-w-7xl mx-auto px-3 xl:px-4 text-center">

    {/* HEADING */}
    <h2 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
      Ready to Transfer Your Infrastructure Observability?
    </h2>

    {/* SUBTEXT */}
    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-2 mb-10">
      Deploy InfraSight across your enterprise in minutes — agentless, scalable, and production-ready from day one.
    </p>

    {/* TAG PILLS */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["Agentless deployment", "Multi-protocol support", "AI anomaly detection", "Enterprise RBAC"].map((item, i) => (
        <span
          key={i}
          className="font-general font-semibold px-4 py-2 text-sm text-[#012060] border border-[#334155] rounded-full bg-white/5 backdrop-blur-sm"
        >
          {item}
        </span>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

      {/* PRIMARY */}
      <button onClick={() => navigate("/demo-form?product=Infrasight")} 
      className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-[#1E40AF] transition text-[18px]">
        Request a Demo
          <img src={arrowIcon} alt="arrow" width="24" height="24" />

      </button>
    </div>
  </div>
</section>

<ProductCarousel slides={productSlides} />

 <ProductFooter/>

    </div>
  );
}