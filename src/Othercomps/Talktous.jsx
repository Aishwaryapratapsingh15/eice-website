import React from "react";
import { Link } from "@/nextNavigation";

function Talktous({ product }) {
  const href = product
    ? `/contact?product=${encodeURIComponent(product)}`
    : "/contact";

  return (
    <div className="bg-talkbanner bg-no-repeat bg-cover bg-center w-full">
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 items-center text-left">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left max-w-3xl">
            Our strength lies in delivering innovative,{" "}
            <span className="text-bloo">Industry-Specific Solutions</span>.
            Partner with EICE to transform your business and achieve{" "}
            <span>Exceptional Results</span>.
          </h2>
          <div className="flex">
            <Link href={href} className="h-full">
              <button className="bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] transition text-[18px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talktous;
