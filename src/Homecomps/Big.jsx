"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "@/nextNavigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const genai = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/genai.png";
const devops = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/devops.png";
const digitrans = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/digitrans.png";


function Big() {
  const slides = [
    {
      content: (
        <div className=" mx-auto px-5 sm:px-12 lg:px-0 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 items-center">
            <div className="flex flex-col space-y-2 sm:space-y-4 ">
              <h1 className="text-blackk fontsize_6 font-semibold leading-tight lg:leading-[3.7rem]">
                Unlock Creativity with{" "}
                <span className="text-bloo">Generative AI</span>
                {/* Transforming your Business through */}
                {/* <span className="text-bloo font-semibold block mt-2">Generative AI</span> */}
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-lg">
                As a focused AI development company, we leverage models like
                GANs and GPT-3. Our expertise transforms data into innovative
                solutions, enhancing business capabilities and driving
                technological advancements.
              </p>
              <div className="flex flex-row sm:flex-row gap-4 ">
                <Link href="/contact">
                  <button aria-label="Let's Connect" className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                    Let's Connect
                  </button>
                </Link>
                <Link href="/services/ai-ml">
                  <button aria-label="Learn More" className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex lg:order-last order-first xl:justify-end justify-center mt-2 lg:mt-0">
              <img
                className="w-full max-w-md rounded-lg"
                src={genai}
                alt="Generative AI"
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
        <div className=" mx-auto px-5 sm:px-12 lg:px-0 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 items-center">
            <div className="flex flex-col space-y-2 sm:space-y-4">
              <h1 className="text-blackk fontsize_6 font-semibold leading-tight lg:leading-[3.7rem]">
                {/* Improving your Efficiency with
                              <span className="text-bloo font-semibold block mt-2">DevOps</span> */}
                Accelerate innovation with{" "}
                <span className="text-bloo">DevOps</span>
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-lg">
                As a top DevOps development firm, we specialize in optimizing
                your business's infrastructure and operations. Our customized
                DevOps solutions empower business owners to lead, thrive, and
                innovate in the digital age.
              </p>
              <div className="flex flex-row sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                    Let's Connect
                  </button>
                </Link>
                <Link href="/services/devops">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex lg:order-last order-first xl:justify-end justify-center mt-2 lg:mt-0">
              <img
                className="w-full max-w-md rounded-lg scale-[.8]"
                src={devops}
                alt="DevOps solutions for accelerated innovation"
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
        <div className=" mx-auto px-5 sm:px-12 lg:px-0 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 items-center">
            <div className="flex flex-col space-y-2 sm:space-y-4">
              <h1 className="text-blackk fontsize_6 font-semibold leading-tight lg:leading-[3.7rem]">
                {/* Driving business Growth with
                            <span className="text-bloo font-semibold block mt-2 2xl:text-nowrap text-wrap">Digital Transformation</span> */}
                Transform your Business with{" "}
                <span className="text-bloo">Digital Solutions</span>
              </h1>
              <p className="font-medium text-blackk/70 sm:text-xl text-lg">
                As the digital landscape evolves, businesses need effective
                strategies. We offer tailored digital transformation services,
                using our expertise to drive innovation, enhance efficiency, and
                improve processes and customer experiences.
              </p>
              <div className="flex flex-row sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                    Let's Connect
                  </button>
                </Link>
                <Link href="/services/digital-transformation">
                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex lg:order-last order-first xl:justify-end justify-center mt-2 lg:mt-0">
              <img
                className="w-full max-w-md rounded-lg"
                src={digitrans}
                alt="Digital transformation solutions for business growth"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      ),
    },
    // ... Similar structure for other slides ...
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
      className="relative overflow-hidden font-manrope mt-24 text-blackk pb-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel — swipe or use arrow keys"
    >
      <div  className="  absolute inset-0 bg-bannerbg bg-cover bg-center bg-blend-overlay"></div>
      <div className="relative z-10 ">
        <div className=" mx-auto px-0 sm:px-2 xl:px-8">
          <div className="sm:min-h-[450px] max-w-[1536px] mx-auto">
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

