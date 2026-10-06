"use client";
import React, { useRef, useState } from "react";
import { Link } from "@/nextNavigation";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { defaultServices, moreServices } from "./servicesData";

const INITIAL_COUNT = 6;

function ServiceCard({ svg, title, link, desc }) {
  return (
    <Link
      href={link}
      className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start"
    >
      <div className="mb-[19px] w-[44px] h-[44px] flex-shrink-0 rounded-full bg-bloo/5 flex items-center justify-center">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt=""
          className="object-contain w-[28px] h-[28px]"
          width="28"
          height="28"
        />
      </div>
      <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{title}</h3>
      <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{desc}</p>
      <div className="mt-auto pt-[18px]">
        <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
          Explore More
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
        </span>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);
  const allServices = [...defaultServices, ...moreServices];
  const services = showAll ? allServices : allServices.slice(0, INITIAL_COUNT);

  return (
    <div className="text-manrope px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
      <div className="max-w-7xl mx-auto">
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.id} svg={s.svg} title={s.title} link={s.link} desc={s.desc} />
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center pt-8">
            <button
              aria-label="view more"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-[18px] font-semibold"
            >
              View More <IoIosArrowDown />
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center pt-8">
            <button
              aria-label="view less"
              onClick={() => {
                setShowAll(false);
                gridRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-[#012060] px-8 py-3 rounded-md hover:bg-blue-50 transition text-[18px] font-semibold"
            >
              View less <MdKeyboardArrowUp />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
