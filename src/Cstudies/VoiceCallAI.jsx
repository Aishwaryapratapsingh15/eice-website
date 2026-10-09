"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const voicecall1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/voicecall1.png";
const voicecall2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/voicecall2.png";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function VoiceCallAI() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Voice Call Assistant</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">Advanced AI Voice Call Assistant Revolutionizing Customer Interaction</h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            An AI-powered voice call assistant that automates customer interactions, delivers real-time conversation
            insights, and reduces handle time, enabling businesses to scale support operations without compromising
            service quality.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center grid grid-cols-2 gap-4">
            <img src={voicecall1} alt="Voice Call AI Platform" className="w-full h-full object-fit rounded-lg"  width="1" height="1" />
            <img src={voicecall2} alt="Voice Call AI Dashboard" className="w-full h-full object-fit rounded-lg"  width="300" height="300" />
          </div>
        </div>
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Achieving high speech recognition accuracy across diverse accents, languages, and noisy call environments</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Handling complex, multi-turn conversations and context switching without losing conversational coherence</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Integrating seamlessly with existing CRM and telephony infrastructure with minimal disruption</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Ensuring low latency responses to maintain a natural, real-time conversational experience for callers</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Providing actionable analytics and call summaries to supervisors without manual review of recordings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">About the Project</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">AI-Powered Customer Call Automation</h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
            The client operates a large-scale customer support function handling thousands of inbound calls daily. Rising volumes, inconsistent
            service quality, and high agent turnover prompted the need for an AI-driven voice assistant capable of handling routine queries
            autonomously while providing live agents with real-time guidance and post-call analytics for continuous improvement.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-10 pb-10">
<div>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Unlocking Success</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">IDEATION:</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We designed a conversational AI layer that sits between the telephony system and the CRM, handling routine queries autonomously, escalating complex cases to human agents with full context, and capturing structured call data for analytics in real time.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUR APPROACH</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">We integrated a speech-to-text engine, a domain-specific NLU model, and a dialogue management system into a low-latency pipeline. The assistant was trained on historical call transcripts and integrated with the client's CRM via REST APIs, enabling personalised responses and automatic call summarisation.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
            <div className="flex flex-col items-start">
              <div className="mb-[19px] text-bloo flex items-center"><GiVirtualMarker size={44} className="text-bloo" /></div>
              <div className="flex flex-col text-start">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">OUTCOMES</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">The AI assistant automated resolution of routine queries, reduced average handle time, and improved first-call resolution rates. Supervisors gained access to automated call summaries and sentiment trends, enabling targeted agent coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
        <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">Project Outcomes</h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Automated resolution of high-volume routine queries, significantly reducing agent workload</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Reduced average handle time and improved first-call resolution rates through intelligent routing and context handover</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Automated call summarisation eliminated manual note-taking and improved CRM data quality</p>
          </div>
          <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Real-time sentiment analytics empowered supervisors with actionable insights for agent coaching</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-full">
            <Link href="/case-studies/sentimental-ai" className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col">
              <div className="h-full">
                <div className="flex flex-col">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">Product Review Sentiment Analysis</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Enhancing Product Insights with AI-Powered Sentiment Analysis</p>
<span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">Explore More <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-full">
            <Link href="/case-studies/logistics-ai" className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col">
              <div className="h-full">
                <div className="flex flex-col">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">Logistics Using AI</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Transforming Logistics Operations with AI</p>
<span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">Explore More <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-full">
            <Link href="/case-studies/inventory-ai" className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col">
              <div className="h-full">
                <div className="flex flex-col">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">Inventory Management Using AI</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Revolutionizing Inventory Management with AI</p>
<span className="mt-auto pt-[18px] inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">Explore More <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Ready to Automate Your Customer Call Handling?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about AI voice assistants for customer interaction.</p>
          <button onClick={() => navigate("/demo-form?product=AI%2FML")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our AI/ML Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}

export default VoiceCallAI;


