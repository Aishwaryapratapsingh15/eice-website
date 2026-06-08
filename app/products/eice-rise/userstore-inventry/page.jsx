import UserAndInventry from "../../../../src/Rise/Pages/InsidePages/UserAndInventry";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "User Store & Inventory | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel inventory with EICE Rise User Store & Inventory module — stock control, consumption tracking, reorder alerts, and multi-store management.",
  openGraph: {
    title: "User Store & Inventory | EICE Rise Hospitality ERP",
    description: "Manage hotel inventory with EICE Rise User Store & Inventory module — stock control, consumption tracking, reorder alerts, and multi-store management.",
    url: "https://www.eicetechnology.com/products/eice-rise/userstore-inventry",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "User Store & Inventory | EICE Rise Hospitality ERP", description: "Manage hotel inventory with EICE Rise User Store & Inventory module — stock control, consumption tracking, reorder alerts, and multi-store management." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/userstore-inventry" },
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
