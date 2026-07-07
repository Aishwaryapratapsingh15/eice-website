import Peep from "../../../src/Cstudies/Peep";

export const metadata = {
  title: "Schlumberger BAA Case Study | Business Analytics Platform | EICE Technology",
  description: "How EICE Technology built a business analytics platform for Schlumberger enabling data-driven decisions across global operations.",
  keywords: ["business analytics", "data analytics platform", "Schlumberger", "enterprise analytics", "EICE Technology"],
  openGraph: {
    title: "Schlumberger BAA Case Study | Business Analytics Platform | EICE Technology",
    description: "How EICE Technology built a business analytics platform for Schlumberger enabling data-driven decisions across global operations.",
    url: "https://www.eicetechnology.com/case-studies/schlumberger-baa",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Schlumberger BAA Case Study | Business Analytics Platform | EICE Technology", description: "How EICE Technology built a business analytics platform for Schlumberger enabling data-driven decisions across global operations." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/schlumberger-baa", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/schlumberger-baa/", "en-US": "https://www.eicetechnology.com/case-studies/schlumberger-baa/", "x-default": "https://www.eicetechnology.com/case-studies/schlumberger-baa/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Schlumberger BAA" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Schlumberger Business Analytics Case Study",
  "description": "Business analytics platform enabling data-driven decisions across global operations for Schlumberger.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/schlumberger-baa"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Peep />
    </>
  );
}



