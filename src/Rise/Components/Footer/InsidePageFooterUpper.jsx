import styles from "./footer.module.css";
const footer = "https://d3r43jacxrwsrp.cloudfront.net/Rise/footer/foot.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "@/nextNavigation";

export default function InsidePageFooterUpper() {
  return (
    <div className={`${styles.footerMainBoxUpper}`} style={{ marginBottom: "3rem" }}>
      <div style={{ width: "50%" }}>
        <div>
          <span style={{ fontSize: "46px" }} className="font2 blueTextGlobalClass">
            Flexible, Modular Solutions{" "}
            <span className="font1" style={{ color: "black", fontWeight: "600" }}>
              tailored to your business needs
            </span>
          </span>
        </div>
        <Link style={{ color: "white" }} className="linkClass" to="/products/eicerise/form">
          <div className={`${styles.demoButton} font1`}>
            <div>Request a Demo</div>
            <div className={`${styles.demoArrowButton}`}><FaArrowRightLong /></div>
          </div>
        </Link>
      </div>
      <div className={`${styles.footerLaptopImg}`}>
        <img style={{ width: "100%" }} src={footer} alt="eice rise"  width="1040" height="461" />
      </div>
    </div>
  );
}
