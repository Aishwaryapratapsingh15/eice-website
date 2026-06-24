"use client";
import styles from "./Styles/enterprise.module.css"



import { Link } from '/src/nextNavigation'


const account = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Account.png";
const pos = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/POS.png";
const banquet = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Banquet.png";
const emp = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Employee.png";
const food = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Food.png";
const inentry = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/store.png";
const member = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Member.png";
const pay = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/PAyscale.png";
const room = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/Room.png";
const vendor = "https://d3r43jacxrwsrp.cloudfront.net/Rise/Hospitality/allPageIcon/purchase.png";


import { FaArrowRightLong } from "react-icons/fa6";
const heroimg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/pricing/suitHeroSection/enterpriseP.webp";
import FooterLower from "../../Components/Footer/FooterLower"
import { useEffect, useState } from "react"
import Certificate from "../../Components/Certificate/Certificate"


export default function Enterprise() {

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

        {
            serviceName: "EMPLOYEE",
            serviceName2: "SUITE",
            icon: emp,
            path: "/products/eicerise/employee-suite",
            key: 6
        },

        {
            serviceName: "PAYROLL",
            serviceName2: "MANAGEMENT",
            icon: pay,
            path: "/products/eicerise/payroll",
            key: 7
        },

        {
            serviceName: "USER STORE & INVENTORY",
            icon: inentry,
            path: "/products/eicerise/userstore-inventry",
            key: 8
        },

        {
            serviceName: "PURCHASE & VENDOR PORTAL",
            icon: vendor,
            path: "/products/eicerise/purchase-vendor",
            key: 9
        },

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "/products/eicerise/food-cost",
            key: 10
        }
    ]

    const whyToChooseUs = [
        {
            key: "all-in-one-solution",
            title: "1. All-in-One Solution",
            description: "Covers every aspect of business operations, from member management to financial tracking."
        },
        {
            key: "data-driven-insights",
            title: "2. Data-Driven Insights",
            description: "Leverage analytics and reporting tools to make informed decisions."
        },
        {
            key: "improved-collaboration",
            title: "3. Improved Collaboration",
            description: "Connect multiple departments through an integrated platform for seamless communication and coordination."
        },
        {
            key: "scalability",
            title: "4. Scalability",
            description: "Perfect for enterprises looking to expand operations and streamline management across locations."
        }
    ];

    return (
        <>

            {isPhone && (<section className={`${styles.heroSectionHeadingPhone}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Enterprise</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
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
                <span className="font2" style={{ color: "#01B0F1" }} >Enterprise</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}




            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The Enterprise Suite is a comprehensive solution <strong className="font2">designed for large- scale operations and businesses</strong>  aiming to achieve seamless integration across all departments. This suite combines <strong className="font2">advanced tools and modules</strong>  to optimize resource management, <strong className="font2">improve operational efficiency, and enhance decision-making</strong> .
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

                <Link to={"/products/eicerise/form?product=EiceRise(Enterprise Suite)"} className="linkClass">
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
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose Enterprise Suite ?</div>
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


