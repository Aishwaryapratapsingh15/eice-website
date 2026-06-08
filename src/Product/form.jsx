"use client";

import { useEffect, useState } from "react";
import { useLocation } from "/src/nextNavigation";
import ProductFooter from "./ProductFooter";
import successIcon from "../assets/common/success.svg";
import errorIcon from "../assets/common/error.svg";
export default function MicroSite() {
   const location = useLocation(); // ✅ declare first
  const params = new URLSearchParams(location.search);
  const product = params.get("product") || "unknown";
    const [height, setHeight] = useState(800); 
    const [popup, setPopup] = useState({
  show: false,
  type: "", // success | error
  message: ""
});
const showPopup = (type, message) => {
  setPopup({ show: true, type, message });

  setTimeout(() => {
    setPopup({ show: false, type: "", message: "" });
  }, 3000);
};
    useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "SET_HEIGHT") {
        setHeight(event.data.height);
      }

       if (event.data.type === "FORM_STATUS") {
      showPopup(event.data.status, event.data.message);
    }
    };
      

  

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    
    <div className="w-full">
     {popup.show && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }}>
    
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "25px",
      width: "320px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      position: "relative"
    }}>

      {/* Close Button */}
      <span 
        onClick={() => setPopup({ show: false, message: "" })}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        ×
      </span>

      {/* Icon */}
      <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: popup.type === "success" ? "#ffffff" : "#dc3545",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto 15px",
        color: "#fff",
        fontSize: "28px"
      }}>
        <img
    src={popup.type === "success" ? successIcon : errorIcon}
    alt="status"
    style={{ width: "50px", height: "50px" }}
  />
      </div>

      <h1 style={{fontSize: "24px", marginBottom: "10px" }}>
        {popup.type === "success" ? "Success" : "Error"}
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        {popup.message}
      </p>

      <button
        onClick={() => setPopup({ show: false, message: "" })}
        style={{
          background: "#012060",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        OK
      </button>

    </div>
  </div>
)}
      <iframe
        src={`https://rise.eicetechnology.com/form?embed=true&product=${product}`}
        //  src={`http://localhost:5174/form?embed=true&product=${product}`}
        className="w-full border-0"
        // style={{ minHeight: "100vh" }}
        style={{ height: height + 150 }} 
        scrolling="no"
      />
      <ProductFooter/>
    </div>
  );
}
