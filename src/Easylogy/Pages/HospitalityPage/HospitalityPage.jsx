"use client";
import styles from "./Hospitality.module.css"
import { Link } from '/src/nextNavigation'
import { useState, useEffect } from "react"

const b1 = "https://d3r43jacxrwsrp.cloudfront.net/Easylogy/Hospitality/benefit/w.jpg";
const b2 = "https://d3r43jacxrwsrp.cloudfront.net/Easylogy/Hospitality/benefit/w2.jpg";
const b3 = "https://d3r43jacxrwsrp.cloudfront.net/Easylogy/Hospitality/benefit/w3.jpg";
const b4 = "https://d3r43jacxrwsrp.cloudfront.net/Easylogy/Hospitality/benefit/w4.jpg";

import FooterLower from "../../Components/Footer/FooterLower"
import { FaArrowRightLong } from "react-icons/fa6";
import Certificate from "../../Components/Certificate/Certificate"


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
        },

        {
            id: 2,
            img: b2,
            heading: "Automated Driver Updates",
            desc: "Drivers can effortlessly update their trip status, live location, fuel consumption, and upload images directly from the Easylogy mobile app. This ensures seamless communication, reduces manual reporting errors, and provides fleet managers with instant insights into vehicle movements and driver activities for better operational efficiency.",
           width: "40%"

        },

        {
            id: 3,
            img: b3,
            heading: "Optimized Route Planning ",
            desc: "Easylogy uses intelligent algorithms to suggest the most efficient routes, reducing travel time and fuel consumption. By avoiding traffic congestion and minimizing unnecessary stops, businesses can cut costs, improve delivery schedules, and ensure that goods reach their destination faster and more reliably.",
            width: "40%"
        },

        {
            id: 4,
            img: b4,
            heading: "Instant Alerts & Notifications",
            desc: "Receive real-time alerts for route deviations, unexpected stops, vehicle breakdowns, or delays. With instant notifications, businesses can take proactive action, communicate with drivers, and make quick adjustments to prevent delivery disruptions and enhance overall supply chain reliability.",
            width: "40%"
        },

    ]




    return (
        <>


            <section className={styles.section1}>

                <div className={styles.textBox}>
                    <div className={`${styles.text1}  `}>
                        <span className="font2" >Revolutionizing Transportation Tracking with Easylogy Solutions</span> <span style={{ fontWeight: "600" }} className="font1"></span>
                    </div>

                    <p className={`${styles.text2} font1`}>
                        Easylogy revolutionizes transportation tracking with real-time fleet visibility, automated driver updates, and smart logistics management. Featuring a web dashboard for admins and a mobile app for drivers, it enables live tracking, instant alerts, trip history, and API integrations, helping businesses optimize routes, improve efficiency, and reduce operational costs effortlessly.
                    </p>
                    <div className={`${styles.requestDemoButtonContainer} font1`}>

                        <Link style={{ color: "white" }} className="linkClass" to={"https://www.eicetechnology.com/Contact"}>
                            <div className={`${styles.demoButton}`}>
                                <div> Request a Demo </div>
                                <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                            </div>
                        </Link>

                    </div>


                </div>

            </section>


            <div className={`${styles.mainSection}`}>


                <div className={`${styles.overViewSection}`}>

                    <div className={`${styles.overViewHeading}`}>Overview</div>
                    <div className={`${styles.overViewParaDesc} font4`}>
                        Easylogy is a smart transportation tracking solution designed to streamline logistics operations with real-time fleet visibility, automated driver updates, and advanced analytics. Our web-based platform enables administrators to monitor vehicle movements, track deliveries, and generate insightful reports, while the driver mobile app allows seamless status updates, location sharing, image uploads, and trip logging. With features like live tracking, instant alerts, trip history, and seamless API integrations, Easylogy enhances route optimization, reduces delays, and improves operational efficiency. Whether managing a small fleet or a large-scale transportation network, Easylogy empowers businesses with the tools needed to make smarter, data-driven decisions and ensure seamless logistics management.
                    </div>



                </div>


                <div className={`${styles.benefitSection}`}>

                <div className={`${styles.aboutHeading}`}>Benefits</div>
                    {
                        feature.map((item) => (
                            item.id % 2 == 0 ? (<div key={item.id} style={{ display: "flex", justifyContent: "center" }} >
                                <div className={`${styles.benefitContainer}`}>
                                    <div style={{ width: item.width }} className={`${styles.benefitImgBox}`}>
                                        <img style={{ width: "100%" }} src={item.img?.src || item.img} alt="" />
                                    </div>
                                    <div className={`${styles.headingAndDescBox}`}>
                                        <div className={`${styles.benefitHeading}`}>{item.heading}</div>
                                        <div className={`${styles.benefitDesc}`} >{item.desc}</div>
                                    </div>
                                </div>
                            </div>
                            ) : (

                                <div key={item.id} style={{  background: "#f5f5f5", display: "flex", justifyContent: "center" }} >
                                    <div className={`${styles.benefitContainer}`}>

                                        <div className={`${styles.headingAndDescBox}`}>
                                            <div className={`${styles.benefitHeading}`}>{item.heading}</div>
                                            <div className={`${styles.benefitDesc}`} >{item.desc}</div>
                                        </div>
                                        <div style={{ width: item.width }} className={`${styles.benefitImgBox}`}>
                                            <img style={{ width: "100%" }} src={item.img?.src || item.img} alt="" />
                                        </div>
                                    </div>
                                </div>

                            )
                        )

                        )}


                </div>





                <div className={`${styles.aboutUsSection}`}>

                    <div className={`${styles.aboutHeading}`}>About us</div>
                    <div className={`${styles.aboutUsPara} font4`}>
                        Easylogy is revolutionizing transportation tracking with a powerful and intelligent solution designed to enhance logistics efficiency. Our platform provides real-time fleet visibility, automated driver updates, and smart logistics management, ensuring seamless operations and reduced costs. With a web-based dashboard for administrators to monitor vehicle movements, manage deliveries, and analyze data, and a mobile app for drivers to upload live locations, trip details, and images, Easylogy simplifies fleet management. Key features like live tracking, instant alerts, trip history, and seamless API integrations empower businesses to make data-driven decisions, improve delivery accuracy, and optimize routes. Whether you manage a small fleet or a large-scale transportation network, Easylogy is your go-to solution for smarter, more efficient logistics management.
                    </div>



                </div>


                <Certificate/>






               {!isEmbed &&<FooterLower />}
            </div>





        </>
    )
}






