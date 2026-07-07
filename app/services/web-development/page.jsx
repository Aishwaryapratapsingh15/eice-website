import Webdeveopment from "../../../src/Servcomps/Webdevelopment";

export const metadata = {
  title: "Web Development Services | Custom Websites & Web Apps | EICE Technology",
  description: "Build modern, performant websites and web applications with EICE Technology. Full-stack development, CMS, e-commerce, and progressive web apps.",
  keywords: ["web development", "web app development", "full stack development", "progressive web app", "e-commerce development", "CMS", "EICE Technology", "web development India", "web app development India"],
  openGraph: {
    title: "Web Development Services | Custom Websites & Web Apps | EICE Technology",
    description: "Build modern, performant websites and web applications with EICE Technology. Full-stack development, CMS, e-commerce, and progressive web apps.",
    url: "https://www.eicetechnology.com/services/web-development",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Web Development Services | Custom Websites & Web Apps | EICE Technology", description: "Build modern, performant websites and web applications with EICE Technology. Full-stack development, CMS, e-commerce, and progressive web apps." },
  alternates: { canonical: "https://www.eicetechnology.com/services/web-development", languages: { "en-IN": "https://www.eicetechnology.com/services/web-development/", "en-US": "https://www.eicetechnology.com/services/web-development/", "x-default": "https://www.eicetechnology.com/services/web-development/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web App Development Services",
  "description": "Build modern, performant websites and web applications with EICE Technology. Full-stack development, CMS, e-commerce, and progressive web apps.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/web-development",
  "serviceType": "Web Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Webdeveopment />
    </>
  );
}



