import ComplianceRegister from "../../../../src/Rise/Pages/InsidePages/ComplianceRegister";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Compliance Register | EICE Rise Hospitality ERP | EICE Technology",
  description: "Track hotel compliance tasks with EICE Rise Compliance Register  task assignment, progress monitoring, SLA management, and audit-ready documentation.",
  keywords: ["Compliance Register", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Compliance Register | EICE Rise Hospitality ERP",
    description: "Track hotel compliance tasks with EICE Rise Compliance Register  task assignment, progress monitoring, SLA management, and audit-ready documentation.",
    url: "https://www.eicetechnology.com/products/eicerise/compliance-register",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Compliance Register | EICE Rise Hospitality ERP", description: "Track hotel compliance tasks with EICE Rise Compliance Register  task assignment, progress monitoring, SLA management, and audit-ready documentation." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/compliance-register", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/compliance-register", "en-US": "https://www.eicetechnology.com/products/eicerise/compliance-register", "x-default": "https://www.eicetechnology.com/products/eicerise/compliance-register" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Compliance Register" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComplianceRegister />
      <ProductFooter />
      <Copyright />
    </>
  );
}


