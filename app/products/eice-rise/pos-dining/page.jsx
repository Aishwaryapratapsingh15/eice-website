import Pos from "../../../../src/Rise/Pages/InsidePages/Pos";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "POS & Dining | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage restaurant and hotel dining operations with EICE Rise POS module  order management, kitchen display, table billing, and menu configuration for F&B excellence.",
  keywords: ["POS & Dining", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "POS & Dining | EICE Rise Hospitality ERP",
    description: "Manage restaurant and hotel dining operations with EICE Rise POS module  order management, kitchen display, table billing, and menu configuration for F&B excellence.",
    url: "https://www.eicetechnology.com/products/eice-rise/pos-dining",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "POS & Dining | EICE Rise Hospitality ERP", description: "Manage restaurant and hotel dining operations with EICE Rise POS module  order management, kitchen display, table billing, and menu configuration for F&B excellence." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/pos-dining/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/pos-dining/", "en-US": "https://www.eicetechnology.com/products/eice-rise/pos-dining/", "x-default": "https://www.eicetechnology.com/products/eice-rise/pos-dining/" } },
};


export default function Page() {
  return (
    <>
      <Pos />
      <ProductFooter />
      <Copyright />
    </>
  );
}


