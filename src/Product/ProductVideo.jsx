"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function ProductVideo({ eyebrow, heading, subtext, videoId, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumb = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-8">
        <h2 className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">
          {eyebrow}
        </h2>
        <h1 className="font-general font-semibold text-[24px] sm:text-[32px] leading-[1.2] text-blackk mx-auto max-w-4xl py-1">
          {heading}
        </h1>
        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
          {subtext}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {isPlaying ? (
          <div className="relative w-full aspect-[16/6] rounded-[18px] overflow-hidden border border-[#E6EAF1]">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute left-0 w-full"
              style={{ top: "-25%", height: "150%" }}
            />
          </div>
        ) : (
          <button
            type="button"
            aria-label={`Play video: ${heading}`}
            onClick={() => setIsPlaying(true)}
            className="relative block w-full aspect-[16/6] rounded-[18px] overflow-hidden border border-[#E6EAF1]"
          >
            <img
              src={thumb}
              alt={heading}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-[#012060] text-xl">
                <FaPlay />
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
