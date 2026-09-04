"use client";

import React from "react";
import { motion } from "framer-motion";

export const OurStorySection = () => {
  return (
    <section className="paper-grain relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#F3E8D8] text-[#211B1D] px-3 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 select-none">
      {/* ── Outer Editorial Inset Border ── */}
      <div className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-6 border border-[#6B3045]/20" />

      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex items-center justify-between border-b border-[#6B3045]/30 pb-2 text-[9px] sm:text-xs tracking-[0.25em] uppercase text-[#6B3045] shrink-0"
      >
        <span className="font-semibold">ISSUE 01</span>
        <div className="font-editorial text-center font-bold tracking-[0.3em] text-[#421D2A] text-xs sm:text-sm">
          THE BIRTHDAY ISSUE
        </div>
        <span className="font-semibold text-right">PAGE 03</span>
      </motion.header>

      {/* ── Content: Timeline Spread ── */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto py-3 sm:py-6 px-2 sm:px-4">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 sm:mb-8"
        >
          <span className="font-editorial italic text-[#421D2A] text-base sm:text-2xl font-medium tracking-wide">
            “From one little yes to a story I never want to end.”
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mt-1">
            OUR STORY
          </h2>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mx-auto mt-2" />
        </motion.div>

        {/* Timeline Cards Grid (Spacious 2-Card Spread) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* Milestone 1: 05 MAY (LEFT CARD) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="relative bg-[#FAFAF5] p-5 sm:p-8 border border-[#6B3045]/25 shadow-xl rounded-xs transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between min-h-[420px]"
          >
            {/* Paper Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#C9A66B]/30 backdrop-blur-xs border border-[#C9A66B]/40 transform -rotate-2" />
            
            <div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#C9A66B] font-bold mb-1">
                THE BEGINNING • 05 MAY
              </div>
              <h3 className="font-serif-title text-[#6B3045] text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-snug">
                The Day Our Story Began
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm md:text-base leading-relaxed text-[#211B1D]/85 mb-5">
                <span className="font-semibold text-[#6B3045]">May 5th, 2025</span> — the day a simple moment became the beginning of <span className="font-semibold text-[#6B3045] font-serif italic">us</span>. I didn't know then how much this one day would come to mean to me, or how deeply you would become a part of my life.
              </p>
            </div>

            <div>
              {/* Photo Thumbnail (Landscape Aspect Ratio) */}
              <div className="relative aspect-[16/10] w-full max-w-[88%] mx-auto overflow-hidden border border-[#6B3045]/25 rounded-xs mb-3 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/couple_may5.jpg"
                  alt="05 May Couple Memory — The Day Our Story Began"
                  className="h-full w-full object-cover object-center filter contrast-[1.02] saturate-[0.98]"
                />
              </div>

              <div className="text-center pt-1">
                <span className="font-handwriting text-[#421D2A] text-lg sm:text-xl font-semibold">
                  ~ The beginning of my favourite story ♡
                </span>
              </div>
            </div>
          </motion.div>

          {/* Milestone 2: 04 SEPTEMBER (RIGHT CARD) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="relative bg-[#FAFAF5] p-5 sm:p-8 border border-[#6B3045]/25 shadow-xl rounded-xs transform rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between min-h-[420px]"
          >
            {/* Paper Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#6B3045]/20 backdrop-blur-xs border border-[#6B3045]/30 transform rotate-2" />
            
            <div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#C9A66B] font-bold mb-1">
                A NEW CHAPTER • 04 SEPTEMBER
              </div>
              <h3 className="font-serif-title text-[#6B3045] text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-snug">
                The Day My Favourite Girl Was Born
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm md:text-base leading-relaxed text-[#211B1D]/85 mb-5">
                Before you became my person, you were someone's daughter, someone's friend, someone's little girl—and then somehow, you became <span className="font-semibold text-[#6B3045] font-serif italic">my favourite person in the world</span>. Today isn't just about another year of your life; it's about celebrating the person I'm so lucky to love.
              </p>
            </div>

            <div>
              {/* Photo Thumbnail (Landscape Aspect Ratio, 85% Width) */}
              <div className="relative aspect-[16/10] w-full max-w-[88%] mx-auto overflow-hidden border border-[#6B3045]/25 rounded-xs mb-3 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/childhood.jpg"
                  alt="04 September Childhood Memory"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="text-center pt-1">
                <span className="font-handwriting text-[#421D2A] text-lg sm:text-xl font-semibold">
                  ~ The world became a little more beautiful on this day ✨
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-2 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0 font-semibold"
      >
        <span>THE BIRTHDAY ISSUE</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">OUR STORY</span>
        <span>PAGE 03</span>
      </motion.footer>
    </section>
  );
};
