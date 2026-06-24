import { NextResponse } from "next/server";

const redirects = {
  // Legacy capitalized routes → lowercase
  "/About":            "/about",
  "/Careers":          "/careers",
  "/Contact":          "/contact",
  "/Resources":        "/resources",
  "/OurTeam":          "/our-team",
  "/ourteam":          "/our-team",
  "/Casestudies":      "/case-studies",
  "/casestudies":      "/case-studies",
  "/Industries":       "/industries",
  "/INDUSTRIES":       "/industries",

  // Old flat product routes → nested
  "/Products-EiceRise":    "/products/eicerise",
  "/Products-EiceOps":     "/products/eice-ops",
  "/Products-Isynclite":   "/products/isync-lite",
  "/Products-iSyncLite":   "/products/isync-lite",
  "/Products-IsyncDrive":  "/products/isync-drive",
  "/Products-iSyncDrive":  "/products/isync-drive",
  "/Products-EiceAgent":   "/products/eice-agent",
  "/Products-Verilock":    "/products/verilock",
  "/Products-Infrasight":  "/products/infrasight",
  "/Products-EasyLogy":    "/products/easylogy",
  "/Products-EiceVoice":   "/products/eice-voice",
  "/Products-Smartfit":    "/products/smartfit",
  "/Products-form":        "/products/form",

  // Old flat service routes → nested
  "/Services":                       "/services",
  "/Services-Aiml":                  "/services/ai-ml",
  "/Services-Cloud":                 "/services/cloud",
  "/Services-Dataanalytics":         "/services/data-analytics",
  "/Services-Devops":                "/services/devops",
  "/Services-Digitaltransformation": "/services/digital-transformation",
  "/Services-Enterpriseappdev":      "/services/enterprise-app-dev",
  "/Services-Gis":                   "/services/gis",
  "/Services-Iot":                   "/services/iot",
  "/Services-Techconsultancy":       "/services/tech-consultancy",
  "/Services-SAAS":                  "/services/saas",
  "/Services-Android":               "/services/android",
  "/Services-Blockchain":            "/services/blockchain",
  "/Services-Webdevelopment":        "/services/web-development",
  "/Services-Softwaretesting":       "/services/software-testing",
  "/Services-Uiuxconsulting":        "/services/ui-ux",
  "/Services-Chatbot":               "/services/chatbot",

  // Old flat industry routes → nested
  "/Industries-Healthcare":   "/industries/healthcare",
  "/Industries-Financial":    "/industries/financial",
  "/Industries-Education":    "/industries/education",
  "/Industries-Digitalmedia": "/industries/digital-media",
  "/Industries-Logistics":    "/industries/logistics",
  "/Industries-Enterprise":   "/industries/enterprise",
  "/Industries-Legal":        "/industries/legal",
  "/Industries-Oilandgas":    "/industries/oil-and-gas",

  // Old flat case study routes → nested
  "/Casestudy-VoiceCallAI":      "/case-studies/voice-call-ai",
  "/casestudy-VoiceCallAI":      "/case-studies/voice-call-ai",
  "/Casestudy-SentimentalAI":    "/case-studies/sentimental-ai",
  "/casestudy-SentimentalAI":    "/case-studies/sentimental-ai",
  "/Casestudy-LogisticsAI":      "/case-studies/logistics-ai",
  "/casestudy-LogisticsAI":      "/case-studies/logistics-ai",
  "/Casestudy-InventoryAI":      "/case-studies/inventory-ai",
  "/casestudy-InventoryAI":      "/case-studies/inventory-ai",
  "/Casestudy-Relimonitor":      "/case-studies/relimonitor",
  "/Casestudy-PetroSIM":         "/case-studies/petro-sim",
  "/Casestudy-EspctQuote":       "/case-studies/espct-quote",
  "/Casestudy-CityGasAdani":     "/case-studies/city-gas-adani",
  "/Casestudy-SimuLIFT":         "/case-studies/simu-lift",
  "/Casestudy-NoraltaSCADA":     "/case-studies/noralta-scada",
  "/Casestudy-EPGIS":            "/case-studies/epgis",
  "/Casestudy-NoraltaFEMMS":     "/case-studies/noralta-femms",
  "/Casestudy-DesignSimBORETS":  "/case-studies/design-sim-borets",
  "/Casestudy-SchlumbergerBAA":  "/case-studies/schlumberger-baa",
};

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const destination = redirects[pathname];

  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
