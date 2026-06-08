import Entpappdev from "../../../src/Servcomps/Entpappdev";

export const metadata = {
  title: "Enterprise Application Development Services | EICE Technology",
  description: "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization.",
  openGraph: {
    title: "Enterprise Application Development Services | EICE Technology",
    description: "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization.",
    url: "https://www.eicetechnology.com/services/enterprise-app-dev",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Enterprise Application Development Services | EICE Technology", description: "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization." },
  alternates: { canonical: "https://www.eicetechnology.com/services/enterprise-app-dev" },
};

export default function Page() {
  return <Entpappdev />;
}