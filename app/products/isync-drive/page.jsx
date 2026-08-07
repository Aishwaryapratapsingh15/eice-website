import IsyncDrive from "../../../src/Product/IsyncDrive";

export const metadata = {
  title: "iSyncDrive | Enterprise Cloud Sync & Storage Client | EICE Technology",
  description: "iSyncDrive provides enterprise-grade cloud file synchronization, enabling secure data access and collaboration across your organization.",
  keywords: ["cloud sync", "enterprise file sync", "cloud storage", "file synchronization", "iSyncDrive", "EICE Technology", "enterprise cloud sync India", "file sync software India", "cloud storage solution India"],
  openGraph: {
    title: "iSyncDrive | Enterprise Cloud Sync & Storage Client | EICE Technology",
    description: "iSyncDrive provides enterprise-grade cloud file synchronization, enabling secure data access and collaboration across your organization.",
    url: "https://www.eicetechnology.com/products/isync-drive",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "iSyncDrive | Enterprise Cloud Sync & Storage Client | EICE Technology",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "iSyncDrive provides enterprise-grade cloud file synchronization, enabling secure data access and collaboration across your organization." },
  alternates: { canonical: "https://www.eicetechnology.com/products/isync-drive", languages: { "en-IN": "https://www.eicetechnology.com/products/isync-drive", "en-US": "https://www.eicetechnology.com/products/isync-drive", "x-default": "https://www.eicetechnology.com/products/isync-drive" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
      { "@type": "ListItem", "position": 3, "name": "iSyncDrive" }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "iSyncDrive",
    "description": "Enterprise-grade cloud file synchronisation enabling secure data access and collaboration across your organisation.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Enterprise File Sync",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "url": "https://www.eicetechnology.com/products/isync-drive"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    { "@type": "Question", "name": "What is iSyncDrive?", "acceptedAnswer": { "@type": "Answer", "text": "iSyncDrive is an enterprise cloud file synchronisation solution that keeps files secure and accessible across devices, teams, and locations." } },
    { "@type": "Question", "name": "How secure is iSyncDrive?", "acceptedAnswer": { "@type": "Answer", "text": "iSyncDrive uses enterprise-grade encryption and access controls to ensure data security during sync and storage." } }
    ]
  }
];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IsyncDrive />
    </>
  );
}



