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
  return (
    <>
      {/* Option A type scale fonts (General Sans + Inter), loaded here so
          individual Rise pages can opt into them per element without
          affecting the default Poppins scope below. */}
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
      />

      <div className={`${poppins.variable} rise-font-scope`}>{children}</div>
    </>
  );
}
