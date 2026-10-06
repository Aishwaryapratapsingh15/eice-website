"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";

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
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="pt-14 pb-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          {/* Replace with actual hero image once available */}
          {heroImg ? (
            <img src={heroImg} alt="Emerging Tech" className="mx-auto w-full max-w-[480px] object-contain"  width="427" height="240" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}

          <div className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide sm:mx-auto">
            {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 rounded-full object-contain" width="20" height="20" />}
            <span>Emerging Tech</span>
          </div>

          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">
            Stay ahead with technology{" "}
            <span className="text-bloo">that&apos;s shaping tomorrow</span>
          </h1>

          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl">
            EICE helps businesses leverage cutting-edge innovations — from AI to blockchain — to create new opportunities and drive unprecedented growth
          </p>

          <button
            onClick={() => navigate("/products/eicerise/form?product=Emerging%20Tech")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW — WHAT WE DO */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Overview — What We Do</p>
          <div className="grid md:grid-cols-2 gap-4 items-start pt-8">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
                Pioneering tech, backed by real-world experience
              </h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                We don&apos;t experiment with emerging tech on your dime. Our teams have delivered production-grade AI, IoT, and blockchain solutions for 60+ clients across 10+ countries.
              </p>
            </div>

            {/* Right: feature cards */}
            <div className="flex flex-col gap-4">
              {overviewCards.map((card, i) => (
                <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                  {card.icon ? (
                    <img src={card.icon} alt="" className="w-11 h-11 object-contain flex-shrink-0"  width="44" height="44" />
                  ) : (
                    <div className="w-11 h-11 bg-blue-100 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{card.title}</h3>
                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR EMERGING TECH SERVICES */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Emerging Tech Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Three ways we innovate for you</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {services.map((service, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{service.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] flex-grow pb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2 pb-4">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={service.link} className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] hover:text-blue-900 transition">
                  Explore More
                  <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" className="w-[16px] h-[16px] object-contain" width="16" height="16" style={{ filter: "brightness(0) saturate(100%) invert(54%) sepia(98%) saturate(1655%) hue-rotate(166deg) brightness(97%) contrast(101%)" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — PROCESS */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10 bg-[#012060]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">How We Work</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center !text-white">Our Emerging technology process</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] !text-blue-200 max-w-5xl mx-auto text-left sm:text-center">
              A structured approach that de-risks innovation and ensures every technology decision maps directly to business value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="rounded-[18px] border border-white/20 bg-white/10 p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 w-full">
                  <div className="flex items-center justify-between gap-3 pb-4">
                    {step.icon ? (
                      <img src={step.icon} alt="" className="w-11 h-11 object-contain"  width="44" height="44" />
                    ) : (
                      <div className="w-11 h-11 bg-bloo/20 rounded-lg flex items-center justify-center">
                        <span className="text-bloo font-bold text-sm">
                          {step.step}
                        </span>
                      </div>
                    )}
                    <span className="text-white/30 text-4xl font-bold leading-none">{step.step}</span>
                  </div>
                  <h3 className="font-general font-semibold text-white text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="font-inter font-normal text-blue-200 text-[15px] sm:text-[16px] leading-[1.6]">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" className="w-[24px] h-[24px] object-contain" width="24" height="24" style={{ filter: "brightness(0) saturate(100%) invert(54%) sepia(98%) saturate(1655%) hue-rotate(166deg) brightness(97%) contrast(101%)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Technology</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Our Emerging Tech Stack</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-5xl mx-auto text-left sm:text-center">
              We work with the best tools and frameworks to build scalable, future-ready solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {techStack.map((stack, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-1 h-6 bg-bloo rounded-full flex-shrink-0" />
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
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
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Why EICE</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {whyEice.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — GET STARTED */}
      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-10 bg-[#012060]">
        <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Get Started</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center !text-white">
            Ready to future-proof your business?
          </h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">
            Tell us about your challenge. We&apos;ll identify the right emerging technology to solve it.
          </p>
          <button
            onClick={() => navigate("/products/eicerise/form?product=Emerging%20Tech")}
            className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}
