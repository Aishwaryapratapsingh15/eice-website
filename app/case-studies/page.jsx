import Cstdmain from "../../src/Cstudies/Cstdmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Case Studies | IT Project Success Stories | EICE Technology",
  description: "Explore EICE Technology's portfolio of 180+ successful IT projects through detailed case studies across oil & gas, healthcare, finance, and more.",
  openGraph: { title: "Case Studies | EICE Technology", description: "180+ successful IT project case studies from EICE Technology.", url: "https://www.eicetechnology.com/case-studies", siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/casestudy.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Case Studies | EICE Technology" ,
    images: ["/assets/Compressed/casestudy.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/case-studies" },
};

export default function Page() {
  return (
    <>
      <Cstdmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}