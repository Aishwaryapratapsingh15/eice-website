"use client";

/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
const productBgImage = "https://d3r43jacxrwsrp.cloudfront.net/product-carousel/products-background.png";
import { useNavigate } from "/src/nextNavigation";

export default function ProductCarousel({ slides = [] }) {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const navigate = useNavigate();

  const touchStartX = useRef(null);

  const goToPrev = () => setCurrent((prev) => prev - 1);
  const goToNext = () => setCurrent((prev) => prev + 1);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

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

  // handle seamless loop
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 1000);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 1000);
    }

    setTimeout(() => setTransition(true), 50);
  }, [current]);

  if (!slides.length) {
    return <div className="text-center py-20">No products available</div>;
  }

  const liveIndex = Math.max(0, current - 1) % slides.length;
  const liveSlide = slides[liveIndex];

  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${productBgImage})` }}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Product showcase — swipe or use arrow keys to navigate"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Product {liveIndex + 1} of {slides.length}: {liveSlide?.title}
      </div>

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
                      alt={slide.title ? `${slide.title} product screenshot` : ""}
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
                          <span className="text-gray-700 text-3xl" aria-hidden="true">•</span>
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
        <div className="flex justify-center mt-8 md:mt-10 gap-2 sm:gap-3" role="tablist" aria-label="Product slides">
          {slides.map((slide, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={current - 1 === i}
              aria-label={`Go to ${slide.title}`}
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
