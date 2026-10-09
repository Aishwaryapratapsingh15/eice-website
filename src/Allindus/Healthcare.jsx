"use client";



import React, { useState, useRef } from "react";



import Footer from "../Othercomps/Footer";






import TalkToUs from "../Othercomps/Talktous";





import Clients from "../Homecomps/Clients";



import Clientele from "../Homecomps/Clientele";







import ProductFooter from "@/Product/ProductFooter";







import { FaCloud, FaDatabase } from "react-icons/fa";







const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";



const healthrect1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect1.png";



const healthrect2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect2.png";



const healthrect3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect3.png";



import { FaMagnifyingGlass } from "react-icons/fa6";



import { BiAnalyse, BiCode, BiSupport } from "react-icons/bi";



import { IoAnalytics } from "react-icons/io5";



import { MdArchitecture, MdLocalPharmacy } from "react-icons/md";







// images







const ehr = "https://d3r43jacxrwsrp.cloudfront.net/HealthCare/ehr.jpeg";



const ha = "https://d3r43jacxrwsrp.cloudfront.net/HealthCare/ha.jpg";



const hms = "https://d3r43jacxrwsrp.cloudfront.net/HealthCare/hms.jpg";



const mdi = "https://d3r43jacxrwsrp.cloudfront.net/HealthCare/mdi.jpeg";



const ts = "https://d3r43jacxrwsrp.cloudfront.net/HealthCare/ts.jpeg";











// cs images







const opo = "https://d3r43jacxrwsrp.cloudfront.net/Cs/opo.jpg";



const etp = "https://d3r43jacxrwsrp.cloudfront.net/Cs/etp.jpg";







const adai = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/adai.jpeg";



const ccp = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/ccp.jpg";



const mpo = "https://d3r43jacxrwsrp.cloudfront.net/Automobile/mpo.jpg";







const aipdt = "https://d3r43jacxrwsrp.cloudfront.net/medical/aipdt.jpeg";



const tmp = "https://d3r43jacxrwsrp.cloudfront.net/medical/tmp.jpeg";



























const KeyService = ({ title, description, image }) => (



  <div className="flex-shrink-0 w-80 md:w-96 p-4 pb-16">



    <div className="bg-white rounded-lg shadow-md overflow-hidden">



      <img



        src={image?.src || image}



        alt={title}



        className="w-full h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"



       width={__w} height={__h}/>



      <div className="p-4">



        <h3 className="font-general font-semibold text-[#373737] text-[20px] mb-2">{title}</h3>



        <p className="font-inter text-[#64748B] text-[16px]">{description}</p>



      </div>



    </div>



  </div>



);







const industries = [



  { name: "OIL AND GAS INDUSTRY", id: "oil" },



  { name: "AUTOMOBILE INDUSTRY", id: "auto" },



  { name: "HEALTHCARE INDUSTRY", id: "health" },



];







const projects = {



  oil: [



    {



      title: "Offshore Platform Optimization",



      description:



        "Improved production efficiency by 25% through advanced AI-driven monitoring systems.",



        img : opo



        



    , __w: 6000, __h: 4000},



    {



      title: "Energy Trading Platform",



      description:



        "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%.",



        img : etp



    , __w: 1468, __h: 1000},



  ],



  auto: [



    



    {



      title: "Autonomous Driving AI",



      description:



        "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions.",



        img : adai



    , __w: 1200, __h: 800},



    {



      title: "Connected Car Platform",



      description:



        "Designed a cloud-based system enabling OTA updates and predictive maintenance for 100,000+ vehicles.",



    img : ccp



      , __w: 1200, __h: 675},



    {



      title: "Manufacturing Process Optimization",



      description:



        "Implemented an AI-driven system reducing production line downtime by 40% and improving quality control.",



        img :mpo



    , __w: 2075, __h: 916},



  ],



  health: [



    {



      title: "AI-Powered Diagnostic Tool",



      description:



        "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods.",



        img : adai



    , __w: 1200, __h: 800},



    {



      title: "Telemedicine Platform",



      description:



        "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations.",



        img :tmp



    , __w: 1032, __h: 581},



  ],



};











