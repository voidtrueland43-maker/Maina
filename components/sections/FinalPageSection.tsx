"use client";

import React from "react";
import { motion } from "framer-motion";

export const FinalPageSection = () => {
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
        <span className="font-semibold text-right">PAGE 10</span>
      </motion.header>

      {/* ── Content: Back Cover Closing ── */}
      <div className="relative z-10 my-auto w-full max-w-4xl mx-auto py-6 sm:py-10 px-2 sm:px-6 text-center">
        
        {/* Back Cover Masthead */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-editorial font-bold tracking-[0.3em] uppercase text-[#C9A66B] text-xs sm:text-sm">
            COLLECTOR'S BACK COVER EDITION
          </span>
          <h1 className="font-serif-title text-[#6B3045] text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight leading-none mt-2">
            MAINA
          </h1>
          <div className="w-24 sm:w-36 h-[1px] bg-[#C9A66B] mx-auto mt-4" />
        </motion.div>

        {/* Final Quote & Vignette Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="space-y-6 max-w-xl mx-auto"
        >
          <p className="font-editorial italic text-[#421D2A] text-xl sm:text-3xl leading-snug">
            "An entire edition dedicated to you, today and forever."
          </p>

          <div className="polaroid-frame shadow-2xl mx-auto max-w-[260px] transform rotate-1">
            <div className="aspect-[3/4] w-full overflow-hidden border border-[#211B1D]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/back_cover_page10.jpg" alt="Maina Back Cover Portrait" className="h-full w-full object-cover object-top" />
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-[#6B3045]">
              ISBN 978-0-505-MAINA
            </p>
          </div>

          <div className="pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B3045]">
            05 MAY • 04 SEPTEMBER • SPECIAL PRINT NO. 22
          </div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-3 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0"
      >
        <span>MAINA EDITIONS</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">UNTIL FOREVER</span>
        <span>END OF ISSUE</span>
      </motion.footer>
    </section>
  );
};
