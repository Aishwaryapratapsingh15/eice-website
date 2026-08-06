import React from "react";
import { NavLink, Link } from "@/nextNavigation";

function Talktous({ product }) {
  const href = product
    ? `/products/eicerise/form?product=${encodeURIComponent(product)}`
    : "/contact";

  return (
    <div className="bg-talkbanner bg-no-repeat bg-cover bg-center w-full">
      <div className="flex items-center justify-center pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-12 gap-4 grid-cols-1 justify-center items-center text-left">
          <h1 className="col-span-full max-w-3xl text-blackk lg:text-left text-left fontweight_1 fontsize_2 w-full pt-4">
            Our strength lies in delivering innovative,{" "}
            <span className="text-bloo">Industry-Specific Solutions</span>.
            Partner with EICE to transform your business and achieve{" "}
            <span className="">Exceptional Results</span>.
          </h1>
          <div className="flex lg:pt-0 pt-4">
            <Link href={href} className="h-full">
              <button className=" text-nowrap p-4   rounded-md  font-semibold transition duration-200 border-2 border-blue-900 hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-base sm:text-lg lg:text-xl">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talktous;
