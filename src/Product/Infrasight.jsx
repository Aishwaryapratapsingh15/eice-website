"use client";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import productSlides from "./carouselData";
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

       <section className="bg-white pb-4 sm:pb-10 px-4 sm:px-8 md:px-20 mt-10 sm:mt-20 md:mt-40">
         <div className="sm:mt-5 mt-10 flex justify-center">
                    <img
                             src={infraSightHero}
                             alt="product"
                             className="mx-auto sm:mb-6 md:w-full lg:w-[480px] pb-4 pt-14"
                           />
                 </div>
      <div className="max-w-[1100px] mx-auto text-left sm:text-center">

        {/* TAG */}
        <div className="flex w-fit mx-auto items-center gap-2 bg-blue-50 border border-blue-200 text-[#344155] px-4 py-1 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-[#344155] rounded-full"></span>
          ENTERPRISE OBSERVABILITY PLATFORM
        </div>

        {/* HEADING */}
        <h1 className="text-[32px] md:text-[56px] font-bold leading-tight text-[#334155] mb-[14px]">
          Intelligent Infrastructure <br />
          <span className="text-[#01B0F1]">Observability</span> Platform
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed mb-[14px]">
          Real-time visibility into servers, networks, applications, cloud
          services, and IoT devices — all from a unified dashboard. No agent
          installation required.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-start sm:justify-center gap-4 mt-10">
                          <button  onClick={() => navigate("/products/eicerise/form")} 
                          className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]">
                            Request a Demo
                              <img src={arrowIcon} alt="arrow"/>
                    
                          </button>

        </div>

      </div>
    </section>

          {/* FEATURES */}
<section className="pb-4 sm:pb-10 px-4 max-w-7xl mx-auto md:px-10 lg:px-20 xl:px-40 bg-white grid md:grid-cols-3 text-center gap-4 sm:gap-8">

  {features.map((item, i) => (
    <div key={i} className="flex flex-col items-center gap-1">

      {/* ICON (Rounded Rectangle) */}
      <div className=" px-6 rounded-xl">
       <h3 className="font-bold text-3xl leading-relaxed text-[#01B0F1]">{item.icon}</h3>
      </div>

      {/* TITLE */}
      <h3 className="font-bold text-[24px] sm:text-xl leading-relaxed text-[#334155]">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#64748B] font-semibold text-[16px] sm:text-md leading-relaxed max-w-xs">
        {item.desc}
      </p>

    </div>
  ))}

</section>



<section className="bg-[#F4F9FF] py-4 sm:py-10 px-5 md:px-20 lg:px-20 xl:px-40">
  <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-4 sm:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="text-[32px] sm:text-2xl md:text-3xl font-bold mb-4 text-[#334155]">
        What is InfraSight?
      </h2>

      {/* DESCRIPTION */}
      <p className="text-[#64748B] font-semibold mb-6 leading-8 space-y-6 max-w-[600px]">
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
        <img src={sidebgIcon} alt="What is InfraSight" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>

  </div>
</section>


      {/* ================= PROBLEM ================= */}
