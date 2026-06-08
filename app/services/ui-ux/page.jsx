import UiUx from "../../../src/Servcomps/UiUx";

export const metadata = {
  title: "UI/UX Design & Consulting Services | EICE Technology",
  description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
  openGraph: {
    title: "UI/UX Design & Consulting Services | EICE Technology",
    description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems.",
    url: "https://www.eicetechnology.com/services/ui-ux",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "UI/UX Design & Consulting Services | EICE Technology", description: "Create exceptional user experiences with EICE Technology's UI/UX design services. User research, wireframing, prototyping, and design systems." },
  alternates: { canonical: "https://www.eicetechnology.com/services/ui-ux" },
};

export default function Page() {
  return <UiUx />;
}