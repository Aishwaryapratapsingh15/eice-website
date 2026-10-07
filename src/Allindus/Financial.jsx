"use client";



import React, { useState, useRef } from "react";



import Footer from "../Othercomps/Footer";






import TalkToUs from "../Othercomps/Talktous";





import Clients from "../Homecomps/Clients";



import Clientele from "../Homecomps/Clientele";







import ProductFooter from "@/Product/ProductFooter";







import { FaCloud, FaDatabase } from "react-icons/fa";







const financial_img = "https://d3r43jacxrwsrp.cloudfront.net/industry-images/Financial Services.png";







const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";



const random1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random1.jpg";



const random2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random2.jpg";



const random3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random3.jpg";



const random4 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random4.jpg";



const random5 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random5.jpg";



const random6 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random6.jpg";



import { FaMagnifyingGlass } from "react-icons/fa6";



import { FcCollaboration } from "react-icons/fc";



import { GiSecurityGate, GiTalk } from "react-icons/gi";



import { PiMathOperations } from "react-icons/pi";



import { MdManageAccounts, MdSecurity } from "react-icons/md";







// images







const biaa = "https://d3r43jacxrwsrp.cloudfront.net/Financial/biaa.jpeg";



const carr = "https://d3r43jacxrwsrp.cloudfront.net/Financial/carr.jpeg";



const crms = "https://d3r43jacxrwsrp.cloudfront.net/Financial/crms.jpg";



const dbs = "https://d3r43jacxrwsrp.cloudfront.net/Financial/dbs.png";



const fms = "https://d3r43jacxrwsrp.cloudfront.net/Financial/fms.jpg";











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



    name: "Financial Management Systems",



    image: fms,



    description:



      "Developing robust systems for financial planning, budgeting, and detailed reporting, empowering institutions to manage their finances effectively.",



  __w: 2560, __h: 1705},







  {



    id: "telemedicine",



    name: "Client Relationship Management (CRM) Solutions",



    image: crms,



    description:



      "Creating CRM platforms to optimize client interactions, streamline sales processes, and enhance service delivery, ensuring personalized and responsive client engagement",



  __w: 1196, __h: 876},







  {



    id: "analytics",



    name: "Business Intelligence and Analytics",



    image: biaa,



    description:



      "Providing advanced analytics tools for evaluating financial performance, generating reports, and supporting data-driven decisions for financial professionals and executives.",



  __w: 1200, __h: 469},







  {



    id: "integration",



    name: "Compliance and Regulatory Reporting",



    image: carr,



    description:



      "Building solutions to ensure compliance with regulatory requirements, simplifying complex compliance processes and enhancing transparency in reporting.",



  __w: 769, __h: 445},







  {



    id: "mobility",



    name: "Digital Banking Solutions",



    image: dbs,



    description:



      "Develop secure and user-friendly digital banking platforms that enhance customer experience, offering seamless transactions and personalized financial services",



  __w: 1000, __h: 700},



];







function Legal() {



  const [activeService, setActiveService] = useState(services[0].id);



  const sliderRefs = useRef({});







  return (
    <>



    <div className="overflow-x-hidden">



      <div className="px-4 md:px-10 lg:px-20 xl:px-40">



        <div className="sm:max-w-7xl pt-14 pb-4 w-full mx-auto grid">



          {/* Desktop: full image */}
          <img
            src={financial_img}
            alt="Financial services technology solutions"
            className="hidden sm:block object-cover w-full px-2"
           width="1098" height="207" />
          {/* Mobile: show only left portion */}
          <div className="sm:hidden overflow-hidden w-full">
            <img
              src={financial_img}
              alt="Financial services technology solutions"
              className="w-[300%] max-w-none"
             width="1098" height="207" />
          </div>



          {/* <img src={healthrect2} alt="" />



          <img src={healthrect3} alt="" /> */}



        </div>



        <div className="max-w-7xl mx-auto flex flex-col gap-4 pb-10">



          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            Revolutionizing{" "}



            <span className="text-bloo">Financial Services?</span> Through



            Advanced Technology Solutions



          </h1>



          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">



            EICE Technology, we specialize in transforming financial services



            through innovative technology solutions. Our mission is to deliver



            cutting-edge software solutions that enhance operational efficiency,



            streamline financial processes, and support professionals in



            delivering exceptional services to their clients. We cater to



            various sectors within the financial industry, ensuring compliance



            with stringent regulatory frameworks



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



            Transform Your Financial Operations with Our Tailored Software



            Solutions



          </h2>



        </div>



        <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto pt-8 pb-10">



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <GiTalk size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Enhanced Team Collaboration



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                We enable seamless communication among financial advisors,



                clients, and support teams with integrated tools and shared



                insights, fostering effective collaboration for exceptional



                client service.{" "}



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <MdManageAccounts size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Efficient Operations Management



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Our software solutions automate and streamline operational tasks



                in financial institutions, including client onboarding, KYC



                procedures, compliance checks, and regulatory reporting for



                enhanced efficiency and compliance..



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <MdSecurity size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Secure and Scalable Infrastructure



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Security and scalability are critical in finance. We ensure



                robust measures like data encryption, strict access controls,



                and compliance with regulations for protecting financial data



                and enabling growth.{" "}



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







