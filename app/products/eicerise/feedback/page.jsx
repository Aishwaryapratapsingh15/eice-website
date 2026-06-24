import Feedback from "../../../../src/Rise/Pages/InsidePages/Feedback";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Feedback System | EICE Rise Hospitality ERP | EICE Technology",
  description: "Capture and analyze guest feedback with EICE Rise Feedback System  real-time sentiment analysis, department-wise routing, and service recovery workflows.",
  keywords: ["Feedback System", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Feedback System | EICE Rise Hospitality ERP",
    description: "Capture and analyze guest feedback with EICE Rise Feedback System  real-time sentiment analysis, department-wise routing, and service recovery workflows.",
    url: "https://www.eicetechnology.com/products/eicerise/feedback",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Feedback System | EICE Rise Hospitality ERP", description: "Capture and analyze guest feedback with EICE Rise Feedback System  real-time sentiment analysis, department-wise routing, and service recovery workflows." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/feedback/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/feedback/", "en-US": "https://www.eicetechnology.com/products/eicerise/feedback/", "x-default": "https://www.eicetechnology.com/products/eicerise/feedback/" } },
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


