"use client";

import React from "react";
import { motion } from "framer-motion";

export const SeptemberFourthSection = () => {
  return (
    <section className="paper-grain relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#F3E8D8] text-[#211B1D] px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 select-none">
      {/* ── Outer Editorial Inset Border ── */}
      <div className="pointer-events-none absolute inset-3.5 sm:inset-5 md:inset-6 border border-[#6B3045]/20" />

      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex items-center justify-between border-b border-[#6B3045]/30 pb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#6B3045] shrink-0"
      >
        <span className="font-semibold">ISSUE 01</span>
        <div className="font-editorial text-center font-bold tracking-[0.3em] text-[#421D2A] text-xs sm:text-sm">
          THE BIRTHDAY ISSUE
        </div>
        <span className="font-semibold text-right">PAGE 09</span>
      </motion.header>

      {/* ── Content: 04 SEPTEMBER Birthday Celebration ── */}
      <div className="relative z-10 my-auto w-full max-w-5xl mx-auto py-6 sm:py-10 px-2 sm:px-6 text-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10"
        >
          <span className="font-serif-title text-[#C9A66B] font-bold text-xl sm:text-3xl tracking-widest uppercase">
            — NO 22 —
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mt-1">
            HAPPY 22ND BIRTHDAY, MAINA!
          </h2>
          <div className="w-24 sm:w-36 h-[1px] bg-[#C9A66B] mx-auto mt-3" />
        </motion.div>

        {/* Celebration Box & Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          
          {/* Main Birthday Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="md:col-span-6"
          >
            <div className="polaroid-frame shadow-2xl mx-auto max-w-[320px] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-[3/4] w-full overflow-hidden border border-[#211B1D]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/photos/bday22_page8.jpg" alt="Happy 22nd Birthday Maina" className="h-full w-full object-cover object-top" />
              </div>
              <p className="mt-3 font-handwriting text-[#6B3045] text-2xl font-bold text-center">
                Happy Birthday Maina! 🎂✨
              </p>
            </div>
          </motion.div>

          {/* Birthday Wish Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="md:col-span-6 text-left bg-[#FAFAF5] p-6 sm:p-8 border border-[#6B3045]/25 shadow-xl relative"
          >
            <div className="w-16 h-5 bg-[#6B3045]/20 absolute -top-2.5 right-6 transform rotate-2" />
            <h3 className="font-editorial text-[#421D2A] text-2xl font-bold uppercase mb-3">
              04 SEPTEMBER • THE CELEBRATION
            </h3>
            <p className="font-sans-clean text-sm sm:text-base leading-relaxed text-[#211B1D]/85 mb-4">
              Today marks the beginning of your 22nd year on this earth. May this new chapter bring you endless joy, incredible adventures, boundless love, and every happiness your heart desires.
            </p>
            <p className="font-handwriting text-[#6B3045] text-2xl sm:text-3xl leading-snug">
              "22 looks breathtaking on you, Maina."
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-3 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0"
      >
        <span>THE BIRTHDAY ISSUE</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">04 SEPTEMBER</span>
        <span>PAGE 09</span>
      </motion.footer>
    </section>
  );
};
