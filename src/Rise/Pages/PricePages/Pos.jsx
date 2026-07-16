import styles from "./Styles/posSuite.module.css"


const eyeImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/pricing/eye/eye.webp";
import { Link } from '@/nextNavigation'


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


export default function Pos() {


    const services = [
        // {
        //     serviceName: "ROOM BOOKING",
        //     icon: room,
        //     path: "/products/eicerise/room-booking",
        //     key: 1
        // , __w: 300, __h: 300},

        {
            serviceName: "DINNING (POS)",
            icon: pos,
            path: "/products/eicerise/pos-dining",
            key: 2
        , __w: 300, __h: 300},


        // {
        //     serviceName: "BANQUET & BILLING",
        //     icon: banquet,
        //     path: "/products/eicerise/banquet-billing",
        //     key: 3
        // __w: 300, __h: 300},

        // {

        //     serviceName: (<span style={{ padding: "0px 3px" }}>MEMBER SUITE</span>),
        //     icon: member,
        //     path: "/products/eicerise/member-suite",
        //     key: 4
        // __w: 300, __h: 300},

        {
            serviceName: "ACCOUNT & FINANCE",
            icon: account,
            path: "/products/eicerise/account-finance",
            key: 5
        , __w: 300, __h: 300},

        // {
        //     serviceName: "EMPLOYEE SUITE",
        //     icon: emp,
        //     path: "/products/eicerise/employee-suite",
        //     key: 6
        // __w: 300, __h: 300},

        // {
        //     serviceName: "PAYROLL",
        //     icon: pay,
        //     path: "/products/eicerise/payroll",
        //     key: 7
        // __w: 300, __h: 300},

        // {
        //     serviceName: "USER STORE & INVENTORY",
        //     icon: inentry,
        //     path: "/products/eicerise/userstore-inventry",
        //     key: 8
        // __w: 300, __h: 300},

        // {
        //     serviceName: "PURCHASE & VENDOR PORTAL",
        //     icon: vendor,
        //     path: "/products/eicerise/purchase-vendor",
        //     key: 9
        // __w: 300, __h: 300},

        // {
        //     serviceName: "FOOD & BEVERAGE COST ANALYSIS",
        //     icon: food,
        //     path: "/products/eicerise/food-cost",
        //     key: 10
        // __w: 300, __h: 300}
    ]

    const whyToChooseUs = [
        {
            key: "streamlined-transactions",
            title: "1. Streamlined Transactions",
            description: "Speed up billing processes with intuitive POS systems."
        },
        {
            key: "financial-precision",
            title: "2. Financial Precision",
            description: "Ensure accurate and up-to-date financial management for your business."
        },
        {
            key: "scalability",
            title: "3. Scalability",
            description: "Supports businesses of all sizes with easy integration and customization options."
        }
    ];

    return (
        <>


            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt=""  width="1368" height="744" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The POS Suite is tailored for <strong className="font2">seamless point-of-sale operations and robust financial oversight</strong> . Perfect for businesses requiring streamlined billing and real-time transaction tracking, this suite ensures  <strong className="font2">operational efficiency and accurate financial management</strong> .


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
                        <img src={item.icon?.src || item.icon} alt={item.name || ""}  width={item.__w} height={item.__h} />
                    </div>
                    <div>
                        {item.key < 9 ? (<div className={`${styles.serviceName} font1`}>{item.serviceName}</div>) : (<div className={`${styles.serviceName2} font1`}>{item.serviceName}</div>)}
                    </div>

                </div>

            </Link>

        ))}
    </div>

</div>






</section>



            <section className={`${styles.requestDemoBtn}`}>

               <Link to={"/products/eicerise/form"} className="linkClass">
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
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose POS Suite ?</div>
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

        </>
    )
}

