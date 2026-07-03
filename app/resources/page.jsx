import Resourcesmain from "../../src/Othercomps/Resourcesmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";




export  async function generateMetadata() {
 const title= "Resources & Guides | IT, AI & Logistics Insights — EICE Technology";
  const description= "Explore EICE Technology's resource hub: guides, case studies, whitepapers and blogs on AI agents, hospitality ERP, logistics software and more.";
  
  return {
    title,
    description,
    keywords: ["EICE Technology resources"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/resources", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/resources/", languages: { "en-IN": "https://www.eicetechnology.com/resources/", "en-US": "https://www.eicetechnology.com/resources/", "x-default": "https://www.eicetechnology.com/resources/" } },
};}


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Resources" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Resources | EICE Technology",
    "url": "https://www.eicetechnology.com/resources/",
    "description": "Explore EICE Technology's resources including case studies, whitepapers, and insights on AI/ML, cloud computing, IoT, and digital transformation.",
    "publisher": {
      "@type": "Organization",
      "name": "EICE Technology",
      "url": "https://www.eicetechnology.com"
    }
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Resourcesmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}
