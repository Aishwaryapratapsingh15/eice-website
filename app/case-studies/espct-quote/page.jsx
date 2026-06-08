import EspctQuote from "../../../src/Cstudies/EspctQuote";

export const metadata = {
  title: "EspctQuote Case Study | Automated Quoting System | EICE Technology",
  description: "How EICE Technology built an automated quoting system that reduced quote generation time by 70% and improved accuracy for a global industrial client.",
  openGraph: {
    title: "EspctQuote Case Study | Automated Quoting System | EICE Technology",
    description: "How EICE Technology built an automated quoting system that reduced quote generation time by 70% and improved accuracy for a global industrial client.",
    url: "https://www.eicetechnology.com/case-studies/espct-quote",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EspctQuote Case Study | Automated Quoting System | EICE Technology", description: "How EICE Technology built an automated quoting system that reduced quote generation time by 70% and improved accuracy for a global industrial client." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/espct-quote" },
};

export default function Page() {
  return <EspctQuote />;
}