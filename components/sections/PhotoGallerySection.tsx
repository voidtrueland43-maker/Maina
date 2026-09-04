"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Maina's actual 35mm film photos array (easily reordered/expanded)
const basePhotos = [
  { id: 1, src: "/photos/maina1.jpg", frame: "FRAME 01", caption: "Green Saree Elegance ♡" },
  { id: 2, src: "/photos/maina2.jpg", frame: "FRAME 02", caption: "Cute Smile & Teddy Bear ♡" },
  { id: 3, src: "/photos/maina3.jpg", frame: "FRAME 03", caption: "Pink Dress Grace ♡" },
  { id: 4, src: "/photos/maina4.jpg", frame: "FRAME 04", caption: "Red Saree Sunshine ♡" },
  { id: 5, src: "/photos/maina5.jpg", frame: "FRAME 05", caption: "Flowers & Night Lights ♡" },
];

// Duplicate photo sequence programmatically to create an unbroken, infinite 35mm film reel loop
const filmReelPhotos = [...basePhotos, ...basePhotos, ...basePhotos, ...basePhotos];

export const PhotoGallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof basePhotos[0] | null>(null);

  return (
    <section className="paper-grain relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#F3E8D8] text-[#211B1D] px-3 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 select-none">
      {/* ── Outer Editorial Inset Border ── */}
      <div className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-6 border border-[#6B3045]/20" />

      {/* ── Header Bar ── */}
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
        <span className="font-semibold text-right">PAGE 07</span>
      </motion.header>

      {/* ── Main Content: Continuous 35mm Movie Reel Projector ── */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto py-3 sm:py-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 sm:mb-7 px-2"
        >
          <span className="font-editorial italic text-[#421D2A] text-base sm:text-2xl font-medium tracking-wide">
            "A continuous 35mm film reel rolling through time"
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mt-1">
            PROJECTOR MEMORY REEL
          </h2>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mx-auto mt-2" />
        </motion.div>

        {/* ── Projector Housing & Moving Film Strip ── */}
        <div className="relative overflow-hidden w-full bg-[#140F11] py-4 sm:py-6 rounded-lg sm:rounded-xl shadow-2xl border border-[#6B3045]/40 shadow-black/40">
          
          {/* Subtle Projector Lens Vignette Shadows Left & Right */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#140F11] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#140F11] to-transparent z-20" />

          {/* Endless Rolling 35mm Film Strip Ticker */}
          <div className="flex w-max animate-film-reel hover:[animation-play-state:paused] cursor-pointer">
            {filmReelPhotos.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="flex-shrink-0 bg-[#1D1619] p-2.5 sm:p-3 border-r border-[#332228] flex flex-col justify-between select-none w-[170px] sm:w-[220px] md:w-[260px] group transition-colors hover:bg-[#281D22]"
              >
                {/* Top Perforation Hole Row */}
                <div className="flex justify-between items-center mb-2 px-1">
                  <div className="w-3 h-4 sm:w-3.5 sm:h-4.5 bg-[#F3E8D8]/20 rounded-xs border border-white/10" />
                  <div className="w-3 h-4 sm:w-3.5 sm:h-4.5 bg-[#F3E8D8]/20 rounded-xs border border-white/10" />
                  <div className="w-3 h-4 sm:w-3.5 sm:h-4.5 bg-[#F3E8D8]/20 rounded-xs border border-white/10" />
                </div>

                {/* 35mm Photo Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black border border-white/20 rounded-xs shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="h-full w-full object-cover filter contrast-[1.04] saturate-[0.95] group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle Film Grain & Vignette Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Frame Badge */}
                  <span className="absolute bottom-1.5 right-2 text-[8px] sm:text-[9px] font-mono text-[#C9A66B] tracking-widest uppercase bg-black/75 px-1.5 py-0.5 rounded-xs border border-[#C9A66B]/30">
                    {photo.frame}
                  </span>
                </div>

                {/* Bottom Perforation Hole Row */}
                <div className="flex justify-between items-center mt-2 px-1">
                  <div className="w-3 h-4 sm:w-3.5 sm:h-4.5 bg-[#F3E8D8]/20 rounded-xs border border-white/10" />
                  <div className="w-3 h-4 sm:w-3.5 sm:h-4.5 bg-[#F3E8D8]/20 rounded-xs border border-white/10" />
                  <div className="w-3 h-4 sm:w-3.5 sm:h-4.5 bg-[#F3E8D8]/20 rounded-xs border border-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Handwritten Caption Underneath */}
        <p className="mt-4 text-center font-handwriting text-[#6B3045] text-2xl sm:text-3xl font-semibold">
          "Every frame holds a story of you. ✨"
        </p>
      </div>

      {/* ── Lightbox Modal when photo frame is clicked ── */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#F3E8D8] p-4 sm:p-6 rounded-sm border border-[#6B3045]/40 shadow-2xl text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-3 text-[#6B3045] text-xl font-bold hover:text-[#421D2A] cursor-pointer"
              >
                ✕
              </button>

              <div className="text-[10px] font-mono tracking-widest text-[#C9A66B] uppercase font-bold mb-2">
                {selectedPhoto.frame} • 35MM CINEMA FRAME
              </div>

              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#6B3045]/30 rounded-xs mb-3 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="font-handwriting text-[#6B3045] text-2xl sm:text-3xl font-bold">
                "{selectedPhoto.caption}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer Bar ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-2 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0"
      >
        <span>THE BIRTHDAY ISSUE</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">35MM FILM REEL</span>
        <span>PAGE 07</span>
      </motion.footer>
    </section>
  );
};
