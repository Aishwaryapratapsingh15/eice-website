import Infrasight from "../../../src/Product/Infrasight";

export const metadata = {
  title: "InfraSight | Infrastructure Monitoring & Observability | EICE Technology",
  description: "Monitor your entire IT infrastructure with InfraSight. Real-time alerts, performance dashboards, and proactive monitoring to ensure maximum uptime.",
  openGraph: {
    title: "InfraSight | Infrastructure Monitoring & Observability | EICE Technology",
    description: "Monitor your entire IT infrastructure with InfraSight. Real-time alerts, performance dashboards, and proactive monitoring to ensure maximum uptime.",
    url: "https://www.eicetechnology.com/products/infrasight",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "InfraSight | Infrastructure Monitoring & Observability | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "Monitor your entire IT infrastructure with InfraSight. Real-time alerts, performance dashboards, and proactive monitoring to ensure maximum uptime." },
  alternates: { canonical: "https://www.eicetechnology.com/products/infrasight" },
};

export default function Page() {
  return <Infrasight />;
}