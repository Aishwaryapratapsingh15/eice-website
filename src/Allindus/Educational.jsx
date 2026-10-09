"use client";



import React, { useState, useRef } from "react";



import Footer from "../Othercomps/Footer";






import TalkToUs from "../Othercomps/Talktous";





import Clients from "../Homecomps/Clients";



import Clientele from "../Homecomps/Clientele";



import ProductFooter from "@/Product/ProductFooter";



import { FaCloud, FaDatabase, FaPencilRuler } from "react-icons/fa";







const Education_img = "https://d3r43jacxrwsrp.cloudfront.net/industry-images/Education.png";







const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Laptop.png";



const random1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random1.jpg";



const random2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random2.jpg";



const random3 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random3.jpg";



const random4 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random4.jpg";



const random5 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random5.jpg";



const random6 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/random6.jpg";



import { FaMagnifyingGlass, FaScaleBalanced } from "react-icons/fa6";



import { SiStudyverse, SiThunderstore } from "react-icons/si";



import { TbPencilPause } from "react-icons/tb";



import { PiStudent } from "react-icons/pi";



import { RiAdminLine } from "react-icons/ri";



import { GiScales } from "react-icons/gi";



import { MdTextIncrease } from "react-icons/md";



import { GrVirtualMachine } from "react-icons/gr";







// images







const lms = "https://d3r43jacxrwsrp.cloudfront.net/Education/lms.png";



const Preditive = "https://d3r43jacxrwsrp.cloudfront.net/Education/Preditive.png";



const rttar = "https://d3r43jacxrwsrp.cloudfront.net/Education/rttar.png";



const sis = "https://d3r43jacxrwsrp.cloudfront.net/Education/sis.png";



const vcs = "https://d3r43jacxrwsrp.cloudfront.net/Education/vcs.jpg";















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



    name: " Learning Management Systems (LMS)",



    image: lms,



    description:



      "Developing LMS solutions for managing courses, engaging students, and tracking academic performance efficiently.",



  __w: 3750, __h: 1888},







  {



    id: "Student Information Systems (SIS) ",



    name: "Student Information Systems (SIS) ",



    image: sis,



    description:



      "Creating SIS platforms for efficient student data management, academic record keeping, and communication between students, parents, and administrators.",



  __w: 1280, __h: 800},







  {



    id: " Virtual Classroom Solutions ",



    name: "Virtual Classroom Solutions (VMS)",



    image: vcs,



    description:



      "Designing virtual classroom environments for interactive online learning, including real-time discussions and multimedia content delivery. ",



  __w: 1280, __h: 720},







  {



    id: "Academic Analytics and Reporting Tools ",



    name: "Predictive Analytics and Optimization",



    image: Preditive,



    description:



      "Providing analytics tools for evaluating academic performance, generating reports, and supporting data-driven decisions for educators and administrators.",



  __w: 1000, __h: 776},







  {



    id: "Online Assessment and Examination Systems ",



    name: "Real-Time Tracking and Reporting",



    image: rttar,



    description:



      "Building secure online platforms for assessments and exams, ensuring reliable and fair testing methods for students",



  __w: 889, __h: 889},



];







function Logistics() {



  const [activeService, setActiveService] = useState(services[0].id);



  const sliderRefs = useRef({});







  return (
    <>

    <div className="overflow-x-hidden">



      <div className="max-w-7xl mx-auto px-3 xl:px-4">



        <div className="sm:max-w-7xl pt-14 pb-4 w-full mx-auto grid">



          {/* Desktop: full image */}
          <img
            src={Education_img}
            alt="Education technology and e-learning solutions"
            className="hidden sm:block object-cover w-full px-2"
           width="1098" height="207" />
          {/* Mobile: show only left portion */}
          <div className="sm:hidden overflow-hidden w-full">
            <img
              src={Education_img}
              alt="Education technology and e-learning solutions"
              className="w-[300%] max-w-none"
             width="1098" height="207" />
          </div>



          {/* <img src={Education_img} alt=""  width="1098" height="207" />



          <img src={healthrect3} alt="" /> */}



        </div>



        <div className="max-w-7xl mx-auto flex flex-col gap-4 pb-10">



          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            Empowering <span className="text-bloo">Education Through</span>{" "}



            Innovative Technology Solutions



          </h1>



          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center sm:max-w-4xl sm:mx-auto">



            At EICE Technology, we specialize in helping educational



            institutions leverage advanced technology to succeed in the digital



            age. Our mission is to provide innovative software solutions that



            improve learning experiences, streamline educational processes, and



            support educators in delivering high-quality education. We serve a



            range of educational settings, including schools, universities,



            e-learning platforms, and research institutions, all while ensuring



            compliance with data protection regulations such as GDPR.



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



            Elevate Your Educational Success with Our Tailored Software



            Solutions



          </h2>



        </div>



        <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto pt-8 pb-10">



          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaPencilRuler size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Personalized Learning Experiences{" "}



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Customizing educational platforms involves tailoring learning to



                each student's needs, and ensuring engagement through



                personalized instruction, adaptive assessments, and diverse



                content delivery methods.{" "}



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <PiStudent size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Enhanced Classroom Collaboration{" "}



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Enabling seamless communication among students, teachers, and



                parents via intuitive software solutions enhances collaboration



                and educational effectiveness.{" "}



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <RiAdminLine size={44} className="text-bloo" />

            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Efficient Administrative Management{" "}



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Automating administrative tasks like attendance, grading, and



                scheduling streamlines educational operations for improved



                efficiency and organization.{" "}



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <FaMagnifyingGlass size={44} className="text-bloo" />



            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Comprehensive Learning Analytics{" "}



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Providing educators with detailed insights and analytics enables



                tracking of student performance, identifying trends, and



                personalizing teaching strategies for effective learning



                outcomes.{" "}



              </p>



            </div>



          </div>







          <div className="rounded-[18px] border border-[#E6EAF1] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] p-[25px]">



            <div className="rounded-lg flex items-start mb-[19px]">



              <GrVirtualMachine size={44} className="text-bloo" />


            </div>



            <div className="h-full items-start">



              <h3 className="font-general font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-[#373737] whitespace-pre-line mb-[7px]">



                Secure and Scalable Infrastructure{" "}



              </h3>



              <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.6] text-[#64748B]">



                Implementing robust, secure software infrastructure ensures data



                privacy and supports scalable growth for educational



                institutions, fostering a stable and reliable learning



                environment.{" "}



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







export default Logistics;







