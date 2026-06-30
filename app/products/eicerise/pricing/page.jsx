import Pricing from "../../../../src/Rise/Pages/NavigationBarPages/Pricing";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Pricing | EICE Rise Hotel & Hospitality ERP | EICE Technology",
  description: "Explore EICE Rise pricing plans  flexible, modular hospitality ERP pricing for hotels, resorts, and clubs. Choose the right suite for your property size.",
  keywords: ["Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Pricing | EICE Rise Hotel & Hospitality ERP",
    description: "Explore EICE Rise pricing plans  flexible, modular hospitality ERP pricing for hotels, resorts, and clubs. Choose the right suite for your property size.",
    url: "https://www.eicetechnology.com/products/eicerise/pricing",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Pricing | EICE Rise Hotel & Hospitality ERP", description: "Explore EICE Rise pricing plans  flexible, modular hospitality ERP pricing for hotels, resorts, and clubs. Choose the right suite for your property size." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/pricing/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/pricing/", "en-US": "https://www.eicetechnology.com/products/eicerise/pricing/", "x-default": "https://www.eicetechnology.com/products/eicerise/pricing/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Pricing" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Pricing />
      <ProductFooter />
      <Copyright />
    </>
  );
}


