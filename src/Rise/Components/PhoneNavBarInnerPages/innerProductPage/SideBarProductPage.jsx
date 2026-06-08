"use client";



import styles from "./sideBarProductPage.module.css"


import { Link } from '/src/nextNavigation'





import account from "../../../assets/DropDown/account.png"
import banwuet from "../../../assets/DropDown/banquet.png"
import dinning from "../../../assets/DropDown/dinning.png"
import food from "../../../assets/DropDown/food.png"
import inventary from "../../../assets/DropDown/invent.png"
import member from "../../../assets/DropDown/member.png"
import pay from "../../../assets/DropDown/pay.png"
import room from "../../../assets/DropDown/room.png"
import vendor from "../../../assets/DropDown/vendor.png"
import emp from "../../../assets/DropDown/emp.png"
import sso from "../../../assets/DropDown/SSO.svg"
import wifi from "../../../assets/DropDown/WIFI.svg"
import budget from "../../../assets/DropDown/Budget.svg"
import attendance from "../../../assets/DropDown/Attendance.svg"
import compliance from "../../../assets/DropDown/Compliance.svg"
import vendori from "../../../assets/DropDown/Vendor.svg"
import feedbacki from "../../../assets/DropDown/Feedback.svg"


import { IoIosArrowForward } from "react-icons/io";
import RequestButton from "../../requestDemoButton/RequestButton"
import ContactUs from "../../contactUs/ContactUs"
import { useDispatch } from "react-redux"
import { setShowSideBarPge, toggleNavBarIcon , toggleSideBar } from "../../../redux/slice"
import { IoHandLeftSharp } from "react-icons/io5"

export default function SideBarProductPage() {

    const product1 = [
        {
            key: 1,
            title: "Room ",
            title2: "Booking",
            description: "Streamline guest reservations",
            icon: room,
            path: "/products/eice-rise/room-booking",

        },

        {
            key: 3,
            title: "Banquet",
            title2: "& Billing",
            description: "Manage events with ease",
            icon: banwuet,
            path: "/products/eice-rise/banquet-billing",
        },

        {


            key: 5,
            title: "Accounts",
            title2: "& Finances",
            description: "Gain full financial control",
            icon: account,
            path: "/products/eice-rise/account-finance",
        },

        {
            key: 7,
            title: "PayRoll",
            title2: "Booking",
            description: "Simplify payroll processing",
            icon: pay,
            path: "/products/eice-rise/payroll",
        },


        {
            key: 8,

            title: "Purchase",
            title2: " & Vendor Portal",
            description: "Manage inventory effortlessly",
            icon: vendor,
            
            path: "/products/eice-rise/purchase-vendor", 
        },

         {
            key: 11,
            title: "Rise-Single ",
            title2: "Sign-On ",
            description: "Boost profit accuracy",
            icon: sso,
            path: "/products/eice-rise/single-sign-on",
        },

         {
            key: 13,
            title: "Budget ",
            // title2: "Cost Analysis",
            description: "Boost profit accuracy",
            icon: budget,
            path: "/products/eice-rise/budget",
        },

          {
            key: 15,
            title: "Audience ",
            title2: "Attendance",
            description: "Boost profit accuracy",
            icon: attendance,
            path: "/products/eice-rise/audience-attendance",
        },

                {
            key: 17,
            title: "Vendor ",
            title2: " Management",
            description: "Boost profit accuracy",
            icon: vendori,
            path: "/products/eice-rise/vendor-management",
        },



    ]

    const product2 = [

        {
            key: 2,
            title: "Dining",
            title2: "(POS)",
            description: "Simplify your dining operations",
            icon: dinning,
            path: "/products/eice-rise/pos-dining",
        },

        {
            key: 4,
            title: "Member",
            title2: "Suite",
            description: "Build a thriving member community",
            icon: member,
            path: "/products/eice-rise/member-suite",
        },

        {
            key: 6,
            title: "Employee",
            title2: "Portal",
            description: "Empower with centralized access",
            icon: emp,
            path: "/products/eice-rise/employee-suite",

        },

        {
            key: 9,
            title: "User, Store ",
            title2: "& Inventory",
            description: "Optimize vendor management",
            icon: inventary,
            path: "/products/eice-rise/userstore-inventry",
           
        },

        {
            key: 10,
            title: "Food & Beverage ",
            title2: "Cost Analysis",
            description: "Boost profit accuracy",
            icon: food,
            path: "/products/eice-rise/food-cost",
        },

       
        {
            key: 12,
            title: "Wi-Fi ",
            title2: " Module",
            description: "Boost profit accuracy",
            icon: wifi,
            path: "/products/eice-rise/wifi",
        },

       

        {
            key: 14,
            title: "Feedback ",
            title2: " System",
            description: "Boost profit accuracy",
            icon: feedbacki,
            path: "/products/eice-rise/feedback",
        },


        {
            key: 16,
            title: "Compliance ",
            title2: " Register",
            description: "Boost profit accuracy",
            icon: compliance,
            path: "/products/eice-rise/compliance-register",
        },


    ]

    const disPatch = useDispatch()

    const handleHomeButton = () => {
        disPatch(setShowSideBarPge("Home"))
    }

    const handleProductItems = () => {
        disPatch(toggleSideBar())

    }

    const handleRequestBtn = () => {
        disPatch(toggleSideBar())
        
    }

    return (
        <>

            <section className={`${styles.mainProductConatiner}`}>


                <div className={`${styles.breadScrum}`} style={{ padding: "0px 20px" }}>

                    <div onClick={handleHomeButton}>
                        Home
                    </div>

                    <div className={`${styles.arrowSign}`}>
                        <IoIosArrowForward />
                    </div>

                    <div style={{ fontWeight: "600" }}>
                        Products
                    </div>

                </div>




                <div style={{ padding: "0px 20px" }} className={`${styles.productNavItemContainer}`}>

                    <div className={`${styles.NavItemSubContainer}`}>

                        {product1.map((item, index) =>
                        (
                            <Link className="linkClass" key={item.key ?? index} to={item.path}>
                                <div onClick={handleProductItems} className={`${styles.productDetailBox}`}>
                                    <div className={`${styles.productIcon}`}>
                                        <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                    </div>
                                    <div className={`${styles.titleHeading} font3`}>

                                        <div>{item.title} {item.title2}</div>
                                       
                                    </div>
                                   
                                </div>
                            </Link>

                        ))}

                    </div>



                    <div className={`${styles.NavItemSubContainer}`}>
                        {product2.map((item, index) =>
                        (
                            <Link className="linkClass" key={item.key ?? index} to={item.path}>
                                <div onClick={handleProductItems} className={`${styles.productDetailBox}`}>
                                    <div className={`${styles.productIcon}`}>
                                        <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                    </div>
                                    <div className={`${styles.titleHeading} font3`}>

                                        <div>{item.title} {item.title2}</div>
                                       
                                    </div>
                               
                                </div>
                            </Link>

                        ))}

                    </div>

                </div>

                <div onClick={handleRequestBtn} className={`${styles.requestonButton}`} >
                    <RequestButton />
                </div>

                <div className={`${styles.ContactUsBox}`}>
                    <ContactUs />
                </div>



            </section>




        </>
    )
}


