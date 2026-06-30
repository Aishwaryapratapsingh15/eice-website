import AboutUs from "../../../../src/Rise/Pages/NavigationBarPages/AboutUs";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "About EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
  description: "Learn about EICE Rise  EICE Technology's comprehensive hospitality ERP platform built for hotels, resorts, clubs, and institutions to streamline all operations.",
  keywords: ["About EICE Rise", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "About EICE Rise | Hotel & Hospitality ERP System",
    description: "Learn about EICE Rise  EICE Technology's comprehensive hospitality ERP platform built for hotels, resorts, clubs, and institutions to streamline all operations.",
    url: "https://www.eicetechnology.com/products/eicerise/about",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "About EICE Rise | Hotel & Hospitality ERP System", description: "Learn about EICE Rise  EICE Technology's comprehensive hospitality ERP platform built for hotels, resorts, clubs, and institutions to streamline all operations." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/about/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/about/", "en-US": "https://www.eicetechnology.com/products/eicerise/about/", "x-default": "https://www.eicetechnology.com/products/eicerise/about/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "About EiceRise" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutUs />
      <ProductFooter />
      <Copyright />
    </>
  );
}


