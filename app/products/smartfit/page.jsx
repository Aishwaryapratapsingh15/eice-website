import Smartfit from "../../../src/Product/SmartFit";

export const metadata = {
  title: "EICE SmartFit | Cargo Optimization & Management System | EICE Technology",
  description: "Optimize cargo space and reduce shipping costs with EICE SmartFit, an intelligent cargo management and optimization solution for logistics companies.",
  openGraph: {
    title: "EICE SmartFit | Cargo Optimization & Management System | EICE Technology",
    description: "Optimize cargo space and reduce shipping costs with EICE SmartFit, an intelligent cargo management and optimization solution for logistics companies.",
    url: "https://www.eicetechnology.com/products/smartfit",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICE SmartFit | Cargo Optimization & Management System | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "Optimize cargo space and reduce shipping costs with EICE SmartFit, an intelligent cargo management and optimization solution for logistics companies." },
  alternates: { canonical: "https://www.eicetechnology.com/products/smartfit" },
};

export default function Page() {
  return <Smartfit />;
}