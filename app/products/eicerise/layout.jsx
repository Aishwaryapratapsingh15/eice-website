import "../../../src/Rise/index.css";
import "../../../src/Rise/App.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RiseLayout({ children }) {
  return <div className={`${poppins.variable} rise-font-scope`}>{children}</div>;
}