const CaseStudy = ({ title, description, image, __w, __h }) => (



  



    <div className="bg-white rounded-[18px] overflow-hidden border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">



      <img



        src={image?.src || image}



        alt={title}



        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"



      />



      <div className="pt-[19px] px-[25px] pb-[25px]">



        <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">



          {title}



        </h3>



        <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">{description}</p>



      </div>



    </div>



  



);







function Cstdmain() {



  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);







  return (



    <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-10 pb-10 flex flex-col gap-4">



      <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
        Case Studies



      </p>



      <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2]">



        Explore how we digitally transformed other businesses



      </h2>



      <main className="mx-auto max-w-7xl">



        <nav>



          <ul className="flex flex-wrap justify-start sm:justify-center gap-4">



            {industries.map((industry) => (



              <li key={industry.id}>



                <button



                  onClick={() => setActiveIndustry(industry.id)}



                  className={`px-4 py-1.5 rounded-full border font-general font-semibold text-[12px] sm:text-[14px] tracking-wide transition ${
                    activeIndustry === industry.id
                      ? "bg-[#012060] text-white border-[#012060]"
                      : "bg-white text-blackk border-[#E6EAF1] hover:border-[#01B0F1]/60"
                  }`}



                >



                  {industry.name}



                </button>



              </li>



            ))}



          </ul>



        </nav>







        {industries.map((industry) => (



          <section



            key={industry.id}



            className={`pt-8 ${



              activeIndustry === industry.id ? "block" : "hidden"



            }`}



          >



            <h2 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">



              {industry.name}



            </h2>



            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">



              {projects[industry.id].map((project, index) => (



                <CaseStudy



                  key={index}



                  title={project.title}



                  description={project.description}



                  image={project.img}



                 __w={project.__w} __h={project.__h}/>



              ))}



            </div>



          </section>



        ))}



      </main>



    </div>



  );



}







const services = [



  {



    id: "ehr",



    name: "Electronic Health Records (EHR)",



    image: ehr,



    description:



      "Implement comprehensive EHR systems that provide easy access to patient records, improve workflow efficiency, and enhance the quality of care.",



  __w: 1200, __h: 584},



  {



    id: "telemedicine",



    name: "Telemedicine Solutions",



    image: ts,



    description:



      "Enable remote consultations and virtual care through secure telemedicine platforms.",



  __w: 1032, __h: 581},



  {



    id: "analytics",



    name: "Healthcare Analytics",



    image: ha,



    description:



      "Leverage data analytics to derive insights, improve patient outcomes, and optimize resource allocation.",



  __w: 959, __h: 540},



  {



    id: "integration",



    name: "Medical Device Integration",



    image: mdi,



    description:



      "Seamlessly integrate medical devices with healthcare IT systems for real-time data collection and analysis.",



  __w: 1000, __h: 533},



  {



    id: "mobility",



    name: "Healthcare Mobility Solutions",



    image: hms,



    description:



      "Develop mobile applications for healthcare professionals and patients to access information on-the-go.",



  __w: 740, __h: 493},



];







