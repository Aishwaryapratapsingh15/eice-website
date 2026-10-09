"use client";


const artb = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/section2B/artb.png";
const eem = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/section2B/eem.png";
const fcb = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/section2B/fcb.png";


import { Link } from '@/nextNavigation'


const herosectionImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/new/banquetH.webp";

const abs = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/icon/abs.png";
const cpa = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/icon/cpa.png";
const cpp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/icon/cpp.png";
const cr = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/icon/cr.png";
const dci = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/icon/dci.png";
const irm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/icon/irm.png";


import { useEffect , useState } from "react"



// benefits

const bru = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/banquetbenefits/bru.webp";
const cm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/banquetbenefits/cm.webp";
const ece = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/banquetbenefits/ece.webp";
const ie = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/banquetbenefits/ie.webp";
const ro = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/banquet/banquetbenefits/ro.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/banquet.webp";




import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"


export default function BanquetAnsBilling() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);




 





  const features = [
    {
      key: 1,
      heading: "Customized Packages and Pricing",
      desc: "Create tailored event packages, allowing clients to choose from various services, amenities, and F&B options to suit their preferences.",
      img: cpp,
      width: "44px",
    __w: 300, __h: 300},

    {
      key: 2,
      heading: "Digital Contracts and Invoicing",
      desc: "Generate digital contracts and detailed invoices for events, with transparent breakdowns of services, charges, and taxes.",
      img: dci,
      width: "44px",
    __w: 300, __h: 300},

    {
      key: 3,
      heading: "Integrated Resource Management",
      desc: "Allocate staff, catering, equipment, etc., based on event requirements, optimizing resources and reducing overbooking risks.",
      img: irm,
      width: "44px",
    __w: 300, __h: 300},

    {
      key: 4,
      heading: "Automated Billing System",
      desc: "Streamline the billing process with automatic calculations for banquet charges, F&B services, and additional event-related costs.",
      img: abs,
      width: "44px",
    __w: 300, __h: 300},

    {
      key: 5,
      heading: "Comprehensive Reports",
      desc: "Access real-time reports on event bookings, revenue, and client preferences, enabling better forecasting and decision-making.",
      img: cr,
      width: "44px",
    __w: 300, __h: 300},

    {
      key: 6,
      heading: "Client Portal Access",
      desc: "Provide clients with a portal to review booking details, confirm event schedules, and make payments easily.",
      img: cpa,
      width: "44px",
    __w: 300, __h: 300}
  ];




  const benefits = [
    {
      key: 1,
      heading: "Enhanced Client Experience",
      desc: "Simplified booking and clear billing ensure a hassle-free experience for clients.",
      img: ece,
    __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Improved Efficiency",
      desc: "Automates event management and billing, reducing manual errors and saving time.",
      img: ie,
    __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Revenue Optimization",
      desc: "Accurate invoicing and comprehensive reports help maximize revenue from event services.",
      img: ro,
    __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A unified platform allows for streamlined event management, reducing complexity and ensuring that all event-related details are easily accessible and managed in one place.",
      img: cm,
    __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Better Resource Utilization",
      desc: "Automated scheduling and inventory tracking ensure efficient use of resources, preventing overbooking and underutilization of assets.",
      img: bru,
    __w: 1068, __h: 1017},

  ];


  const query = [
    {
      key: 1,
      question: "Q : How can I manage event bookings?",
      answer: "A : You can easily reserve venues and manage multiple event bookings with real-time availability updates."
    },
    {
      key: 2,
      question: "Q : Does the system handle customized event packages?",
      answer: "A : Yes, it allows you to create tailored event packages with various service and F&B options."
    },
    {
      key: 3,
      question: "Q : Are digital contracts and invoicing available?",
      answer: "A : Yes, digital contracts and detailed invoices with transparent service breakdowns are generated automatically."
    },
    {
      key: 4,
      question: "Q : Can I track event revenue?",
      answer: "A : Yes, you can access real-time reports on event bookings, revenue, and client preferences."
    },
    {
      key: 5,
      question: "Q : How is resource management handled?",
      answer: "A : Resource allocation for staff, catering, and equipment is automated to optimize event logistics and prevent overbooking."
    }
  ];

  const footerUpperText = {

    text1: "Manage events",
    text2: "",
    text3: "and simplify billing with our Banquet solution",
    img: laptop
  }





  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">BANQUET<span className="text-[#01B0F1]"> & BILLING</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Manage events with ease using the Banquet &amp; Billing Module, providing precise event tracking and smooth financial management for any occasion.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={herosectionImg} alt="room booking" width="920" height="542" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={artb} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Accurate Real Time Billing</div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={eem} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Effortless Event Mangement</div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[40px] sm:w-[66px]" src={fcb} alt="" width="300" height="300" />
              <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Flexible Custom Packages</div>
            </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            EICE Rise ERP’s Banquet &amp; Billing module is designed to <strong className="font-semibold">simplify the management of Events, Weddings, Corporate Gatherings, and Private Parties</strong> . The module offers comprehensive tools for <strong className="font-semibold">Booking, Scheduling, and Billing</strong> , enabling hospitality businesses to deliver seamless event experiences. By integrating with other operational functions, it ensures <strong className="font-semibold">accurate resource allocation, efficient billing, and enhanced customer satisfaction.</strong>
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
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Banquet and Billing)"}>
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

      <div >
       <FooterUpperPart product="Banquet Billing" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
        {!isEmbed && <FooterLower />}

      </div>

    </>
  )
}

