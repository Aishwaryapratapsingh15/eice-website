import Feedback from "../../../../src/Rise/Pages/InsidePages/Feedback";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Feedback System | EICE Rise Hospitality ERP | EICE Technology",
  description: "Capture and analyze guest feedback with EICE Rise Feedback System — real-time sentiment analysis, department-wise routing, and service recovery workflows.",
  openGraph: {
    title: "Feedback System | EICE Rise Hospitality ERP",
    description: "Capture and analyze guest feedback with EICE Rise Feedback System — real-time sentiment analysis, department-wise routing, and service recovery workflows.",
    url: "https://www.eicetechnology.com/products/eice-rise/feedback",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Feedback System | EICE Rise Hospitality ERP", description: "Capture and analyze guest feedback with EICE Rise Feedback System — real-time sentiment analysis, department-wise routing, and service recovery workflows." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/feedback" },
};


export default function Page() {
  return (
    <>
      <Feedback />
      <ProductFooter />
      <Copyright />
    </>
  );
}
