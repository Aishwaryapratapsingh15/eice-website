import Android from "../../../src/Servcomps/Android";

export const metadata = {
  title: "Android App Development Services | Mobile Solutions | EICE Technology",
  description: "Create powerful Android applications with EICE Technology. Native, hybrid, and cross-platform mobile solutions for business and consumer apps.",
  keywords: ["Android app development", "mobile app development", "iOS development", "cross-platform app", "React Native", "Flutter", "EICE Technology", "mobile app development India", "Android development India"],
  openGraph: {
    title: "Android App Development Services | Mobile Solutions | EICE Technology",
    description: "Create powerful Android applications with EICE Technology. Native, hybrid, and cross-platform mobile solutions for business and consumer apps.",
    url: "https://www.eicetechnology.com/services/android",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Android App Development Services | Mobile Solutions | EICE Technology", description: "Create powerful Android applications with EICE Technology. Native, hybrid, and cross-platform mobile solutions for business and consumer apps." },
  alternates: { canonical: "https://www.eicetechnology.com/services/android/", languages: { "en-IN": "https://www.eicetechnology.com/services/android/", "en-US": "https://www.eicetechnology.com/services/android/", "x-default": "https://www.eicetechnology.com/services/android/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Mobile App Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Android & Mobile App Development",
  "description": "Create powerful Android applications with EICE Technology. Native, hybrid, and cross-platform mobile solutions for business and consumer apps.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/android",
  "serviceType": "Mobile App Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Android />
    </>
  );
}



