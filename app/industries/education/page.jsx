import Educational from "../../../src/Allindus/Educational";

export const metadata = {
  title: "EdTech Solutions | Educational Software Development | EICE Technology",
  description: "Revolutionize learning with EICE Technology's education technology. LMS platforms, e-learning content, student information systems, and virtual classrooms.",
  keywords: ["education technology", "edtech", "LMS platform", "e-learning software", "student information system", "virtual classroom", "EICE Technology"],
  openGraph: {
    title: "EdTech Solutions | Educational Software Development | EICE Technology",
    description: "Revolutionize learning with EICE Technology's education technology. LMS platforms, e-learning content, student information systems, and virtual classrooms.",
    url: "https://www.eicetechnology.com/industries/education",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EdTech Solutions | Educational Software Development | EICE Technology", description: "Revolutionize learning with EICE Technology's education technology. LMS platforms, e-learning content, student information systems, and virtual classrooms." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/education/", languages: { "en-IN": "https://www.eicetechnology.com/industries/education/", "en-US": "https://www.eicetechnology.com/industries/education/", "x-default": "https://www.eicetechnology.com/industries/education/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Education" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education Technology Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Education Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/education/"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Educational />
    </>
  );
}
