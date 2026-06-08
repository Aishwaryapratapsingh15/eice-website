import carousel1 from "../assets/product-carousel/isynclite-carousel.png";
import carousel2 from "../assets/product-carousel/isyncdrive-carousel.png";
import carousel3 from "../assets/product-carousel/eiceAgent-carousel.png";
import carousel4 from "../assets/infraSight/infrasight.png";
import carousel5 from "../assets/verilock/verilockHero.png";  
import carousel6 from "../assets/product-carousel/eiceVoice-carousel.png";
import carousel7 from "../assets/smartfit/SmartFit.png";
import carousel8 from "../assets/EiceOps/screens.png";

const productSlides = [
  {
    image: carousel1.src,
    title: "iSyncLite",
    tags: ["Smart", "Secure", "Intelligent Backup"],
    description:
      "iSync Lite is a next-generation backup platform that delivers reliable, encrypted, and storage-optimized backup without installing any client software.",
    path:"/products/isync-lite"
    },
  {
    image: carousel2.src,
    title: "iSyncDrive",
    tags: ["Secure", "Seamless", "Scalable"],
    description:
      "iSyncDrive is a next-generation hybrid cloud storage and synchronization platform that combines the flexibility of the cloud with the control of on-premises infrastructure, enabling organizations to store, sync, and manage data securely across devices, teams, and regions.",
    path:"/products/isync-drive"
    },
  {
    image: carousel3.src,
    title: "EICE Agent",
    tags: ["Simplify", "Automate", "Accelerate"],
    description: "The EICE Agent is a powerful AI-driven ecosystem that brings together EICEAIM(The Action Agent) and AskEICE(The Knowledge Agent) to automate outreach, quality leads, and transform enterprise data into instant, actionable intelligence.",
    path:"/products/eice-agent"
  },
  {
    image: carousel4.src,
    title: "Infrasight",
    tags: ["Observe", "Detect", "Resolve"],
    description: "Infrasight is an enterprise observability platform providing real-time visibility into servers, networks, applications, cloud services and IoT devices from a unified dashboard-with auto-discovery, anomaly detection, and multi-protocol agentless monitoring.",
    path:"/products/infrasight"
  },
  {
    image: carousel5.src,
    title: "Verilock",
    tags: ["Verify", "Lock", "Trust"],
    description: "Verilock is an enterprise multi-factor authentication platform that secures applications with TOTP-based 2FA, push approval, and geo-fencing-all from one mobile application.",
    path:"/products/verilock"
  },
  {
    image: carousel6.src,
    title: "Eice Voice",
    tags: ["Speak", "Understand", "Dispatch"],
    description: "EICE Voice is an AI-Powered, voice-first order management platform that lets restaurant and hotel staff place, manage and track orders hand-free--with natural language understanding built for the hospitality industry.",
    path:"/products/eice-voice"
  },
   {
    image: carousel7.src,
    title: "Eice SmartFit",
    tags: ["Pack Smart", "Ship Smart", "Zero Waste"],
    description: "Stop losing money to wasted container space. EICE SmartFit uses intelligent 3D optimization to pack every shipment perfectly - maximizing capacity, balancing weight, and ensuring the right items are always accessible at the door. No guesswork, No overpaying. Just smart loading plans in seconds.",
    path:"/products/smartfit"
  },
  {
    image: carousel8.src,
    title: "EiceOps",
    tags: ["Every Ticket", "Every SLA", "Every Time"],
    description: "Stop letting SLA breaches slip through the cracks. EICE Ops is an ITIL 4-aligned help desk platform built for complete accountability — tracking every ticket from first call to closure with three live SLA clocks, automatic escalation alerts, and a full audit trail on every action. No missed deadlines. No guesswork. Just structured, visible IT service management.",
    path:"/products/eice-ops"
  },
];

export default productSlides;
