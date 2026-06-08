import PosSuite from "../../../../src/Rise/Pages/PricePages/PosSuite";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "POS Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise POS Suite — restaurant and hotel dining management solution with table ordering, kitchen display, menu management, and billing integration.",
  openGraph: {
    title: "POS Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise POS Suite — restaurant and hotel dining management solution with table ordering, kitchen display, menu management, and billing integration.",
    url: "https://www.eicetechnology.com/products/eice-rise/pos-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "POS Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise POS Suite — restaurant and hotel dining management solution with table ordering, kitchen display, menu management, and billing integration." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/pos-suite" },
};


export default function Page() {
  return (
    <>
      <PosSuite />
      <ProductFooter />
      <Copyright />
    </>
  );
}
