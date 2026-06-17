import styles from "./styles/Hospitality.module.css"

const mainImg = "https://d3r43jacxrwsrp.cloudfront.net/hospitalityMain/hospitalitypage/Herosection.png";
import { Link } from "/src/nextNavigation";



const pos = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/pos.png";
const banquet = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/banquet.png";
const employee = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/employee.png";
const finance = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/finance.png";
const foodcost = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/foodcost.png";
const inventry = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/inventry.png";
const member = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/member.png";
const payroll = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/payroll.png";
const room = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/room2.png";
const vendor = "https://d3r43jacxrwsrp.cloudfront.net/Hospitality/hospitalityIcon/vendor.png";




// background 




export default function Hospitality() {

    const services = [
        {
            serviceName: "Room Booking",
            img: room,
            width: "",
            link: "/roombooking"
        },

        {
            serviceName: "Dining (POS)",
            img: pos,
            width: "",
            link: "/pos"
        },

        {
            serviceName: "Banquet & Billing",
            img: banquet,
            width: "",
            link: "/banquetAndBilling"
        },

        {
            serviceName: "Member Suite ",
            img: member,
            width: "",
            link: "/memberPortal"
        },

        {
            serviceName: "Accounts & Finances",
            img: finance,
            width: "",
            link: "/accountAndFinance"
        },

        {
            serviceName: "Employee Portal",
            img: employee,
            width: "",
            link: "/employeePortal"
        },

        {
            serviceName: "Payroll",
            img: payroll,
            width: "",
            link: "/payroll"
        },

        {
            serviceName: "User, Store & Inventory",
            img: inventry,
            width: "",
            link: "/storeAndInventry"
        },

        {
            serviceName: "Purchase & Vendor Portal",
            img: vendor,
            width: "",
            link: "/purchaseVendorPortal"
        },

        {
            serviceName: "Food & Beverage Cost Analysis",
            img: foodcost,
            width: "",
            link: "/foodCost"
        }
    ]


    return (
        <>

            <div className={`${styles.mainConatiner} font-manrope bg-white text-manrope  pt-0 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                            Flexible, modular solutions tailored to your business needs

                        </div>

                        <div className={styles.mainSubHeading}>
                            we believe hospitality goes beyond providing accommodation; it’s about crafting unique and memorable experiences. From luxurious stays to exquisite dining, our services are designed to cater to your every need
                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={mainImg} alt="EICE hospitality management software hero" />
                        <div>

                            <img src="" alt="" />
                        </div>
                    </div>
                </div>



                {/* section2 */}

                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Key Services Overview
                    </div>

                    <div className={styles.section2SubHeading}>
                        Comprehensive Hospitality Services Crafted for an Exceptional Guest Experience
                    </div>


                    <div className={styles.featuresBox}>


                        {services.map((item) =>
                        (
                            <Link href={item.link}>
                                <div className={styles.featuresAndImg}>

                                    <div >

                                        <div className={styles.featuresHeading}>{item.serviceName}</div>
                                        <div className={styles.featuresDescription}>{item.description}</div>

                                    </div>

                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img style={{ maxWidth: "100%", width: "70%" }} src={item.img} alt={item.serviceName} />
                                    </div>
                                </div>
                            </Link>


                        ))}



                    </div>



                </div>

            </div>

        </>

    )
}
