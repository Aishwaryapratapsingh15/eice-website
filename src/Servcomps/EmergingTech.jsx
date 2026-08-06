"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "@/Othercomps/Copyright";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const CDN = "https://d3r43jacxrwsrp.cloudfront.net/emerging-tech";
const heroImg         = `${CDN}/emerging_tech_img.png`;
const badgeIcon       = `${CDN}/emerging_tech_title_text.svg`;
const overviewIcon1   = `${CDN}/research_backed_implementation.svg`;
const overviewIcon2   = `${CDN}/future_proof_architecture.svg`;
const overviewIcon3   = `${CDN}/cross_industry_expertise.svg`;
const aimlServiceIcon = `${CDN}/ai_and_ml.svg`;
const iotServiceIcon  = `${CDN}/internet_of_things.svg`;
const blockchainServiceIcon = `${CDN}/blockchain_development.svg`;
const stepIcon1 = `${CDN}/technology_assessment.svg`;
const stepIcon2 = `${CDN}/proof_of_concept.svg`;
const stepIcon3 = `${CDN}/scaled_development.svg`;
const stepIcon4 = `${CDN}/integration_and_monitoring.svg`;
const whyIcon1  = `${CDN}/early_adopters.svg`;
const whyIcon2  = `${CDN}/proven_roi.svg`;
const whyIcon3  = `${CDN}/ethical_ai.svg`;
const whyIcon4  = `${CDN}/end_to_end_delivery.svg`;

const overviewCards = [
  {
    icon: overviewIcon1,
    title: "Research-backed implementation",
    desc: "Every technology we deploy is validated against your business case first",
  },
  {
    icon: overviewIcon2,
    title: "Future-proof architecture",
    desc: "Built to evolve as technologies mature, not locked into today's constraints",
  },
  {
    icon: overviewIcon3,
    title: "Cross-industry expertise",
    desc: "Applied emerging tech across healthcare, fintech, logistics, retail and more",
  },
];

const services = [
  {
    icon: aimlServiceIcon,
    title: "AI & ML",
    desc: "Unlock the potential of your data. Advanced solutions to analyze diverse data types, uncover growth trends, and provide actionable insights. Drive informed decisions and strategic growth.",
    tags: ["Predictive analytics", "NLP", "Computer vision", "Model training"],
    link: "/services/ai-ml",
  },
  {
    icon: iotServiceIcon,
    title: "Internet of Things",
    desc: "Connect your devices and gather valuable data. Smart, interconnected systems that improve collaboration, increase efficiency, and drive innovation.",
    tags: ["Device management", "Real-time data", "Edge computing", "Sensors & APIs"],
    link: "/services/iot",
  },
  {
    icon: blockchainServiceIcon,
    title: "Blockchain Development",
    desc: "Enhance security and transparency. Decentralized applications and smart contracts tailored to your business needs. Immutable, auditable, and trustless.",
    tags: ["Smart contracts", "DeFi", "NFT platforms", "Web3 integration"],
    link: "/services/blockchain",
  },
];

const steps = [
  {
    step: "01",
    icon: stepIcon1,
    title: "Technology\nassessment",
    desc: "Evaluate which emerging tech genuinely fits your use case and business goals",
  },
  {
    step: "02",
    icon: stepIcon2,
    title: "Proof of\nconcept",
    desc: "Build a small-scale prototype to validate feasibility before full commitment",
  },
  {
    step: "03",
    icon: stepIcon3,
    title: "Scaled\ndevelopment",
    desc: "Full build with iterative releases and continuous testing",
  },
  {
    step: "04",
    icon: stepIcon4,
    title: "Integration &\nmonitoring",
    desc: "Seamless integration with existing systems and ongoing performance monitoring",
  },
];

const techStack = [
  {
    category: "AI & ML",
    techs: ["TensorFlow", "LangChain", "Hugging Face", "PyTorch", "Scikit-learn", "OpenAI"],
  },
  {
    category: "IoT",
    techs: ["MQTT", "AWS IoT", "Azure IoT Hub", "Raspberry Pi", "Node-RED", "InfluxDB"],
  },
  {
    category: "Blockchain",
    techs: ["Solidity", "Ethereum", "Hyperledger", "Web3.js", "Hardhat", "IPFS"],
  },
];

