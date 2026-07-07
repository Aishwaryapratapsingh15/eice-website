import Digitalmedia from "../../../src/Allindus/Digitalmedia";

export const metadata = {
  title: "Digital Media Technology Solutions | EICE Technology",
  description: "Power your media business with EICE Technology. Content management, streaming platforms, digital asset management, and audience analytics solutions.",
  keywords: ["digital media technology", "content management system", "streaming platform", "digital asset management", "audience analytics", "media software", "EICE Technology"],
  openGraph: {
    title: "Digital Media Technology Solutions | EICE Technology",
    description: "Power your media business with EICE Technology. Content management, streaming platforms, digital asset management, and audience analytics solutions.",
    url: "https://www.eicetechnology.com/industries/digital-media",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Digital Media Technology Solutions | EICE Technology", description: "Power your media business with EICE Technology. Content management, streaming platforms, digital asset management, and audience analytics solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/digital-media", languages: { "en-IN": "https://www.eicetechnology.com/industries/digital-media/", "en-US": "https://www.eicetechnology.com/industries/digital-media/", "x-default": "https://www.eicetechnology.com/industries/digital-media/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Digital Media" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Media IT Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Digital Media Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/digital-media/"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Digitalmedia />
    </>
  );
}
