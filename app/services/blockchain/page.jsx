import Blockchain from "../../../src/Servcomps/Blockchain";

export const metadata = {
  title: "Blockchain Development Services | Smart Contracts | EICE Technology",
  description: "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain.",
  keywords: ["blockchain development", "smart contracts", "DeFi", "NFT marketplace", "enterprise blockchain", "Web3 development", "EICE Technology", "blockchain development India", "smart contracts India"],
  openGraph: {
    title: "Blockchain Development Services | Smart Contracts | EICE Technology",
    description: "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain.",
    url: "https://www.eicetechnology.com/services/blockchain",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Blockchain Development Services | Smart Contracts | EICE Technology", description: "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain." },
  alternates: { canonical: "https://www.eicetechnology.com/services/blockchain", languages: { "en-IN": "https://www.eicetechnology.com/services/blockchain", "en-US": "https://www.eicetechnology.com/services/blockchain", "x-default": "https://www.eicetechnology.com/services/blockchain" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Blockchain" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Blockchain Development Services",
  "description": "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/blockchain",
  "serviceType": "Blockchain Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Blockchain />
    </>
  );
}



