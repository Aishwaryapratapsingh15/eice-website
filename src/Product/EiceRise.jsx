"use client";
import { useState, useEffect } from "react";
import ProductFooter from "./ProductFooter";
export default function MicroSite() {
    const [height, setHeight] = useState(800); 
    useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "SET_HEIGHT") {
        setHeight(event.data.height);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <div className="w-full">
      {/* <iframe
          src="https://rise.eicetechnology.com/?embed=true"
        // src="http://localhost:5174/?embed=true"
        className="w-full border-0"
        // style={{ minHeight: "100vh" }}
        style={{ height: height + 150}} 
        scrolling="no"
      /> */}
      <ProductFooter/>
    </div>
  );
}