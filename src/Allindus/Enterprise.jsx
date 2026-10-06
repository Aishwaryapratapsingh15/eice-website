"use client";



import React, { useState, useRef } from "react";



import Footer from "../Othercomps/Footer";






import TalkToUs from "../Othercomps/Talktous";





import Clients from "../Homecomps/Clients";



import Clientele from "../Homecomps/Clientele";







import ProductFooter from "@/Product/ProductFooter";







import { FaCloud, FaDatabase } from "react-icons/fa";







const Enterprise_img = "https://d3r43jacxrwsrp.cloudfront.net/industry-images/Enterprise.png";







const random1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random1.jpg";



const random2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random2.jpg";



const random3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random3.jpg";



const random4 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random4.jpg";



const random5 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random5.jpg";



const random6 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random6.jpg";







const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";



import { FaMagnifyingGlass } from "react-icons/fa6";



import { TiTime } from "react-icons/ti";



import { GoWorkflow } from "react-icons/go";



import { SiInternetcomputer } from "react-icons/si";



import { GiCircuitry } from "react-icons/gi";



import { PiDrone } from "react-icons/pi";







// images



const crms = "https://d3r43jacxrwsrp.cloudfront.net/Enterprise/crms.jpg";



const erps = "https://d3r43jacxrwsrp.cloudfront.net/Enterprise/erps.jpg";



const hrms = "https://d3r43jacxrwsrp.cloudfront.net/Enterprise/hrms.jpg";



const paao = "https://d3r43jacxrwsrp.cloudfront.net/Enterprise/paao.jpg";



const rtr = "https://d3r43jacxrwsrp.cloudfront.net/Enterprise/rtr.png";











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














const services = [



  {



    id: "ehr",



    name: "Enterprise Resource Planning (ERP) Systems",



    image: erps,



    description:



      "Developing robust ERP systems for end-to-end visibility, inventory management, and business planning, empowering enterprises to optimize their operations effectively.",



  __w: 958, __h: 539},







  {



    id: "telemedicine",



    name: "Customer Relationship Management (CRM) Solutions",



    image: crms,



    description:



      "Creating solutions for managing customer relationships, optimizing sales processes, and ensuring efficient service delivery to enhance customer satisfaction..",



  __w: 1600, __h: 840},







  {



    id: "analytics",



    name: "Human Resources Management Systems (HRMS)",



    image: hrms,



    description:



      "Implementing HRMS platforms for efficient HR operations, including employee tracking, payroll management, and real-time monitoring of HR activities.",



  __w: 1200, __h: 800},







  {



    id: "integration",



    name: "Predictive Analytics and Optimization",



    image: paao,



    description:



      "Providing advanced analytics tools for predictive modeling, demand forecasting, and process optimization, enabling data-driven decision-making to streamline enterprise processes.",



  __w: 2098, __h: 1398},







  {



    id: "mobility",



    name: "Real-Time Tracking and Reporting",



    image: rtr,



    description:



      "Developing platforms for real-time tracking of business activities, coupled with comprehensive reporting capabilities for operational insights and performance evaluation..",



  __w: 1800, __h: 804},



];







function Legal() {



  const [activeService, setActiveService] = useState(services[0].id);



  const sliderRefs = useRef({});







  return (
    <>



    <div className="overflow-x-hidden">



      <div className="px-4 md:px-10 lg:px-20 xl:px-40">



        <div className="sm:max-w-7xl pt-4 pb-8 w-full mx-auto grid ">



          {/* Desktop: full image */}
          <img
            src={Enterprise_img}
            alt="Enterprise technology transformation solutions"
            className="hidden sm:block object-cover w-full px-2"
           width="1098" height="207" />
          {/* Mobile: show only left portion */}
          <div className="sm:hidden overflow-hidden w-full">
            <img
              src={Enterprise_img}
              alt="Enterprise technology transformation solutions"
              className="w-[300%] max-w-none"
             width="1098" height="207" />
          </div>



          {/* <img src={healthrect2} alt="" />



          <img src={healthrect3} alt="" /> */}



        </div>



        <div className="max-w-7xl mx-auto text-center flex flex-col gap-8 pb-10">



          <h1 className="text-blackk font-genral font-semibold text-center text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">



            Transforming <span className="text-bloo">Enterprise</span> with



            <br className="hidden sm:block" />Innovative Technology



          </h1>



          <p className="mt-3 font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]  sm:text-center">



            At EICE Technology, we excel in transforming enterprise operations



            through state-of-the-art technology solutions. Our mission is to



            provide innovative software that significantly boosts operational



            efficiency, streamlines business processes, and supports



            professionals in delivering exceptional services. We serve a wide



            range of sectors within the enterprise industry, ensuring compliance



            with regulatory standards and enhancing transparency across



            operations. Our solutions are designed to address the unique



            challenges of the enterprise sector, driving improvements in



            productivity, accuracy, and overall performance. Through our



            expertise, we enable professionals to achieve their goals and exceed



            client expectations.



          </p>



        </div>







        <div className="sm:max-w-7xl mx-auto text-center py-8">



          <h1 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
            Key Services



          </h1>



          <h2 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] py-1">



            Explore What We Offer



          </h2>



        </div>



        <div className="sm:max-w-7xl w-full mx-auto pb-10">



          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-4 items-center justify-center">



            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4">



              {services.map((service, index) => (



                <button



                  key={service.id}



                  onClick={() => setActiveService(service.id)}



                  className={`${index === services.length - 1 ? "col-span-2 lg:col-span-1" : ""} block w-full text-left px-4 py-4 border border-gray-600/60 rounded-lg ${



                    activeService === service.id



                      ? "bg-blue-900 text-white"



                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"



                  } fontPhone_1`}



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



                        <h2 className="font-general font-semibold text-[20px] mb-2">



                          {service.name}



                        </h2>



                        <p className="font-inter font-normal text-white text-[16px]">



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



          <h1 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] max-w-4xl">



            Driving Enterprise Excellence with Intelligent<br className = "hidden sm:block" /> Software Solutions



          </h1>



        </div>



        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto py-8">



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaDatabase size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Advanced ERP Systems



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Implement robust ERP platforms to streamline inventory



                management, optimize resource utilization, and enhance process



                efficiency through automation and real-time tracking..



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <TiTime size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Real-Time Business Process Management



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Develop intelligent BPM systems that provide real-time tracking,



                dynamic process optimization, and efficient management to ensure



                timely and cost-effective operations.



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaMagnifyingGlass size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Business Visibility and Analytics



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Offer comprehensive business visibility solutions, integrating



                advanced analytics for predictive insights, demand forecasting,



                and improved decision-making across the enterprise network.



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <GoWorkflow size={44} className="text-bloo" />

            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Automated Workflow Solutions



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Create automated workflow systems that accelerate task



                completion, reduce manual errors, and enhance employee



                satisfaction through seamless integration with enterprise



                platforms and ERP systems.



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <PiDrone size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                IoT-Enabled Enterprise Solutions



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Deploy IoT-enabled solutions for real-time monitoring of assets,



                predictive maintenance, and enhanced operational efficiency,



                ensuring the integrity and security of data throughout the



                enterprise..



              </p>



            </div>



          </div>



        </div>



      </div>
      </div>






      <TalkToUs />



      {/* <Footer /> */}



      <ProductFooter />









    </>
  );



}







export default Legal;







