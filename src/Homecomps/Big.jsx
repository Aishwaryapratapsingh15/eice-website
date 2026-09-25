"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "@/nextNavigation";
import { BsChevronLeft, BsChevronRight, BsStars } from "react-icons/bs";
const hero1image = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/home-hero-image1.png";
const hero2image = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/home-hero-image2.png";
const hero3image = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/home-hero-image3.png";
const haloicon = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/Halo.svg";
  

function Big() {
  const slides = [
    {
      content: (
        <div className=" mx-auto px-5 sm:px-12 lg:px-0 xl:px-12 2xl:px-16 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 items-center">
            <div className="flex flex-col space-y-2 sm:space-y-2 ">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bloo/10 text-bloo text-xs sm:text-sm font-semibold tracking-wide w-fit">
                <BsStars size={14} />
                AI-POWERED ENTERPRISE SOLUTIONS
              </span>
              <h1 className="text-blackk fontsize_6 font-semibold leading-tight">
                Transforming Enterprise Operations with{" "}
                <span className="text-bloo">AI</span>
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-lg">
                Build smarter workflows, uncover predictive insights, and
                automate complex decisions with EICE's AI-powered solutions.
              </p>
              <div className="flex flex-row sm:flex-row gap-4 ">
                <Link href="/contact">
                  <button aria-label="Contact Our Team" className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                    Contact Our Team
                  </button>
                </Link>
                <Link href="/services/ai-ml">
                  <button aria-label="Learn More" className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                    Learn More →
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex lg:order-last order-first justify-center mt-2 lg:mt-0">
              <img
                src={haloicon}
                alt=""
                aria-hidden="true"
                className="animate-spin-slow absolute inset-0 m-auto w-[75%] max-w-lg h-auto -z-10 pointer-events-none select-none"
              />
              <img
                className="relative w-full max-w-md rounded-lg"
                src={hero1image}
                alt="Home Hero Image 1"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className=" mx-auto px-5 sm:px-12 lg:px-0 xl:px-12 2xl:px-16 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 items-center">
            <div className="flex flex-col space-y-2 sm:space-y-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bloo/10 text-bloo text-xs sm:text-sm font-semibold tracking-wide w-fit">
                <BsStars size={14} />
                ENTERPRISE ENGINEERING, DONE RIGHT
              </span>
              <h1 className="text-blackk fontsize_6 font-semibold leading-tight">
                Software <span className="text-bloo">Built to Last</span>,
                Not Just to Ship
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-lg">
                From legacy modernization to custom web, mobile, and SaaS
                platforms — we engineer for what happens after launch,
                backed by CMMI Level 3 and ISO-certified practices.
              </p>
              <div className="flex flex-row sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                    Talk to Our Team
                  </button>
                </Link>
                <Link href="/services">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                    Explore Our Services →
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex lg:order-last order-first justify-center mt-2 lg:mt-0">
              <img
                src={haloicon}
                alt=""
                aria-hidden="true"
                className="animate-spin-slow absolute inset-0 m-auto w-[75%] max-w-lg h-auto -z-10 pointer-events-none select-none"
              />
              <img
                className="relative w-full max-w-md rounded-lg"
                src={hero2image}
                alt="Enterprise engineering and modernization"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className=" mx-auto px-5 sm:px-12 lg:px-0 xl:px-12 2xl:px-16 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 items-center">
            <div className="flex flex-col space-y-2 sm:space-y-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bloo/10 text-bloo text-xs sm:text-sm font-semibold tracking-wide w-fit">
                <BsStars size={14} />
                REAL RESULTS, NOT PROMISES
              </span>
              <h1 className="text-blackk fontsize_6 font-semibold leading-tight">
                <span className="text-bloo">82 Applications.</span> One
                Governance Standard. Zero Guesswork.
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-lg">
                We don't just talk about AI value — we measure it. Our
                AI-Enabled Engineering Excellence Center delivers
                portfolio-wide governance and task-level AI impact tracking
                for a real, currently-operating enterprise client.
              </p>
              <div className="flex flex-row sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                    Talk to Our Team
                  </button>
                </Link>
                <Link href="/services/ai-ml">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                    See How It Works →
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex lg:order-last order-first justify-center mt-2 lg:mt-0">
              <img
                src={haloicon}
                alt=""
                aria-hidden="true"
                className="animate-spin-slow absolute inset-0 m-auto w-[75%] max-w-lg h-auto -z-10 pointer-events-none select-none"
              />
              <img
                className="relative w-full max-w-md rounded-lg"
                src={hero3image}
                alt="Home Hero Image 3"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  });

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative overflow-visible font-manrope pt-[100px] text-blackk pb-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel — swipe or use arrow keys"
    >
      <div  className="  absolute inset-0 bg-bannerbg bg-cover bg-center bg-blend-overlay"></div>
      <div className="relative z-10 ">
        <div className=" mx-auto px-0 sm:px-2 xl:px-8">
          <div className="sm:min-h-[380px] max-w-[1536px] mx-auto">
            <div key={currentIndex} className="px-0 xl:px-12">
              {slides[currentIndex].content}
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-12">
            <div className="flex space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  onClick={() => setCurrentIndex(index)}
                  className={`tap-sm w-6 h-2 rounded-full ${
                    currentIndex === index ? "bg-blue-900" : "bg-bloo/20"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="absolute xl:block hidden top-1/2 left-2 sm:left-4 transform -translate-y-1/2">
            <button aria-label="previous slide"
              onClick={prevSlide}
              className="text-blackk/50 hover:text-blackk"
            >
              <BsChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute xl:block hidden top-1/2 right-2 sm:right-4 transform -translate-y-1/2">
            <button aria-label="next slide"
              onClick={nextSlide}
              className="text-blackk/50 hover:text-blackk"
            >
              <BsChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Big;

