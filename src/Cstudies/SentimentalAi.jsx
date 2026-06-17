import React from "react";
import ProductFooter from "/src/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const sentiments = "https://d3r43jacxrwsrp.cloudfront.net/ai/sentiments.jpg";
import { GiVirtualMarker } from "react-icons/gi";
import Link from "next/link";

function SentimentalAi() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h2 className="text-bloo fontweight_1 text-center fontsize_2 py-2">Product Review Sentiment Analysis</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Enhancing Product Insights with AI: Advanced Sentiment Analysis of Product Reviews
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            An AI-driven sentiment analysis platform that processes large volumes of product reviews to surface actionable
            insights about customer satisfaction, recurring issues, and feature preferences â€” enabling product and
            marketing teams to make faster, evidence-based decisions.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4">
            <img src={sentiments} alt="Sentiment Analysis Platform" className="w-full max-h-96 object-cover rounded-lg" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Key Challenges</h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">01</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Processing high volumes of unstructured review text from multiple platforms in multiple languages</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Accurately classifying sentiment at both review level and feature/aspect level within each review</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Distinguishing genuine sentiment from sarcasm, mixed opinions, and domain-specific language</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Surfacing trends and anomalies in customer feedback in near real time as new reviews arrive</p>
            </div>
            <div className="flex gap-4">
              <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">05</h2>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Presenting findings in an accessible dashboard for non-technical business stakeholders</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">About the Project</h2>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">AI-Powered Review Intelligence Platform</h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            The client manages a product catalogue generating thousands of customer reviews monthly across e-commerce platforms and app stores.
            Manual review analysis was slow, inconsistent, and unable to keep pace with review volume. They needed an automated platform to
            continuously mine sentiment signals and surface actionable product intelligence to cross-functional teams.
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
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We designed an aspect-based sentiment analysis pipeline that goes beyond overall star ratings, attributing sentiment to specific product features and themes â€” giving teams granular insight into exactly what customers love or want improved.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start justify-end">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">We built a review ingestion pipeline aggregating data from multiple platforms, trained a fine-tuned NLP model for aspect-level sentiment classification, and delivered results through an interactive dashboard with trend tracking, keyword clouds, and alert notifications for sudden sentiment shifts.</p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2"><GiVirtualMarker size={50} className="text-bloo" /></div>
              <div className="flex flex-col p-2 text-start">
                <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">The platform transformed how the client interprets customer feedback. Product teams identified and prioritised improvement areas faster, marketing campaigns were adjusted based on sentiment trends, and early detection of quality issues reduced escalation risk.</p>
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
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Delivered aspect-level sentiment classification providing granular insight beyond overall star ratings</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">02</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Near real-time review processing enabled faster identification of quality issues and emerging customer concerns</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">03</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Product and marketing teams gained self-service access to actionable sentiment insights through an intuitive dashboard</p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h2 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">04</h2>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">Automated alerts for sudden sentiment shifts reduced time to respond to product incidents and customer complaints</p>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <div className="max-w-7xl mx-auto" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link href="/case-studies/voice-call-ai" className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Voice Call Assistant</h3>
                  <p className="text-blackk/70 fontsize_3 fontweight_1 text-left">Advanced AI Voice Call Assistant Revolutionizing Customer Interaction</p>
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

export default SentimentalAi;


