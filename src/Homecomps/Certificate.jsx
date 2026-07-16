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

            <div className={`${styles.certificateHeading} text-[26px] sm:text-[35px]`}>
                Our Certifications
            </div>

            {/* <div className={`${styles. certificateImgBox} w-3/4 lg:w-1/2 `}>
                <img style={{width : "100%"}} src={cert} alt=""  width="96" height="96" />

            </div> */}

            <div className="mt-8 mb-14 flex items-center gap-2 px-5 sm:justify-center sm:flex-wrap sm:gap-x-8 md:gap-x-12 lg:gap-x-20 sm:px-4">
                <div className="flex-1 min-w-0 sm:flex-none sm:w-28 md:w-36">
                    <img style={{width:"100%"}} width="144" height="144" src={c1} alt="EICE Technology industry certification badge" />
                </div>
                <div className="flex-1 min-w-0 sm:flex-none sm:w-28 md:w-36">
                    <img style={{width:"100%"}} width="144" height="144" src={c2} alt="EICE Technology certification award" />
                </div>
                <div className="flex-[2] min-w-0 sm:flex-none sm:w-52 md:w-72 lg:w-80">
                    <img style={{width:"100%"}} width="320" height="120" src={c3} alt="EICE Technology technology partnership certification" />
                </div>
                <div className="flex-1 min-w-0 sm:flex-none sm:w-20 md:w-28">
                    <img style={{width:"100%"}} width="112" height="112" src={c4} alt="EICE Technology quality certification badge" />
                </div>
            </div>



        </div>
    )
}
