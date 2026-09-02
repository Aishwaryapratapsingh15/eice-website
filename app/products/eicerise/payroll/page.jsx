import Payroll from "../../../../src/Rise/Pages/InsidePages/Payroll";
import ProductFooter from "../../../../src/Product/ProductFooter";

export const metadata = {
  title: "Payroll Management | EICE Rise Hospitality ERP | EICE Technology",
  description: "Automate hotel payroll with EICE Rise Payroll module  salary processing, statutory compliance, leave management, and seamless integration with HR and finance.",
  keywords: ["Payroll Management", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Payroll Management | EICE Rise Hospitality ERP",
    description: "Automate hotel payroll with EICE Rise Payroll module  salary processing, statutory compliance, leave management, and seamless integration with HR and finance.",
    url: "https://www.eicetechnology.com/products/eicerise/payroll",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Payroll Management | EICE Rise Hospitality ERP", description: "Automate hotel payroll with EICE Rise Payroll module  salary processing, statutory compliance, leave management, and seamless integration with HR and finance." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/payroll", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/payroll", "en-US": "https://www.eicetechnology.com/products/eicerise/payroll", "x-default": "https://www.eicetechnology.com/products/eicerise/payroll" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Payroll" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Payroll />
      <ProductFooter />
    </>
  );
}


