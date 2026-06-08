import OurTeam from "../../src/Othercomps/OurTeam";

export const metadata = {
  title: "Our Team | EICE Technology Leadership & Experts",
  description: "Meet the leadership team and technology experts at EICE Technology driving innovation across AI/ML, cloud, IoT, and digital transformation globally.",
  openGraph: { title: "Our Team | EICE Technology", description: "Meet EICE Technology's leadership and expert team.", url: "https://www.eicetechnology.com/our-team", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title: "Our Team | EICE Technology" },
  alternates: { canonical: "https://www.eicetechnology.com/our-team" },
};

export default function Page() {
  return <OurTeam />;
}