const whyEice = [
  {
    icon: whyIcon1,
    title: "Early adopters",
    desc: "We've been working with emerging tech since before it was mainstream",
  },
  {
    icon: whyIcon2,
    title: "Proven ROI",
    desc: "Every implementation tied to measurable business outcomes",
  },
  {
    icon: whyIcon3,
    title: "Ethical AI",
    desc: "Responsible AI principles baked into every model we build",
  },
  {
    icon: whyIcon4,
    title: "End-to-end delivery",
    desc: "From ideation and PoC to full production deployment",
  },
];

export default function EmergingTech() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="text-left sm:text-center pt-4 pb-4 sm:pb-16 px-5 bg-white">
        <div className="mt-5 flex justify-center mb-6">
          {/* Replace with actual hero image once available */}
          {heroImg ? (
            <img src={heroImg} alt="Emerging Tech" className="mx-auto w-full max-w-[480px] object-contain"  width="427" height="240" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
          {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 object-contain"  width="20" height="20" />}
          Emerging Tech
        </span>

        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#334155] max-w-4xl mx-auto leading-tight mt-4">
          Stay ahead with technology{" "}
          <span className="text-[#01B0F1]">that&apos;s shaping tomorrow</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-[16px] sm:text-[20px] leading-relaxed">
          EICE helps businesses leverage cutting-edge innovations — from AI to blockchain — to create new opportunities and drive unprecedented growth
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button
            onClick={() => navigate("/contact?product=Emerging%20Tech")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW — WHAT WE DO */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#F4F9FF]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-4 sm:mb-8 sm:text-center">
            OVERVIEW — WHAT WE DO
          </p>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-12 items-start">

            {/* Left */}
            <div>
              <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4 leading-tight">
                Pioneering tech, backed by real-world experience
              </h2>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
                We don&apos;t experiment with emerging tech on your dime. Our teams have delivered production-grade AI, IoT, and blockchain solutions for 60+ clients across 10+ countries.
              </p>
            </div>

            {/* Right: feature cards */}
            <div className="flex flex-col gap-4">
              {overviewCards.map((card, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 shadow-sm">
                  {card.icon ? (
                    <img src={card.icon} alt="" className="w-10 h-10 object-contain flex-shrink-0"  width="40" height="40" />
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-[24px] font-bold text-[#334155] mb-1">{card.title}</h3>
                    <p className="text-[#64748B] text-[16px]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* OUR EMERGING TECH SERVICES */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            OUR EMERGING TECH SERVICES
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-12 leading-tight">
            Three ways we innovate for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-12 h-12 object-contain mb-4"  width="48" height="48" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-[#334155] mb-3">{service.title}</h3>
                <p className="text-[#64748B] text-[16px] leading-relaxed mb-4 flex-grow">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={service.link} className="text-[#01B0F1] text-[16px] font-semibold flex items-center gap-1 hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — PROCESS */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#012060]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            HOW WE WORK
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-white text-center mb-2 leading-tight">
            Our Emerging technology process
          </h2>
          <p className="text-blue-200 text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            A structured approach that de-risks innovation and ensures every technology decision maps directly to business value
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="bg-[#0B3A63] rounded-2xl p-4 sm:p-6 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    {step.icon ? (
                      <img src={step.icon} alt="" className="w-10 h-10 object-contain"  width="40" height="40" />
                    ) : (
                      <div className="w-10 h-10 bg-[#01B0F1]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#01B0F1] font-bold text-sm">
                          {step.step}
                        </span>
                      </div>
                    )}
                    <span className="text-white/30 text-4xl font-bold leading-none">{step.step}</span>
                  </div>
                  <h3 className="text-white text-[24px] font-bold leading-snug mb-2 whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-blue-200 text-[16px] leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#01B0F1] text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            TECHNOLOGY
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-2 leading-tight">
            Our Emerging Tech Stack
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            We work with the best tools and frameworks to build scalable, future-ready solutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-[#01B0F1] rounded-full flex-shrink-0" />
                  <h3 className="text-[24px] font-bold text-[#334155]">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EICE */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#F4F9FF]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            WHY EICE
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-12 leading-tight">
            What makes us different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyEice.map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-12 h-12 object-contain mb-4"  width="48" height="48" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-[#334155] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-[16px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — GET STARTED */}
      <section className="bg-[#012060] py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2">
            GET STARTED
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to future-proof your business?
          </h2>
          <p className="text-blue-200 text-[16px] sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us about your challenge. We&apos;ll identify the right emerging technology to solve it.
          </p>
          <button
            onClick={() => navigate("/contact?product=Emerging%20Tech")}
            className="bg-white text-[#012060] px-10 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold text-[18px] hover:bg-blue-50 transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
      <Copyright />
    </div>
  );
}
