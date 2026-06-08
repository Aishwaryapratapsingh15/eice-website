import Financial from "../../../src/Allindus/Financial";

export const metadata = {
  title: "Financial Technology Solutions | FinTech Development | EICE Technology",
  description: "Accelerate financial innovation with EICE Technology's FinTech solutions. Banking software, payment systems, risk management, and trading platforms.",
  openGraph: {
    title: "Financial Technology Solutions | FinTech Development | EICE Technology",
    description: "Accelerate financial innovation with EICE Technology's FinTech solutions. Banking software, payment systems, risk management, and trading platforms.",
    url: "https://www.eicetechnology.com/industries/financial",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Financial Technology Solutions | FinTech Development | EICE Technology", description: "Accelerate financial innovation with EICE Technology's FinTech solutions. Banking software, payment systems, risk management, and trading platforms." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/financial" },
};

export default function Page() {
  return <Financial />;
}