"use client";



import { Link } from '@/nextNavigation'


const cag = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberSection2/cag.png";
const pme = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberSection2/pme.png";
const smo = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberSection2/smo.png";





const ad = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/icon/ad.png";
const emb = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/icon/emb.png";
const ict = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/icon/ict.png";
const mrm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/icon/mrm.png";
const sm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/icon/sm.png";
const ssp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/icon/ssp.png";


const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/memberh.webp";


// benefits
const ddi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberBenefit/ddi.webp";
const eme = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberBenefit/eme.webp";
const ic = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberBenefit/ic.webp";
const imr = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberBenefit/imr.webp";
const oe = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/member/memberBenefit/oe.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/member.webp";


import { useState, useEffect } from "react"

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"



export default function MemberSuite() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);



  const features = [
    {
      key: 1,
      heading: "Membership Registration and Management",
      desc: "Seamlessly register and manage different membership tiers, and convert membership with customizable features, including individual, family, corporate, and lifetime memberships.",
      img: mrm,
      width: "44px"
    , __w: 300, __h: 300},
    {
      key: 2,
      heading: "Self-Service Portal",
      desc: "Empower members with a self-service portal to update their profiles, renew subscriptions, and outstanding bills, view membership benefits, and access exclusive offers.",
      img: ssp,
      width: "44px"
    , __w: 300, __h: 300},
    {
      key: 3,
      heading: "Subscription Management",
      desc: "Automate subscription renewals, payments, and reminders, ensuring members stay informed and engaged without any manual effort.",
      img: sm,
      width: "44px"
    , __w: 300, __h: 300},
    {
      key: 4,
      heading: "Exclusive Member Benefits",
      desc: "Offer tailored benefits such as priority bookings, special discounts, and access to exclusive events, enhancing the overall member experience.",
      img: emb,
      width: "44px"
    , __w: 300, __h: 300},
    {
      key: 5,
      heading: "Integrated Communication Tools",
      desc: "Enable real-time communication with members via email, push notifications, and in-app messages, keeping them informed about events, announcements, and offers.",
      img: ict,
      width: "44px"
    , __w: 300, __h: 300},
    {
      key: 6,
      heading: "Analytics Dashboard",
      desc: "Gain insights into member activity, preferences, and engagement levels with detailed analytics, helping you tailor services to meet their needs.",
      img: ad,
      width: "44px"
    , __w: 300, __h: 300}
  ];





  const benefits = [
    {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Provide a personalized and streamlined experience for your members, improving retention and satisfaction.",
      img: eme,
    __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine tasks such as renewals and notifications, reducing administrative workload.",
      img: oe,
    __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Data-Driven Insights",
      desc: "Leverage analytics to understand member preferences and make informed decisions on services and offerings.",
      img: ddi,
    __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Improved Communication",
      desc: "Streamline communication with members through automated alerts, reminders, and personalized messaging, fostering stronger relationships and engagement.",
      img: ic,
    __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Increased Member Retention",
      desc: "By offering targeted services and benefits based on member data, you can increase retention and reduce churn, creating long-term loyalty.",
      img: imr,
    __w: 1068, __h: 1017},

    // {
    //     key: 6,
    //     heading: "Revenue Growth",
    //     desc: "Enable upselling and cross-selling opportunities through tailored offers and personalized services, driving additional revenue streams from your existing member base.",
    //     img: r, 
    // }
  ];



  const query = [
    {
      key: 1,
      question: "Q : Can members manage their own profiles?",
      answer: "A : Yes, members can update their profiles, renew subscriptions, and view membership benefits via a self-service portal."
    },
    {
      key: 2,
      question: "Q : Does the system offer automated subscription renewals?",
      answer: "A : Yes, subscriptions and payments are automated with reminders to keep members engaged."
    },
    {
      key: 3,
      question: "Q : Are exclusive member benefits available?",
      answer: "A : Yes, members can access exclusive benefits like priority bookings, special discounts, and events."
    },
    {
      key: 4,
      question: "Q : How can I track member engagement?",
      answer: "A : An analytics dashboard provides insights into member activity, preferences, and engagement levels."
    },
    {
      key: 5,
      question: "Q : Is the platform secure for member data?",
      answer: "A : Yes, it features multi-layered authentication and complies with privacy regulations to protect member data."
    }
  ];


  const footerUpperText = {

    text1: "Engage members",
    text2: "",
    text3: "and grow loyalty with our all-in-one Membership Portal",
    img: laptop
  }


  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]"><>MEMBER<span className="text-bloo"> SUITE</span></></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Build a thriving member community with our Membership Portal, offering streamlined membership management and engagement tools.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="room booking" width="911" height="543" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={cag} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Comprehensive Analytics</div>
              <div>For Growing</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={smo} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Seamless Member</div>
              <div>Onboarding</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={pme} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Personalized Member</div>
              <div>Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            EICE Rise ERP’s <strong className="font-semibold">Member Suite</strong>  offers a centralized solution for managing diverse membership types, subscriptions, and engagement activities. <strong className="font-semibold">Designed specifically for Clubs, Institutions, Hotels, and Resorts</strong> , this module streamlines membership processes, enhances communication, and provides personalized <strong className="font-semibold">services to members, all within a secure, user-friendly platform</strong> .
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
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.heading}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Member Suite)"}>
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
              <div key={index} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
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

      <div >
        <FooterUpperPart product="Member Suite" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
       {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}

