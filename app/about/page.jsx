import Company from "../../src/Aboutcomponents/Company";
import Workflow from "../../src/Aboutcomponents/Workflow";
import Scopes from "../../src/Aboutcomponents/Scopes";
import Certificate from "../../src/Homecomps/Certificate";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "About EICE Technology | Global IT Services Company Since 2010",
  description: "Learn about EICE Technology, a global IT services company with 200+ professionals delivering 180+ projects across 10+ countries since 2010.",
  openGraph: { title: "About EICE Technology | Global IT Services Since 2010", description: "Global IT firm with 200+ professionals, 180+ projects, 10+ countries.", url: "https://www.eicetechnology.com/about", siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "About EICE Technology" ,
    images: ["/assets/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/about" },
};

export default function Page() {
  return (
    <>
      <Company />
      <Workflow />
      <Scopes />
      <Certificate />
      <div style={{ marginBottom: "100px" }}></div>
      <ProductFooter />
      <Copyright />
    </>
  );
}