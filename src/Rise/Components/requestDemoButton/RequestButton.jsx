import styles from "./requestButton.module.css"
import { Link } from '@/nextNavigation'

export default function RequestButton() {
  return (
    <>

    <div style={{display : "flex" , flexDirection : "column" }}>

        
            <div className={`${styles.requestDemoBtnSideBar} font1`}>
                <Link style={{ color: "white" }} className="linkClass" to={"/products/eicerise/form?product=EiceRise"}>
                    <div className={`${styles.demoButtonSideBar}`}>
                        Request for Demo
                    </div>
                </Link>
            </div>

             {/* <div className={`${styles.requestDemoBtnSideBar} font1`}>
                <Link style={{ color: "white" }} target='_blank' className="linkClass" to={"https://onelogin.eicetechnology.com/"}>
                    <div className={`${styles.demoButtonSideBar}`}>
                        Application Login
                    </div>
                </Link>
            </div> */}

    </div>
        </>
  )
}

