import UiUx from "../../../src/Servcomps/UiUx";

export const metadata = {
  title: "UI/UX Design & Consulting Services | EICE Technology",
  description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
  keywords: ["UI UX design", "user experience design", "UX consulting", "wireframing", "prototyping", "design system", "EICE Technology", "UI UX design India", "UX consulting India"],
  openGraph: {
    title: "UI/UX Design & Consulting Services | EICE Technology",
    description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
    url: "https://www.eicetechnology.com/services/ui-ux",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "UI/UX Design & Consulting Services | EICE Technology", description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems." },
  alternates: { canonical: "https://www.eicetechnology.com/services/ui-ux/", languages: { "en-IN": "https://www.eicetechnology.com/services/ui-ux/", "en-US": "https://www.eicetechnology.com/services/ui-ux/", "x-default": "https://www.eicetechnology.com/services/ui-ux/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "UI/UX Design" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "UI/UX Design & Consulting Services",
  "description": "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/ui-ux",
  "serviceType": "UI/UX Design",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UiUx />
    </>
  );
}



