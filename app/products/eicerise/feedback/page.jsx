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


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Guest Feedback" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Feedback />
      <ProductFooter />
      <Copyright />
    </>
  );
}


