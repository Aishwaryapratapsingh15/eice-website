import Dataanalytics from "../../../src/Servcomps/Dataanalytics";

export const metadata = {
  title: "Data Analytics & Business Intelligence Services | EICE Technology",
  description: "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions.",
  openGraph: {
    title: "Data Analytics & Business Intelligence Services | EICE Technology",
    description: "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions.",
    url: "https://www.eicetechnology.com/services/data-analytics",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Data Analytics & Business Intelligence Services | EICE Technology", description: "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/data-analytics" },
};

export default function Page() {
  return <Dataanalytics />;
}