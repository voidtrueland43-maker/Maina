"use client";

import React from "react";
import { motion } from "framer-motion";

export const PageTwoSection = () => {
  return (
    <section className="paper-grain relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#F3E8D8] text-[#211B1D] px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 select-none">
      {/* ── Outer Editorial Inset Border ── */}
      <div className="pointer-events-none absolute inset-3.5 sm:inset-5 md:inset-6 border border-[#6B3045]/20" />

      {/* ── 1. Top Editorial Header Bar ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between border-b border-[#6B3045]/30 pb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#6B3045] shrink-0"
      >
        <span className="font-semibold">ISSUE 01</span>

        <div className="font-editorial text-center font-bold tracking-[0.3em] text-[#421D2A] text-xs sm:text-sm">
          THE BIRTHDAY ISSUE
        </div>

        <span className="font-semibold text-right">PAGE 02</span>
      </motion.header>

      {/* ── 2. Central Magazine Article Layout ── */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto py-6 sm:py-10 px-2 sm:px-6">
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-8 sm:mb-12 text-left"
        >
          <h1 className="font-serif-title text-[#6B3045] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-[0.9]">
            THE GIRL<br />
            BEHIND THE<br />
            COVER
          </h1>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mt-4" />
        </motion.div>

        {/* Two-Column Magazine Grid (Left: Portrait | Right: Story Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Large Portrait (3:4 ratio) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="lg:col-span-6 flex flex-col items-start w-full"
          >
            <div className="relative group bg-[#F3E8D8] p-2.5 sm:p-3.5 border border-[#6B3045]/30 shadow-xl rounded-sm w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] mx-auto lg:mx-0">
              
              {/* Fine Corner Accents */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#6B3045]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#6B3045]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#6B3045]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#6B3045]" />

              {/* Vertical Photo Container (3:4 ratio) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#421D2A]/10 border border-[#6B3045]/15 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/behind_cover.jpg"
                  alt="Maina — The Girl Behind The Cover"
                  className="h-full w-full object-cover object-center filter contrast-[1.02] saturate-[0.98] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Warm Vignette Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#421D2A]/20 via-transparent to-transparent" />
              </div>

              {/* Caption */}
              <div className="mt-2 flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6B3045] font-mono px-0.5">
                <span>PORTRAIT NO. 02</span>
                <span>04 SEPTEMBER</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8 text-left pt-2"
          >
            {/* Section Sub-heading */}
            <div>
              <h2 className="font-editorial text-[#421D2A] text-2xl sm:text-3xl font-bold tracking-wide uppercase">
                A LITTLE ABOUT HER
              </h2>
              <div className="w-full h-[1px] bg-[#6B3045]/20 mt-2" />
            </div>

            {/* Editable Paragraph Text */}
            <div className="space-y-4 font-sans-clean text-sm sm:text-base leading-relaxed text-[#211B1D]/85">
              <p>
                22 years of stories, laughter, memories, and moments that leave a lasting mark on everyone around her. A quiet elegance combined with an extraordinary warmth that lights up any space she enters.
              </p>
              <p>
                Whether it's her gentle smile, her sharp mind, or the effortless grace she carries, Maina has a way of making the world around her feel a little softer, brighter, and infinitely more special.
              </p>
            </div>

            {/* Large Italic Pull Quote */}
            <div className="border-l-2 border-[#C9A66B] pl-4 sm:pl-6 py-2 my-4">
              <p className="font-editorial italic text-[#6B3045] text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
                "Some people simply make ordinary days feel special."
              </p>
            </div>

            {/* Editorial Footer Details */}
            <div className="pt-2 text-[10px] uppercase tracking-widest text-[#6B3045]/70 font-mono flex items-center gap-3">
              <span>VOL. 2026</span>
              <span>•</span>
              <span>SPECIAL PRINT</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── 3. Bottom Footer Metadata ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 pt-3 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0"
      >
        <span>THE BIRTHDAY ISSUE</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">04 SEPTEMBER</span>
        <span>PAGE 02</span>
      </motion.footer>
    </section>
  );
};
