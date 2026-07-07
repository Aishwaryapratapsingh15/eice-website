import EspctQuote from "../../../src/Cstudies/EspctQuote";

export const metadata = {
  title: "EspctQuote Case Study | Automated Quoting System | EICE Technology",
  description: "How EICE Technology built an automated quoting system that reduced quote generation time by 70% and improved accuracy for a global industrial client.",
  keywords: ["automated quoting", "quote generation", "sales automation", "ESPCT", "EICE Technology"],
  openGraph: {
    title: "EspctQuote Case Study | Automated Quoting System | EICE Technology",
    description: "How EICE Technology built an automated quoting system that reduced quote generation time by 70% and improved accuracy for a global industrial client.",
    url: "https://www.eicetechnology.com/case-studies/espct-quote",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EspctQuote Case Study | Automated Quoting System | EICE Technology", description: "How EICE Technology built an automated quoting system that reduced quote generation time by 70% and improved accuracy for a global industrial client." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/espct-quote", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/espct-quote/", "en-US": "https://www.eicetechnology.com/case-studies/espct-quote/", "x-default": "https://www.eicetechnology.com/case-studies/espct-quote/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "ESPCT Quote" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ESPCT Quote Case Study",
  "description": "Automated quoting system reducing quote generation time by 70% and improving accuracy for an industrial engineering client.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/espct-quote"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EspctQuote />
    </>
  );
}



