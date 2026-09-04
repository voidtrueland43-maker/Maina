"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="paper-grain relative flex h-screen max-h-screen w-full flex-col justify-between overflow-hidden bg-[#F3E8D8] text-[#211B1D] px-5 py-4 sm:px-10 sm:py-6 md:px-14 md:py-8 select-none">
      {/* ── Outer Editorial Inset Border ── */}
      <div className="pointer-events-none absolute inset-3.5 sm:inset-5 md:inset-6 border border-[#6B3045]/20" />

      {/* ── 1. Top Metadata Header Bar ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between border-b border-[#6B3045]/30 pb-2 text-[9px] sm:text-xs tracking-[0.25em] uppercase text-[#6B3045] shrink-0"
      >
        <span className="font-semibold">ISSUE 01</span>
        <span className="font-semibold text-center text-[#C9A66B]">VOL. 01</span>
        <span className="font-semibold text-right">SPECIAL EDITION</span>
      </motion.header>

      {/* ── 2. Central Editorial Typography Stack & Portrait ── */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-2 py-1 min-h-0">
        
        {/* Masthead: MAINA (Scaled down ~10-15%) */}
        <motion.h1
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-title text-[#6B3045] text-5xl sm:text-7xl md:text-[8rem] lg:text-[9.5rem] font-extrabold tracking-tight leading-[0.85] uppercase drop-shadow-sm"
        >
          MAINA
        </motion.h1>

        {/* Dedicated Birthday Information Stack */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col items-center mt-2.5 sm:mt-4 space-y-1 sm:space-y-1.5"
        >
          {/* THE BIRTHDAY ISSUE */}
          <div className="font-editorial font-bold tracking-[0.28em] uppercase text-[#421D2A] text-[11px] sm:text-sm md:text-base">
            THE BIRTHDAY ISSUE
          </div>

          {/* 04 SEPTEMBER */}
          <div className="font-sans-clean font-extrabold text-[#6B3045] text-base sm:text-2xl md:text-3xl tracking-[0.2em] uppercase">
            04 SEPTEMBER
          </div>

          {/* — NO 22 — */}
          <div className="font-serif-title text-[#C9A66B] font-bold text-xs sm:text-lg md:text-xl tracking-widest uppercase">
            — NO 22 —
          </div>

          {/* Tagline */}
          <p className="font-editorial italic text-[#421D2A] text-xs sm:text-lg md:text-xl font-medium tracking-wide pt-0.5">
            "An entire edition dedicated to you."
          </p>
        </motion.div>

        {/* ── 3. Main Cover Portrait (Target ~300-340px width on desktop) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-[210px] sm:w-[270px] md:w-[310px] lg:w-[330px] max-w-full mt-3 sm:mt-5"
        >
          <div className="relative group bg-[#F3E8D8] p-2 sm:p-3 border border-[#6B3045]/30 shadow-xl rounded-sm">
            
            {/* Fine Corner Accents */}
            <div className="absolute top-1 left-1 w-2 h-2 sm:w-2.5 sm:h-2.5 border-t border-l border-[#6B3045]" />
            <div className="absolute top-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 border-t border-r border-[#6B3045]" />
            <div className="absolute bottom-1 left-1 w-2 h-2 sm:w-2.5 sm:h-2.5 border-b border-l border-[#6B3045]" />
            <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 border-b border-r border-[#6B3045]" />

            {/* Vertical Photo Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#421D2A]/10 border border-[#6B3045]/15 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/maina_cover.jpg"
                alt="Maina — Cover Portrait"
                className="h-full w-full object-cover object-center filter contrast-[1.02] saturate-[0.98] transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Warm Editorial Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#421D2A]/25 via-transparent to-transparent" />
            </div>

            {/* Minimal Caption */}
            <div className="mt-1.5 flex items-center justify-between text-[8px] sm:text-[9px] uppercase tracking-widest text-[#6B3045] font-mono px-0.5">
              <span>PORTRAIT NO. 01</span>
              <span>04.09.2026</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── 4. Footer ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 pt-2 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0"
      >
        <span>SPECIAL EDITION</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">MAINA</span>
        <span>04 SEP</span>
      </motion.footer>
    </section>
  );
};






