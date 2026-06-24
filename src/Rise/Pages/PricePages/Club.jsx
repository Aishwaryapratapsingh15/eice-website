"use client";
import styles from "./Styles/club.module.css"



import { Link } from '/src/nextNavigation'


const account = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Account.png";
const pos = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/POS.png";
const banquet = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Banquet.png";

const member = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Member.png";
const room = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Room.png";


const heroimg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/pricing/suitHeroSection/clubP.webp";


import { FaArrowRightLong } from "react-icons/fa6";
import FooterLower from "../../Components/Footer/FooterLower"
import { useEffect, useState } from "react"
import Certificate from "../../Components/Certificate/Certificate"

export default function Club() {


    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 440); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const services = [
        {
            serviceName: "ROOM",
            serviceName2: "BOOKING",
            icon: room,
            path: "/products/eicerise/room-booking",
            key: 1
        },

        {
            serviceName: "DINING",
            serviceName2: "(POS)",
            icon: pos,
            path: "/products/eicerise/pos-dining",
            key: 2
        },

        {
            serviceName: "BANQUET &",
            serviceName2: "BILLING",
            icon: banquet,
            path: "/products/eicerise/banquet-billing",
            key: 3
        },

        {

            serviceName: "MEMBER",
            serviceName2: "SUITE",
            icon: member,
            path: "/products/eicerise/member-suite",
            key: 4
        },

        {
            serviceName: "ACCOUNT & ",
            serviceName2: "FINANCE",
            icon: account,
            path: "/products/eicerise/account-finance",
            key: 5
        },




    ]


    const whyToChooseUs = [
        {
            key: "enhanced-member-experience",
            title: "1. Enhanced Member Experience",
            description: "Provide a premium experience to members with tailored features."
        },
        {
            key: "operational-efficiency",
            title: "2. Operational Efficiency",
            description: "Simplify workflows with a consolidated set of modules designed specifically for clubs."
        },
        {
            key: "financial-accuracy",
            title: "3. Financial Accuracy",
            description: "Monitor and manage accounts with ease to ensure transparent and accurate financial records."
        },
        {
            key: "scalable-solution",
            title: "4. Scalable Solution",
            description: "Whether you're running a single club or a chain of locations, the Club Suite adapts to your needs."
        }
    ];

    return (
        <>

            {isPhone && (<section className={`${styles.heroSectionHeadingPhone}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Club</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}


            {isPhone ? (<section className={`${styles.heroImgSectionPhone}`}>
                <div className={`${styles.heroImgBoxPhone}`}>
                    {/* <img style={{ width: "100%" }} src={heroimg} alt="banquet Suite" /> */}
                </div>
            </section>) : (<section className={`${styles.heroImgSection}`}>
                <div className={`${styles.heroImgBox}`}>
                    <img style={{ width: "100%" }} src={heroimg} alt="banquet Suite" />
                </div>
            </section>)}

            {!isPhone && (<section className={`${styles.heroSectionHeading}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Club</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}



            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The Club Suite is designed for <strong className="font2">exclusive clubs and high-end hospitality establishments</strong>  looking to deliver seamless and personalized guest experiences. This <strong className="font2"> suite offers a combination of modules</strong>  tailored to streamline club operations, enhance member satisfaction, and optimize financial management.

                    </div>

                </div>
            </section>



            <section className={`${styles.section2} `}>



                <div className={`${styles.moduleboxAndHeading}  globalSectionSize `} >

                    <div className={`${styles.moduleIncludedHeading} font4`}>Modules Included</div>

                    <div className={`${styles.servicesBox} `}>


                        {services.map((item, index) =>
                        (
                            <Link className="linkClass" key={item.key ?? index} to={item.path}>

                                <div className={`${styles.iconAndTextBox} `}>

                                    <div className={styles.imgBox} >
                                        <img src={item.icon?.src || item.icon} alt={item.name || ""} />
                                    </div>
                                    <div className={`${styles.serviceName} font1`}>
                                        <div>  {item.serviceName}</div>
                                        <div>  {item.serviceName2}</div>

                                    </div>

                                </div>

                            </Link>

                        ))}
                    </div>

                </div>






            </section>


            <section className={`${styles.requestDemoBtn}`}>

                <Link to={"/products/eicerise/form?product=EiceRise(Club Suite)"} className="linkClass">
                    <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                        <div className={`${styles.demoButton} font1`}>
                            <div > Request for Pricing </div>
                            <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                        </div>

                    </div>
                </Link>

            </section>


            <section>
                <div className={`${styles.whyChooseSection} globalSectionSize`}>
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose Club Suite ?</div>
                    <div className={`${styles.titleAndDescBox}`}>

                        {whyToChooseUs.map((item, index) =>

                            <div className="font4" key={item.key ?? index} >

                                <span className={`${styles.titleHeading}`}>{item.title} : </span>
                                <span className={`${styles.titleDesc}`}>{item.description}</span>


                            </div>
                        )}


                    </div>
                </div>

            </section>

            <div>
                <Certificate/>
                <FooterLower />
            </div>

        </>
    )
}


