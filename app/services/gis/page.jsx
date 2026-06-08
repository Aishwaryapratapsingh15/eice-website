import Gis from "../../../src/Servcomps/Gis";

export const metadata = {
  title: "GIS Development & Mapping Solutions | EICE Technology",
  description: "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions.",
  openGraph: {
    title: "GIS Development & Mapping Solutions | EICE Technology",
    description: "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions.",
    url: "https://www.eicetechnology.com/services/gis",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "GIS Development & Mapping Solutions | EICE Technology", description: "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/gis" },
};

export default function Page() {
  return <Gis />;
}