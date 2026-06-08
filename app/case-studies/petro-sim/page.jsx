import PetroSIM from "../../../src/Cstudies/PertroSIM";

export const metadata = {
  title: "PetroSIM Case Study | Petroleum Process Simulation | EICE Technology",
  description: "EICE Technology's PetroSIM platform: a comprehensive petroleum simulation tool delivering accurate process modeling for the oil and gas industry.",
  openGraph: {
    title: "PetroSIM Case Study | Petroleum Process Simulation | EICE Technology",
    description: "EICE Technology's PetroSIM platform: a comprehensive petroleum simulation tool delivering accurate process modeling for the oil and gas industry.",
    url: "https://www.eicetechnology.com/case-studies/petro-sim",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "PetroSIM Case Study | Petroleum Process Simulation | EICE Technology", description: "EICE Technology's PetroSIM platform: a comprehensive petroleum simulation tool delivering accurate process modeling for the oil and gas industry." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/petro-sim" },
};

export default function Page() {
  return <PetroSIM />;
}