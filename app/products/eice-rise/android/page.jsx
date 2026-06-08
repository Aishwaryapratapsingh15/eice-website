import Android from "../../../../src/Rise/Pages/CaseStudy/Android/Android";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Android Case Study | EICE Rise Success Story | EICE Technology",
  description: "Explore how EICE Rise transformed mobile operations for hospitality clients — a real-world case study demonstrating the power of integrated hotel management software.",
  openGraph: {
    title: "Android Case Study | EICE Rise Success Story",
    description: "Explore how EICE Rise transformed mobile operations for hospitality clients — a real-world case study demonstrating the power of integrated hotel management software.",
    url: "https://www.eicetechnology.com/products/eice-rise/android",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Android Case Study | EICE Rise Success Story", description: "Explore how EICE Rise transformed mobile operations for hospitality clients — a real-world case study demonstrating the power of integrated hotel management software." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/android" },
};


export default function Page() {
  return (
    <>
      <Android />
      <ProductFooter />
      <Copyright />
    </>
  );
}
