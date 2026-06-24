import UserAndInventry from "../../../../src/Rise/Pages/InsidePages/UserAndInventry";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "User Store & Inventory | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel inventory with EICE Rise User Store & Inventory module  stock control, consumption tracking, reorder alerts, and multi-store management.",
  keywords: ["User Store & Inventory", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "User Store & Inventory | EICE Rise Hospitality ERP",
    description: "Manage hotel inventory with EICE Rise User Store & Inventory module  stock control, consumption tracking, reorder alerts, and multi-store management.",
    url: "https://www.eicetechnology.com/products/eicerise/userstore-inventry",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "User Store & Inventory | EICE Rise Hospitality ERP", description: "Manage hotel inventory with EICE Rise User Store & Inventory module  stock control, consumption tracking, reorder alerts, and multi-store management." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/userstore-inventry/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/userstore-inventry/", "en-US": "https://www.eicetechnology.com/products/eicerise/userstore-inventry/", "x-default": "https://www.eicetechnology.com/products/eicerise/userstore-inventry/" } },
};


export default function Page() {
  return (
    <>
      <UserAndInventry />
      <ProductFooter />
      <Copyright />
    </>
  );
}


