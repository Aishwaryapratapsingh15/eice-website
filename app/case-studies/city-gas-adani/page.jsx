import CityGasAdani from "../../../src/Cstudies/CityGasAdani";

export const metadata = {
  title: "City Gas Adani Case Study | Smart Gas Distribution | EICE Technology",
  description: "How EICE Technology partnered with City Gas Adani to implement a smart gas distribution management system, improving safety and operational efficiency.",
  keywords: ["smart gas distribution", "gas management system", "energy software", "EICE Technology"],
  openGraph: {
    title: "City Gas Adani Case Study | Smart Gas Distribution | EICE Technology",
    description: "How EICE Technology partnered with City Gas Adani to implement a smart gas distribution management system, improving safety and operational efficiency.",
    url: "https://www.eicetechnology.com/case-studies/city-gas-adani",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "City Gas Adani Case Study | Smart Gas Distribution | EICE Technology", description: "How EICE Technology partnered with City Gas Adani to implement a smart gas distribution management system, improving safety and operational efficiency." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/city-gas-adani/", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/city-gas-adani/", "en-US": "https://www.eicetechnology.com/case-studies/city-gas-adani/", "x-default": "https://www.eicetechnology.com/case-studies/city-gas-adani/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "City Gas Adani" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "City Gas Adani Case Study",
  "description": "Smart gas distribution management system improving safety and operational efficiency for City Gas Adani.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/city-gas-adani"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityGasAdani />
    </>
  );
}



