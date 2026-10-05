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



const random1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random1.jpg";



const random2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random2.jpg";



const random3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random3.jpg";



const random4 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random4.jpg";



const random5 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random5.jpg";



const random6 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random6.jpg";



import { FaMagnifyingGlass } from "react-icons/fa6";







const digital_img = "https://d3r43jacxrwsrp.cloudfront.net/industry-images/Digital Media.png";



import { CgMediaLive } from "react-icons/cg";



import { TiMediaPlay, TiMediaPlayOutline } from "react-icons/ti";



import { FcPodiumWithAudience } from "react-icons/fc";



import { BsPeople } from "react-icons/bs";











// images







const cms = "https://d3r43jacxrwsrp.cloudfront.net/digitalMedia/CMS.jpeg";



const daai = "https://d3r43jacxrwsrp.cloudfront.net/digitalMedia/daai.jpg";



const drm = "https://d3r43jacxrwsrp.cloudfront.net/digitalMedia/drm.jpg";



const vsad = "https://d3r43jacxrwsrp.cloudfront.net/digitalMedia/vsad.jpg";











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














const services = [



  {



    id: "cms",



    name: "Content Management Systems (CMS)",



    image: cms,



    description:



      "Developing robust systems for content creation, distribution, and management, empowering media companies to effectively manage their digital assets..",



  __w: 720, __h: 516},



  // {



  //   id: "aeo",



  //   name: "Audience Engagement Platforms",



  //   image: random4,



  //   description:



  //     "Creating platforms to optimize audience interactions, personalize content delivery, and enhance user engagement across digital channels, ensuring responsive and impactful audience relationships.",



  // __w: 2494, __h: 3741},



  {



    id: "analytics",



    name: "Data Analytics and Insights",



    image: daai,



    description:



      "Providing advanced analytics tools for evaluating content performance, audience behavior, and market trends, supporting data-driven decisions for media executives and marketers.",



  __w: 1920, __h: 1276},



  // {



  //   id: "adverts",



  //   name: "Advertising and Monetization Solutions",



  //   image: random5,



  //   description:



  //     "Designing tools for ad placement, targeting, and revenue optimization, maximizing advertising effectiveness and monetization opportunities for media organizations..",



  // __w: 6720, __h: 4536},



  {



    id: "streaming",



    name: "Video Streaming and Distribution",



    image: vsad,



    description:



      "Developing secure and scalable video streaming platforms that deliver high-quality content seamlessly, enhancing viewer experience and satisfaction.",



  __w: 1920, __h: 1282},



  {



    id: "drm",



    name: "Digital Rights Management (DRM)",



    image: drm,



    description:



      " Implementing solutions to protect intellectual property rights, manage content licensing, and enforce copyright compliance, ensuring legal and ethical content distribution.",



  __w: 1200, __h: 630},



];







function Digitalmedia() {



  const [activeService, setActiveService] = useState(services[0].id);



  const sliderRefs = useRef({});







  return (
    <>

    <div className="overflow-x-hidden">



      <div className="px-4 md:px-10 lg:px-20 xl:px-40">



        <div className="sm:max-w-7xl pt-4 pb-8 w-full mx-auto grid ">



          {/* Desktop: full image */}
          <img
            src={digital_img}
            alt="Digital media and content technology solutions"
            className="hidden sm:block object-cover w-full px-2"
           width="1098" height="207" />
          {/* Mobile: show only left portion */}
          <div className="sm:hidden overflow-hidden w-full">
            <img
              src={digital_img}
              alt="Digital media and content technology solutions"
              className="w-[300%] max-w-none"
             width="1098" height="207" />
          </div>



          {/* <img src={healthrect2} alt=""  width="354" height="207" />



          <img src={healthrect3} alt=""  width="354" height="207" /> */}



        </div>



        <div className="max-w-7xl mx-auto text-center flex flex-col gap-8 pb-10">



          <h1 className="text-blackk font-genral font-semibold text-center text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">



            Transforming <span className="text-bloo">Media Landscape</span> with



            Innovative Technology Solutions



          </h1>



          <p className="mt-3 font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]  sm:text-center">



            At EICE Technology, we specialize in transforming digital media with



            innovative technology solutions. Our mission is to deliver



            cutting-edge software solutions that enhance operational efficiency,



            streamline media processes, and support professionals in delivering



            exceptional content and experiences to their audiences. We cater to



            various sectors within the digital media industry, ensuring



            compliance with evolving content regulations and user privacy



            concerns.



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



                  } fontPhone_1 `}



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



        <div className="pt-10 sm:max-w-7xl mx-auto text-center">



          <h1 className="font-general font-semibold text-blackk text-left sm:text-center text-[24px] sm:text-[32px] leading-[1.2] max-w-4xl">



            Empowering Digital Media Innovation with Advanced Software Solutions



          </h1>



        </div>



        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto py-8">



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaDatabase size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Content Management Systems (CMS)



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Developing robust CMS platforms for seamless content creation,



                management, and distribution across digital channels.



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaCloud size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Digital Marketing Automation



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Implementing automated tools and strategies for targeted digital



                marketing campaigns, optimizing audience engagement and



                conversion rates.Digital Marketing Automation



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaMagnifyingGlass size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Data Analytics and Insights



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Providing advanced analytics solutions to track audience



                behavior, content performance, and ROI, enabling data-driven



                decision-making.



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <TiMediaPlayOutline size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Interactive Media Solutions



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Creating immersive and interactive digital experiences through



                multimedia content, including videos, animations, and



                interactive applications.



              </p>



            </div>



          </div>



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <BsPeople size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h1 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Audience Engagement Platforms



              </h1>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Developing platforms for real-time audience interaction,



                feedback gathering, and community building, enhancing user



                engagement and brand loyalty.



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







export default Digitalmedia;







