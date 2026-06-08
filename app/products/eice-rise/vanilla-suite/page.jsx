import Vanilla from "../../../../src/Rise/Pages/PricePages/Vanilla";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Vanilla Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Vanilla Suite — essential hospitality ERP bundle with POS, banquet management, inventory tracking, and food cost analysis at an affordable price.",
  openGraph: {
    title: "Vanilla Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Vanilla Suite — essential hospitality ERP bundle with POS, banquet management, inventory tracking, and food cost analysis at an affordable price.",
    url: "https://www.eicetechnology.com/products/eice-rise/vanilla-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Vanilla Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Vanilla Suite — essential hospitality ERP bundle with POS, banquet management, inventory tracking, and food cost analysis at an affordable price." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/vanilla-suite" },
};


export default function Page() {
  return (
    <>
      <Vanilla />
      <ProductFooter />
      <Copyright />
    </>
  );
}
