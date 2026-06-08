import Indusmain from "../../src/Allindus/Indusmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Industries We Serve | Sector-Specific IT Solutions | EICE Technology",
  description: "EICE Technology delivers tailored IT solutions across healthcare, oil & gas, financial services, education, legal, logistics, and digital media sectors.",
  openGraph: { title: "Industries | EICE Technology", description: "Sector-specific IT solutions across 8+ industries.", url: "https://www.eicetechnology.com/industries", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title: "Industries | EICE Technology" },
  alternates: { canonical: "https://www.eicetechnology.com/industries" },
};

export default function Page() {
  return (
    <>
      <Indusmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}