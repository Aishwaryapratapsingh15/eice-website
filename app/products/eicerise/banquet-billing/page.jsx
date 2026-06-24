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


export default function Page() {
  return (
    <>
      <BanquetAnsBilling />
      <ProductFooter />
      <Copyright />
    </>
  );
}


