"use client";

import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "THE WAY YOU MAKE ME SMILE",
    text: "There are so many random moments with you that somehow stay in my head. Even something as simple as me saying, “Aru hahi dia”, and you being your usual cute self. Those tiny moments are the ones I secretly love the most.",
  },
  {
    num: "02",
    title: "YOUR LOVE FOR FLOWERS",
    text: "I love knowing the little things that make you happy. Like that one conversation where you simply said, “😭i love flowers”, and then told me, “Mur gutei table saisa flowers di vorti”. It's such a small thing, but these are exactly the things about you that I want to remember.",
  },
  {
    num: "03",
    title: "MY SAFE PLACE",
    text: "Out of everything you've ever said to me, there is one line that will probably stay with me forever: “Nhoi mur safe place hoi tmi.”\n\nI don't think you realise how much that meant to me. Knowing that you feel safe with me is something I will always treasure.",
  },
  {
    num: "04",
    title: "MY PUALI",
    text: "Somehow, “puali” became our little thing. “Ahh emn cute puali tu”, “Morom lgia puali tu”—even these silly little names became part of us. And honestly, I don't think I'll ever get tired of calling you my puali.",
  },
  {
    num: "05",
    title: "THE WAY YOU STAY",
    text: "We've had difficult moments too, but you've said something that I never want to forget: “muk tmr shadow nisinake logote paba xdai.”\n\nThat's the kind of love I want us to have—not only when everything is easy, but when life gets difficult too.",
  },
  {
    num: "06",
    title: "JUST YOU & ME",
    text: "Maybe the simplest way to describe everything I feel is something I once told you: “I love you cuz u complete me.” And then you gave us the perfect little answer yourself: “U me forever together hehe.” ❤️",
  },
];

export const LittleThingsSection = () => {
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
        <span className="font-semibold text-right">PAGE 06</span>
      </motion.header>

      {/* ── Content: 6 Scrapbook Cards ── */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto py-3 sm:py-6 px-2 sm:px-4">
        
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="font-editorial italic text-[#421D2A] text-base sm:text-2xl font-medium tracking-wide">
            “A little collection of the things that make you my favourite person.”
          </span>
          <h2 className="font-serif-title text-[#6B3045] text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
            LITTLE THINGS I LOVE ABOUT YOU
          </h2>
          <div className="w-20 sm:w-32 h-[1px] bg-[#C9A66B] mx-auto mt-2" />
        </motion.div>

        {/* Grid of 6 Scrapbook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 * i }}
              className="scrapbook-card p-4 sm:p-6 border border-[#6B3045]/20 rounded-xs relative group hover:border-[#6B3045]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.25em] font-mono text-[#C9A66B] font-bold mb-1">
                  NO. {r.num} —
                </div>
                <h3 className="font-serif-title text-[#6B3045] text-lg sm:text-xl font-bold mb-2 uppercase tracking-wide">
                  {r.title}
                </h3>
                <div className="font-sans-clean text-xs sm:text-sm leading-relaxed text-[#211B1D]/85 space-y-2 whitespace-pre-line">
                  {r.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Handwritten Sign-Off Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-6 sm:mt-8"
        >
          <span className="font-handwriting text-[#6B3045] text-2xl sm:text-3xl font-bold tracking-wide">
            “Love u forever deha ❤️🫂”
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
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.3em]">LITTLE THINGS</span>
        <span>PAGE 06</span>
      </motion.footer>
    </section>
  );
};
