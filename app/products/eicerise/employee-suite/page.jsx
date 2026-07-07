import EmployeeSuite from "../../../../src/Rise/Pages/InsidePages/EmployeeSuite";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Employee Suite | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel staff with EICE Rise Employee Suite  attendance tracking, shift scheduling, payroll integration, and performance management for hospitality teams.",
  keywords: ["Employee Suite", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Employee Suite | EICE Rise Hospitality ERP",
    description: "Manage hotel staff with EICE Rise Employee Suite  attendance tracking, shift scheduling, payroll integration, and performance management for hospitality teams.",
    url: "https://www.eicetechnology.com/products/eicerise/employee-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Employee Suite | EICE Rise Hospitality ERP", description: "Manage hotel staff with EICE Rise Employee Suite  attendance tracking, shift scheduling, payroll integration, and performance management for hospitality teams." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/employee-suite", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/employee-suite/", "en-US": "https://www.eicetechnology.com/products/eicerise/employee-suite/", "x-default": "https://www.eicetechnology.com/products/eicerise/employee-suite/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Employee Suite" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EmployeeSuite />
      <ProductFooter />
      <Copyright />
    </>
  );
}


