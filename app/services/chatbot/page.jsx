import Chatbot from "../../../src/Servcomps/Chatbot";

export const metadata = {
  title: "Chatbot Development Services | AI Virtual Agents | EICE Technology",
  description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
  openGraph: {
    title: "Chatbot Development Services | AI Virtual Agents | EICE Technology",
    description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
    url: "https://www.eicetechnology.com/services/chatbot",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Chatbot Development Services | AI Virtual Agents | EICE Technology", description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows." },
  alternates: { canonical: "https://www.eicetechnology.com/services/chatbot" },
};

export default function Page() {
  return <Chatbot />;
}