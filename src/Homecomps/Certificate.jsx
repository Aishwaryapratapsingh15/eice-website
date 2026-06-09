import React from 'react'
import styles from "./Styles/certificate.module.css"
import cert from "../assets/certificate1.jpg"
// import c1 from "../assets/cert/c221.png"
import c1 from "../assets/cert/oip.jpeg"
import c2 from "../assets/cert/c2.png"
import c3 from "../assets/cert/c3.png"
import c4 from "../assets/cert/c4.png"
export default function Certificate() {
    return (
        <div className={`${styles.certificate}`}>

            <div className={`${styles.certificateHeading} fontsize_6`}>
                Our Certifications
            </div>

            {/* <div className={`${styles. certificateImgBox} w-3/4 lg:w-1/2 `}>
                <img style={{width : "100%"}} src={cert.src} alt="" />

            </div> */}

            <div className="mt-8 mb-14 flex flex-wrap justify-center items-center gap-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 px-4">
                <div className="w-20 sm:w-28 md:w-36">
                    <img style={{width:"100%"}} src={c1.src} alt="" />
                </div>
                <div className="w-20 sm:w-28 md:w-36">
                    <img style={{width:"100%"}} src={c2.src} alt="" />
                </div>
                <div className="w-36 sm:w-52 md:w-72 lg:w-80">
                    <img style={{width:"100%"}} src={c3.src} alt="" />
                </div>
                <div className="w-16 sm:w-20 md:w-28">
                    <img style={{width:"100%"}} src={c4.src} alt="" />
                </div>
            </div>



        </div>
    )
}
