"use client";


const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/vendorh.webp";


const sp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/section2icon/sp.png";
const vm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/section2icon/vm.png";


import { Link } from '@/nextNavigation'



// features

const rtmm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/rtmm.png";

const tm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/feature/tm.png";




const aqc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/aqc.png";
const dm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/dm.png";
const pfb = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/pfb.png";
const poa = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/poa.png";

const spm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/spm.png";
const vmfeature = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/vm.png";
const vpt = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/featuresIcon/vpt.png";







const bfc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/vendorBenefits/bfc.webp";
const evm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/vendorBenefits/evm.webp";
const isr = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/vendorBenefits/isr.webp";
const ta = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/vendorBenefits/ta.webp";
const tcs = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/vendor/vendorBenefits/tcs.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/vendor.webp";

import { useState , useEffect } from "react"


import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"


export default function PurchaseAndVendor() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);
    




    const features = [
        {
            key: 1,
            heading: "Vendor Management",
            desc: "Maintain a centralized database with detailed vendor profiles, including contact information, product offerings, and contract terms, helping businesses efficiently track and manage supplier relationships.",
            img: vmfeature, // Image from the previous feature array
            width: "44px" // Width from the previous feature array
        , __w: 300, __h: 300},
        {
            key: 2,
            heading: "RFP/RFQ Management",
            desc: "Easily create, send, and manage Requests for Proposals (RFPs) and Quotations (RFQs), ensuring businesses receive competitive bids from multiple vendors, simplifying the procurement process.",
            img: rtmm, // Image from the previous feature array
            width: "44px" // Width from the previous feature array
        , __w: 200, __h: 200},
        {
            key: 3,
            heading: "Automated Quotation Comparison",
            desc: "Automatically compare vendor quotations based on price, delivery, and quality, helping businesses make data-driven procurement decisions quickly.",
            img: aqc, // Image from the previous feature array
            width: "44px" // Width from the previous feature array
        , __w: 300, __h: 300},
        {
            key: 4,
            heading: "Order Management",
            desc: "Track and manage purchase orders from creation to fulfilment, with integration to inventory and warehouse management for real-time stock level and delivery updates.",
            img: tm, // Image from the previous feature array
            width: "44px" // Width from the previous feature array
        , __w: 200, __h: 200},
        {
            key: 5,
            heading: "Vendor Payment Tracking",
            desc: "Monitor vendor payments, including invoices and due dates, ensuring smooth transactions with transparent payment status for both businesses and vendors.",
            img: vpt, // Image from the previous feature array
            width: "44px" // Width from the previous feature array
        , __w: 300, __h: 300},
        {
            key: 6,
            heading: "Purchase Order Approvals",
            desc: "Enable multi-level approval workflows for purchase orders to ensure alignment with internal budgets and procurement policies before sending to vendors.",
            img: poa, // Image from the previous feature array
            width: "44px" // Width from the previous feature array
        , __w: 300, __h: 300},
        {
            key: 7,
            heading: "Supplier Performance Monitoring",
            desc: "Evaluate vendor performance through comprehensive reports on delivery, product quality, and compliance, helping businesses strengthen supplier relationships.",
            img: spm, // Image reused for consistency
            width: "44px" // Reused width for consistency
        , __w: 300, __h: 300},
        {
            key: 8,
            heading: "Document Management",
            desc: "Securely store and access procurement-related documents like contracts, invoices, and agreements in a centralized repository for easy sharing with vendors.",
            img: dm, // Reused image for consistency
            width: "44px" // Reused width for consistency
        , __w: 300, __h: 300},
        {
            key: 9,
            heading: "Purchase Forecasting and Budgeting",
            desc: "Forecast purchasing needs based on historical data and trends, set procurement budgets, and track spending to ensure financial control.",
            img: pfb, // Reused image for consistency
            width: "44px" // Reused width for consistency
        , __w: 300, __h: 300}
    ];




    const benefits = [
        {
            key: 1,
            heading: "Efficient Vendor Management",
            desc: "Centralized vendor profiles allow businesses to maintain organized and up-to-date records, making it easier to track relationships and performance over time.",
            img: evm,
        __w: 1068, __h: 1017},
        {
            key: 2,
            heading: "Time and Cost Savings",
            desc: "Streamlining the RFP and RFQ processes reduces the time spent on sourcing and vendor selection, allowing businesses to make quicker procurement decisions and secure better prices.",
            img: tcs,
        __w: 1068, __h: 1017},
        {
            key: 3,
            heading: "Transparency and Accountability",
            desc: "Vendors can easily track payment statuses and purchase orders, reducing disputes and fostering trust between businesses and suppliers.",
            img: ta,
        __w: 1068, __h: 1017},
        {
            key: 4,
            heading: "Improved Supplier Relationships",
            desc: "By evaluating supplier performance and maintaining clear, direct communication through the portal, businesses can build stronger, more collaborative partnerships with vendors.",
            img: isr,
        __w: 1068, __h: 1017},
        {
            key: 5,
            heading: "Better Financial Control",
            desc: "Integration with finance modules ensures that payment terms, budgets, and spending are tracked efficiently, enabling businesses to stay within budget and manage cash flow effectively.",
            img: bfc,
        __w: 1068, __h: 1017},
       
    ];


    const query = [
        {
            key: 1,
            question: "Q : How does the Purchase & Vendor Portal simplify vendor management?",
            answer: "A : The portal centralizes vendor profiles, streamlines communication, and allows businesses to track vendor performance, payment statuses, and contract terms."
        },
        {
            key: 2,
            question: "Q : Can I compare vendor quotations easily?",
            answer: "A : Yes, the system automatically compares vendor quotations based on price, delivery, and quality to help businesses make quick, data-driven procurement decisions."
        },
        {
            key: 3,
            question: "Q : How does the module help with purchase orders?",
            answer: "A : It tracks purchase orders from creation to fulfilment, integrates with inventory systems, and ensures accurate order management with real-time updates."
        },
        {
            key: 4,
            question: "Q : Is the portal integrated with financial systems?",
            answer: "A : Yes, the portal integrates with finance modules to track spending, manage budgets, and monitor vendor payments efficiently."
        },
        {
            key: 5,
            question: "Q : Can I forecast future procurement needs?",
            answer: "A : Yes, the module helps businesses forecast purchasing needs, set procurement budgets, and track spending based on historical data and trends."
        }
    ];



    const footerUpperText = {

        text1: "Collaborate seamlessly",
        text2: "",
        text3: "with vendors using our comprehensive portal",
        img: laptop
    }












    return (
        <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">PURCHASE<span className="text-bloo"> & VENDOR PORTAL</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Optimize vendor management with a comprehensive portal for seamless purchasing, invoicing, and communication
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="PurchaseAndVendor module" width="941" height="437" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={sp} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Streamlining</div><div>Procurement</div></div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={vm} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Vendor</div><div>Managements</div></div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The <strong className="font-semibold">Purchase &amp; Vendor Portal</strong>  in EICE Rise ERP streamlines procurement and vendor management processes. It automates workflows, ensuring seamless order tracking, improved vendor communication, and better decision-making. This <strong className="font-semibold">portal enhances control and efficiency in managing purchases, supplier relationships, and procurement reporting</strong> .
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={f.key ?? i} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={f.img?.src || f.img} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.heading}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Purchase & Vendor Portal)"}>
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
              <div key={b.key ?? i} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={b.img?.src || b.img} alt="" width={b.__w} height={b.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{b.heading}</h3>
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
                <FooterUpperPart product="Purchase & Vendor" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
                {!isEmbed &&<FooterLower />}

            </div>

        </>
    )
}

