"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent("magazine-goto-page", { detail: 0 }));
  };

  const scrollToNext = () => {
    window.dispatchEvent(new CustomEvent("magazine-goto-page", { detail: "next" }));
  };

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
        <span className="font-semibold text-right">PAGE 10</span>
      </motion.header>

      {/* ── Main Content: Physical 3D Envelope & Unfolding Letter Spread ── */}
      <div className="relative z-10 my-auto w-full max-w-4xl mx-auto py-3 sm:py-6 px-2 sm:px-4">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="font-editorial italic text-[#421D2A] text-base sm:text-2xl font-medium tracking-wide">
            "A treasured handwritten love letter preserved for you"
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mt-1">
            VINTAGE CORRESPONDENCE
          </h2>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mx-auto mt-2" />
        </motion.div>

        {/* ── Interactive 3D Envelope & Unfolding Letter Assembly ── */}
        <div className="relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* ────────────────────────────────────────────────────────── */
              /* 1. CLOSED PHYSICAL VINTAGE ENVELOPE (MAIN VISUAL OBJECT)   */
              /* ────────────────────────────────────────────────────────── */
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-lg aspect-[1.55/1] mx-auto cursor-pointer group"
                onClick={() => setIsOpen(true)}
              >
                {/* Envelope Soft Natural Shadow */}
                <div className="absolute inset-0 bg-black/25 rounded-sm filter blur-md transform translate-y-4 scale-[0.97] pointer-events-none" />

                {/* Envelope Main Physical Paper Body */}
                <div className="relative w-full h-full bg-[#F0E4D2] border-2 border-[#6B3045]/30 rounded-sm shadow-2xl overflow-hidden flex flex-col justify-between">
                  
                  {/* Aged Parchment Texture Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6B3045]/10 via-transparent to-[#421D2A]/10 pointer-events-none" />

                  {/* Envelope Left Fold Wing */}
                  <div
                    className="absolute inset-0 bg-[#EBDCC7] pointer-events-none"
                    style={{ clipPath: "polygon(0 0, 48% 50%, 0 100%)" }}
                  />

                  {/* Envelope Right Fold Wing */}
                  <div
                    className="absolute inset-0 bg-[#E5D5BE] pointer-events-none"
                    style={{ clipPath: "polygon(100% 0, 52% 50%, 100% 100%)" }}
                  />

                  {/* Envelope Bottom Triangular Fold */}
                  <div
                    className="absolute inset-0 bg-[#E2D2B9] border-t border-[#6B3045]/20 pointer-events-none"
                    style={{ clipPath: "polygon(0 100%, 50% 46%, 100% 100%)" }}
                  />

                  {/* Vintage Postage Stamp (Top Right) */}
                  <div className="absolute top-4 right-5 z-20 pointer-events-none opacity-95">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/elements/stamp.png"
                      alt="Vintage Stamp"
                      className="w-12 sm:w-14 object-contain drop-shadow-sm transform rotate-3"
                    />
                  </div>

                  {/* Faint Postal Cancellation Mark (Top Left) */}
                  <div className="absolute top-5 left-5 z-20 pointer-events-none w-16 h-16 rounded-full border border-[#6B3045]/30 flex flex-col items-center justify-center text-[7px] font-mono text-[#6B3045]/45 tracking-widest transform -rotate-12">
                    <span>AIR MAIL</span>
                    <span>1926</span>
                  </div>

                  {/* Envelope Top Triangular Flap (Closed over Seam) */}
                  <div
                    className="absolute inset-x-0 top-0 h-1/2 bg-[#E8DAC2] border-b-2 border-[#6B3045]/25 shadow-md pointer-events-none z-10"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                  />

                  {/* Deep Burgundy Wax Seal with Embossed "M" Monogram */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#7A2332] shadow-2xl border-2 border-[#5C1724] flex items-center justify-center cursor-pointer group-hover:shadow-2xl transition-shadow"
                    >
                      {/* Irregular Wax Rim Outer Highlight */}
                      <div className="absolute inset-1 rounded-full border border-[#9E3648]/40" />

                      {/* Wax Seal Core */}
                      <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full border border-[#C9A66B]/60 flex items-center justify-center bg-gradient-to-br from-[#8B293A] to-[#5C1724] shadow-inner">
                        <span className="font-serif-title text-[#C9A66B] font-extrabold text-xl sm:text-2xl tracking-widest drop-shadow-md">
                          M
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Instruction Prompt */}
                  <div className="z-20 absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.25em] text-[#6B3045] uppercase font-bold animate-pulse">
                    ✦ CLICK WAX SEAL TO UNSEAL LETTER ✦
                  </div>

                </div>
              </motion.div>
            ) : (
              /* ────────────────────────────────────────────────────────── */
              /* 2. OPENED FOUNTAIN-PEN HANDWRITTEN LETTER (MAIN VISUAL)  */
              /* ────────────────────────────────────────────────────────── */
              <motion.div
                key="opened-letter"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl bg-[#F7EEDF] p-5 sm:p-9 border border-[#6B3045]/25 shadow-2xl rounded-xs text-left min-h-[480px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden"
              >
                {/* Re-fold Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-4 z-30 text-[9px] font-mono tracking-widest text-[#6B3045] uppercase hover:text-[#421D2A] px-2.5 py-1 bg-[#6B3045]/10 rounded-xs border border-[#6B3045]/20 cursor-pointer"
                >
                  ✕ RE-FOLD &amp; SEAL ENVELOPE
                </button>

                {/* Top Heading */}
                <div className="mb-3 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-serif-title text-[#421D2A] text-lg sm:text-2xl font-extrabold tracking-[0.18em] uppercase">
                      A LETTER FOR YOU ♡
                    </h2>
                  </div>
                  <div className="w-28 sm:w-36 h-[1px] bg-[#6B3045]/30" />
                </div>

                {/* Authentic Fountain-Pen Handwritten Letter Content */}
                <div className="font-editorial text-[#421D2A] text-base sm:text-lg lg:text-[1.15rem] leading-[1.65] space-y-3.5 z-10 max-w-[540px] max-h-[390px] sm:max-h-[430px] overflow-y-auto pr-3 select-text">
                  <p className="font-calligraphy text-2xl sm:text-3xl lg:text-4xl text-[#000000] font-normal leading-tight">
                    My dearest Maina,
                  </p>

                  <p className="font-calligraphy text-xl sm:text-2xl lg:text-3xl text-[#000000] font-normal">
                    Happy birthday, my love. ❤️
                  </p>

                  <p>
                    I don't really know how to put everything I feel for you into one letter. There are things I can say easily, and there are things I just keep inside because I don't know how to explain them. But today, I want to try.
                  </p>

                  <p>
                    When I look at us, I don't only remember the happy moments. I remember everything—the late-night conversations, the random talks, the moments we couldn't stop laughing, the days we missed each other, and even the days when we couldn't understand each other.
                  </p>

                  <p>
                    We've had our share of fights and misunderstandings, and I know I'm not perfect. Sometimes I don't say the right thing, sometimes I fail to understand you the way I should, and sometimes I make things harder than they need to be. But one thing I want you to know is that I'm trying. I'm trying to become a better person, not just for myself, but for us.
                  </p>

                  <p>
                    Being away from you isn't always easy. There are days when I wish I could simply be beside you instead of talking through a screen. But even with all this distance between us, you still manage to feel close to my heart.
                  </p>

                  <p>
                    And if someday life becomes difficult, I don't want us to forget why we started. I don't want perfection from us. I just want honesty, patience, understanding, and two people who keep choosing each other.
                  </p>

                  <p>
                    You once said, <span className="font-fountain-pen text-lg sm:text-xl lg:text-2xl text-[#6B3045] font-bold">“Nhoi mur safe place hoi tmi.”</span> Maybe you don't realise it, but you became my safe place too.
                  </p>

                  <p>
                    So on your birthday, I don't just wish you happiness for today. I wish you a life where you always feel loved, valued, understood, and never alone.
                  </p>

                  <p>
                    And whenever life gives us a difficult day, I hope you remember this:
                  </p>

                  <div className="py-1 text-center sm:text-left">
                    <p className="font-fountain-pen text-2xl sm:text-3xl lg:text-4xl text-[#6B3045] font-bold tracking-wide">
                      I will still choose you.
                    </p>
                  </div>

                  <p>
                    Today, tomorrow, and in all the ordinary days in between.
                  </p>

                  <p className="font-calligraphy text-xl sm:text-2xl lg:text-3xl text-[#000000] font-normal">
                    Happy birthday, my love. ❤️
                  </p>

                  <div className="pt-2">
                    <p className="font-fountain-pen text-2xl sm:text-3xl text-[#6B3045] font-bold">With all my heart,</p>
                    <p className="font-fountain-pen text-2xl sm:text-3xl text-[#6B3045] font-bold">Yours, always.</p>
                  </div>
                </div>

                {/* Botanical Dried Rose Taped Near Top Right */}
                <div className="absolute top-3 right-8 z-20 pointer-events-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/elements/rosel.png"
                    alt="Dried Rose"
                    className="w-16 sm:w-22 object-contain filter contrast-[1.05] drop-shadow-md transform rotate-12"
                  />
                  {/* Masking tape holding rose */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/elements/tape.png"
                    alt="Tape"
                    className="absolute top-5 -left-3 w-12 opacity-85 transform -rotate-12"
                  />
                </div>

                {/* Bottom Faint Postmark Stamp */}
                <div className="mt-3 pt-2 border-t border-[#6B3045]/20 flex items-center justify-between text-[9px] font-mono text-[#6B3045] uppercase tracking-widest">
                  <span>PRESERVED HANDWRITING</span>
                  <span>04.09.2026</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* ── Bottom Navigation Bar ── */}
      <motion.footer
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-2 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B3045] shrink-0 font-semibold"
      >
        <button
          onClick={scrollToTop}
          className="hover:text-[#421D2A] transition-colors cursor-pointer"
        >
          BACK TO TOP ↑
        </button>
        <button
          onClick={scrollToNext}
          className="hover:text-[#421D2A] transition-colors cursor-pointer"
        >
          NEXT PAGE →
        </button>
      </motion.footer>
    </section>
  );
};
