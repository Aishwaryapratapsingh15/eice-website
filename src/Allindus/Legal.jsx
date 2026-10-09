"use client";



import React, { useState, useRef } from "react";



import Footer from "../Othercomps/Footer";






import TalkToUs from "../Othercomps/Talktous";





import Clients from "../Homecomps/Clients";



import Clientele from "../Homecomps/Clientele";



import ProductFooter from "@/Product/ProductFooter";







import { FaCloud, FaDatabase } from "react-icons/fa";







const legal_img = "https://d3r43jacxrwsrp.cloudfront.net/industry-images/Legal.png";







const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";



const healthrect1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect1.png";



const healthrect2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect2.png";



const healthrect3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect3.png";







const random1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random1.jpg";



const random2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random2.jpg";



const random3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random3.jpg";



const random4 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random4.jpg";



const random5 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random5.jpg";



const random6 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random6.jpg";







import { FaMagnifyingGlass } from "react-icons/fa6";



import { BiAnalyse, BiSupport } from "react-icons/bi";



import { GrAnalytics, GrIntegration, GrTest } from "react-icons/gr";



import { MdArchitecture, MdCheckBox } from "react-icons/md";



import { SiTestinglibrary } from "react-icons/si";



import { GiCheckMark } from "react-icons/gi";



import { FcDeployment } from "react-icons/fc";



import { AiOutlineDeploymentUnit } from "react-icons/ai";







// legal







const cms = "https://d3r43jacxrwsrp.cloudfront.net/LEgal/cms.jpg";



const cmsoft = "https://d3r43jacxrwsrp.cloudfront.net/LEgal/cmsoft.jpg";



const eds = "https://d3r43jacxrwsrp.cloudfront.net/LEgal/eds.jpeg";



const lbaas = "https://d3r43jacxrwsrp.cloudfront.net/LEgal/lbaas.jpeg";



const lda = "https://d3r43jacxrwsrp.cloudfront.net/LEgal/lda.jpg";



const lras = "https://d3r43jacxrwsrp.cloudfront.net/LEgal/lras.jpg";











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















// const CaseStudy = ({ title, description, image, __w, __h }) => (



//   <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">



//     <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">



//       <img



//         src={image?.src || image}



//         alt={title}



//         className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"



//       />



//       <div className="p-3 md:p-4">



//         <h3 className="fontweight_1 text-[24px] sm:text-base md:text-lg mb-1 sm:mb-2">



//           {title}



//         </h3>



//         <p className="text-gray-600 text-[16px] sm:text-sm">{description}</p>



//       </div>



//     </div>



//   </div>



// );







// function Cstdmain() {



//   const [activeIndustry, setActiveIndustry] = useState(industries[0].id);







//   return (



//     <div className="font-manrope px-4 md:px-10 lg:px-20 xl:px-40">



//       <h2 className="text-bloo text-xs font-extrabold uppercase tracking-[0.12em] text-center py-2">
//         Case Studies



//       </h2>



//       <h1 className="text-blackk  fontweight_1 text-center text-[32px] sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-8">



//         Explore how we digitally transformed other businesses



//       </h1>



//       <main className=" mx-auto max-w-7xl">



//         <nav className="mb-8 sm:mb-12">



//           <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">



//             {industries.map((industry) => (



//               <li key={industry.id}>



//                 <button



//                   onClick={() => setActiveIndustry(industry.id)}



//                   className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${



//                     activeIndustry === industry.id



//                       ? "bg-blue-900 text-white"



//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"



//                   }`}



//                 >



//                   {industry.name}



//                 </button>



//               </li>



//             ))}



//           </ul>



//         </nav>







//         {industries.map((industry) => (



//           <section



//             key={industry.id}



//             className={`mb-12 px-2p ${



//               activeIndustry === industry.id ? "block" : "hidden"



//             }`}



//           >



//             <h2 className="text-[24px] px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">



//               {industry.name}



//             </h2>



//             <div className="flex flex-wrap -mx-2">



//               {projects[industry.id].map((project, index) => (



//                 <CaseStudy



//                   key={index}



//                   title={project.title}



//                   description={project.description}



//                   image={project.img}



//                  __w={project.__w} __h={project.__h}/>



//               ))}



//             </div>



//           </section>



//         ))}



//       </main>



//     </div>



//   );



// }







