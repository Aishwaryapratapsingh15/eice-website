import Banquet from "../../../../src/Rise/Pages/PricePages/Banquet";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Banquet Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Banquet Suite pricing  complete banquet and event management solution with venue booking, catering, billing, and event analytics.",
  keywords: ["Banquet Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Banquet Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Banquet Suite pricing  complete banquet and event management solution with venue booking, catering, billing, and event analytics.",
    url: "https://www.eicetechnology.com/products/eicerise/banquet-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Banquet Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Banquet Suite pricing  complete banquet and event management solution with venue booking, catering, billing, and event analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/banquet-suite", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/banquet-suite/", "en-US": "https://www.eicetechnology.com/products/eicerise/banquet-suite/", "x-default": "https://www.eicetechnology.com/products/eicerise/banquet-suite/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Banquet Suite" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Banquet />
      <ProductFooter />
      <Copyright />
    </>
  );
}


