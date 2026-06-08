import ScadaNoralta from "../../../src/Cstudies/ScadaNoralta";

export const metadata = {
  title: "Noralta SCADA Case Study | Industrial Control System | EICE Technology",
  description: "EICE Technology's SCADA implementation for Noralta: a robust industrial control system enabling real-time monitoring and control of field operations.",
  openGraph: {
    title: "Noralta SCADA Case Study | Industrial Control System | EICE Technology",
    description: "EICE Technology's SCADA implementation for Noralta: a robust industrial control system enabling real-time monitoring and control of field operations.",
    url: "https://www.eicetechnology.com/case-studies/noralta-scada",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Noralta SCADA Case Study | Industrial Control System | EICE Technology", description: "EICE Technology's SCADA implementation for Noralta: a robust industrial control system enabling real-time monitoring and control of field operations." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/noralta-scada" },
};

export default function Page() {
  return <ScadaNoralta />;
}