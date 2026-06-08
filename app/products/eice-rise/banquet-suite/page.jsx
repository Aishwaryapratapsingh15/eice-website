import Banquet from "../../../../src/Rise/Pages/PricePages/Banquet";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Banquet Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Banquet Suite pricing — complete banquet and event management solution with venue booking, catering, billing, and event analytics.",
  openGraph: {
    title: "Banquet Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Banquet Suite pricing — complete banquet and event management solution with venue booking, catering, billing, and event analytics.",
    url: "https://www.eicetechnology.com/products/eice-rise/banquet-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Banquet Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Banquet Suite pricing — complete banquet and event management solution with venue booking, catering, billing, and event analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/banquet-suite" },
};


export default function Page() {
  return (
    <>
      <Banquet />
      <ProductFooter />
      <Copyright />
    </>
  );
}
