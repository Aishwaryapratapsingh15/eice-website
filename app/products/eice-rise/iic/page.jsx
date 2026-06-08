import IIC from "../../../../src/Rise/Pages/CaseStudy/IIC/IIC";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "IIC Case Study | EICE Rise Success Story | EICE Technology",
  description: "See how EICE Rise delivered end-to-end hospitality ERP implementation for IIC — streamlining operations, improving guest experience, and driving revenue growth.",
  openGraph: {
    title: "IIC Case Study | EICE Rise Success Story",
    description: "See how EICE Rise delivered end-to-end hospitality ERP implementation for IIC — streamlining operations, improving guest experience, and driving revenue growth.",
    url: "https://www.eicetechnology.com/products/eice-rise/iic",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "IIC Case Study | EICE Rise Success Story", description: "See how EICE Rise delivered end-to-end hospitality ERP implementation for IIC — streamlining operations, improving guest experience, and driving revenue growth." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/iic" },
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
