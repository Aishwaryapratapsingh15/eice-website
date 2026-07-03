"use client";
import React, { useState, useEffect } from 'react';
const imgn = "https://d3r43jacxrwsrp.cloudfront.net/photo/logo2n.webp";

// Images for phone
const set1 = "https://d3r43jacxrwsrp.cloudfront.net/clients_phone/img1w.webp";
const set2 = "https://d3r43jacxrwsrp.cloudfront.net/clients_phone/img2w.webp";
const set3 = "https://d3r43jacxrwsrp.cloudfront.net/clients_phone/img3w.webp";

export default function Clients() {
  const images = [set1, set2, set3]; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="font-manrope px-5 sm:px-0 sm:w-[90%] sm:mx-auto" style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h2 className="text-bloo text-left sm:text-center text-[18px] sm:text-[25px] fontweight_1 mb-6">
          Our Clients
        </h2>
        <p className="text-left sm:text-center text-[26px] sm:text-3xl sm:mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 fontweight_1 mb-8">
          Partnering with visionary clients to drive success and innovation
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {width > 1000 ? (
            <img src={imgn} alt="Large screen client logo" width="1200" height="400" />
          ) : (
            <div style={{ width: '100%' }}>
              <div>
                <img
                  src={images[currentIndex]}
                  alt={`Client ${currentIndex + 1}`}
                  style={{ width: '100%', display: 'block' }}
                />
              </div>

              <div className="dots" style={{ textAlign: 'center', marginTop: '10px' }}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    style={{
                      height: '8px',
                      width: '25px',   // Increase width for cylindrical shape
                      margin: '0 5px',
                      backgroundColor: index === currentIndex ? '#1e3a8a' : 'rgb(1 176 241 / 0.3)',
                      display: 'inline-block',
                      borderRadius: '10px',   // Makes it cylindrical
                      cursor: 'pointer'
                    }}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
