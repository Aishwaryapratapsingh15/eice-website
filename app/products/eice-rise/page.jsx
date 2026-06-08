import HospitalityPage from "../../../src/Rise/Pages/HospitalityPage/HospitalityPage";
import ProductFooter from "../../../src/Product/ProductFooter";
import Copyright from "../../../src/Othercomps/Copyright";

export const metadata = {
  title: "EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
  description: "Streamline hotel operations with EICE Rise, a comprehensive hospitality ERP platform. Manage reservations, billing, housekeeping and more.",
  openGraph: {
    title: "EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
    description: "Streamline hotel operations with EICE Rise, a comprehensive hospitality ERP platform. Manage reservations, billing, housekeeping and more.",
    url: "https://www.eicetechnology.com/products/eice-rise",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/casestudy.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
    images: ["/assets/Compressed/casestudy.png"], description: "Streamline hotel operations with EICE Rise, a comprehensive hospitality ERP platform. Manage reservations, billing, housekeeping and more." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise" },
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
