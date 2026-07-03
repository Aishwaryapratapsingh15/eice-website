import Educational from "../../../src/Allindus/Educational";



export  async function generateMetadata() {
 const title= "Education Technology Solutions India | EdTech IT Services — EICE";
  const description= "EICE Technology powers schools, colleges and edtech companies with custom software, LMS platforms and cloud solutions across India.";
  
  return {
    title,
    description,
    keywords: ["education technology solutions India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/industries/education", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/industries/education/", languages: { "en-IN": "https://www.eicetechnology.com/industries/education/", "en-US": "https://www.eicetechnology.com/industries/education/", "x-default": "https://www.eicetechnology.com/industries/education/" } },
};}




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
