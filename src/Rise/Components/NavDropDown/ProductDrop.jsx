import styles from "./styles/productdrop.module.css"
import { Link } from '/src/nextNavigation'
import { FaArrowRightLong } from "react-icons/fa6";


// icon drop down

import account from "../../assets/DropDown/account.png"
import banwuet from "../../assets/DropDown/banquet.png"
import dinning from "../../assets/DropDown/dinning.png"
import food from "../../assets/DropDown/food.png"
import inventary from "../../assets/DropDown/invent.png"
import member from "../../assets/DropDown/member.png"
import pay from "../../assets/DropDown/pay.png"
import room from "../../assets/DropDown/room.png"
import vendor from "../../assets/DropDown/vendor.png"
import emp from "../../assets/DropDown/emp.png"
import sso from "../../assets/DropDown/SSO.svg"
import wifi from "../../assets/DropDown/WIFI.svg"
import budget from "../../assets/DropDown/Budget.svg"
import attendance from "../../assets/DropDown/Attendance.svg"
import compliance from "../../assets/DropDown/Compliance.svg"
import vendori from "../../assets/DropDown/Vendor.svg"
import feedbacki from "../../assets/DropDown/Feedback.svg"






export default function ProductDrop() {


    const product1 = [
        {
            key: 1,
            title: "Room Booking",
            description: "Streamline guest reservations",
            icon: room,
            path: "/products/eice-rise/room-booking",

        },
        {
            key: 2,
            title: "Dining (POS)",
            description: "Simplify your dining operations",
            icon: dinning,
            path: "/products/eice-rise/pos-dining",
        },
        {
            key: 3,
            title: "Banquet & Billing",
            description: "Manage events with ease",
            icon: banwuet,
            path: "/products/eice-rise/banquet-billing",
        },
        {
            key: 4,
            title: "Member Suite",
            description: "Build a thriving member community",
            icon: member,
            path: "/products/eice-rise/member-suite",
        },

    ]

    const product2 = [
        {
            key: 5,
            title: "Accounts & Finances",
            description: "Gain full financial control",
            icon: account,
            path: "/products/eice-rise/account-finance",
        },
        {
            key: 6,
            title: "Employee Suite",
            description: "Empower with centralized access",
            icon: emp,
            path: "/products/eice-rise/employee-suite",

        },
        {
            key: 7,
            title: "PayRoll",
            description: "Simplify payroll processing",
            icon: pay,
            path: "/products/eice-rise/payroll",
        },
        {
            key: 8,

            title: "Purchase & Vendor Portal",
          
             description: "Optimize vendor management",
            icon: vendor,
           
            path: "/products/eice-rise/purchase-vendor",
        },

    ]

    const product3 = [
        {
            key: 9,
            title: "User, Store & Inventory",
             description: "Manage inventory effortlessly",
            icon: inventary,
             path: "/products/eice-rise/userstore-inventry",
        },
        {
            key: 10,
            title: "Food & Beverage Cost Analysis",
            description: "BoostÂ profitÂ accuracy",
            icon: food,
            path: "/products/eice-rise/food-cost",
        },
        {
            key: 11,
            title: "Single-Sign-On",
            description: "Take command of your entire EICE Rise ecosystem ",
            icon: sso,
            path: "/products/eice-rise/single-sign-on",
        },
        {
            key: 12,
            title: "Wi-Fi Module",
            description: "Automate guest Wi-Fi access ",
            icon: wifi,
            path: "/products/eice-rise/wifi",
        },

    ]

      const product4 = [
        {
            key: 13,
            title: "Budget and Planning",
             description: "Plan, allocate, and monitor budgets",
            icon: budget,
             path: "/products/eice-rise/budget",
        },
        {
            key: 14,
            title: "Feedback System",
            description: "Capture, analyze, and act on guest feedback",
            icon: feedbacki,
            path: "/products/eice-rise/feedback",
        },
        {
            key: 15,
            title: "Audience Attendance",
            description: "Monitor and manage banquet-wise footfall ",
            icon: attendance,
            path: "/products/eice-rise/audience-attendance",
        },
        {
            key: 16,
            title: "Compliance Register",
            description: "Track, assign, and monitor operational activities ",
            icon: compliance,
            path: "/products/eice-rise/compliance-register",
        },

    ]

     const product5 = [
        {
            key: 17,
            title: "Vendor Management",
             description: "Build and manage a trusted vendor ecosystem ",
            icon: vendori,
             path: "/products/eice-rise/vendor-management",
        },
        
    ]



    return (
        <>

            <div className={`${styles.mainDropDownContainer}`}>

                <div className={`${styles.productConatiner} font1`}>

                    {product1.map((item, index) =>
                    (
                        <Link  className="linkClass" key={item.key ?? index} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>

                <div className={`${styles.productConatiner} font1`} >

                    {product2.map((item, index) =>
                    (

                        <Link className="linkClass" key={item.key ?? index} to={item.path}>
                            <div className={`${styles.productDetailBox}`} >
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>

                <div className={`${styles.productConatiner} `}>

                    {product3.map((item, index) =>
                    (
                        <Link className="linkClass"  key={item.key ?? index} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`} >
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>


{/* <---------------------------------------------------Product4------------------------------ */}
               
                     <div className={`${styles.productConatiner} `}>

                    {product4.map((item, index) =>
                    (
                        <Link className="linkClass"  key={item.key ?? index} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`} >
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>

{/*---------------------------------------------Product5 ------------------------------------- */}
                     <div className={`${styles.productConatiner} `}>

                    {product5.map((item, index) =>
                    (
                        <Link className="linkClass"  key={item.key ?? index} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`} >
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>


                <div className={`${styles.requestDemo} font1 `}>
                    <div>
                        <Link to={"/products/eice-rise/form"} style={{ textDecoration: "none", color: "white" }}>
                            Request a Demo
                        </Link>
                    </div>

                    <div className={`${styles.arrowStyle} font2`} > <FaArrowRightLong /></div>

                </div>


            </div>

        </>
    )
}
