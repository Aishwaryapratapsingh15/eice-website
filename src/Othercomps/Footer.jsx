"use client";
import React, { useState } from "react";
const x = "https://d3r43jacxrwsrp.cloudfront.net/x.svg";
const linkedin = "https://d3r43jacxrwsrp.cloudfront.net/linkedin.svg";
const fb = "https://d3r43jacxrwsrp.cloudfront.net/fb.svg";
const logo = "https://d3r43jacxrwsrp.cloudfront.net/logo.svg";
const insta = "https://d3r43jacxrwsrp.cloudfront.net/insta.svg";

const iso = "https://d3r43jacxrwsrp.cloudfront.net/iso4.jpg";
const isms = "https://d3r43jacxrwsrp.cloudfront.net/isms.jpg";
const cmi = "https://d3r43jacxrwsrp.cloudfront.net/cmi3.png";

import { NavLink, Link } from "/src/nextNavigation";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  const [email, setemail] = useState("");

  const putdetail = (e) => {
    setemail(e.target.value);
  };

  const printvalue = async () => {
    // let a = await fetch(
    //   "https://eice-website.onrender.com/v1/newsletter/email",
    //   {
    //     method: "post",
    //     body: JSON.stringify({ email: email }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // a = await a.json();
    // if (a.result === "successful") {
    //   console.log(a.response);
    //   alert(`Subscribed Successfully`);
    // }
    // console.log(a);
  };

  return (
    <div className="mt-12" style={{ background: "rgb(1 , 32 , 96)", }}>
      <footer className=" text-manrope  py-12 px-2 lg:max-w-7xl w-screen mx-auto font-manrope">
        <div className=" mx-auto flex flex-row flex-wrap gap-1 w-full">
          {/* Company Info */}
          <div className="px-3 mt-2 col-span-1 md:col-span-2 lg:col-span-1">

            {/* <div style={{ display: "flex", columnGap: "3rem" }}> */}

              {/* <div> */}
                <Link href="/" className="inline-block mb-2 w-24 md:w-28 lg:w-40">
                  <img style={{ filter: "brightness(0) invert(1)" , width : "100%" }} src={logo} alt="EICE Logo"  />
                </Link>
                <div  className="inline-block mb-2 ml-4  lg:ml-12  w-40  lg:w-60">
                  <img style={{ filter: "brightness(0) invert(1)" , width : "100%" ,  }} src={cmi} alt="EICE Logo"  />
                </div>
              {/* </div> */}


              {/* <div> */}
               
                  {/* <img style={{ width: "13rem", filter: "brightness(0) invert(1)" }} src={cmi} alt="EICE Logo" className="" /> */}
           
              {/* </div> */}


            {/* </div> */}



            <p style={{ color: "white", fontSize: "15px" }} className="pb-6">
              EICE Technology is an outstanding software development company with
              deep domain knowledge, well-designed processes, and technical
              expertise. We have a highly skilled team of software engineers with
              expertise in advanced technologies such as GIS, IoT, Blockchain,
              Cloud, Data Analytics, DevOps and Generative Artificial
              Intelligence. Our mission is to develop innovative and scalable
              digital products and services that drive business transformation and
              differentiate our company from the competition. Our expertise lies
              in Financial Services and Enterprise Services. Our headquarters are
              in Houston, Texas, and we have offices in Noida, India, and Delhi,
              India.
            </p>
            <div className="flex space-x-4">
              {/*             
            <Link
              to={"https://twitter.com/EiceTech24"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={x}
                alt="Twitter"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/eice-technology/posts/?feedView=all&viewAsMember=true"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </Link>


            <Link
              to={"https://www.facebook.com/Eicetechnology/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fb}
                alt="Facebook"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </Link>

            <Link
              to={"https://www.instagram.com/eicetechnology24/?next=%2F"}
              target="_blank"
              rel="noopener noreferrer"
            >

              <img style={{ color: "blue" }}
                src={insta}
                alt="Instagram"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />

            </Link> */}


              <div>
                <Link href={"https://www.linkedin.com/company/eice-technology/posts/?feedView=all&viewAsMember=true"}>
                  <FaLinkedin size={30} className="blueTextGlobalClass" />
                </Link>

              </div>

              <div>
                <Link href={"https://twitter.com/EiceTech24"}>
                  <FaSquareXTwitter size={30} className="blueTextGlobalClass" />
                </Link>

              </div>

              <div>
                <Link href={"https://www.instagram.com/eicetechnology24/?next=%2F"}>
                  {/* <FaInstagram size={30} className="blueTextGlobalClass" /> */}
                  <FaSquareInstagram size={30} className="blueTextGlobalClass" />
                </Link>

              </div>

              <div>
                <Link href={"https://www.facebook.com/Eicetechnology/"}>
                  <FaFacebookSquare size={30} className="blueTextGlobalClass" />
                </Link>

              </div>




            </div>
          </div>

          {/* Company Links */}

          {/* Services Links */}
          {/* <div className="">
      <h3 className="  mb-4">Services</h3>
      <div className="space-y-2 space-x-2 items-center justify-center text-center flex flex-wrap  text-sm">
        <a href="/application-services" className="hover:underline">Application Services</a>
        <a href="/consultancy-services" className="hover:underline">Consultancy Services</a>
  
      </div>
    </div> */}

          <div style={{ color: "white" }} className="flex flex-col text-start">
            <h1 style={{ fontWeight: "600" }} className="px-3 py-1 fontsize_4 ">
              Services and Technologies
            </h1>
            <div className=" fontsize_3 flex flex-row flex-wrap">


              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/digital-transformation"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Digital Transformation
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/ai-ml"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                AI/ML
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/blockchain"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Blockchain
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/iot"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                IOT
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/ui-ux"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                UI/UX Consulting
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/android"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Desktop and Mobile App Development
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/web-development"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Web Development
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/devops"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                DevOps
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/cloud"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Cloud Services
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                to="/services/software-testing"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Software Testing
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                target="_blank"
                to="https://rise.eicetechnology.com/"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                EICE Rise
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                target="_blank"
                to="https://isyncdrive.eicetechnology.com/"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                iSync Drive
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                target="_blank"
                to="https://easylogy.eicetechnology.com/"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                WTMS
              </Link>
              <Link style={{ color: "white", fontSize: "15px" }}
                target="_blank"
                to="https://eicepayroll.eicetechnology.com/"
                className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
              >
                Eice Payroll
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>

            <div className="flex flex-col text-start">
              <h1 style={{ color: "white", fontWeight: "600" }} className="px-3 py-1 fontsize_4  ">Company</h1>
              <div className="flex flex-row flex-wrap">
                <Link style={{ color: "white", fontSize: "15px" }}
                  to="/about"
                  className=" text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
                >
                  About Us
                </Link>

                <Link style={{ color: "white", fontSize: "15px" }}
                  to="/our-team"
                  className=" text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
                >
                  Our Team
                </Link>


                <Link style={{ color: "white", fontSize: "15px" }}
                  to="/resources"
                  className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
                >
                  Resources
                </Link>
                <Link style={{ color: "white", fontSize: "15px" }}
                  to="/contact"
                  className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
                >
                  Contact Us
                </Link>
                <Link style={{ color: "white", fontSize: "15px" }}
                  to="/industries"
                  className="text-blackk/60     hover:text-blackk  hover:underline py-1 px-3"
                >
                  Industries
                </Link>

                {/* <Link
              to="/POS"
              className="text-blackk/60  fontweight_1   hover:text-blackk  hover:underline py-1 px-3"
            >
              POS
            </Link> */}


              </div>

            </div>

            {/* <Link style={{ marginLeft: "35rem" }} to="/" className="inline-block mb-2">
              <img style={{ width: "8rem" }} src={isms} alt="EICE Logo" className="" />
            </Link>

            <Link style={{ marginLeft: "3rem" }} to="/" className="inline-block mb-2">
              <img style={{ width: "8rem"  }} src={iso} alt="EICE Logo" className="" />
            </Link> */}

          </div>

          {/* Newsletter Subscription */}
          {/* <div>
      <h3 className="  mb-4">Subscribe to our Newsletter</h3>
      <div className="flex flex-col gap-4">
      <input 
          type="email" 
          placeholder="your-email@provider.com" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
          onChange={putdetail}
          required
        />
        <button 
          type="submit"
          className="bg-bloo w-1/2 text-white px-6 py-2 rounded-md hover:bg-bloo/80 transition-colors duration-300"
          onClick={printvalue}
        >
          Subscribe
        </button>
      </div>
    </div> */}
        </div>
      </footer>
    </div>

  );
}

export default Footer;
