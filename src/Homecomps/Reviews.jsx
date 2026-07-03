"use client";
import React, { useState, useEffect, useRef } from "react";

function Reviews() {
  const testimonials = [
    {
      quote:
        "The app was created as desired, although a few bugs had made it through the QA team but EICE's communication was great and all issues and bugs were resolved on time.",
      name: "Nathan Foreman",
      title: "IT Professional",
    },
    {
      quote:
        "EICE completed my project on time and correctly. Even when we had multiple contracts ongoing at the same time, EICE ensured that the product was correctly made without fault.",
      name: "AoGe He",
      title: "CEO - Yidian Internet Technology",
    },
    {
      quote:
        "EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication.",
      name: "Weston Argo",
      title: "Owner - Groundwork Systems",
    },
    {
      quote:
        "Great work on digging into an existing project. Understanding the underlying tech and business issues and then fixing it up into something we're proud to have. Good Work!",
      name: "Uzis Rozkalns",
      title: "Delivery lead - HSBC",
    },
  ];

  // Desktop state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mobile carousel state
  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const isPaused = useRef(false);
  const touchStartX = useRef(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= testimonials.length - 2 ? 0 : prev + 2
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Mobile auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (!isPaused.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      const firstCard = el.children[0];
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 16;
        const idx = Math.round(el.scrollLeft / cardWidth) % testimonials.length;
        setMobileIndex(idx < 0 ? 0 : idx);
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isPaused.current = true;
  };

  const handleTouchMove = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const diff = touchStartX.current - e.touches[0].clientX;
    el.scrollLeft += diff;
    touchStartX.current = e.touches[0].clientX;
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft -= el.scrollWidth / 2;
    } else if (el.scrollLeft < 0) {
      el.scrollLeft += el.scrollWidth / 2;
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isPaused.current = false;
    }, 800);
  };

  return (
    <div className="bg-white relative text-blackk py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-0">
        <h1 className="text-left text-bloo fontweight_1 text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] py-1">
          We Made Them Happy
        </h1>
        <h2 className="text-blackk/70 font-semibold text-start fontsize_2  py-2 pb-4">
          Trusted by Over{" "}
          <span className="fontweight_1 text-blackk">60+ Companies</span> in the{" "}
          <span className="fontweight_1 text-blackk">Past Decade</span>. Join Our
          Success Story!
        </h2>

        {/* Mobile: horizontal auto-scroll carousel with touch drag */}
        <div
          ref={scrollRef}
          className="sm:hidden flex overflow-hidden gap-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[82vw] bg-white p-6 rounded-lg shadow-md"
            >
              <p className="font-semibold italic text-lg mb-6">
                "{t.quote}"
              </p>
              <div className="font-semibold">
                <p className="fontweight_1 text-xl mb-1">{t.name}</p>
                <p className="text-bloo italic">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile dots: 4 */}
        <div className="sm:hidden flex justify-center pt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`${
                mobileIndex === index
                  ? "px-3 py-1 rounded-xl bg-blue-900"
                  : "px-3 py-1 rounded-xl bg-bloo/30"
              }`}
            />
          ))}
        </div>

        {/* Desktop: existing 2-card layout unchanged */}
        <div className="hidden sm:block relative">
          <div className="flex md:flex-row gap-8 sm:h-full">
            {[currentIndex, currentIndex + 1].map((index) => (
              <div
                key={index}
                className="flex-1 items-center justify-center lg:h-64 bg-white p-6 rounded-lg shadow-md"
              >
                <p className="font-semibold italic text-lg mb-6">
                  "{testimonials[index].quote}"
                </p>
                <div className="font-semibold">
                  <p className="fontweight_1 text-xl mb-1">
                    {testimonials[index].name}
                  </p>
                  <p className="text-bloo italic">
                    {testimonials[index].title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop dots: 2 unchanged */}
        <div className="hidden sm:flex justify-center cursor-pointer pt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
            (_, index) => (
              <div
                key={index}
                className={`${
                  currentIndex === index * 2
                    ? "px-3 py-1 rounded-xl bg-blue-900"
                    : "px-3 py-1 rounded-xl bg-bloo/30"
                }`}
                onClick={() => setCurrentIndex(index * 2)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
