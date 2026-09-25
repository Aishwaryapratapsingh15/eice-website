"use client";
import React, { useRef, useState } from "react";
import { Link } from "@/nextNavigation";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { defaultServices, moreServices } from "./servicesData";

function ServiceCard({ svg, title, link, desc }) {
  return (
    <Link href={link} className="w-full block pb-2">
      <div className="px-0 lg:px-0 w-full">
        <div className="p-2 sm:p-5 min-h-[200px] lg:min-h-[300px] flex flex-col sm:flex-row items-start gap-1 sm:gap-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-gray-200">
          <div className="w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0">
            <div className="rounded-full bg-bloo/5 w-full h-full flex items-center justify-center">
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
                alt=""
                className="object-contain w-3/4 h-3/4 scale-[.85]"
                width="12"
                height="12"
              />
            </div>
          </div>
          <div className="col-span-4 sm:ml-4">
            <h3 className="text-blackk fontweight_1 text-[24px] sm:text-2xl pt-1 pb-1">{title}</h3>
            <p className="font-medium text-blackk/70 text-[16px] sm:text-xl">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);

  return (
    <div className="pb-4 sm:pb-10">
      <div className="text-manrope px-4 md:px-10 lg:px-20 xl:px-40 py-2 sm:py-2 max-w-7xl mx-auto">
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
          {defaultServices.map((s) => (
            <ServiceCard key={s.id} svg={s.svg} title={s.title} link={s.link} desc={s.desc} />
          ))}
        </div>
      </div>

      {showAll && (
        <div className="text-manrope px-4 md:px-10 lg:px-20 xl:px-40 py-2 sm:py-2 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
            {moreServices.map((s) => (
              <ServiceCard key={s.id} svg={s.svg} title={s.title} link={s.link} desc={s.desc} />
            ))}
          </div>
        </div>
      )}

      {!showAll && (
        <div className="flex justify-center pt-6">
          <button
            aria-label="view more"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 py-3 px-6 border-2 border-blue-900 text-blue-900 font-semibold rounded-md hover:bg-blue-900 hover:text-white transition duration-200"
          >
            View More <IoIosArrowDown />
          </button>
        </div>
      )}

      {showAll && (
        <div className="flex justify-center pt-6">
          <button
            aria-label="view less"
            onClick={() => {
              setShowAll(false);
              gridRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 py-3 px-6 border-2 border-blue-900 text-blue-900 font-semibold rounded-md hover:bg-blue-900 hover:text-white transition duration-200"
          >
            View less <MdKeyboardArrowUp />
          </button>
        </div>
      )}
    </div>
  );
}
