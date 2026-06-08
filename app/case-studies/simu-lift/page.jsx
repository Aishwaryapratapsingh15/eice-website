import SimuLift from "../../../src/Cstudies/SimuLift";

export const metadata = {
  title: "SimuLIFT Case Study | Elevator Simulation Platform | EICE Technology",
  description: "EICE Technology's SimuLIFT: an advanced elevator simulation platform for testing and optimizing lift system performance and safety.",
  openGraph: {
    title: "SimuLIFT Case Study | Elevator Simulation Platform | EICE Technology",
    description: "EICE Technology's SimuLIFT: an advanced elevator simulation platform for testing and optimizing lift system performance and safety.",
    url: "https://www.eicetechnology.com/case-studies/simu-lift",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SimuLIFT Case Study | Elevator Simulation Platform | EICE Technology", description: "EICE Technology's SimuLIFT: an advanced elevator simulation platform for testing and optimizing lift system performance and safety." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/simu-lift" },
};

export default function Page() {
  return <SimuLift />;
}