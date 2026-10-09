"use client";






const as = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empSection2/as.png";
const cd = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empSection2/cd.png";
const tc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empSection2/tc.png";



import { Link } from '@/nextNavigation'

// features
const bm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/bm.png";
const can = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/can.png";
const da = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/da.png";
const lam = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/lam.png";
const pc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/pc.png";
const pim = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/pim.png";
const pm = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/pm.png";
const sr = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/sr.png";
const td = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/icon/td.png";


const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/new/employeeH.webp";




const ec = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empBenefits/ec.webp";
const ee = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empBenefits/ee.webp";
const ie = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empBenefits/ie.webp";
const ts = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empBenefits/ts.webp";
const tt = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/emp/empBenefits/tt.webp";





import { useEffect , useState } from "react"



const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/emp.webp";



import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"


export default function EmployeeSuite() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);




  const features = [
    {
      key: 1,
      heading: "Personal Information Management",
      desc: "Employees can update their contact details, emergency contacts, and tax information, ensuring accurate and up-to-date records.",
      img: pim, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 2,
      heading: "Payroll and Compensation",
      desc: "Employees can access payslips, track salary history, and view deductions and bonuses, providing full transparency on compensation.",
      img: pc, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 3,
      heading: "Leave and Attendance Management",
      desc: "Employees can submit leave requests, track attendance, and view leave balances, making time-off management easier.",
      img: lam, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 4,
      heading: "Training and Development",
      desc: "Employees can explore training programs, track progress, and enroll in courses to enhance their professional skills.",
      img: td, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 5,
      heading: "Document Access",
      desc: "Employees can access important documents such as policies, contracts, benefits, and company announcements, ensuring quick access to essential information.",
      img: da, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 6,
      heading: "Company Announcements and News",
      desc: "Employees stay updated on company news, policy changes, and upcoming events, fostering better communication within the organization.",
      img: can, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 7,
      heading: "Performance Management",
      desc: "Employees can track their goals, review feedback, and collaborate with managers to set development plans.",
      img: pm, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 8,
      heading: "Benefits Management",
      desc: "Employees can manage their benefits like health insurance, retirement plans, and wellness programs, ensuring they stay informed of all available options.",
      img: bm, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300},
    {
      key: 9,
      heading: "Support and Requests",
      desc: "Employees can submit HR inquiries, request support, or raise issues through the portal, streamlining communication and issue resolution.",
      img: sr, // Replace with the appropriate image from your existing feature array
      width: "44px", // Adjust to match the previous feature array
    __w: 300, __h: 300}
  ];






  const benefits = [
    {
      key: 1,
      heading: "Improved Efficiency",
      desc: "Reduces administrative work by centralizing HR services and allowing employees to manage their own data.",
      img: ie,
    __w: 1068, __h: 1017},
    {
      key: 2,
      heading: "Enhanced Communication",
      desc: "Ensures clear communication about company policies, events, and updates.",
      img: ec,
    __w: 1068, __h: 1017},
    {
      key: 3,
      heading: "Employee Empowerment",
      desc: "Increases engagement by giving employees control over their personal and professional information.",
      img: ee,
    __w: 1068, __h: 1017},
    {
      key: 4,
      heading: "Transparency and Trust",
      desc: "Promotes trust by providing full visibility into payroll, benefits, and performance.",
      img: tt,
    __w: 1068, __h: 1017},
    {
      key: 5,
      heading: "Time Savings",
      desc: "Automates HR processes, freeing up time for HR teams to focus on strategic tasks.",
      img: ts
    , __w: 1068, __h: 1017},
    // {
    //     key: 6,
    //     heading: "Compliance and Security",
    //     desc: "Ensures secure storage and compliance with data privacy regulations, protecting sensitive employee information.",
    //     img: c, 
    // }
  ];


  const query = [
    {
      key: 1,
      question: "Q : What services does the Employee Portal provide?",
      answer: "A : The portal offers access to payroll information, leave management, training, benefits, and company announcements, empowering employees to manage their professional data."
    },
    {
      key: 2,
      question: "Q : How does the portal improve communication within the company?",
      answer: "A : It ensures employees stay updated on company policies, news, and events, fostering better communication across the organization."
    },
    {
      key: 3,
      question: "Q : Can employees track their performance through the portal?",
      answer: "A : Yes, employees can track their goals, review feedback, and collaborate with managers on development plans to improve performance."
    },
    {
      key: 4,
      question: "Q : How does the portal ensure data security?",
      answer: "A : The portal ensures secure storage of sensitive employee information and complies with data privacy regulations, protecting employee data."
    },
    {
      key: 5,
      question: "Q : How does the portal enhance HR efficiency?",
      answer: "A : By centralizing HR services and automating processes like leave requests and payroll management, the portal reduces administrative workload and enhances HR productivity."
    }
  ];



  const footerUpperText = {

    text1: "Empower your workforce",
    text2: "",
    text3: "with a streamlined Employee Portal",
    img: laptop
  }













  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]"><>EMPLOYEE <span className="text-bloo">SUITE</span></></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Empower your team with centralized access to essential resources, payroll, and performance management tools..
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="room booking" width="957" height="461" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={as} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Automated</div>
              <div>Shifts</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={cd} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Centralised</div>
              <div>Data</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={tc} alt="" width="300" height="300" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">
              <div>Team</div>
              <div>Collaboration</div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            The <strong className="font-semibold">Employee Portal</strong> provides centralized access to work-related information, resources, and services. It <strong className="font-semibold">streamlines HR processes, boosts engagement, and promotes transparency, enhancing overall productivity and the employee experience</strong> .
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
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/demo-form?product=EiceRise(Employee Suite)"}>
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
        <FooterUpperPart product="Employee Suite" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
        {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}

