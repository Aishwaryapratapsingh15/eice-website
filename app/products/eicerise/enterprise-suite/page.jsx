import Enterprise from "../../../../src/Rise/Pages/PricePages/Enterprise";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Enterprise Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Enterprise Suite  comprehensive hospitality ERP for large hotel groups with all modules including room booking, POS, payroll, and advanced analytics.",
  keywords: ["Enterprise Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Enterprise Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Enterprise Suite  comprehensive hospitality ERP for large hotel groups with all modules including room booking, POS, payroll, and advanced analytics.",
    url: "https://www.eicetechnology.com/products/eicerise/enterprise-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Enterprise Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Enterprise Suite  comprehensive hospitality ERP for large hotel groups with all modules including room booking, POS, payroll, and advanced analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/enterprise-suite/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/enterprise-suite/", "en-US": "https://www.eicetechnology.com/products/eicerise/enterprise-suite/", "x-default": "https://www.eicetechnology.com/products/eicerise/enterprise-suite/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Enterprise Suite" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Enterprise />
      <ProductFooter />
      <Copyright />
    </>
  );
}


