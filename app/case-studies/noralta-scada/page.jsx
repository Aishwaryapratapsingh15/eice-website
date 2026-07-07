import ScadaNoralta from "../../../src/Cstudies/ScadaNoralta";

export const metadata = {
  title: "Noralta SCADA Case Study | Industrial Control System | EICE Technology",
  description: "EICE Technology's SCADA implementation for Noralta: a robust industrial control system enabling real-time monitoring and control of field operations.",
  keywords: ["SCADA system", "industrial control", "field operations", "Noralta", "EICE Technology"],
  openGraph: {
    title: "Noralta SCADA Case Study | Industrial Control System | EICE Technology",
    description: "EICE Technology's SCADA implementation for Noralta: a robust industrial control system enabling real-time monitoring and control of field operations.",
    url: "https://www.eicetechnology.com/case-studies/noralta-scada",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Noralta SCADA Case Study | Industrial Control System | EICE Technology", description: "EICE Technology's SCADA implementation for Noralta: a robust industrial control system enabling real-time monitoring and control of field operations." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/noralta-scada", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/noralta-scada/", "en-US": "https://www.eicetechnology.com/case-studies/noralta-scada/", "x-default": "https://www.eicetechnology.com/case-studies/noralta-scada/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Noralta SCADA" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Noralta SCADA Case Study",
  "description": "Robust industrial control system enabling real-time monitoring and control of field operations for Noralta.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/noralta-scada"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScadaNoralta />
    </>
  );
}



