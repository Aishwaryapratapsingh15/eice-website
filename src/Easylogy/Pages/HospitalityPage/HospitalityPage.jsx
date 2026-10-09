"use client";
import styles from "./Hospitality.module.css"
import { Link } from '@/nextNavigation'
import { useState, useEffect } from "react"

const b1 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/Hospitality/benefit/w.jpg";
const b2 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/Hospitality/benefit/w2.jpg";
const b3 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/Hospitality/benefit/w3.jpg";
const b4 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/Hospitality/benefit/w4.jpg";

import FooterLower from "../../Components/Footer/FooterLower"
import { FaArrowRightLong } from "react-icons/fa6";


export default function HospitalityPage() {

const [isEmbed, setIsEmbed] = useState(false);
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  setIsEmbed(params.get("embed") === "true");
}, []);
    
    const feature = [
        {
            id: 1,
            img: b1,
            heading: "Real-Time Tracking",
            desc: "Easylogy enables businesses to monitor fleet movements with live GPS tracking, ensuring accurate location updates and enhanced visibility. This helps in reducing delays, improving delivery accuracy, and providing customers with real-time ETAs, making fleet management more transparent, efficient, and reliable.",
            width: "40%"
        , __w: 1280, __h: 813},

        {
            id: 2,
            img: b2,
            heading: "Automated Driver Updates",
            desc: "Drivers can effortlessly update their trip status, live location, fuel consumption, and upload images directly from the Easylogy mobile app. This ensures seamless communication, reduces manual reporting errors, and provides fleet managers with instant insights into vehicle movements and driver activities for better operational efficiency.",
           width: "40%"

        , __w: 1280, __h: 853},

        {
            id: 3,
            img: b3,
            heading: "Optimized Route Planning ",
            desc: "Easylogy uses intelligent algorithms to suggest the most efficient routes, reducing travel time and fuel consumption. By avoiding traffic congestion and minimizing unnecessary stops, businesses can cut costs, improve delivery schedules, and ensure that goods reach their destination faster and more reliably.",
            width: "40%"
        , __w: 1280, __h: 853},

        {
            id: 4,
            img: b4,
            heading: "Instant Alerts & Notifications",
            desc: "Receive real-time alerts for route deviations, unexpected stops, vehicle breakdowns, or delays. With instant notifications, businesses can take proactive action, communicate with drivers, and make quick adjustments to prevent delivery disruptions and enhance overall supply chain reliability.",
            width: "40%"
        , __w: 1280, __h: 720},

    ]




    return (
        <>


            <section className={styles.section1}>

                <div className={styles.textBox}>
                    <h1 className={`${styles.text1} font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1]`}>
                        Revolutionizing Transportation Tracking with Easylogy Solutions
                    </h1>

                    <p className={`${styles.text2} font-inter font-normal text-[16px] sm:text-[18px] leading-[1.6]`}>
                        Easylogy revolutionizes transportation tracking with real-time fleet visibility, automated driver updates, and smart logistics management. Featuring a web dashboard for admins and a mobile app for drivers, it enables live tracking, instant alerts, trip history, and API integrations, helping businesses optimize routes, improve efficiency, and reduce operational costs effortlessly.
                    </p>
                    <div className={`${styles.requestDemoButtonContainer} font1`}>

                        <Link style={{ color: "white" }} className="linkClass" to={"/products/eicerise/form?product=Easylogy"}>
                            <div className={`${styles.demoButton}`}>
                                <div> Request a Demo </div>
                                <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                            </div>
                        </Link>

                    </div>


                </div>

            </section>


            <section className="pt-10 pb-10 bg-[aliceblue]">
                <div className="max-w-7xl mx-auto px-3 xl:px-4">
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-4">Overview</h2>
                    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center sm:max-w-4xl sm:mx-auto">
                        Easylogy is a smart transportation tracking solution designed to streamline logistics operations with real-time fleet visibility, automated driver updates, and advanced analytics. Our web-based platform enables administrators to monitor vehicle movements, track deliveries, and generate insightful reports, while the driver mobile app allows seamless status updates, location sharing, image uploads, and trip logging. With features like live tracking, instant alerts, trip history, and seamless API integrations, Easylogy enhances route optimization, reduces delays, and improves operational efficiency. Whether managing a small fleet or a large-scale transportation network, Easylogy empowers businesses with the tools needed to make smarter, data-driven decisions and ensure seamless logistics management.
                    </p>
                </div>
            </section>

            <section className="pt-10 pb-10">
                <div className="max-w-7xl mx-auto px-3 xl:px-4">
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Benefits</h2>

                    <div className="flex flex-col gap-4">
                        {feature.map((item, index) => (
                            <div key={item.id} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 ${index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
                                <img className="w-full sm:w-[40%] shrink-0" src={item.img?.src || item.img} alt={item.heading || ""} width={item.__w} height={item.__h} />
                                <div>
                                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.heading}</h3>
                                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-10 pb-10 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto px-3 xl:px-4">
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-4">About us</h2>
                    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center sm:max-w-4xl sm:mx-auto">
                        Easylogy is revolutionizing transportation tracking with a powerful and intelligent solution designed to enhance logistics efficiency. Our platform provides real-time fleet visibility, automated driver updates, and smart logistics management, ensuring seamless operations and reduced costs. With a web-based dashboard for administrators to monitor vehicle movements, manage deliveries, and analyze data, and a mobile app for drivers to upload live locations, trip details, and images, Easylogy simplifies fleet management. Key features like live tracking, instant alerts, trip history, and seamless API integrations empower businesses to make data-driven decisions, improve delivery accuracy, and optimize routes. Whether you manage a small fleet or a large-scale transportation network, Easylogy is your go-to solution for smarter, more efficient logistics management.
                    </p>
                </div>
            </section>

            {!isEmbed && <FooterLower />}





        </>
    )
}







