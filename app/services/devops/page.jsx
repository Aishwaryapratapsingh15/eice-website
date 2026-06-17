import Devops from "../../../src/Servcomps/Devops";

export const metadata = {
  title: "DevOps Services & CI/CD Pipeline Solutions | EICE Technology",
  description: "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code.",
  keywords: ["DevOps services", "CI/CD pipeline", "continuous integration", "Docker", "Kubernetes", "infrastructure as code", "DevSecOps", "EICE Technology", "DevOps services India", "CI CD services India", "DevOps company India"],
  openGraph: {
    title: "DevOps Services & CI/CD Pipeline Solutions | EICE Technology",
    description: "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code.",
    url: "https://www.eicetechnology.com/services/devops",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "DevOps Services & CI/CD Pipeline Solutions | EICE Technology", description: "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code." },
  alternates: { canonical: "https://www.eicetechnology.com/services/devops/", languages: { "en-IN": "https://www.eicetechnology.com/services/devops/", "en-US": "https://www.eicetechnology.com/services/devops/", "x-default": "https://www.eicetechnology.com/services/devops/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "DevOps" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DevOps Services",
  "description": "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/devops",
  "serviceType": "DevOps",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Devops />
    </>
  );
}



