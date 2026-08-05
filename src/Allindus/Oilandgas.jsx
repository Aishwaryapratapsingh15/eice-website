"use client";

import React, { useState, useRef } from "react";

import Footer from "../Othercomps/Footer";

import Copyright from "../Othercomps/Copyright";

import TalkToUs from "../Othercomps/Talktous";

import Reviews from "../Homecomps/Reviews";

import Clients from "../Homecomps/Clients";

import Clientele from "../Homecomps/Clientele";



import { FaCloud, FaDatabase } from "react-icons/fa";



import ProductFooter from "@/Product/ProductFooter";



const oilandgas_img = "https://d3r43jacxrwsrp.cloudfront.net/industry-images/Oil & Gas.png";

const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";

const random1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random1.jpg";

const random2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random2.jpg";

const random3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random3.jpg";

const random4 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random4.jpg";

const random5 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random5.jpg";

const random6 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random6.jpg";

const healthrect1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect1.png";

const healthrect2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect2.png";

const healthrect3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/healthrect3.png";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { GiCheckMark } from "react-icons/gi";

import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

import { BiCheckboxChecked, BiCode, BiSupport } from "react-icons/bi";

import { GrCheckboxSelected, GrIntegration } from "react-icons/gr";

import { LuMonitorDot } from "react-icons/lu";







// images

const eads = "https://d3r43jacxrwsrp.cloudfront.net/oilandgas/eads.jpg";

const amam = "https://d3r43jacxrwsrp.cloudfront.net/oilandgas/amam.jpeg";

const easc = "https://d3r43jacxrwsrp.cloudfront.net/oilandgas/easc.jpg";

const pars = "https://d3r43jacxrwsrp.cloudfront.net/oilandgas/pars.jpg";

const pdam = "https://d3r43jacxrwsrp.cloudfront.net/oilandgas/pdam.jpg";



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

        <h3 className="fontweight_1 text-lg mb-2">{title}</h3>

        <p className="text-gray-600 text-sm">{description}</p>

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

  <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">

    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">

      <img

        src={image?.src || image}

        alt={title}

        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"

      />

      <div className="p-3 md:p-4">

        <h3 className="fontweight_1 text-[24px] sm:text-base md:text-lg mb-1 sm:mb-2">

          {title}

        </h3>

        <p className="text-gray-600 text-[16px] sm:text-sm">{description}</p>

      </div>

    </div>

  </div>

);



