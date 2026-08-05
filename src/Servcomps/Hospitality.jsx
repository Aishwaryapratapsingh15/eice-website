import styles from "./styles/Hospitality.module.css"

const mainImg = "https://d3r43jacxrwsrp.cloudfront.net/hospitalityMain/hospitalitypage/Herosection.png";
import { Link } from "@/nextNavigation";



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
            link: "/products/eicerise/roombooking"
        , __w: 253, __h: 199},

        {
            serviceName: "Dining (POS)",
            img: pos,
            width: "",
            link: "/pos"
        , __w: 225, __h: 225},

        {
            serviceName: "Banquet & Billing",
            img: banquet,
            width: "",
            link: "/banquetAndBilling"
        , __w: 512, __h: 512},

        {
            serviceName: "Member Suite ",
            img: member,
            width: "",
            link: "/memberPortal"
        , __w: 256, __h: 256},

        {
            serviceName: "Accounts & Finances",
            img: finance,
            width: "",
            link: "/accountAndFinance"
        , __w: 512, __h: 512},

        {
            serviceName: "Employee Portal",
            img: employee,
            width: "",
            link: "/employeePortal"
        , __w: 225, __h: 225},

        {
            serviceName: "Payroll",
            img: payroll,
            width: "",
            link: "/payroll"
        , __w: 512, __h: 512},

        {
            serviceName: "User, Store & Inventory",
            img: inventry,
            width: "",
            link: "/storeAndInventry"
        , __w: 512, __h: 512},

        {
            serviceName: "Purchase & Vendor Portal",
            img: vendor,
            width: "",
            link: "/purchaseVendorPortal"
        , __w: 512, __h: 512},

        {
            serviceName: "Food & Beverage Cost Analysis",
            img: foodcost,
            width: "",
            link: "/foodCost"
        , __w: 512, __h: 512}
    ]


    return (
        <>

            <div className={`${styles.mainConatiner} font-manrope bg-white text-manrope  pt-4 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
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
                        <img className={styles.mainImage} src={mainImg} alt="EICE hospitality management software hero"  width="1020" height="936" />
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
                                        <img style={{ maxWidth: "100%", width: "70%" }} src={item.img} alt={item.serviceName}  width={item.__w} height={item.__h} />
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
