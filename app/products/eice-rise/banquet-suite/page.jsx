import Banquet from "../../../../src/Rise/Pages/PricePages/Banquet";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Banquet Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Banquet Suite pricing â€” complete banquet and event management solution with venue booking, catering, billing, and event analytics.",
  keywords: ["Banquet Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Banquet Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Banquet Suite pricing â€” complete banquet and event management solution with venue booking, catering, billing, and event analytics.",
    url: "https://www.eicetechnology.com/products/eice-rise/banquet-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Banquet Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Banquet Suite pricing â€” complete banquet and event management solution with venue booking, catering, billing, and event analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/banquet-suite/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/banquet-suite/", "en-US": "https://www.eicetechnology.com/products/eice-rise/banquet-suite/", "x-default": "https://www.eicetechnology.com/products/eice-rise/banquet-suite/" } },
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