const services = [



  {



    id: "ehr",



    name: "Case Management Systems",



    image: cms,



    description:



      "Designing and implementing systems to streamline case workflows, manage documents, and track deadlines efficiently.",



  __w: 1280, __h: 853},







  {



    id: "telemedicine",



    name: "Legal Document Automation",



    image: lda,



    description:



      "Automating document creation and management to reduce errors, save time, and improve legal document processes",



  __w: 1536, __h: 864},







  {



    id: "analytics",



    name: "E-Discovery Solutions ",



    image: eds,



    description:



      "Developing e-discovery tools for efficient data collection, analysis, and review, ensuring legal compliance and effectiveness. ",



  __w: 2048, __h: 1365},







  {



    id: "integration",



    name: "Compliance Management Software ",



    image: cmsoft,



    description:



      "Providing solutions for managing regulatory requirements, tracking compliance tasks, and meeting legal obligations across jurisdictions.",



  __w: 960, __h: 640},







  {



    id: "mobility",



    name: "Legal Research and Analytics ",



    image: lras,



    description:



      "Offering tools for advanced legal research, data analysis, and case law exploration to support informed legal decisions. ",



  __w: 1200, __h: 800},







  {



    id: "mobilityy",



    name: "Legal Billing and Accounting Solutions  ",



    image: lbaas,



    description:



      "Creating software for accurate time tracking, invoicing, expense management, and financial reporting for legal practices. ",



  __w: 1000, __h: 667},



];







function Legal() {



  const [activeService, setActiveService] = useState(services[0].id);



  const sliderRefs = useRef({});







  return (



    <div className="overflow-x-hidden">



      <div className="max-w-7xl mx-auto px-3 xl:px-4">



        <div className="sm:max-w-7xl pt-14 pb-4 w-full mx-auto grid">



          {/* Desktop: full image */}
          <img
            src={legal_img}
            alt="Legal technology and legaltech solutions"
            className="hidden sm:block object-cover w-full px-2"
           width="1098" height="207" />
          {/* Mobile: show only left portion */}
          <div className="sm:hidden overflow-hidden w-full">
            <img
              src={legal_img}
              alt="Legal technology and legaltech solutions"
              className="w-[300%] max-w-none"
             width="1098" height="207" />
          </div>



          {/* <img src={healthrect2} alt=""  width="354" height="207" />



          <img src={healthrect3} alt=""  width="354" height="207" /> */}



        </div>



        <div className="max-w-7xl mx-auto flex flex-col gap-4 pb-10">



          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            Innovative{" "}



            <span className="text-bloo">Legal Software Solutions?</span> for a



            Modern Legal Practice



          </h1>



          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            At EICE Technology, we recognize that the legal industry is evolving



            rapidly, and technology is at the forefront of this transformation.



            Our specialized legal software solutions are designed to streamline



            legal processes, enhance case management, and ensure compliance with



            legal standards. We provide comprehensive services tailored to the



            unique needs of law firms, legal departments, and legal



            professionals, helping you stay ahead in a competitive landscape.



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
                  }`}



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



            Elevate Your Legal Practice with Our Expert Software Solutions



          </h2>



        </div>



        <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto pt-8 pb-10">



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <GrAnalytics size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Comprehensive Requirements Analysis



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We conduct detailed analysis to understand your legal practices



                needs, ensuring that our software solutions are tailored to



                address specific challenges and improve operational efficiency



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <MdArchitecture size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Innovative Design and Prototyping



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Our team creates user-friendly interfaces and develops



                prototypes for legal software solutions, incorporating feedback



                to refine features and ensure they meet the demands of legal



                professionals..



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <GrIntegration size={44} className="text-bloo" />


            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Advanced Software Development and Integration



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We build robust, scalable legal software solutions with a focus



                on functionality, security, and seamless integration with



                existing systems for effective legal practice management.?



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <MdCheckBox size={44} className="text-bloo" />


            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Rigorous Testing and Quality Assurance



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We perform thorough testing and quality assurance to ensure that



                our legal software solutions meet high standards of performance,



                security, and compliance before deployment.



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <AiOutlineDeploymentUnit size={44} className="text-bloo" />


            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Seamless Deployment and Implementation



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Our team manages the deployment of legal software solutions,



                providing training and support for a smooth transition and



                ensuring that users can effectively adopt and utilize the new



                systems.{" "}



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <BiSupport size={44} className="text-bloo" />


            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Ongoing Maintenance and Support



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We offer continuous maintenance and support services, including



                updates, bug fixes, and performance improvements to keep your



                legal software solutions up-to-date and responsive to evolving



                needs.?{" "}



              </p>



            </div>



          </div>



        </div>



      </div>



      {/* <Cstdmain /> */}



      <TalkToUs />



      {/* <Footer /> */}



      <ProductFooter/>






    </div>



  );



}







export default Legal;







