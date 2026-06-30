import PosSuite from "../../../../src/Rise/Pages/PricePages/PosSuite";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "POS Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise POS Suite  restaurant and hotel dining management solution with table ordering, kitchen display, menu management, and billing integration.",
  keywords: ["POS Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "POS Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise POS Suite  restaurant and hotel dining management solution with table ordering, kitchen display, menu management, and billing integration.",
    url: "https://www.eicetechnology.com/products/eicerise/pos-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "POS Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise POS Suite  restaurant and hotel dining management solution with table ordering, kitchen display, menu management, and billing integration." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/pos-suite/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/pos-suite/", "en-US": "https://www.eicetechnology.com/products/eicerise/pos-suite/", "x-default": "https://www.eicetechnology.com/products/eicerise/pos-suite/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "POS Suite" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PosSuite />
      <ProductFooter />
      <Copyright />
    </>
  );
}


