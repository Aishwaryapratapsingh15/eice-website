"use client";

import { Link } from '@/nextNavigation';
import { useEffect, useState } from "react";

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



  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Real-Time",
      heading2: "Occupancy Tracking",
      desc: "Monitor live attendance across all venues — gym, pool, restaurant, banquet hall, sports facilities — with real-time headcounts and capacity indicators.",
      img: rtotIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 2,
      heading: "Guest & Visitor",
      heading2: "Registration",
      desc: "Register non-member guests and visitors with host details, purpose of visit, and time-stamped entry/exit logs for security and compliance.",
      img: gvrIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 3,
      heading: "Capacity Alerts",
      heading2: "& Management",
      desc: "Set maximum capacity limits per venue and receive alerts when occupancy approaches or reaches limits, ensuring safety compliance and comfort.",
      img: camIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 4,
      heading: "Venue-Wise",
      heading2: "Utilization Reports",
      desc: "Generate detailed reports on venue usage patterns — peak hours, popular days, average duration of stay — for infrastructure planning and scheduling.",
      img: vwurIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 5,
      heading: "Member Activity",
      heading2: "Tracking",
      desc: "Track individual member venue visits, frequency, and activity preferences to understand usage patterns and drive personalized engagement.",
      img: matIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 6,
      heading: "Event Attendance",
      heading2: "Management",
      desc: "Record and manage attendance for events, workshops, and programs with pre-registration, walk-in tracking, and post-event attendance reports.",
      img: eamIcon,
      width: "44px"
    , __w: 50, __h: 50},
    {
      key: 7,
      heading: "Dashboard &",
      heading2: "Analytics",
      desc: "Visualize attendance trends, peak-hour heatmaps, and venue comparison metrics through an interactive dashboard for strategic facility management.",
      img: daIcon,
      width: "44px"
    , __w: 50, __h: 50}
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Fast, frictionless check-in methods and capacity management ensure a comfortable, well-managed venue experience.",
      img: bemeIcon
    , __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automated attendance capture eliminates manual tracking, freeing staff to focus on member service and facility management.",
      img: boeIcon
    , __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Revenue Insights",
      desc: "Utilization data helps identify underused venues for revenue programs and justifies investment in high-demand facilities.",
      img: briIcon
    , __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single dashboard provides real-time visibility into all venue occupancy and member activity across the entire property.",
      img: bcmIcon
    , __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Safety & Compliance",
      desc: "Capacity alerts and visitor logs ensure regulatory compliance and enable swift head counts during emergency situations.",
      img: bscIcon
    , __w: 1068, __h: 1017}
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
    __w: 60, __h: 60},

    {
      icon: transparentIcon,
      title: "Transparent",
    __w: 60, __h: 60},

    {
      icon: realtimeIcon,
      title: "Real-Time"
    , __w: 60, __h: 60}
  ];


  const footerUpperText = {
    text1: "Every visit counted,",
    text2: "",
    text3: "every venue optimized",
    img: laptop
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">AUDIENCE <span className="text-[#01B0F1]">ATTENDANCE</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Monitor and manage banquet-wise footfall and attendance with real-time tracking, capacity management, and detailed utilization analytics.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={hero} alt="wifi module" width="1997" height="700" />
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
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={overviewIcon} alt="" width="995" height="556" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            Our Audience Attendance module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to track and manage attendance across venues for Hotels, Resorts, Clubs and Institutions. From conference halls to swimming pools, this feature provides real-time occupancy monitoring, member check-in tracking, and venue utilization analytics, ensuring optimal capacity management and member engagement.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div key={item.key ?? index} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={item.img?.src || item.img} alt="" width={item.__w} height={item.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.heading} {item.heading2}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Audience Attendance)"}>
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
            {benefits.map((item, index) => (
              <div key={item.key ?? index} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={item.img?.src || item.img} alt="" width={item.__w} height={item.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{item.heading}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] text-left">{item.desc}</p>
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
              <details key={item.key ?? i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
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
      <FooterUpperPart product="Audience Attendance" text1={footerUpperText.text1} text2={<> {footerUpperText.text2} <br />  </>} text3={footerUpperText.text3} img={overviewIcon} />
      {!isEmbed && <FooterLower />}

    </>
  );
}