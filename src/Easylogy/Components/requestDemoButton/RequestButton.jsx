import styles from "./requestButton.module.css"
import { Link } from '@/nextNavigation'

export default function RequestButton() {
  return (
    <>
            <div className={`${styles.requestDemoBtnSideBar} font1`}>
                <Link style={{ color: "white" }} className="linkClass" to={"/products/eicerise/form?product=Easylogy"}>
                    <div className={`${styles.demoButtonSideBar}`}>
                        Request for Demo
                    </div>
                </Link>
            </div>
        </>
  )
}

