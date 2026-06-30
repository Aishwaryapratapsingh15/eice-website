"use client";


import React from "react";

import styles from "./Styles/case.module.css"
import { Link } from "@/nextNavigation";
import { useState, useEffect } from "react";


function Casestudies() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 540);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>

      {/* Desktop layout — untouched */}
      {!isMobile && (
        <div className=" font-manrope ">

          <h2 className="text-bloo  text-center fontsize_2 fontweight_1  ">
            Case Study
          </h2>
          <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Explore the journeys behind the successful products we deliver
          </h1>

          <div className={styles.case_box}>

            <Link href={"/industries/healthcare"}>
              <div className={styles.big_img}>
                <div className={styles.heading}>
                  HEALTHCARE
                </div>
                <div className={styles.sub_heading}>
                  Innovative solutions to improve patient care and streamline healthcare operations.
                </div>
              </div>
            </Link>

            <div className={styles.four_img}>

              <div className={styles.upper}>

                <Link href={"/case-studies"}>
                  <div className={styles.upper1}>
                    <div className={styles.right_subheadimg}>
                      Connect Car Platform
                    </div>
                  </div>
                </Link>

                <Link href={"/case-studies"}>
                  <div className={styles.upper2}>
                    <div className={styles.right_subheadimg}>
                      EV Battery Management
                    </div>
                  </div>
                </Link>

              </div>

              <div className={styles.lower}>

                <Link href={"/case-studies/design-sim-borets"}>
                  <div className={styles.lower1}>
                    <div className={styles.right_subheadimg}>
                      OIL And Gas Products
                    </div>
                  </div>
                </Link>

                <Link href={"/case-studies/simu-lift"}>
                  <div className={styles.lower2}>
                    <div className={styles.right_subheadimg}>Simulift</div>
                  </div>
                </Link>

              </div>

            </div>
          </div>

        </div>
      )}

      {/* Mobile layout — new card structure */}
      {isMobile && (
        <div className="font-manrope px-5 py-4">
          <h2 className="text-bloo text-left text-[18px] fontweight_1">Case Study</h2>
          <h1 className="text-blackk fontweight_1 text-left text-[26px] max-w-3xl py-1">
            Explore the journeys behind the successful products we deliver
          </h1>

          <div className="flex flex-col gap-4 mt-6">

            <Link href="/industries/healthcare">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div style={{ backgroundImage: "url('https://d3r43jacxrwsrp.cloudfront.net/home_case_study/bigw.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-44 flex items-end p-4">
                  <span className="text-white font-bold text-sm tracking-widest">HEALTHCARE</span>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-blackk font-bold text-base leading-snug">
                    Innovative solutions to improve patient care and streamline healthcare operations
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/case-studies">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div style={{ backgroundImage: "url('https://d3r43jacxrwsrp.cloudfront.net/home_case_study/upper1w.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-44 flex items-end p-4">
                  <span className="text-white font-bold text-sm tracking-widest">AUTOMOTIVE</span>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-blackk font-bold text-base leading-snug">
                    Connect Car Platform
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/case-studies">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div style={{ backgroundImage: "url('https://d3r43jacxrwsrp.cloudfront.net/home_case_study/upper2w.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-44 flex items-end p-4">
                  <span className="text-white font-bold text-sm tracking-widest">ENERGY</span>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-blackk font-bold text-base leading-snug">
                    EV Battery Management
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/design-sim-borets">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div style={{ backgroundImage: "url('https://d3r43jacxrwsrp.cloudfront.net/home_case_study/lower1w.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-44 flex items-end p-4">
                  <span className="text-white font-bold text-sm tracking-widest">OIL & GAS</span>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-blackk font-bold text-base leading-snug">
                    OIL And Gas Products
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/simu-lift">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div style={{ backgroundImage: "url('https://d3r43jacxrwsrp.cloudfront.net/home_case_study/lower2w.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-44 flex items-end p-4">
                  <span className="text-white font-bold text-sm tracking-widest">TECHNOLOGY</span>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-blackk font-bold text-base leading-snug">
                    Simulift
                  </h3>
                </div>
              </div>
            </Link>

          </div>

          <div className="flex flex-col items-center mt-6 gap-3">
            <Link href="/case-studies" className="w-full border border-blue-900 bg-blue-900 text-white rounded-full py-3 text-center font-semibold text-sm">
              View all case studies →
            </Link>
          </div>
        </div>
      )}

    </>
  );
}

export default Casestudies;
