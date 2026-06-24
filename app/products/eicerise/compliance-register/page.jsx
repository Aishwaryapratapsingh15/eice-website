import ComplianceRegister from "../../../../src/Rise/Pages/InsidePages/ComplianceRegister";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Compliance Register | EICE Rise Hospitality ERP | EICE Technology",
  description: "Track hotel compliance tasks with EICE Rise Compliance Register  task assignment, progress monitoring, SLA management, and audit-ready documentation.",
  keywords: ["Compliance Register", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Compliance Register | EICE Rise Hospitality ERP",
    description: "Track hotel compliance tasks with EICE Rise Compliance Register  task assignment, progress monitoring, SLA management, and audit-ready documentation.",
    url: "https://www.eicetechnology.com/products/eicerise/compliance-register",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Compliance Register | EICE Rise Hospitality ERP", description: "Track hotel compliance tasks with EICE Rise Compliance Register  task assignment, progress monitoring, SLA management, and audit-ready documentation." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/compliance-register/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/compliance-register/", "en-US": "https://www.eicetechnology.com/products/eicerise/compliance-register/", "x-default": "https://www.eicetechnology.com/products/eicerise/compliance-register/" } },
};


export default function Page() {
  return (
    <>
      <ComplianceRegister />
      <ProductFooter />
      <Copyright />
    </>
  );
}


