import AboutUs from "../../../../src/Rise/Pages/NavigationBarPages/AboutUs";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "About EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
  description: "Learn about EICE Rise â€” EICE Technology's comprehensive hospitality ERP platform built for hotels, resorts, clubs, and institutions to streamline all operations.",
  keywords: ["About EICE Rise", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "About EICE Rise | Hotel & Hospitality ERP System",
    description: "Learn about EICE Rise â€” EICE Technology's comprehensive hospitality ERP platform built for hotels, resorts, clubs, and institutions to streamline all operations.",
    url: "https://www.eicetechnology.com/products/eice-rise/about",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "About EICE Rise | Hotel & Hospitality ERP System", description: "Learn about EICE Rise â€” EICE Technology's comprehensive hospitality ERP platform built for hotels, resorts, clubs, and institutions to streamline all operations." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/about/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/about/", "en-US": "https://www.eicetechnology.com/products/eice-rise/about/", "x-default": "https://www.eicetechnology.com/products/eice-rise/about/" } },
};


export default function Page() {
  return (
    <>
      <AboutUs />
      <ProductFooter />
      <Copyright />
    </>
  );
}


