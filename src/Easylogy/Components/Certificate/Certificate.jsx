import React from 'react'
import styles from "./Certificate.module.css"

const c1 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/cert/oip.jpeg";
const c2 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/cert/c2.png";
const c3 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/cert/c3.png";
const c4 = "https://d3r43jacxrwsrp.cloudfront.net/easylogy/cert/c4.png";
export default function Certificate() {
    return (
        <div className={`${styles.certificate}`}>

            <div className={`${styles.certificateHeading} font3`}>
                Our Certifications
            </div>

            {/* <div className={`${styles. certificateImgBox} w-3/4 lg:w-1/2 `}>
                <img style={{width : "100%"}} src={cert} alt="" />

            </div> */}

            <div className={styles.container}>
                <div className={styles.image1}>
                    <img style={{ width: '100%' }} src={c1} alt="" />
                </div>
                <div className={styles.image2}>
                    <img style={{ width: '100%' }} src={c2} alt="" />
                </div>
                <div className={styles.image3}>
                    <img style={{ width: '100%' }} src={c3} alt="" />
                </div>
                <div className={styles.image4}>
                    <img style={{ width: '100%' }} src={c4} alt="" />
                </div>
            </div>



        </div>
    )
}
