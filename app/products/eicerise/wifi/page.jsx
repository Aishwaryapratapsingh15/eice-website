import Wifi from "../../../../src/Rise/Pages/InsidePages/Wifi";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Wi-Fi Module | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel guest Wi-Fi with EICE Rise Wi-Fi Module  bandwidth control, guest authentication, usage monitoring, and revenue generation from internet services.",
  keywords: ["Wi-Fi Module", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Wi-Fi Module | EICE Rise Hospitality ERP",
    description: "Manage hotel guest Wi-Fi with EICE Rise Wi-Fi Module  bandwidth control, guest authentication, usage monitoring, and revenue generation from internet services.",
    url: "https://www.eicetechnology.com/products/eicerise/wifi",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Wi-Fi Module | EICE Rise Hospitality ERP", description: "Manage hotel guest Wi-Fi with EICE Rise Wi-Fi Module  bandwidth control, guest authentication, usage monitoring, and revenue generation from internet services." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/wifi", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/wifi", "en-US": "https://www.eicetechnology.com/products/eicerise/wifi", "x-default": "https://www.eicetechnology.com/products/eicerise/wifi" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "WiFi Management" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Wifi />
      <ProductFooter />
      <Copyright />
    </>
  );
}


