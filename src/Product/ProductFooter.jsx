import React from "react";

import { Link } from "/src/nextNavigation";
const indImg = "https://d3r43jacxrwsrp.cloudfront.net/common/India.png";
const usImg = "https://d3r43jacxrwsrp.cloudfront.net/common/USA.png";
const logo = "https://d3r43jacxrwsrp.cloudfront.net/logo.svg";
const cmmiIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceAgent/CMMI.png";
const FbIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/FB.svg";
const linkedinIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/linkedin.svg";
const XIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/X.svg";
const InstaIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Insta.svg";
const whatsappIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Whatsapp.svg";
const phoneIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Phone.svg";
const socialLinks = [
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/EiceTech24",
  },
  {
    name: "Facebook",
    icon: FbIcon,
    url: "https://www.facebook.com/Eicetechnology/",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/company/eice-technology/posts/?feedView=all&viewAsMember=true",
  },
  {
    name: "Instagram",
    icon: InstaIcon,
    url: "https://www.instagram.com/eicetechnology24/?next=%2F",
  },
];

const linkClass =
  "text-white/70 hover:text-white transition-colors duration-200 cursor-pointer";

const headingClass =
  "text-[#01B0F1] text-sm tracking-[3px] mb-6 font-bold";

export default function Footer() {
  return (
    <footer className="bg-[#010A14] text-white">
      <div className="max-w-7xl mx-auto pl-4 pr-8 pt-16 pb-10">

        {/* ================= TOP ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT */}
          <div className="max-w-[560px]">

            {/* LOGO + BADGE */}
            <div className="flex items-center gap-6 mb-6">

              {/* 🔲 LOGO */}
               {/* ✅ EICE LOGO */}
                <img src={logo} alt="EICE" className="h-10 object-contain brightness-0 invert" />
              <div className="w-[1px] h-[40px] bg-white mx-4" />

              {/* DIVIDER */}
              <div className="w-[130px] h-[60px] border border-white/30">
              <img src={cmmiIcon} alt="EICE" className="h-12 object-contain brightness-0 invert" />
              </div>
               
            </div>

            {/* TEXT */}
            <p className="text-white/70 text-[16px] leading-[24px]">
              EICE is a global software services organization offering high-quality
              solutions to businesses. It services the information technology
              requirements of Fortune 1000 companies by utilizing specialized domain
              knowledge, best-of-breed technologies, rapidly deployable proprietary
              frameworks/solutions and flexible engagement models.
            </p>
          </div>

          {/* RIGHT */}
          <div className="ml-auto text-right">
            <p className="text-white text-sm font-bold tracking-[4px] mb-3">
              GET IN TOUCH
            </p>

            <p className="text-white text-2xl font-bold">
              info@eicetechnology.com
            </p>

            <p className="text-white text-lg mt-2 flex items-center justify-end gap-2">
              Phone:  <img src={whatsappIcon} alt="Whatsapp" className="w-4 h-4" /> +91 987 189 5200
            </p>
            <p className="text-white text-lg mt-2 flex items-center justify-end gap-4">
              <img src={phoneIcon} alt="Whatsapp" className="w-4 h-4 invert" /> +1 832 280 4632
            </p>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/30 my-12" />

        {/* ================= LINKS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

          {/* PRODUCTS */}
          <div>
            <h4 className={headingClass}>PRODUCTS<span className="block w-6 h-[2px] bg-[#01B0F1]"></span></h4>
            {/* <ul className="space-y-4 text-[14px]">
              <li className={linkClass}>iSyncDrive</li>
              <li className={linkClass}>iSyncLite</li>
              <li className={linkClass}>EICE Rise</li>
              <li className={linkClass}>Verilock</li>
              <li className={linkClass}>InfraSight</li>
              <li className={linkClass}>Easylogy</li>
            </ul> */}
            <ul className="space-y-4 text-[14px]">
  <li>
    <Link href="/products/isync-drive" className={linkClass}>iSyncDrive</Link>
  </li>
  <li>
    <Link href="/products/isync-lite" className={linkClass}>iSyncLite</Link>
  </li>
  <li>
     <a href="https://rise.eicetechnology.com/" target="" rel="noopener noreferrer" className={linkClass}>EICE Rise</a>
  </li>
  <li>
    <Link href="/products/verilock" className={linkClass}>Verilock</Link>
  </li>
  <li>
    <Link href="/products/infrasight" className={linkClass}>InfraSight</Link>
  </li>
  <li>
    <a href="https://easylogy.eicetechnology.com/" target="" rel= "noopener noreferrer" className={linkClass}> Easylogy</a>
  </li>

</ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className={headingClass}>SERVICES<span className="block w-6 h-[2px] bg-[#01B0F1]"></span></h4>
            <ul className="space-y-4 text-[14px]">
              <li className={linkClass}><Link href="/services/ai-ml">AI / ML</Link></li>
              <li className={linkClass}><Link href="/services/digital-transformation">Digital Transformation</Link></li>
              <li className={linkClass}><Link href="/services/cloud">Cloud Services</Link></li>
              <li className={linkClass}><Link href="/services/devops">DevOps</Link></li>
              <li className={linkClass}><Link href="/services/iot">IoT Solutions</Link></li>
              <li className="text-[#01B0F1] text-md font-bold mt-2 hover:text-[#92ddf9] cursor-pointer">
                 <Link href="/services">ALL SERVICES →</Link>
              </li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className={headingClass}>INDUSTRIES<span className="block w-6 h-[2px] bg-[#01B0F1]"></span></h4>
            <ul className="space-y-4 text-[14px]">
              <li className={linkClass}><Link href="/industries/oil-and-gas">Oil & Gas</Link></li>
              <li className={linkClass}><Link href="/industries/healthcare">Healthcare</Link></li>
              <li className={linkClass}><Link href="/industries/legal">Legal</Link></li>
              <li className={linkClass}><Link href="/industries/education">Education</Link></li>
              <li className="text-[#01B0F1] text-md font-bold mt-2 hover:text-[#92ddf9] cursor-pointer">
                <Link href="/industries">ALL INDUSTRIES →</Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className={headingClass}>COMPANY<span className="block w-6 h-[2px] bg-[#01B0F1]"></span></h4>
            <ul className="space-y-4 text-[14px]">
              <li className={linkClass}><Link href="/about">About Us</Link></li>
              <li className={linkClass}><Link href="/our-team">Our Team</Link></li>
              <li className={linkClass}><Link href="/case-studies">Case Studies</Link></li>
              {/* <li className={linkClass}><a href="https://www.eicetechnology.com/#/Blog">Blog</a></li> */}
              {/* <li className={linkClass}><Link href="/careers">Careers</Link></li> */}
              <li className={linkClass}><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* OFFICES */}
          <div className="col-span-2 md:col-span-1 mx-auto md:mx-0">
            <h4 className={headingClass}>OFFICES<span className="block w-6 h-[2px] bg-[#01B0F1]"></span></h4>

            <div className="space-y-6 text-[14px] text-white/70">

              {/* INDIA */}
              <div className="flex gap-1">
                {/* 🔲 FLAG */}
                 <div className="w-[110px] h-[36px] flex items-center">
    <img
      src={indImg}   // 🔁 your main logo
      alt="EICE"
      className="h-full object-contain"
    />
  </div>
                 
                <div>
                  <p className="text-[#01B0F1] font-bold tracking-[3px]">INDIA</p>
                  <p className="text-white/70">6th floor, Platina Heights, C-24,</p>
                  <p className="text-white/70">Sector 62, Noida, Uttar Pradesh 201301</p>
                </div>
              </div>

              {/* USA */}
              <div className="flex gap-1">
                {/* 🔲 FLAG */}
                 <div className="w-[110px] h-[36px] flex items-center">
    <img
      src={usImg}   // 🔁 your main logo
      alt="EICE"
      className="h-full object-contain"
    />
  </div>
                <div>
                  <p className="text-[#01B0F1] font-bold tracking-[3px]">USA</p>
                  <p className="text-white/70">11011 Richmond Ave, Suite 715,</p>
                  <p className="text-white/70">Houston, TX 77042</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/30 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-white/70 text-[13px]">
            © 2026 EICE Technology Pvt. Ltd. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
         <div className="flex gap-4">

  {socialLinks.map((link, i) => (

    <a
      key={i}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`EICE Technology on ${link.name}`}
    >
      <div
        className="
          w-11 h-11 rounded-xl
          flex items-center justify-center
          bg-white/[0.02]
          border border-white/[0.28]
          transition-all duration-200
          hover:bg-[#01B0F1]
          hover:border-[#01B0F1]
          group
        "
      >
        <img
          src={link.icon}
          alt={link.name}
          className="
            w-5 h-5 object-contain
            opacity-100
            transition-all duration-200
            group-hover:invert
          "
        />
      </div>
    </a>

  ))}

</div>

          {/* LINKS */}
          <div className="flex gap-8 text-white/70 text-[13px]">
            <p className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </p>
            <p className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>




  );
}

