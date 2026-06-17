import Durgabari from "../../../../src/Rise/Pages/CaseStudy/Durgabari/Durgabari";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Houston Durga Bari Society | EICE Rise Case Study | EICE Technology",
  description: "Discover how EICE Rise empowered the Houston Durga Bari Society with digital transformation â€” member portal, event management, and financial automation.",
  keywords: ["Houston Durga Bari Society", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Houston Durga Bari Society | EICE Rise Case Study",
    description: "Discover how EICE Rise empowered the Houston Durga Bari Society with digital transformation â€” member portal, event management, and financial automation.",
    url: "https://www.eicetechnology.com/products/eice-rise/durgabari",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Houston Durga Bari Society | EICE Rise Case Study", description: "Discover how EICE Rise empowered the Houston Durga Bari Society with digital transformation â€” member portal, event management, and financial automation." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/durgabari/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/durgabari/", "en-US": "https://www.eicetechnology.com/products/eice-rise/durgabari/", "x-default": "https://www.eicetechnology.com/products/eice-rise/durgabari/" } },
};


export default function Page() {
  return (
    <>
      <Durgabari />
      <ProductFooter />
      <Copyright />
    </>
  );
}


