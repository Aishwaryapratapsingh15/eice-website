import styles from "./footer.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "@/nextNavigation";

export default function FooterUpperPart({ text1, text2, text3, img }) {
  return (
    <div className={`${styles.footerMainBoxUpper1}`} style={{ marginBottom: "3rem" }}>
      <div className={`${styles.footerHeadAndIconBox}`}>
        <div>
          <span className={`${styles.footerUpperPartHeading} font2 blueTextGlobalClass`}>
            "{text1} {text2}<span className="font1" style={{ color: "black", fontWeight: "600" }}>{text3}"</span>
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
        <img style={{ width: "100%" }} src={img?.src || img} alt="eice technology" />
      </div>
    </div>
  );
}
