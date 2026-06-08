import DataManagement from "../../../src/Cstudies/DataManagement";

export const metadata = {
  title: "EPGIS Case Study | Enterprise GIS Data Management | EICE Technology",
  description: "How EICE Technology developed an enterprise GIS data management solution that transformed geospatial data handling for energy sector operations.",
  openGraph: {
    title: "EPGIS Case Study | Enterprise GIS Data Management | EICE Technology",
    description: "How EICE Technology developed an enterprise GIS data management solution that transformed geospatial data handling for energy sector operations.",
    url: "https://www.eicetechnology.com/case-studies/epgis",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EPGIS Case Study | Enterprise GIS Data Management | EICE Technology", description: "How EICE Technology developed an enterprise GIS data management solution that transformed geospatial data handling for energy sector operations." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/epgis" },
};

export default function Page() {
  return <DataManagement />;
}