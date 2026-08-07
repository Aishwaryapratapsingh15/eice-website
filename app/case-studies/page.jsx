import Cstdmain from "../../src/Cstudies/Cstdmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Case Studies | IT Project Success Stories | EICE Technology",
  description: "Explore EICE Technology's portfolio of 180+ successful IT projects through detailed case studies across oil & gas, healthcare, finance, and more.",
  keywords: ["IT case studies", "software project portfolio", "digital transformation success stories", "EICE Technology projects", "IT success stories"],
  openGraph: { title: "Case Studies | EICE Technology", description: "180+ successful IT project case studies from EICE Technology.", url: "https://www.eicetechnology.com/case-studies", siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/casestudy.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Case Studies | EICE Technology" ,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/casestudy.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/case-studies", languages: { "en-IN": "https://www.eicetechnology.com/case-studies", "en-US": "https://www.eicetechnology.com/case-studies", "x-default": "https://www.eicetechnology.com/case-studies" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies",
    "description": "Explore EICE Technology's portfolio of 180+ successful IT projects through detailed case studies across oil & gas, healthcare, finance, and more.",
    "url": "https://www.eicetechnology.com/case-studies",
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" }
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Cstdmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}
