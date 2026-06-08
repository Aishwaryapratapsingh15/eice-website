import HospitalityPage from "../../../src/Easylogy/Pages/HospitalityPage/HospitalityPage";
import ProductFooter from "../../../src/Product/ProductFooter";
import Copyright from "../../../src/Othercomps/Copyright";

export const metadata = {
  title: "EasyLogy | Logistics Management & Tracking Software | EICE Technology",
  description: "EasyLogy simplifies logistics operations with end-to-end shipment tracking, route optimization, and supply chain visibility for logistics businesses.",
  openGraph: {
    title: "EasyLogy | Logistics Management & Tracking Software | EICE Technology",
    description: "EasyLogy simplifies logistics operations with end-to-end shipment tracking, route optimization, and supply chain visibility for logistics businesses.",
    url: "https://www.eicetechnology.com/products/easy-logy",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EasyLogy | Logistics Management & Tracking Software | EICE Technology" ,
    images: ["/assets/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/products/easy-logy" },
};

export default function Page() {
  return (
    <>
      <HospitalityPage />
      <ProductFooter />
      <Copyright />
    </>
  );
}
