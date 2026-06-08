import BanquetAnsBilling from "../../../../src/Rise/Pages/InsidePages/BanquetAnsBilling";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Banquet & Billing | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage banquet hall bookings, event billing, and catering operations with EICE Rise Banquet module — end-to-end event management for hotels and resorts.",
  openGraph: {
    title: "Banquet & Billing | EICE Rise Hospitality ERP",
    description: "Manage banquet hall bookings, event billing, and catering operations with EICE Rise Banquet module — end-to-end event management for hotels and resorts.",
    url: "https://www.eicetechnology.com/products/eice-rise/banquet-billing",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Banquet & Billing | EICE Rise Hospitality ERP", description: "Manage banquet hall bookings, event billing, and catering operations with EICE Rise Banquet module — end-to-end event management for hotels and resorts." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/banquet-billing" },
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
