import Iot from "../../../src/Servcomps/Iot";

export const metadata = {
  title: "IoT Development Services | Connected Device Solutions | EICE Technology",
  description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
  openGraph: {
    title: "IoT Development Services | Connected Device Solutions | EICE Technology",
    description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
    url: "https://www.eicetechnology.com/services/iot",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "IoT Development Services | Connected Device Solutions | EICE Technology", description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance." },
  alternates: { canonical: "https://www.eicetechnology.com/services/iot" },
};

export default function Page() {
  return <Iot />;
}