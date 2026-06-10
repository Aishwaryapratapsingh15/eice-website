"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "/src/nextNavigation";
import ProductFooter from "./ProductFooter";
import Copyright from "../Othercomps/Copyright";
import Cookies from "js-cookie";
const successIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/success.svg";
const errorIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/error.svg";

export default function ProductForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get("product") || "General Inquiry";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [otpbox, setOtpbox] = useState(false);
  const [otp, setOtp] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup({ show: false, type: "", message: "" }), 3000);
  };

  useEffect(() => {
    if (popup.show) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [popup.show]);

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setActiveButton(true);
    try {
      const response = await axios.post("/api/otp", {
        email: formValues.email,
      });
      if (response.data.status == 200) {
        Cookies.set("pf_name", formValues.name, { expires: 1 });
        Cookies.set("pf_email", formValues.email, { expires: 1 });
        Cookies.set("pf_contact", formValues.contact, { expires: 1 });
        Cookies.set("pf_message", formValues.message, { expires: 1 });
        Cookies.set("pf_product", product, { expires: 1 });
        setOtpbox(true);
        showPopup("success", "OTP sent to your email address.");
      } else {
        showPopup("error", "Something went wrong. Please try again.");
      }
    } catch {
      showPopup("error", "Something went wrong. Please try again.");
    } finally {
      setActiveButton(false);
    }
  };

  const submitOtp = async (e) => {
    e.preventDefault();
    setActiveButton(true);
    try {
      const response = await axios.post(
        "/api/submit",
        {
          otp,
          name: Cookies.get("pf_name"),
          email: Cookies.get("pf_email"),
          contact: Cookies.get("pf_contact"),
          message: `[Product: ${Cookies.get("pf_product")}] ${Cookies.get("pf_message")}`,
        }
      );
      if (response.data.status == 200) {
        showPopup("success", "Your inquiry has been submitted successfully!");
        clearState();
      } else {
        showPopup("error", "Wrong OTP. Please try again.");
      }
    } catch {
      showPopup("error", "Something went wrong. Please try again.");
      clearState();
    } finally {
      setActiveButton(false);
    }
  };

  const changeEmail = async (e) => {
    e.preventDefault();
    setActiveButton(true);
    try {
      await axios.post("/api/change-email", {
        email: Cookies.get("pf_email"),
      });
    } catch {}
    clearState();
    setActiveButton(false);
  };

  const clearState = () => {
    ["pf_name", "pf_email", "pf_contact", "pf_message", "pf_product"].forEach(
      (k) => Cookies.remove(k)
    );
    setOtpbox(false);
    setFormValues({ name: "", email: "", contact: "", message: "" });
    setOtp("");
  };

  useEffect(() => {
    if (
      Cookies.get("pf_name") &&
      Cookies.get("pf_email") &&
      Cookies.get("pf_contact") &&
      Cookies.get("pf_message")
    ) {
      setFormValues({
        name: Cookies.get("pf_name"),
        email: Cookies.get("pf_email"),
        contact: Cookies.get("pf_contact"),
        message: Cookies.get("pf_message"),
      });
      setOtpbox(true);
    }
  }, []);

  const productLabel = product
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="w-full">
      {popup.show && createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "25px",
              width: "320px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            <span
              onClick={() => setPopup({ show: false, type: "", message: "" })}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ×
            </span>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background:
                  popup.type === "success" ? "#ffffff" : "#dc3545",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 15px",
              }}
            >
              <img
                src={popup.type === "success" ? successIcon : errorIcon}
                alt="status"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {popup.type === "success" ? "Success" : "Error"}
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "20px" }}>
              {popup.message}
            </p>
            <button
              onClick={() => setPopup({ show: false, type: "", message: "" })}
              style={{
                background: "#012060",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              OK
            </button>
          </div>
        </div>,
        document.body
      )}

      <div className="font-manrope max-w-3xl mx-auto px-4 pt-32 pb-20 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <p className="text-sm text-bloo fontweight_1 mb-1 uppercase tracking-wide">
            Product Inquiry
          </p>
          <h1 className="text-2xl fontweight_1 text-[#012060] mb-6">
            {productLabel}
          </h1>

          {!otpbox ? (
            <form onSubmit={sendOtp} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />
              <input
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
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo resize-none"
                required
              />
              <button
                type="submit"
                disabled={activeButton}
                className="w-full bg-[#012060] text-white fontweight_1 py-2 px-4 rounded-md hover:opacity-90 transition duration-300 disabled:opacity-50"
              >
                {activeButton ? "Sending OTP..." : "Submit"}
              </button>
            </form>
          ) : (
            <form onSubmit={submitOtp} className="space-y-4">
              <p className="text-blue-700 text-sm">
                An OTP has been sent to{" "}
                <span className="fontweight_1">{formValues.email}</span>. Please
                enter it below to confirm your submission.
              </p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />
              <button
                type="submit"
                disabled={activeButton}
                className="w-full bg-[#012060] text-white fontweight_1 py-2 px-4 rounded-md hover:opacity-90 transition duration-300 disabled:opacity-50"
              >
                {activeButton ? "Verifying..." : "Verify & Submit"}
              </button>
              <button
                type="button"
                onClick={changeEmail}
                disabled={activeButton}
                className="w-full border border-[#012060] text-[#012060] fontweight_1 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-300 disabled:opacity-50"
              >
                Change Email Address
              </button>
            </form>
          )}
        </div>
      </div>

      <ProductFooter />
      <Copyright />
    </div>
  );
}
