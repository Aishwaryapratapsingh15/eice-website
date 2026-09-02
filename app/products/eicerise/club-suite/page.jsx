import Club from "../../../../src/Rise/Pages/PricePages/Club";
import ProductFooter from "../../../../src/Product/ProductFooter";

export const metadata = {
  title: "Club Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "Explore EICE Rise Club Suite pricing  modular hospitality ERP solution for clubs, with room booking, POS, member management, and finance modules.",
  keywords: ["Club Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Club Suite Pricing | EICE Rise Hospitality ERP",
    description: "Explore EICE Rise Club Suite pricing  modular hospitality ERP solution for clubs, with room booking, POS, member management, and finance modules.",
    url: "https://www.eicetechnology.com/products/eicerise/club-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Club Suite Pricing | EICE Rise Hospitality ERP", description: "Explore EICE Rise Club Suite pricing  modular hospitality ERP solution for clubs, with room booking, POS, member management, and finance modules." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/club-suite", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/club-suite", "en-US": "https://www.eicetechnology.com/products/eicerise/club-suite", "x-default": "https://www.eicetechnology.com/products/eicerise/club-suite" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Club Suite" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Club />
      <ProductFooter />
    </>
  );
}


