"use client";

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
const productBgImage = "https://d3r43jacxrwsrp.cloudfront.net/product-carousel/products-background.png";
import { useNavigate } from "/src/nextNavigation";

export default function ProductCarousel({ slides = [] }) {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const navigate = useNavigate();

  //  clone slides
  const extendedSlides = [
    slides[slides.length - 1], // last clone
    ...slides,
    slides[0], // first clone
  ];

  //  auto slide
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ handle seamless loop
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 1000); // match duration
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 1000);
    }

    // re-enable transition
    setTimeout(() => setTransition(true), 50);
  }, [current]);

  if (!slides.length) {
    return <div className="text-center py-20">No products available</div>;
  }

  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${productBgImage})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-[34px] font-bold text-[#2f3b4a] mb-8 md:mb-14">
          Our Products
        </h2>

        {/* SLIDER */}
        <div className="overflow-hidden relative">
          <div
            className={`flex ${
              transition
                ? "transition-transform duration-1000 ease-[cubic-bezier(0.05,0.03,0.01,0)]"
                : ""
            }`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                onClick={() => slide?.path && navigate(slide.path)}
                className="min-w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center curser-pointer"
              >
                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                  <div className="w-full max-w-[500px] h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt="product"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                {/* RIGHT TEXT */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#01B0F1] mb-3">
                    {slide.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base md:text-[18px] font-medium text-[#334155] mb-4">
                    {slide.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-2">
                        {tag}
                        {i !== slide.tags.length - 1 && (
                          <span className="text-gray-700 text-3xl">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base md:text-[16px] text-[#64748B] leading-relaxed max-w-[480px]">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 md:mt-10 gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`w-3 h-3 rounded-full ${
                current - 1 === i ? "bg-[#1f3b82]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}