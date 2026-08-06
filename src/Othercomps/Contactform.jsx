"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "@/nextNavigation";
import Cookies from "js-cookie";
const emailIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Email.svg";
const whatsappIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Whatsapp.svg";
const phoneIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Phone.svg";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [otpbox, setotpbox] = useState(false)
  const [otp, setotp] = useState("")
  const [activeButton, setActiveButton] = useState(false)
  const [product, setProduct] = useState("")

  useEffect(() => {
    setProduct(new URLSearchParams(window.location.search).get("product") || "")
  }, [])

  const handleInputChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const sendOtp = async (e) => {
    setActiveButton(true)
    e.preventDefault();

    try {
      let response = await axios.post("/api/otp", { email: formValues.email })
      if (response.data.status == 200) {
        Cookies.set("email", formValues.email, { expires: 1 })
        Cookies.set("contact", formValues.contact, { expires: 1 })
        Cookies.set("name", formValues.name, { expires: 1 })
        Cookies.set("message", formValues.message, { expires: 1 })
        Cookies.set("product", product, { expires: 1 })
        setotpbox(true)
        alert("Please enter otp for final Submission")
        setActiveButton(false)
      } else {
        alert("something went wrong , Please try again later")
        setActiveButton(false)
      }
    } catch (error) {
      console.log(error)
      alert("something went wrong , Please try again later")
      setActiveButton(false)
    }

  };


  const changeEmail = async (e) => {
    setActiveButton(true)
    e.preventDefault()
    try {
      const response = await axios.post("/api/change-email", { email: Cookies.get("email") })
      console.log(response.data)
      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      Cookies.remove("product")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setActiveButton(false)

    } catch (error) {
      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      Cookies.remove("product")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setActiveButton(false)

    }

  }

  const submitOtp = async (e) => {

    setActiveButton(true)
    e.preventDefault()
    try {
      let postdata = {

        otp: otp,

        name: Cookies.get("name"),
        email: Cookies.get("email"),
        contact: Cookies.get("contact"),
        message: Cookies.get("message"),
        product: Cookies.get("product"),

      }


      let response = await axios.post("/api/submit", postdata)
      console.log(response.data)

      if (response.data.status != 200) {
        alert("wrong otp")
        setActiveButton(false)
        return

      }


      if (response.data.status == 200) {
        alert("message sent successful")
        Cookies.remove("email")
        Cookies.remove("contact")
        Cookies.remove("name")
        Cookies.remove("message")
        Cookies.remove("product")
        setotpbox(false)
        setFormValues({ name: "", email: "", contact: "", message: "" })
        setotp("")
        setActiveButton(false)
      }

      else {
        alert("something weent wrong")
        setActiveButton(false)

      }


    } catch (error) {

      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      Cookies.remove("product")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setotp("")
      setActiveButton(false)

    }

  }

  const onpagerefresh = () => {

    if (Cookies.get("name") && Cookies.get("email") && Cookies.get("contact") && Cookies.get("message")) {
      let name = Cookies.get("name")
      let email = Cookies.get("email")
      let contact = Cookies.get("contact")
      let message = Cookies.get("message")
      setFormValues({ name, email, contact, message })
      setotpbox(true)
    }

  }

  useEffect(() => {
    onpagerefresh()
  }, [])

  return (
    <div className="font-manrope max-w-7xl mx-auto px-4  pt-28 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-[#012060] mb-6">Contact Us</h2>
          <form onSubmit={sendOtp} className="space-y-4">


            <div className="flex flex-col gap-1">
              <label htmlFor="cf-name" className="text-sm font-medium text-gray-700">Name <span aria-hidden="true">*</span></label>
              <input
                id="cf-name"
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="cf-email" className="text-sm font-medium text-gray-700">Email <span aria-hidden="true">*</span></label>
              <input
                id="cf-email"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="cf-contact" className="text-sm font-medium text-gray-700">Phone Number <span aria-hidden="true">*</span></label>
              <input
                id="cf-contact"
                type="tel"
                name="contact"
                maxLength="10"
                pattern="[0-9]{10}"
                value={formValues.contact}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="cf-message" className="text-sm font-medium text-gray-700">Message <span aria-hidden="true">*</span></label>
              <textarea
                id="cf-message"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo resize-none"
                required
              ></textarea>
            </div>

            {!otpbox && (<button
              type="submit"
              className="w-full bg-[#012060] text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
              disabled={activeButton}>
              Submit
            </button>)}



          </form>

          <form className="space-y-4">

            {otpbox && (<>

              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                style={{ color: "blue" }}
              >
                An OTP has been successfully sent to your email address: {formValues.email}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cf-otp" className="text-sm font-medium text-gray-700">Enter OTP <span aria-hidden="true">*</span></label>
                <input
                  id="cf-otp"
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  placeholder="Please Enter your OTP"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                  required
                />
              </div>

              <button
                className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
                onClick={submitOtp}
                disabled={activeButton}>
                Submit OTP
              </button>

              <button
                className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
                onClick={changeEmail}
                disabled={activeButton}>
                Change Email Address
              </button>

            </>
            )}
          </form>
        </div>


        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-[#012060] mb-6">
            Addresses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <AddressCard
              country="United States"
              company=""
              address="11011 Richmond Ave, Suite 715, Houston, TX 77042"
              phone=""
            />
            <AddressCard
              country="India"
              company=""
              address="6th floor, Platina Heights, C-24, Sector 62, Noida, Uttar Pradesh 201301"
              phone=""
      
            />
          </div>
                  {/* ------------------- get in touch ----------------------- */}
        <div className="mt-5 pt-6 border-t border-gray-100">
  <h3 className="text-base font-semibold text-[#012060] mb-3">GET IN TOUCH</h3>
  <div className="grid grid-cols-3 gap-2">

    <a href="https://wa.me/919871895200" target="_blank" rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition text-center">
      <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6"  width="24" height="24" />
      <span className="text-xs text-blackk/70 leading-tight">+91-9871895200</span>
    </a>

    <a href="tel:+18322804632"
      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition text-center">
      <img src={phoneIcon} alt="Phone" className="w-6 h-6"  width="24" height="24" />
      <span className="text-xs text-blackk/70 leading-tight">+1 832 280 4632</span>
    </a>

    <a href="mailto:info@eicetechnology.com"
      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition text-center">
      <img src={emailIcon} alt="Email" className="w-6 h-6"  width="24" height="24" />
      <span className="text-xs text-blackk/70 leading-tight break-all">info@eicetechnology.com</span>
    </a>

  </div>
</div>
        </div>

      </div>
    </div>
  );
}

function AddressCard({ country, company, address, phone, email }) {
  return (
    <div className="border-2 border-bloo/40 rounded-lg p-4 h-full flex flex-col justify-between">
      <div>
        <h3 className="fontweight_1 text-blackk  text-lg">{country}</h3>
        <p className="font-medium text-blackk/70  text-lg">{company}</p>
        <p className="font-medium text-blackk/70  text-lg">{address}</p>
        <p className="font-medium text-blackk/70  text-lg">{phone}</p>
      </div>
      {/*       <a href={`mailto:${email}`} className="text-sm text-blue-700 hover:underline">
        {email}
      </a> */}
      <Link
        to={`mailto:${email}`}
        className="text-sm pt-2 text-blue-700 hover:underline"
      >
        {email}
      </Link>
    </div>
  );
}

export default ContactForm;

