import FrontDesk from "../../../../src/Rise/Pages/PricePages/FrontDesk";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Front Desk Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "EICE Rise Front Desk Suite — hotel reception management with room booking, check-in/check-out, guest profiles, and real-time availability dashboard.",
  openGraph: {
    title: "Front Desk Suite Pricing | EICE Rise Hospitality ERP",
    description: "EICE Rise Front Desk Suite — hotel reception management with room booking, check-in/check-out, guest profiles, and real-time availability dashboard.",
    url: "https://www.eicetechnology.com/products/eice-rise/frontdesk-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Front Desk Suite Pricing | EICE Rise Hospitality ERP", description: "EICE Rise Front Desk Suite — hotel reception management with room booking, check-in/check-out, guest profiles, and real-time availability dashboard." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/frontdesk-suite" },
};


export default function Page() {
  return (
    <>
      <FrontDesk />
      <ProductFooter />
      <Copyright />
    </>
  );
}
