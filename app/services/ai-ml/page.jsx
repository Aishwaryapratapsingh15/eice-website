import Aiml from "../../../src/Servcomps/Aiml";

export const metadata = {
  title: "AI & Machine Learning Services | EICE Technology",
  description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions.",
  openGraph: {
    title: "AI & Machine Learning Services | EICE Technology",
    description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions.",
    url: "https://www.eicetechnology.com/services/ai-ml",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "AI & Machine Learning Services | EICE Technology", description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/ai-ml" },
};

export default function Page() {
  return <Aiml />;
}