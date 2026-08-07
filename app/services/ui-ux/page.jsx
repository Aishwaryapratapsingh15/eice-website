import UiUx from "../../../src/Servcomps/UiUx";

// export const metadata = {
//   title: "UI/UX Design & Consulting Services | EICE Technology",
//   description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
//   keywords: ["UI UX design", "user experience design", "UX consulting", "wireframing", "prototyping", "design system", "EICE Technology", "UI UX design India", "UX consulting India"],
//   openGraph: {
//     title: "UI/UX Design & Consulting Services | EICE Technology",
//     description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
//     url: "https://www.eicetechnology.com/services/ui-ux",
//     siteName: "EICE Technology",
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "UI/UX Design & Consulting Services | EICE Technology", description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems." },
//   alternates: { canonical: "https://www.eicetechnology.com/services/ui-ux", languages: { "en-IN": "https://www.eicetechnology.com/services/ui-ux", "en-US": "https://www.eicetechnology.com/services/ui-ux", "x-default": "https://www.eicetechnology.com/services/ui-ux" } },
// };

export  async function generateMetadata() {
 const title= "UI/UX Design Services Company in India | EICE Technology";
  const description= "EICE Technology provides UI/UX design services, product design, wireframing, prototyping, and user research for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.";
  
  return {
    title,
    description,
    keywords: ["UI UX design company India, UI UX design services India, product design services, user experience design company, user interface design services, wireframing services, prototyping services, mobile app UI UX design, web UI UX design, UX research services, enterprise UI UX design, UI UX company Delhi, UI UX company Mumbai, UI UX company Bengaluru, UI UX company Hyderabad, UI UX company Chennai, UI UX company Pune, UI UX company Kolkata, UI UX company Ahmedabad, EICE Technology"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/ui-ux", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/ui-ux", languages: { "en-IN": "https://www.eicetechnology.com/services/ui-ux", "en-US": "https://www.eicetechnology.com/services/ui-ux", "x-default": "https://www.eicetechnology.com/services/ui-ux" } },
};}



const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services/ui-ux" },
      { "@type": "ListItem", "position": 3, "name": "UI/UX Design" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "UI/UX Design Services Company in India | EICE Technology",
  "description": "EICE Technology provides UI/UX design services, product design, wireframing, prototyping, and user research for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.",
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



