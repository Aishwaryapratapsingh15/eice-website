import Devops from "../../../src/Servcomps/Devops";

export const metadata = {
  title: "DevOps Services & CI/CD Pipeline Solutions | EICE Technology",
  description: "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code.",
  openGraph: {
    title: "DevOps Services & CI/CD Pipeline Solutions | EICE Technology",
    description: "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code.",
    url: "https://www.eicetechnology.com/services/devops",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "DevOps Services & CI/CD Pipeline Solutions | EICE Technology", description: "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code." },
  alternates: { canonical: "https://www.eicetechnology.com/services/devops" },
};

export default function Page() {
  return <Devops />;
}