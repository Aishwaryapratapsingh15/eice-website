import Techconsult from "../../../src/Servcomps/Techconsult";

export const metadata = {
  title: "Technology Consultancy Services | IT Strategy & Advisory | EICE Technology",
  description: "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection.",
  openGraph: {
    title: "Technology Consultancy Services | IT Strategy & Advisory | EICE Technology",
    description: "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection.",
    url: "https://www.eicetechnology.com/services/tech-consultancy",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Technology Consultancy Services | IT Strategy & Advisory | EICE Technology", description: "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection." },
  alternates: { canonical: "https://www.eicetechnology.com/services/tech-consultancy" },
};

export default function Page() {
  return <Techconsult />;
}