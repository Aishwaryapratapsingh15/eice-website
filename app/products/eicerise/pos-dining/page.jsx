import Pos from "../../../../src/Rise/Pages/InsidePages/Pos";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "POS & Dining | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage restaurant and hotel dining operations with EICE Rise POS module  order management, kitchen display, table billing, and menu configuration for F&B excellence.",
  keywords: ["POS & Dining", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "POS & Dining | EICE Rise Hospitality ERP",
    description: "Manage restaurant and hotel dining operations with EICE Rise POS module  order management, kitchen display, table billing, and menu configuration for F&B excellence.",
    url: "https://www.eicetechnology.com/products/eicerise/pos-dining",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "POS & Dining | EICE Rise Hospitality ERP", description: "Manage restaurant and hotel dining operations with EICE Rise POS module  order management, kitchen display, table billing, and menu configuration for F&B excellence." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/pos-dining/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/pos-dining/", "en-US": "https://www.eicetechnology.com/products/eicerise/pos-dining/", "x-default": "https://www.eicetechnology.com/products/eicerise/pos-dining/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "POS & Dining" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Pos />
      <ProductFooter />
      <Copyright />
    </>
  );
}