<section className="py-4 sm:py-10 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">

  <h1 className="text-[32px] sm:text-4xl text-[#334155] font-bold text-center leading-relaxed mb-[14px]">
    Infrastructure monitoring challenges
  </h1>

  <h4 className="text-[22px] sm:text-lg md:text-xl text-[#64748B] text-center mb-4 sm:mb-10 max-w-2xl mx-auto">
    Traditional monitoring tools fall short of modern enterprise observability needs
  </h4>

  {/* 4 CARDS ROW */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

    {challenges.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl  border-2 border-gray-200 shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-[24px] text-[#334155]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-[#64748B] text-[16px] leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>
</section>

      <section className="py-4 sm:py-10 px-5 md:px-20 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-[32px] sm:text-4xl font-bold text-center text-[#334155] mb-[14px]">
          Real-time observability <br />for modern IT infrastructure
        </h2>
        <h4 className="text-[22px] sm:text-lg md:text-xl text-[#64748B] text-center mb-4 sm:mb-10 max-w-2xl mx-auto">
          InfraSight continuously monitors and alerts <br />across every layer of your
infrastructure </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {platformFeatures.map((item, i) => (
             <div
        key={i}
        className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start w-auto h-auto sm:h-[400px] gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-[24px] sm:text-2xl text-[#334155] whitespace-pre-line">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
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

      <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          {/* IMAGE */}
          <img
            src={infrabannerIcon}
            alt="platform"
            className="w-full rounded-xl"
          />

           <p className="mt-4 text-gray-400 text-xl max-w-3xl mx-auto">
      Real-time observability, intelligent monitoring, and proactive issue resolution across your entire IT infrastructure.
    </p>
      
        </div>
      
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="py-4 sm:py-10 max-w-6xl mx-auto px-5 md:px-20 lg:px-20 xl:px-40">
        <h2 className="text-[32px] sm:text-4xl font-bold text-center mb-[14px] text-[#334155]">
          Core Observability Capabilities
        </h2>

        <h4 className="text-[22px] sm:text-lg md:text-xl text-[#64748B] font- text-center mb-4 sm:mb-10 max-w-3xl mx-auto">
          Everything you need to monitor, detect, and<br /> resolve infrastructure incidents </h4>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 justify-center">
          {capabilities.map((item, i) => (
            <div
        key={i}
        className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start max-w-[550px] w-full min-h-[200px] h-auto gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start gap-4 justify-center">
          <h3 className="font-bold text-[24px] sm:text-2xl text-[#334155]">{item.icon}</h3>
        
           <h3 className="font-bold text-[24px] sm:text-2xl text-[#334155]">
          {item.title}
        </h3>
        </div>
        <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
          {item.desc}
        </p>

            </div>
          ))}
        </div>
      </section>

      <section className="py-4 sm:py-10 px-4 md:px-20 lg:px-20 xl:px-40 bg-white">

        <div className="max-w-6xl mx-auto text-center">

           <h1 className="text-[32px] sm:text-4xl font-bold text-center text-[#334155] mb-[14px]">
          Centralised observability architecture
        </h1>

        <h4 className="text-[#64748B] text-[22px] sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 sm:mb-10"> high-performance Monitoring Engine at the centre of your entire
infrastructure</h4>
      
          {/* IMAGE */}
          <img
            src={cobIcon}
            alt="platform"
            className="w-full rounded-xl"
          />
  
        </div>
      
      </section>


      {/* ================= MODULES ================= */}
   <section className="py-4 sm:py-10 px-4 md:px-20 lg:px-20 xl:px-40 bg-white">
        <h2 className="text-[32px] sm:text-4xl font-bold text-center text-[#334155] mb-[14px]">
          Product Modules
        </h2>
        <h4 className="text-[22px] sm:text-lg md:text-xl text-[#64748B] text-center mb-4 sm:mb-10 max-w-3xl mx-auto">
          Six purpose-built modules covering the full observability lifecycle </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((item, i) => (
             <div
        key={i}
        className="bg-white rounded-xl  border-1 border border-[#E2E8F0] shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col items-start text-start w-auto h-auto sm:h-[350px] gap-4"
      >

        {/* SVG */}
        <div className="rounded-lg flex items-start">
          <img src={item.icon} alt="icon" className="w-14 h-14 object-contain" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-[24px] sm:text-2xl text-[#334155]">
          {item.title}
        </h3>

        {/* SMALL TEXT */}
        <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
          {item.desc}
        </p>

      </div>
          ))}
        </div>
      </section>


            {/* ================= WORKFLOW ================= */}
<section className="bg-[#012060] py-4 sm:py-10 px-4 md:px-20 lg:px-20 xl:px-40">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-[32px] sm:text-4xl font-bold text-white mb-[14px]">
          Monitoring Workflow
        </h2>

        <h4 className="text-white text-[22px] sm:text-lg md:text-xl mb-4 sm:mb-10">
          Five simple steps from discovery to full observability
        </h4>

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
                <h3 className="font-bold text-white mb-2 text-[18px]">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-white leading-relaxed max-w-[180px] mb-5">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>


{/* ================= WHY ================= */}
<section className="py-4 sm:py-10 px-4 md:px-20 lg:px-20 xl:px-40 bg-white">

  {/* Heading */}
  <h2 className="text-[32px] sm:text-4xl font-bold text-center text-[#334155] mb-[14px]">
    Why enterprises choose InfraSight?
  </h2>

  {/* Subheading */}
  <h4 className="text-[22px] sm:text-lg md:text-xl text-[#64748B] text-center mb-4 sm:mb-10 max-w-3xl mx-auto">
    Built for organizations that require complete infrastructure <br /> control and observability
  </h4>

  {/* Content */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 text-[#334155]">

    {/* LEFT COLUMN */}
    <div className="space-y-4 sm:space-y-6 text-[16px] sm:text-xl leading-relaxed">
      <p>
        <span className="font-bold">1. Multi-Protocol Flexibility :</span> Monitor any device using SNMP, IPMI, JMX, SSH, HTTP, ICMP, Prometheus, MQTT, or custom scripts — no vendor lock-in.
      </p>

      <p>
        <span className="font-bold">2. Auto-Discovery at Scale :</span> Automatically detect and onboard new infrastructure. Apply templates instantly to eliminate manual setup overhead.
      </p>

      <p>
        <span className="font-bold">3. Proactive Anomaly Detection :</span> Go beyond static thresholds with AI-based baselining and trend prediction that flags problems before they become outages.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-4 sm:space-y-6 text-[16px] sm:text-xl leading-relaxed">
      <p>
        <span className="font-bold">4. Lightweight, Agentless Deployment :</span> No agent installation required on any monitored endpoint. Deploy in minutes with zero maintenance footprint.
      </p>

      <p>
        <span className="font-bold">5. Enterprise-Grade Security :</span> TLS encryption, LDAP/SAML/SSO/MFA authentication, granular RBAC, secret vaulting, and full configuration audit trail.
      </p>

      <p>
        <span className="font-bold">6. Unified Observability :</span> Single pane of glass for servers, networks, cloud, containers, applications, logs, and business services — including SLA tracking and scheduled PDF reports.
      </p>
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
<section className="bg-gray-50 relative py-10 px-5 md:px-12 lg:px-24 xl:px-40 overflow-hidden mb-10">

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-4xl md:text-4xl font-bold text-[#334155] mb-[14px] leading-tight">
      Ready to Transfer Your Infrastructure Observability?
    </h2>

    {/* SUBTEXT */}
    <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-10">
      Deploy InfraSight across your enterprise in minutes — agentless, scalable, and production-ready from day one.
    </p>

    {/* TAG PILLS */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["Agentless deployment", "Multi-protocol support", "AI anomaly detection", "Enterprise RBAC"].map((item, i) => (
        <span
          key={i}
          className="px-4 py-2 text-sm text-[#012060] border border-[#334155] rounded-full bg-white/5 backdrop-blur-sm"
        >
          {item}
        </span>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

      {/* PRIMARY */}
      <button onClick={() => navigate("/products/eicerise/form")} 
      className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-blue-800 transition text-[18px]">
        Request a Demo
          <img src={arrowIcon} alt="arrow"/>

      </button>
    </div>
  </div>
</section>

<ProductCarousel slides={productSlides} />

 <ProductFooter/>

    </div>
  );
}