function Healthcare() {



  const [activeService, setActiveService] = useState(services[0].id);



  const sliderRefs = useRef({});







  return (



    <div className="">



      <div className="max-w-7xl mx-auto px-3 xl:px-4">



        <div className="sm:max-w-7xl pt-14 pb-4 mx-auto grid grid-cols-1 sm:grid-cols-3">



          <img src={healthrect1} alt="Healthcare technology innovation"  width="354" height="207" />



          <img src={healthrect2} alt="Digital health solutions" className="hidden sm:block"  width="354" height="207" />



          <img src={healthrect3} alt="Healthcare software development" className="hidden sm:block"  width="354" height="207" />



        </div>



        <div className="max-w-7xl mx-auto flex flex-col gap-4 pb-10">



          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            Transforming <span className="text-bloo">Healthcare</span> with <span className="hidden sm:block">



            Innovative Technology</span>



          </h1>



          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            At EICE Technology, we empower businesses to excel in the digital



            age through cutting-edge technologies and innovative strategies. We



            recognize the essential role of technology in modern healthcare and



            offer comprehensive software development services to enhance patient



            care, streamline operations, and support providers. Our solutions



            cater to diverse needs across hospitals, clinics, pharmaceutical



            companies, and research institutions. Committed to adhering to



            HIPAA, NCPDP, FDA, and GDPR regulations, we deliver advanced digital



            solutions that meet the latest trends in the healthcare industry.



          </p>



        </div>







        <div className="sm:max-w-7xl mx-auto flex flex-col gap-4 pt-10">



          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
            Key Services



          </p>



          <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2]">



            Explore What We Offer



          </h2>



        </div>



        <div className="sm:max-w-7xl w-full mx-auto pt-8 pb-10">



          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-4 items-center justify-center">



            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4">



              {services.map((service, index) => (



                <button



                  key={service.id}



                  onClick={() => setActiveService(service.id)}



                  className={`${index === services.length - 1 ? "col-span-2 lg:col-span-1" : ""} block w-full text-left px-4 py-4 border rounded-[18px] font-general font-semibold text-[14px] sm:text-[16px] transition ${
                    activeService === service.id
                      ? "bg-[#012060] text-white border-[#012060]"
                      : "bg-white text-blackk border-[#E6EAF1] hover:border-[#01B0F1]/60"
                  } `}



                >



                  {service.name}



                </button>



              ))}



            </div>



            <div className="relative h-[250px] lg:h-full rounded-xl w-full lg:col-span-2">



              {services.map(



                (service) =>



                  service.id === activeService && (



                    <div



                      key={service.id}



                      className="p-4 w-full h-full rounded-xl"



                    >



                      <img



                        src={service.image?.src || service.image}



                        alt={service.name}



                        className="absolute inset-0 -z-10 w-full h-full object-cover mb-4 rounded-xl"



                       width={service.__w} height={service.__h} />



                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 rounded-xl to-black/30  -z-10"></div>



                      <div className="flex flex-col items-center justify-center h-full z-20 px-8 text-white">



                        <h2 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">



                          {service.name}



                        </h2>



                        <p className="font-inter font-normal text-white text-[15px] sm:text-[16px] leading-[1.6]">



                          {service.description}



                        </p>



                      </div>



                    </div>



                  )



              )}



            </div>



          </div>



        </div>



        <div className="pt-10 sm:max-w-7xl mx-auto text-center">



          <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] sm:max-w-4xl sm:mx-auto">



            Our Healthcare and IT Software Solutions



          </h2>



        </div>



        <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto pt-8 pb-10">



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <BiCode size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                SOFTWARE DEVELOPMENT



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We build robust, scalable healthcare software solutions with a



                focus on functionality, security, and seamless integration with



                existing systems for efficient and effective operations.



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <IoAnalytics size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                COMPREHENSIVE REQUIREMENTS ANALYSIS



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We conduct detailed requirements analysis to understand your



                healthcare needs, ensuring tailored solutions that address



                specific challenges and regulatory requirements for effective



                digital health solutions.{" "}



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <MdArchitecture size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                INNOVATIVE DESIGN AND PROTOTYPING



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Create advanced pharmacy management software for inventory



                control, automated workflows, and improved pharmaceutical



                services.{" "}



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <MdLocalPharmacy size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                PHARMACY MANAGEMENT SOFTWARE



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Create advanced pharmacy management software for inventory



                control, automated workflows, and improved pharmaceutical



                services.{" "}



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <BiSupport size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                MAINTENANCE AND SUPPORT



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We offer continuous maintenance and support services, including



                updates, bug fixes, and performance improvements to keep your



                software up-to-date and responsive to evolving healthcare needs.



              </p>



            </div>



          </div>



        </div>



      </div>



      <Cstdmain />



      <TalkToUs />



      {/* <Footer /> */}



      <ProductFooter/>






    </div>



  );



}







export default Healthcare;







