import PurchaseAndVendor from "../../../../src/Rise/Pages/InsidePages/PurchaseAndVendor";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Purchase & Vendor Portal | EICE Rise Hospitality ERP | EICE Technology",
  description: "Streamline hotel procurement with EICE Rise Purchase & Vendor module  purchase orders, vendor management, GRN tracking, and supply chain visibility.",
  keywords: ["Purchase & Vendor Portal", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Purchase & Vendor Portal | EICE Rise Hospitality ERP",
    description: "Streamline hotel procurement with EICE Rise Purchase & Vendor module  purchase orders, vendor management, GRN tracking, and supply chain visibility.",
    url: "https://www.eicetechnology.com/products/eicerise/purchase-vendor",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Purchase & Vendor Portal | EICE Rise Hospitality ERP", description: "Streamline hotel procurement with EICE Rise Purchase & Vendor module  purchase orders, vendor management, GRN tracking, and supply chain visibility." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/purchase-vendor", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/purchase-vendor/", "en-US": "https://www.eicetechnology.com/products/eicerise/purchase-vendor/", "x-default": "https://www.eicetechnology.com/products/eicerise/purchase-vendor/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Purchase & Vendor" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PurchaseAndVendor />
      <ProductFooter />
      <Copyright />
    </>
  );
}


