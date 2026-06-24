import React from 'react'
import styles from "./Styles/certificate.module.css"
const cert = "https://d3r43jacxrwsrp.cloudfront.net/certificate1.jpg";
// const c1 = "https://d3r43jacxrwsrp.cloudfront.net/cert/c221.png";
const c1 = "https://d3r43jacxrwsrp.cloudfront.net/cert/oip.jpeg";
const c2 = "https://d3r43jacxrwsrp.cloudfront.net/cert/c2.png";
const c3 = "https://d3r43jacxrwsrp.cloudfront.net/cert/c3.png";
const c4 = "https://d3r43jacxrwsrp.cloudfront.net/cert/c4.png";
export default function Certificate() {
    return (
        <div className={`${styles.certificate}`}>

            <div className={`${styles.certificateHeading} fontsize_6`}>
                Our Certifications
            </div>

            {/* <div className={`${styles. certificateImgBox} w-3/4 lg:w-1/2 `}>
                <img style={{width : "100%"}} src={cert} alt="" />

            </div> */}

            <div className="mt-8 mb-14 flex flex-wrap justify-center items-center gap-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 px-4">
                <div className="w-20 sm:w-28 md:w-36">
                    <img style={{width:"100%"}} width="144" height="144" src={c1} alt="EICE Technology industry certification badge" />
                </div>
                <div className="w-20 sm:w-28 md:w-36">
                    <img style={{width:"100%"}} width="144" height="144" src={c2} alt="EICE Technology certification award" />
                </div>
                <div className="w-36 sm:w-52 md:w-72 lg:w-80">
                    <img style={{width:"100%"}} width="320" height="120" src={c3} alt="EICE Technology technology partnership certification" />
                </div>
                <div className="w-16 sm:w-20 md:w-28">
                    <img style={{width:"100%"}} width="112" height="112" src={c4} alt="EICE Technology quality certification badge" />
                </div>
            </div>



        </div>
    )
}
