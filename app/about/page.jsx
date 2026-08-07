import Company from "../../src/Aboutcomponents/Company";
import Workflow from "../../src/Aboutcomponents/Workflow";
import Scopes from "../../src/Aboutcomponents/Scopes";
import Certificate from "../../src/Homecomps/Certificate";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export  async function generateMetadata() {
 const title= "About EICE Technology — Our Company & Mission | India IT Firm";
  const description= "Learn about EICE Technology — a Noida-based IT company building AI, ERP and logistics software for Indian enterprises. Meet our team and vision.";
  
  return {
    title,
    description,
    keywords: ["EICE Technology", "IT company", "software development company", "global IT services", "about EICE", "IT firm since 2010"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/about", siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/about", languages: { "en-IN": "https://www.eicetechnology.com/about", "en-US": "https://www.eicetechnology.com/about", "x-default": "https://www.eicetechnology.com/about" } },
};}

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "AboutPage",
//   "name": "About EICE Technology",
//   "url": "https://www.eicetechnology.com/about",
//   "description": "EICE Technology is a global IT services company founded in 2010 with 200+ professionals delivering 180+ projects across 10+ countries.",
//   "publisher": {
//     "@type": "Organization",
//     "name": "EICE Technology",
//     "url": "https://www.eicetechnology.com",
//     "foundingDate": "2010",
//     "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
//     "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" }
//   }
// };

const jsonLd=[{"@context":"https://schema.org","@type":"AboutPage","name":"About EICE Technology — Our Company & Mission | India IT Firm","url":"https://www.eicetechnology.com/about-us/our-company","description":"EICE Technology is a Noida-based IT company...","publisher":{"@type":"Organization","name":"EICE Technology"}}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
