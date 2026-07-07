import Indusmain from "../../src/Allindus/Indusmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Industries We Serve | Sector-Specific IT Solutions | EICE Technology",
  description: "EICE Technology delivers tailored IT solutions across healthcare, oil & gas, financial services, education, legal, logistics, and digital media sectors.",
  keywords: ["IT industry solutions", "healthcare IT", "oil and gas software", "fintech", "education technology", "logistics software", "legaltech", "EICE Technology"],
  openGraph: { title: "Industries | EICE Technology", description: "Sector-specific IT solutions across 8+ industries.", url: "https://www.eicetechnology.com/industries", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title: "Industries | EICE Technology" },
  alternates: { canonical: "https://www.eicetechnology.com/industries", languages: { "en-IN": "https://www.eicetechnology.com/industries/", "en-US": "https://www.eicetechnology.com/industries/", "x-default": "https://www.eicetechnology.com/industries/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industries We Serve",
    "description": "EICE Technology delivers tailored IT solutions across healthcare, oil & gas, financial services, education, legal, logistics, and digital media sectors.",
    "url": "https://www.eicetechnology.com/industries/",
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" }
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Indusmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}
