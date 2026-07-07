import Cloud from "../../../src/Servcomps/Cloud";

export const metadata = {
  title: "Cloud Computing Services | AWS, Azure & GCP | EICE Technology",
  description: "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform.",
  keywords: ["cloud computing", "cloud migration", "AWS", "Azure", "Google Cloud", "managed cloud services", "cloud architecture", "EICE Technology", "cloud services India", "cloud migration India", "AWS India", "Azure India"],
  openGraph: {
    title: "Cloud Computing Services | AWS, Azure & GCP | EICE Technology",
    description: "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform.",
    url: "https://www.eicetechnology.com/services/cloud",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Cloud Computing Services | AWS, Azure & GCP | EICE Technology", description: "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform." },
  alternates: { canonical: "https://www.eicetechnology.com/services/cloud", languages: { "en-IN": "https://www.eicetechnology.com/services/cloud/", "en-US": "https://www.eicetechnology.com/services/cloud/", "x-default": "https://www.eicetechnology.com/services/cloud/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Cloud Computing" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud Computing Services",
  "description": "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/cloud",
  "serviceType": "Cloud Computing",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Cloud />
    </>
  );
}



