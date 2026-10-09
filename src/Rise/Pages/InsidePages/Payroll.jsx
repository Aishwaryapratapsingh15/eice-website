"use client";


const icon1 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/section3/icon1.png";
const icon2 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/section3/icon2.png";
const icon3 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/section3/icon3.png";

const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/payrollh.webp";

import { Link } from '@/nextNavigation'

// features

const app = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payFeatures/app.png";
const cps = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payFeatures/cps.png";
const ddpp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payFeatures/ddpp.png";
const edm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payFeatures/edm.png";
const lam = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payFeatures/lam.png";
const tcr = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payFeatures/tcr.png";






const appb = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payrollBenefit/app.webp";
const cs = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payrollBenefit/cs.webp";
const es = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payrollBenefit/es.webp";
const ic = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payrollBenefit/ic.webp";
const te = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pay/payrollBenefit/te.webp";



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/pay.webp";

import { useEffect , useState } from "react"
import FooterLower from "../../Components/Footer/FooterLower.jsx"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"



export default function Payroll() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);



  const features = [
    {
      key: 1,
      heading: "Automated Payroll Processing",
      desc: "Automates salary calculations, deductions, bonuses, and taxes, ensuring timely and accurate payroll processing every time.",
      img: app,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 2,
      heading: "Employee Data Management",
      desc: "Centralized storage of employee records, including salary details, benefits, tax information, and working hours, ensuring easy access and data accuracy.",
      img: edm,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 3,
      heading: "Customizable Pay Structures",
      desc: "Define multiple earnings & deduction pay types, to accommodate various employee compensation models.",
      img: cps,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 4,
      heading: "Tax Compliance and Reporting",
      desc: "Automatically calculates taxes based on current laws, generates tax reports, and ensures compliance regulations.",
      img: tcr,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 5,
      heading: "Leave and Attendance Management",
      desc: "Integrates with time tracking systems to manage employee leave, absences, and overtime, ensuring accurate payroll calculations.",
      img: lam,
      width: "44px",
    __w: 300, __h: 300},
    {
      key: 6,
      heading: "Direct Deposit and Payment Processing",
      desc: "Enables direct deposit to employees' bank accounts, reducing manual payment efforts and improving payment accuracy.",
      img: ddpp,
      width: "44px",
    __w: 300, __h: 300},

  ];






  const benefits = [
    {
      key: 1,
      heading: "Time Efficiency",
      desc: "Automates payroll tasks, reducing manual effort and the time spent on calculating, processing, and distributing payroll.",
      img: te,
    __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Accurate Payroll Processing",
      desc: "Reduces errors by automating calculations and ensuring compliance with tax laws, minimizing the risk of overpayments, underpayments, or compliance issues.",
      img: appb,

    __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Improved Compliance",
      desc: "Helps businesses stay up-to-date with changing tax regulations and labor laws, ensuring compliance and reducing legal risks.",
      img: ic,
    __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Cost Savings",
      desc: "By automating payroll and reducing errors, businesses can save on administrative costs and avoid costly penalties for non-compliance.",
      img: cs,
    __w: 1068, __h: 1017},

    {
      key: 5,
      heading: "Employee Satisfaction",
      desc: "Ensures timely and accurate payments, boosting employee trust and satisfaction.",
      img: es,
    __w: 1068, __h: 1017},



    // {
    //   key: 6,
    //   heading: "Real-Time Insights",
    //   desc: "Provides detailed reports on payroll, taxes, and labor costs, helping businesses make informed financial decisions and manage budgets effectively.",
    //   img: , 
    // }


  ];




  const query = [
    {
      key: 1,
      question: "Q : How does the Payroll Management System automate payroll processing?",
      answer: "A : The system automates salary calculations, deductions, bonuses, and taxes, ensuring timely and accurate payroll processing."
    },
    {
      key: 2,
      question: "Q : Can employees access their payroll information?",
      answer: "A : Yes, employees can view their payslips, salary history, deductions, and bonuses through the system, providing transparency."
    },
    {
      key: 3,
      question: "Q : Does the system ensure compliance with tax regulations?",
      answer: "A : Yes, the system automatically calculates taxes according to current laws and generates tax reports to ensure compliance with regulations."
    },
    {
      key: 4,
      question: "Q : Can the system handle direct deposit payments?",
      answer: "A : Yes, the system supports direct deposit to employees’ bank accounts, improving accuracy and reducing manual payment efforts."
    },
    {
      key: 5,
      question: "Q : How does the system help businesses manage labor costs?",
      answer: "A : It provides detailed reports on payroll expenses, taxes, and deductions, helping businesses track labor costs and manage budgets effectively."
    }
  ];












  const footerUpperText = {

    text1: "Streamlined payrol",
    text2: "",
    text3: "processing with accuracy, compliance, and efficiency",
    img: laptop
  }





  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">PAYROLL<span className="text-bloo"> MANAGEMENT</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Simplify payroll processing with automated solutions for timely payouts, tax compliance, and employee satisfaction.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="Payroll module" width="872" height="504" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon1} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Effortless</div><div>Operations</div></div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon2} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Personalized</div><div>Experience</div></div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon3} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center"><div>Smart</div><div>Insights</div></div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The <strong className="font-semibold">automates payroll processing, simplifying salary, deduction, bonus, and tax management</strong> Payroll Management System  while ensuring regulatory compliance. It <strong className="font-semibold">integrates with HR and accounting platforms</strong>  to reduce errors, save time, and provide real-time payroll insights for better decision-making.
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
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Payroll Management)"}>
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
        <FooterUpperPart product="Payroll" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />        {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}


