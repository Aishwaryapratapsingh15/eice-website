import IIC from "../../../../src/Rise/Pages/CaseStudy/IIC/IIC";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "IIC Case Study | EICE Rise Success Story | EICE Technology",
  description: "See how EICE Rise delivered end-to-end hospitality ERP implementation for IIC  streamlining operations, improving guest experience, and driving revenue growth.",
  keywords: ["IIC Case Study", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "IIC Case Study | EICE Rise Success Story",
    description: "See how EICE Rise delivered end-to-end hospitality ERP implementation for IIC  streamlining operations, improving guest experience, and driving revenue growth.",
    url: "https://www.eicetechnology.com/products/eicerise/iic",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "IIC Case Study | EICE Rise Success Story", description: "See how EICE Rise delivered end-to-end hospitality ERP implementation for IIC  streamlining operations, improving guest experience, and driving revenue growth." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/iic/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/iic/", "en-US": "https://www.eicetechnology.com/products/eicerise/iic/", "x-default": "https://www.eicetechnology.com/products/eicerise/iic/" } },
};


export default function Page() {
  return (
    <>
      <IIC />
      <ProductFooter />
      <Copyright />
    </>
  );
}


