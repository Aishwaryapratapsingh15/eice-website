import Inventary from "../../../../src/Rise/Pages/PricePages/Inventary";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Inventory Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Inventory Suite pricing  complete inventory and procurement management for hotels, including purchase orders, GRN, and vendor management.",
  keywords: ["Inventory Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Inventory Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Inventory Suite pricing  complete inventory and procurement management for hotels, including purchase orders, GRN, and vendor management.",
    url: "https://www.eicetechnology.com/products/eice-rise/inventory-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Inventory Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Inventory Suite pricing  complete inventory and procurement management for hotels, including purchase orders, GRN, and vendor management." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/inventory-suite/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/inventory-suite/", "en-US": "https://www.eicetechnology.com/products/eice-rise/inventory-suite/", "x-default": "https://www.eicetechnology.com/products/eice-rise/inventory-suite/" } },
};


export default function Page() {
  return (
    <>
      <Inventary />
      <ProductFooter />
      <Copyright />
    </>
  );
}


