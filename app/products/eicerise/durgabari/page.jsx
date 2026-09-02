import Durgabari from "../../../../src/Rise/Pages/CaseStudy/Durgabari/Durgabari";
import ProductFooter from "../../../../src/Product/ProductFooter";

export const metadata = {
  title: "Houston Durga Bari Society | EICE Rise Case Study | EICE Technology",
  description: "Discover how EICE Rise empowered the Houston Durga Bari Society with digital transformation  member portal, event management, and financial automation.",
  keywords: ["Houston Durga Bari Society", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Houston Durga Bari Society | EICE Rise Case Study",
    description: "Discover how EICE Rise empowered the Houston Durga Bari Society with digital transformation  member portal, event management, and financial automation.",
    url: "https://www.eicetechnology.com/products/eicerise/durgabari",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Houston Durga Bari Society | EICE Rise Case Study", description: "Discover how EICE Rise empowered the Houston Durga Bari Society with digital transformation  member portal, event management, and financial automation." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/durgabari", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/durgabari", "en-US": "https://www.eicetechnology.com/products/eicerise/durgabari", "x-default": "https://www.eicetechnology.com/products/eicerise/durgabari" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Durgabari" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Durgabari />
      <ProductFooter />
    </>
  );
}


