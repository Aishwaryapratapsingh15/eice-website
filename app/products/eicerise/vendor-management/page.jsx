import VendorManagement from "../../../../src/Rise/Pages/InsidePages/VendorManagement";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Vendor Management | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel vendor relationships with EICE Rise Vendor Management  vendor onboarding, performance rating, contract management, and compliance tracking.",
  keywords: ["Vendor Management", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Vendor Management | EICE Rise Hospitality ERP",
    description: "Manage hotel vendor relationships with EICE Rise Vendor Management  vendor onboarding, performance rating, contract management, and compliance tracking.",
    url: "https://www.eicetechnology.com/products/eicerise/vendor-management",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Vendor Management | EICE Rise Hospitality ERP", description: "Manage hotel vendor relationships with EICE Rise Vendor Management  vendor onboarding, performance rating, contract management, and compliance tracking." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/vendor-management", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/vendor-management", "en-US": "https://www.eicetechnology.com/products/eicerise/vendor-management", "x-default": "https://www.eicetechnology.com/products/eicerise/vendor-management" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Vendor Management" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VendorManagement />
      <ProductFooter />
      <Copyright />
    </>
  );
}


