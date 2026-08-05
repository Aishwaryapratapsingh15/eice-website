import React from "react";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const voicecall1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/voicecall1.png";
const voicecall2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/voicecall2.png";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function VoiceCallAI() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="w-full">
          <h2 className="text-bloo fontweight_1 text-center fontsize_2 py-2">Voice Call Assistant</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Advanced AI Voice Call Assistant Revolutionizing Customer Interaction
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            An AI-powered voice call assistant that automates customer interactions, delivers real-time conversation
            insights, and reduces handle time, enabling businesses to scale support operations without compromising
            service quality.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={voicecall1} alt="Voice Call AI Platform" className="w-full h-full object-fit rounded-lg"  width="1" height="1" />
            <img src={voicecall2} alt="Voice Call AI Dashboard" className="w-full h-full object-fit rounded-lg"  width="300" height="300" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Achieving high speech recognition accuracy across diverse accents, languages, and noisy call environments</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Handling complex, multi-turn conversations and context switching without losing conversational coherence</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Integrating seamlessly with existing CRM and telephony infrastructure with minimal disruption</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Ensuring low latency responses to maintain a natural, real-time conversational experience for callers</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">05</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Providing actionable analytics and call summaries to supervisors without manual review of recordings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">About the Project</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">AI-Powered Customer Call Automation</h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            The client operates a large-scale customer support function handling thousands of inbound calls daily. Rising volumes, inconsistent
            service quality, and high agent turnover prompted the need for an AI-driven voice assistant capable of handling routine queries
            autonomously while providing live agents with real-time guidance and post-call analytics for continuous improvement.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">Unlocking Success</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">IDEATION:</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We designed a conversational AI layer that sits between the telephony system and the CRM, handling routine queries autonomously, escalating complex cases to human agents with full context, and capturing structured call data for analytics in real time.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We integrated a speech-to-text engine, a domain-specific NLU model, and a dialogue management system into a low-latency pipeline. The assistant was trained on historical call transcripts and integrated with the client's CRM via REST APIs, enabling personalised responses and automatic call summarisation.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">The AI assistant automated resolution of routine queries, reduced average handle time, and improved first-call resolution rates. Supervisors gained access to automated call summaries and sentiment trends, enabling targeted agent coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Project Outcomes</h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Automated resolution of high-volume routine queries, significantly reducing agent workload</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Reduced average handle time and improved first-call resolution rates through intelligent routing and context handover</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Automated call summarisation eliminated manual note-taking and improved CRM data quality</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Real-time sentiment analytics empowered supervisors with actionable insights for agent coaching</p>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <div className="max-w-7xl mx-auto" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/sentimental-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Product Review Sentiment Analysis</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Enhancing Product Insights with AI-Powered Sentiment Analysis</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/logistics-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Logistics Using AI</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Transforming Logistics Operations with AI</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/inventory-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Inventory Management Using AI</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Revolutionizing Inventory Management with AI</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default VoiceCallAI;


