"use client";

import React from "react";
import { motion } from "framer-motion";

export const MayFifthSection = () => {
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
        <span className="font-semibold text-right">PAGE 08</span>
      </motion.header>

      {/* ── Content: 05 MAY Special Spread ── */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto py-3 sm:py-6 px-2 sm:px-4 text-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 sm:mb-7"
        >
          <span className="font-editorial italic text-[#C9A66B] text-base sm:text-2xl font-bold tracking-widest uppercase">
            SPECIAL DEDICATION • 05 MAY
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mt-1">
            THE DAY YOU SAID YES
          </h2>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mx-auto mt-2" />
        </motion.div>

        {/* Story Card & Twin Photo Spread (Balanced 6-6 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Prominently Sized Twin Photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            {/* Left Photo & Caption */}
            <div className="polaroid-frame bg-white p-3 sm:p-4 shadow-2xl border border-[#6B3045]/20 rounded-xs transform -rotate-2 hover:rotate-0 transition-transform duration-300 w-full sm:w-1/2 max-w-[340px] sm:max-w-none">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#211B1D]/5 border border-[#211B1D]/10 rounded-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/may5_left.jpg"
                  alt="05 May Memory 1"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-3 text-center px-1">
                <p className="font-mono text-[9px] sm:text-[10px] text-[#C9A66B] font-bold tracking-widest uppercase">05.05.2025</p>
                <p className="font-handwriting text-[#6B3045] text-xl sm:text-2xl font-bold leading-tight">The beginning of us ♡</p>
              </div>
            </div>

            {/* Right Photo & Caption */}
            <div className="polaroid-frame bg-white p-3 sm:p-4 shadow-2xl border border-[#6B3045]/20 rounded-xs transform rotate-2 hover:rotate-0 transition-transform duration-300 w-full sm:w-1/2 max-w-[340px] sm:max-w-none">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#211B1D]/5 border border-[#211B1D]/10 rounded-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/may5_right.jpg"
                  alt="05 May Memory 2"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-3 text-center px-1">
                <p className="font-handwriting text-[#6B3045] text-lg sm:text-xl font-bold leading-snug">From that day, it was always you.</p>
              </div>
            </div>
          </motion.div>

          {/* Main Text Box */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="lg:col-span-6 bg-[#FAFAF5] p-5 sm:p-7 border border-[#6B3045]/25 shadow-xl text-left relative"
          >
            <div className="w-16 h-5 bg-[#C9A66B]/30 absolute -top-2.5 left-6 transform -rotate-2" />
            
            <h3 className="font-editorial text-[#421D2A] text-xl sm:text-2xl font-bold uppercase mb-3 tracking-wide">
              MAY 5TH — THE DAY “US” BEGAN
            </h3>

            <div className="font-sans-clean text-xs sm:text-sm leading-relaxed text-[#211B1D]/85 space-y-3">
              <p>
                May 5th will always be different from every other day for me. It was the day two people became us, and without even knowing how much this little beginning would mean to me, we started writing our own story.
              </p>

              <p>
                Since then, there have been so many little moments—our random conversations, the silly things we say, the times we miss each other, even the moments when we fight and don't understand each other. But somehow, through everything, I still find myself choosing you.
              </p>

              <p>
                You once said, <span className="font-serif italic font-semibold text-[#6B3045]">“Nhoi mur safe place hoi tmi.”</span> I don't think you know how deeply those words stayed with me. And somewhere along the way, you became my safe place too.
              </p>

              <p>
                Maybe that's why when I think about May 5th, I don't just think about the day you said yes. I think about the beginning of the person who would eventually become such a huge part of my life.
              </p>

              <p className="font-editorial italic text-base sm:text-lg text-[#6B3045] font-bold">
                “U me forever together hehe.” ❤️
              </p>

              <p>
                And honestly, that's still what I want.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Handwritten Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-5 sm:mt-7"
        >
          <span className="font-handwriting text-[#6B3045] text-2xl sm:text-3xl font-bold tracking-wide">
            “I love you cuz u complete me.”
          </span>
        </motion.div>

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
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">05 MAY DEDICATION</span>
        <span>PAGE 08</span>
      </motion.footer>
    </section>
  );
};
