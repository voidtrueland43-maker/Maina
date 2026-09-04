"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memoryWallPhotos = [
  {
    id: 1,
    img: "/photos/memory_wall/mw_doctor.jpg",
    caption: "Sweet Smiles 🩺",
    date: "MEMORIES • VOL 01",
    tilt: "-rotate-2 hover:rotate-0",
    aspect: "aspect-[3/4]",
    tape: "top-2 left-1/2 -translate-x-1/2 -rotate-3",
  },
  {
    id: 2,
    img: "/photos/memory_wall/mw_purple.jpg",
    caption: "Quiet Moments ♡",
    date: "04 SEPTEMBER",
    tilt: "rotate-3 hover:rotate-0",
    aspect: "aspect-[3/4]",
    tape: "top-2 right-4 rotate-6",
  },
  {
    id: 3,
    img: "/photos/memory_wall/mw_night_flowers.jpg",
    caption: "Flowers & Night Lights 🌸",
    date: "FAVOURITE MEMORY",
    tilt: "-rotate-1 hover:rotate-0",
    aspect: "aspect-[3/4]",
    tape: "top-2 left-4 -rotate-6",
  },
  {
    id: 4,
    img: "/photos/memory_wall/mw_laughing_jacket.jpg",
    caption: "Pure Joy & Laughter ✨",
    date: "HAPPY DAYS",
    tilt: "rotate-2 hover:rotate-0",
    aspect: "aspect-[3/4]",
    tape: "top-2 left-1/2 -translate-x-1/2 rotate-2",
  },
  {
    id: 5,
    img: "/photos/couple_may5.jpg",
    caption: "The Beginning of Us ♡",
    date: "05 MAY • SPECIAL",
    tilt: "-rotate-3 hover:rotate-0",
    aspect: "aspect-[4/3]",
    tape: "top-2 left-6 -rotate-4",
  },
  {
    id: 6,
    img: "/photos/behind_cover.jpg",
    caption: "Bougainvillea Sunshine 🌺",
    date: "COLLECTIONS",
    tilt: "rotate-1 hover:rotate-0",
    aspect: "aspect-[3/4]",
    tape: "top-2 right-6 rotate-4",
  },
];

export const MemoryWallSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof memoryWallPhotos[0] | null>(null);

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
        <span className="font-semibold text-right">PAGE 04</span>
      </motion.header>

      {/* ── Main Content: Vintage Scrapbook Memory Wall Collage ── */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto py-3 sm:py-6 px-2 sm:px-4">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-9"
        >
          <span className="font-editorial italic text-[#421D2A] text-base sm:text-2xl font-medium tracking-wide">
            "A personal collection of treasured moments physically preserved"
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mt-1">
            THE MEMORY WALL
          </h2>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mx-auto mt-2" />
        </motion.div>

        {/* Vintage Physical Scrapbook Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {memoryWallPhotos.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * m.id }}
              onClick={() => setSelectedPhoto(m)}
              className={`relative bg-[#FAFAF5] p-3 sm:p-4 border border-[#6B3045]/25 shadow-xl rounded-xs transition-transform duration-300 hover:scale-105 hover:z-20 cursor-pointer ${m.tilt}`}
            >
              {/* Paper Masking Tape Accent */}
              <div className={`absolute w-16 sm:w-20 h-5 bg-[#C9A66B]/30 backdrop-blur-xs border border-[#C9A66B]/40 z-20 pointer-events-none ${m.tape}`} />

              {/* Photo Frame Container */}
              <div className={`relative ${m.aspect} w-full overflow-hidden bg-[#421D2A]/10 border border-[#6B3045]/20 rounded-xs shadow-inner`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.img}
                  alt={m.caption}
                  className="h-full w-full object-cover object-top filter contrast-[1.02] saturate-[0.98] transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Caption & Date Tag */}
              <div className="mt-2.5 flex flex-col items-center text-center">
                <span className="font-handwriting text-[#6B3045] text-xl sm:text-2xl font-bold leading-tight">
                  {m.caption}
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#C9A66B] mt-0.5 font-semibold">
                  {m.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal for Photo Zoom ── */}
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
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-3 text-[#6B3045] text-xl font-bold hover:text-[#421D2A] cursor-pointer"
              >
                ✕
              </button>

              <div className="text-[10px] font-mono tracking-widest text-[#C9A66B] uppercase font-bold mb-2">
                {selectedPhoto.date}
              </div>

              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#6B3045]/30 rounded-xs mb-3 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedPhoto.img}
                  alt={selectedPhoto.caption}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <p className="font-handwriting text-[#6B3045] text-2xl sm:text-3xl font-bold">
                "{selectedPhoto.caption}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-2 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0 font-semibold"
      >
        <span>THE BIRTHDAY ISSUE</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">MEMORY WALL</span>
        <span>PAGE 04</span>
      </motion.footer>
    </section>
  );
};
