import styles from "./styles/pricingDrop.module.css"





import { Link } from '@/nextNavigation'
import { FaArrowRightLong } from "react-icons/fa6";


// icon drop down

const clubIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/clubIcon.png";
const enterpriseIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/enterIcon.png";
const inventaryIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/inventaryIcon.png";
const posIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/posIcon.png";
const frontDeskIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/frontIcon.png";
const banquetIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/banquetIcon.png";
const vanillaIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/DropDown/pricingSuites/vanillaIcon.png";



export default function PricingDrop() {


    const product1 = [

        {
            key: 1,
            title: "Enterprise Suite",
            description: "Optimize operations with full-scale control",
            icon: enterpriseIcon,
            path: "/products/eicerise/enterprise-suite",
        __w: 120, __h: 120},
        {
            key: 2,
            title: "Club Suite",
            description: "Engage members with seamless management",
            icon: clubIcon,
            path: "/products/eicerise/club-suite",

        __w: 120, __h: 120},
        
        {
            key: 3,
            title: "Inventory Suite",
            description: "Simplify inventory and procurement workflows",
            icon: inventaryIcon,
            path: "/products/eicerise/inventory-suite",
        __w: 120, __h: 120},
        {
            key: 4,
            title: "POS Suite",
            description: "Streamline sales and transactions effortlessly",
            icon: posIcon,
            path: "/products/eicerise/pos-suite",
        __w: 120, __h: 120},

    ]

    const product2 = [
        {
            key: 5,
            title: "Front Desk Suite",
            description: "Elevate guest experiences from check-in to billing",
            icon: frontDeskIcon,
            path: "/products/eicerise/frontdesk-suite",
        __w: 120, __h: 120},
        {
            key: 6,
            title: "Banquet Suite",
            description: "Manage events and finances flawlessly",
            icon: banquetIcon,
            path: "/products/eicerise/banquet-suite",

        __w: 120, __h: 120},
        {
            key: 7,
            title: "Vanilla Suite",
            description: "All-in-one solution for versatileÂ operations",
            icon: vanillaIcon,
            path: "/products/eicerise/vanilla-suite",
        __w: 120, __h: 120},
        // {
        //     key: 8,

        //     title: "Purchase & Vendor Portal",
        //     description: "Manage inventory effortlessly",
        //     icon: vendor,
        //     path: "/products/eicerise/userstore-inventry",
        // },

    ]

   



    return (
        <>

            <div className={`${styles.mainDropDownContainer}`}>

                <div className={`${styles.productConatiner} font1`}>

                    {product1.map((item, index) =>
                    (
                        <Link   className="linkClass" key={item.key ?? index} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt={item.title}  width={item.__w} height={item.__h} />
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
                                    <img className={`${styles.iconSize}`} src={item.icon?.src || item.icon} alt= {item.title}  width={item.__w} height={item.__h} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>



                <div className={`${styles.requestDemo} font1 `}>
                    <div>
                        <Link to={"/products/eicerise/form"} style={{ textDecoration: "none", color: "white" }}>
                            Request a Demo
                        </Link>
                    </div>

                    <div className={`${styles.arrowStyle} font2`} > <FaArrowRightLong /></div>

                </div>


            </div>

        </>
    )
}

