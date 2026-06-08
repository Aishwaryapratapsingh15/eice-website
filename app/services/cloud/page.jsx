import Cloud from "../../../src/Servcomps/Cloud";

export const metadata = {
  title: "Cloud Computing Services | AWS, Azure & GCP | EICE Technology",
  description: "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform.",
  openGraph: {
    title: "Cloud Computing Services | AWS, Azure & GCP | EICE Technology",
    description: "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform.",
    url: "https://www.eicetechnology.com/services/cloud",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Cloud Computing Services | AWS, Azure & GCP | EICE Technology", description: "Accelerate your cloud journey with EICE Technology. Cloud migration, architecture design, and managed services on AWS, Azure, and Google Cloud Platform." },
  alternates: { canonical: "https://www.eicetechnology.com/services/cloud" },
};

export default function Page() {
  return <Cloud />;
}