function Cstdmain() {

  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);



  return (

    <div className="font-manrope px-5 sm:px-6 lg:px-8">

      <h2 className="text-bloo fontweight_1 text-center text-[22px] sm:text-[25px] py-2">

        Case Studies

      </h2>

      <h1 className="text-blackk  fontweight_1 text-center text-[32px] sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-8">

        Explore how we digitally transformed other businesses

      </h1>

      <main className=" mx-auto max-w-7xl">

        <nav className="mb-8 sm:mb-12">

          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">

            {industries.map((industry) => (

              <li key={industry.id}>

                <button

                  onClick={() => setActiveIndustry(industry.id)}

                  className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${

                    activeIndustry === industry.id

                      ? "bg-blue-900 text-white"

                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"

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

            className={`mb-12 px-2p ${

              activeIndustry === industry.id ? "block" : "hidden"

            }`}

          >

            <h2 className="text-[24px] px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">

              {industry.name}

            </h2>

            <div className="flex flex-wrap -mx-2">

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

    name: "Exploration and Drilling Services",

    image: eads,

    description:

      "Conduct geological surveys and drilling operations to locate and access new oil and gas reserves.",

  __w: 1280, __h: 853},



  {

    id: "telemedicine",

    name: "Production and Refining Services",

    image: pars,

    description:

      "Enable remote consultations and virtual care through secure telemedicine platforms.",

  __w: 2048, __h: 1365},



  {

    id: "analytics",

    name: "Pipeline Design and Management",

    image: pdam,

    description:

      "Design, construct, and maintain pipelines for safe, efficient transportation of oil and gas products.",

  __w: 600, __h: 600},



  {

    id: "integration",

    name: "Environmental and Safety Compliance",

    image: easc,

    description:

      "Ensure adherence to environmental regulations and implement safety measures to protect workers and the environment.",

  __w: 1536, __h: 864},



  {

    id: "mobility",

    name: "Asset Management and Maintenance ",

    image: amam,

    description:

      "Monitor asset performance and perform maintenance to extend the life and reliability of infrastructure.? ",

  __w: 1920, __h: 827},

];



function Oilandgas() {

  const [activeService, setActiveService] = useState(services[0].id);

  const sliderRefs = useRef({});



  return (

    <div className="overflow-x-hidden">

      <div className="sm:max-w-7xl w-full mx-auto px-5 sm:px-0">

        <div className="sm:max-w-7xl pt-4 pb-8 px-0 sm:px-4 w-full mx-auto grid ">

          {/* Desktop: full image */}

          <img

            src={oilandgas_img}

            alt="Oil and gas industry digital solutions"

            className="hidden sm:block object-cover w-full px-2"

           width="1098" height="207" />

          {/* Mobile: show only first panel, 20px margin each side */}

          <div className="sm:hidden overflow-hidden w-full">

            <img

              src={oilandgas_img}

              alt="Oil and gas industry digital solutions"

              className="w-[300%] max-w-none"

             width="1098" height="207" />

          </div>

          {/* <img src={healthrect2} alt=""  width="354" height="207" />

          <img src={healthrect3} alt=""  width="354" height="207" /> */}

        </div>

        <div className="max-w-7xl mx-auto text-center px-0 sm:px-8 flex flex-col gap-4 pb-8">

          <h1 className="text-blackk  fontweight_1 text-center text-[32px] sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl">

            Pioneering <span className="text-bloo">the Future</span> of Oil and

            Gas with State-of-the-Art Solutions

          </h1>

          <p className="font-medium text-blackk/70 text-[16px] sm:text-xl">

            EICE Technology offers specialized software solutions for the oil

            and gas industry, addressing its unique needs. Our solutions include

            reservoir management for optimal resource recovery, drilling

            optimization for efficient operations, and refinery management for

            enhanced process control. We also provide pipeline management for

            safe transportation, environmental compliance for regulatory

            adherence, and asset integrity management for extending

            infrastructure lifespan. Our tools enhance productivity, ensure

            safety, and drive innovation in the sector.

          </p>

        </div>



        <div className="sm:max-w-3xl w-screen mx-auto text-center pb-4">

          <h1 className="text-bloo fontweight_1 text-center text-[22px] sm:text-[25px] pb-4">

            Key Services

          </h1>

          <h1 className="text-blackk  fontweight_1 text-center text-[32px] sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">

            Explore What We Offer

          </h1>

        </div>

        <div className="sm:max-w-7xl w-full mx-auto px-0 sm:px-4 pb-8">

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

                  } fontPhone_1  `}

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

                        <h2 className="text-[24px] sm:text-2xl fontweight_1 mb-2">

                          {service.name}

                        </h2>

                        <p className="font-medium text-white text-[16px] sm:text-xl">

                          {service.description}

                        </p>

                      </div>

                    </div>

                  )

              )}

            </div>

          </div>

        </div>

        <div className="pb-4">

          <h1 className="text-blackk  fontweight_1 text-center text-[32px] sm:text-2xl mx-auto md:text-3xl lg:mb-4 lg:text-[32px] max-w-3xl ">

            Empowering Oil & Gas Operations with Innovative Software Solutions

            for a Sustainable Future

          </h1>

        </div>

        <div className="grid px-0 sm:px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pb-8">

          <div className="group  p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">

            <div className=" rounded-full flex items-start justify-start w-full px-4">

              <MdCheckBox size={48} className="text-bloo" />

            </div>

            <div className=" h-full text-left">

              <h1 className="text-blackk fontweight_1 text-[24px] pt-4 pb-4 sm:text-2xl px-4">

                Needs Assessment and Planning

              </h1>

              <p className="font-medium text-blackk/70 text-[16px] sm:text-xl px-4">

                We start by identifying your unique challenges and requirements

                through a thorough analysis to design software solutions

                tailored for operational efficiency and sustainability.

              </p>

            </div>

          </div>



          <div className="group  p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">

            <div className=" rounded-full  flex items-start justify-start w-full px-4">

              <BiCode size={48} className="text-bloo" />

            </div>

            <div className=" h-full text-left">

              <h1 className="text-blackk fontweight_1 text-[24px] pt-4 pb-4 sm:text-2xl px-4">

                Solution Design and Development

              </h1>

              <p className="font-medium text-blackk/70 text-[16px] sm:text-xl px-4">

                Our experts design and develop cutting-edge software solutions

                that integrate advanced technologies to address your

                exploration, production, and management needs effectively.

              </p>

            </div>

          </div>



          <div className="group p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">

            <div className=" rounded-full  flex items-start justify-start w-full px-4">

              <GrIntegration size={48} className="text-bloo" />

            </div>

            <div className=" h-full text-left">

              <h1 className="text-blackk fontweight_1 text-[24px] pt-4 pb-4 sm:text-2xl px-4">

                Implementation and Integration

              </h1>

              <p className="font-medium text-blackk/70 text-[16px] sm:text-xl px-4">

                We handle the deployment and integration of the software into

                your existing systems, ensuring a smooth transition and seamless

                operations from day one. .

              </p>

            </div>

          </div>



          <div className="group p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">

            <div className=" rounded-full  flex items-start justify-start w-full px-4">

              <GrCheckboxSelected size={48} className="text-bloo" />

            </div>

            <div className=" h-full text-left">

              <h1 className="text-blackk fontweight_1 text-[24px] pt-4 pb-4 sm:text-2xl px-4">

                Testing and Quality Assurance

              </h1>

              <p className="font-medium text-blackk/70 text-[16px] sm:text-xl px-4">

                We conduct extensive testing to ensure our software solutions

                meet all functional requirements, regulatory standards, and

                industry best practices for optimal performance.

              </p>

            </div>

          </div>



          <div className="group p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">

            <div className=" rounded-full  flex items-start justify-start w-full px-4">

              <BiSupport size={48} className="text-bloo" />

            </div>

            <div className=" h-full text-left">

              <h1 className="text-blackk fontweight_1 text-[24px] pt-4 pb-4 sm:text-2xl px-4">

                Training and Support

              </h1>

              <p className="font-medium text-blackk/70 text-[16px] sm:text-xl px-4">

                We provide detailed training for your team and offer continuous

                support to address any issues, ensuring that you maximize the

                benefits of our software solutions

              </p>

            </div>

          </div>



          <div className="group p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">

            <div className=" rounded-full  flex items-start justify-start w-full px-4">

              <LuMonitorDot size={48} className="text-bloo" />

            </div>

            <div className=" h-full text-left">

              <h1 className="text-blackk fontweight_1 text-[24px] pt-4 pb-4 sm:text-2xl px-4">

                {" "}

                Monitoring and Optimization

              </h1>

              <p className="font-medium text-blackk/70 text-[16px] sm:text-xl px-4">

                We continuously monitor the softwares performance, gather

                feedback, and implement updates to optimize efficiency, safety,

                and sustainability in your oil and gas operations

              </p>

            </div>

          </div>

        </div>

      </div>

      <Cstdmain />

      <Reviews />

      <TalkToUs />

      {/* <Footer /> */}

      <ProductFooter/>

      <Copyright />

    </div>

  );

}



export default Oilandgas;



