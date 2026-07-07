import Isy from "../../../src/Product/Isy";

export const metadata = {
  title: "iSyncLite | Lightweight File Synchronization Software | EICE Technology",
  description: "iSyncLite delivers fast, secure file synchronization for teams. Sync files across devices and platforms with our lightweight enterprise solution.",
  keywords: ["file synchronization", "lightweight sync", "file sync software", "team collaboration", "iSyncLite", "EICE Technology", "file sync tool India", "lightweight sync software India"],
  openGraph: {
    title: "iSyncLite | Lightweight File Synchronization Software | EICE Technology",
    description: "iSyncLite delivers fast, secure file synchronization for teams. Sync files across devices and platforms with our lightweight enterprise solution.",
    url: "https://www.eicetechnology.com/products/isync-lite",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "iSyncLite | Lightweight File Synchronization Software | EICE Technology",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "iSyncLite delivers fast, secure file synchronization for teams. Sync files across devices and platforms with our lightweight enterprise solution." },
  alternates: { canonical: "https://www.eicetechnology.com/products/isync-lite", languages: { "en-IN": "https://www.eicetechnology.com/products/isync-lite/", "en-US": "https://www.eicetechnology.com/products/isync-lite/", "x-default": "https://www.eicetechnology.com/products/isync-lite/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
      { "@type": "ListItem", "position": 3, "name": "iSyncLite" }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "iSyncLite",
    "description": "Lightweight file synchronisation software for fast, secure sync across devices and platforms for business teams.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "File Synchronisation",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "url": "https://www.eicetechnology.com/products/isync-lite"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    { "@type": "Question", "name": "What is iSyncLite?", "acceptedAnswer": { "@type": "Answer", "text": "iSyncLite is a lightweight file synchronisation tool that helps teams keep files in sync across devices without enterprise overhead." } },
    { "@type": "Question", "name": "What is the difference between iSyncDrive and iSyncLite?", "acceptedAnswer": { "@type": "Answer", "text": "iSyncDrive is a full enterprise sync solution with advanced controls, while iSyncLite is a streamlined tool for smaller teams needing simple, fast file sync." } }
    ]
  }
];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Isy />
    </>
  );
}



