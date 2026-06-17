import Wifi from "../../../../src/Rise/Pages/InsidePages/Wifi";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Wi-Fi Module | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel guest Wi-Fi with EICE Rise Wi-Fi Module â€” bandwidth control, guest authentication, usage monitoring, and revenue generation from internet services.",
  keywords: ["Wi-Fi Module", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Wi-Fi Module | EICE Rise Hospitality ERP",
    description: "Manage hotel guest Wi-Fi with EICE Rise Wi-Fi Module â€” bandwidth control, guest authentication, usage monitoring, and revenue generation from internet services.",
    url: "https://www.eicetechnology.com/products/eice-rise/wifi",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Wi-Fi Module | EICE Rise Hospitality ERP", description: "Manage hotel guest Wi-Fi with EICE Rise Wi-Fi Module â€” bandwidth control, guest authentication, usage monitoring, and revenue generation from internet services." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/wifi/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/wifi/", "en-US": "https://www.eicetechnology.com/products/eice-rise/wifi/", "x-default": "https://www.eicetechnology.com/products/eice-rise/wifi/" } },
};


export default function Page() {
  return (
    <>
      <Wifi />
      <ProductFooter />
      <Copyright />
    </>
  );
}


