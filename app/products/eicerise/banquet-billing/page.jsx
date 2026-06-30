import BanquetAnsBilling from "../../../../src/Rise/Pages/InsidePages/BanquetAnsBilling";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Banquet & Billing | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage banquet hall bookings, event billing, and catering operations with EICE Rise Banquet module  end-to-end event management for hotels and resorts.",
  keywords: ["Banquet & Billing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Banquet & Billing | EICE Rise Hospitality ERP",
    description: "Manage banquet hall bookings, event billing, and catering operations with EICE Rise Banquet module  end-to-end event management for hotels and resorts.",
    url: "https://www.eicetechnology.com/products/eicerise/banquet-billing",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Banquet & Billing | EICE Rise Hospitality ERP", description: "Manage banquet hall bookings, event billing, and catering operations with EICE Rise Banquet module  end-to-end event management for hotels and resorts." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/banquet-billing/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/banquet-billing/", "en-US": "https://www.eicetechnology.com/products/eicerise/banquet-billing/", "x-default": "https://www.eicetechnology.com/products/eicerise/banquet-billing/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Banquet & Billing" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BanquetAnsBilling />
      <ProductFooter />
      <Copyright />
    </>
  );
}


