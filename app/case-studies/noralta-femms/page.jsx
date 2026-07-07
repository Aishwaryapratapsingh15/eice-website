import NoraltaMath from "../../../src/Cstudies/NoraltaMath";

export const metadata = {
  title: "Noralta FEMMS Case Study | Field Equipment Management | EICE Technology",
  description: "EICE Technology's FEMMS for Noralta: a field equipment maintenance management system improving asset lifecycle and reducing maintenance costs.",
  keywords: ["field equipment management", "FEMMS", "asset maintenance", "Noralta", "EICE Technology"],
  openGraph: {
    title: "Noralta FEMMS Case Study | Field Equipment Management | EICE Technology",
    description: "EICE Technology's FEMMS for Noralta: a field equipment maintenance management system improving asset lifecycle and reducing maintenance costs.",
    url: "https://www.eicetechnology.com/case-studies/noralta-femms",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Noralta FEMMS Case Study | Field Equipment Management | EICE Technology", description: "EICE Technology's FEMMS for Noralta: a field equipment maintenance management system improving asset lifecycle and reducing maintenance costs." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/noralta-femms", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/noralta-femms/", "en-US": "https://www.eicetechnology.com/case-studies/noralta-femms/", "x-default": "https://www.eicetechnology.com/case-studies/noralta-femms/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Noralta FEMMS" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Noralta FEMMS Case Study",
  "description": "Field equipment maintenance management system improving asset lifecycle and reducing maintenance costs for Noralta.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/noralta-femms"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NoraltaMath />
    </>
  );
}



