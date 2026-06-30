import styles from "./footer.module.css";
const footerPosLaptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/pos/posPage/FooterPos.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "@/nextNavigation";

export default function Footer3() {
  return (
    <div className={`${styles.footerMainBoxUpper}`} style={{ marginBottom: "3rem" }}>
      <div style={{ width: "50%" }}>
        <div>
          <div style={{ fontSize: "46px" }}>
            <span className="font2 blueTextGlobalClass">"Revolutionize </span>
            <span style={{ fontWeight: "700" }} className="font1">your dining</span>
          </div>
          <div style={{ fontSize: "46px", fontWeight: "700" }} className="font1">experience."</div>
        </div>
        <Link style={{ color: "white" }} className="linkClass" to="/products/eicerise/form">
          <div className={`${styles.demoButton} font1`}>
            <div>Request a Demo</div>
            <div className={`${styles.demoArrowButton}`}><FaArrowRightLong /></div>
          </div>
        </Link>
      </div>
      <div className={`${styles.footerLaptopImg}`}>
        <img style={{ width: "100%" }} src={footerPosLaptop} alt="pos dining" />
      </div>
    </div>
  );
}
