import Healthcare from "../../../src/Allindus/Healthcare";

export const metadata = {
  title: "Healthcare IT Solutions | Medical Software Development | EICE Technology",
  description: "Transform patient care with EICE Technology's healthcare IT solutions. EHR systems, telemedicine platforms, clinical management, and health analytics.",
  keywords: ["healthcare IT", "medical software development", "EHR system", "telemedicine platform", "health analytics", "clinical management software", "EICE Technology"],
  openGraph: {
    title: "Healthcare IT Solutions | Medical Software Development | EICE Technology",
    description: "Transform patient care with EICE Technology's healthcare IT solutions. EHR systems, telemedicine platforms, clinical management, and health analytics.",
    url: "https://www.eicetechnology.com/industries/healthcare",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Healthcare IT Solutions | Medical Software Development | EICE Technology", description: "Transform patient care with EICE Technology's healthcare IT solutions. EHR systems, telemedicine platforms, clinical management, and health analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/healthcare", languages: { "en-IN": "https://www.eicetechnology.com/industries/healthcare/", "en-US": "https://www.eicetechnology.com/industries/healthcare/", "x-default": "https://www.eicetechnology.com/industries/healthcare/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Healthcare" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare IT Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Healthcare Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/healthcare/"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Healthcare />
    </>
  );
}
