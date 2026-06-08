import Saas from "../../../src/Servcomps/Saas";

export const metadata = {
  title: "SaaS Development Services | Cloud Software Solutions | EICE Technology",
  description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
  openGraph: {
    title: "SaaS Development Services | Cloud Software Solutions | EICE Technology",
    description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
    url: "https://www.eicetechnology.com/services/saas",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SaaS Development Services | Cloud Software Solutions | EICE Technology", description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/saas" },
};

export default function Page() {
  return <Saas />;
}