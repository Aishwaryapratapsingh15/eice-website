import Servmain from "../../src/Servcomps/Servmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "IT Services | AI/ML, Cloud, DevOps & More | EICE Technology",
  description: "Comprehensive IT services from EICE Technology: AI/ML, cloud computing, IoT, DevOps, web development, mobile apps, blockchain, and digital transformation.",
  keywords: ["IT services", "software development services", "AI ML", "cloud computing", "DevOps", "IoT", "blockchain", "digital transformation", "EICE Technology"],
  openGraph: { title: "IT Services | EICE Technology", description: "Full-spectrum IT services: AI, cloud, IoT, DevOps, web, mobile and more.", url: "https://www.eicetechnology.com/services", siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "IT Services | EICE Technology" ,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/", languages: { "en-IN": "https://www.eicetechnology.com/services/", "en-US": "https://www.eicetechnology.com/services/", "x-default": "https://www.eicetechnology.com/services/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "IT Services",
    "description": "Comprehensive IT services from EICE Technology: AI/ML, cloud computing, IoT, DevOps, web development, mobile apps, blockchain, and digital transformation.",
    "url": "https://www.eicetechnology.com/services/",
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" }
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Servmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}
