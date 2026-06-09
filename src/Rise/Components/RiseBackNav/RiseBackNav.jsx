import { Link } from "/src/nextNavigation";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function RiseBackNav({ label = "EICE Rise" }) {
  return (
    <div style={{
      position: "fixed",
      top: "72px",
      left: "0",
      right: "0",
      zIndex: "20",
      background: "#012060",
      padding: "8px 24px",
      display: "flex",
      alignItems: "center",
    }}>
      <Link to="/products/eice-rise" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "500" }}>
        <FaArrowLeftLong />
        Back to {label}
      </Link>
    </div>
  );
}
