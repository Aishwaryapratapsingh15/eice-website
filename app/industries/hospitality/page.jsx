import Hospitality from "../../../src/Allindus/Hospitality";

export const metadata = {
  title: "Hospitality Technology Solutions | Hotel ERP & F&B Software | EICE Technology",
  description: "Power your hospitality business with EICE Technology. EICE Rise ERP for hotels, clubs & restaurants — room management, F&B, banquet, payroll, compliance and more.",
  keywords: ["hospitality ERP", "hotel management software", "hotel ERP India", "restaurant management", "banquet management", "F&B software", "hospitality technology", "EICE Rise", "EICE Technology"],
  openGraph: {
    title: "Hospitality Technology Solutions | EICE Technology",
    description: "Power your hospitality business with EICE Technology's integrated ERP and AI solutions.",
    url: "https://www.eicetechnology.com/industries/hospitality",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Hospitality Technology Solutions | EICE Technology" },
  alternates: {
    canonical: "https://www.eicetechnology.com/industries/hospitality/",
    languages: {
      "en-IN": "https://www.eicetechnology.com/industries/hospitality/",
      "en-US": "https://www.eicetechnology.com/industries/hospitality/",
      "x-default": "https://www.eicetechnology.com/industries/hospitality/",
    },
  },
};

export default function Page() {
  return <Hospitality />;
}
