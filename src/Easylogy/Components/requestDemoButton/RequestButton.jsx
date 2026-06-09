import styles from "./requestButton.module.css"
import { Link } from '/src/nextNavigation'

export default function RequestButton() {
  return (
    <>
            <div className={`${styles.requestDemoBtnSideBar} font1`}>
                <Link style={{ color: "white" }} className="linkClass" to={"https://www.eicetechnology.com/Contact"}>
                    <div className={`${styles.demoButtonSideBar}`}>
                        Request for Demo
                    </div>
                </Link>
            </div>
        </>
  )
}

