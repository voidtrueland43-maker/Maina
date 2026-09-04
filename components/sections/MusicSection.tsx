"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize single Audio instance on mount and handle lifecycle events
  useEffect(() => {
    // Encoded URL path for audio file in public/audio/
    const audioPath = "/audio/Laagi%20Na%20Choote%20A%20Gentleman%20320%20Kbps.mp3";
    const audio = new Audio(audioPath);
    audio.preload = "auto";
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
      setIsPaused(false);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    };

    const handlePause = () => {
      if (audioRef.current && audioRef.current.currentTime < audioRef.current.duration) {
        setIsPlaying(false);
        setIsPaused(true);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audioRef.current = null;
    };
  }, []);

  // Toggle Play / Pause / Resume on cassette tap or click
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsPaused(false);
        })
        .catch((err) => {
          console.warn("Audio playback could not start automatically:", err);
        });
    }
  };

  // Handle Back button click cleanly (pause audio if playing when navigating)
  const handleBack = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
    window.dispatchEvent(new CustomEvent("magazine-goto-page", { detail: "prev" }));
  };

  return (
    <section className="paper-grain relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#F3E8D8] text-[#211B1D] px-2 py-2 sm:px-6 sm:py-4 md:px-10 md:py-6 select-none">
      {/* ── Background Subtle Vertical Paper Stripe Texture ── */}
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(107,48,69,0.06)_24px,rgba(107,48,69,0.06)_25px)]" />

      {/* ── Outer Editorial Inset Border ── */}
      <div className="pointer-events-none absolute inset-2 sm:inset-4 md:inset-5 border border-[#6B3045]/20" />

      {/* ── Header Bar ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex items-center justify-between border-b border-[#6B3045]/30 pb-1.5 sm:pb-2 text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#6B3045] shrink-0 font-semibold"
      >
        <span>MAINA EDITIONS</span>
        <span className="font-editorial text-center font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#421D2A] text-[9px] sm:text-xs">
          A PAGE FOR OUR SONGS
        </span>
        <span className="text-right">SPECIAL ISSUE</span>
      </motion.header>

      {/* ── Main Content: Vertically & Horizontally Centered Composition ── */}
      <div className="relative z-10 my-auto w-full max-w-xl mx-auto py-1 sm:py-2 px-2 sm:px-4 text-center flex flex-col items-center justify-center">
        
        {/* Title Section matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center justify-center mb-1 sm:mb-2"
        >
          <span className="font-editorial uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#421D2A] text-[8px] sm:text-xs font-semibold block mb-0.5 text-center">
            T H E &nbsp; S O U N D T R A C K &nbsp; O F &nbsp; U S
          </span>
          <h1 className="font-serif-title text-[#581C28] text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none mt-0.5 sm:mt-1 text-center">
            MAINA
          </h1>

          {/* Heart Divider Line */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 my-1.5 sm:my-2 text-[#581C28]/60 w-36 sm:w-56 mx-auto">
            <div className="h-[1px] bg-[#581C28]/35 flex-1" />
            <span className="text-[10px] sm:text-xs text-[#581C28]">♥</span>
            <div className="h-[1px] bg-[#581C28]/35 flex-1" />
          </div>

          {/* Handwritten Script Title */}
          <h2 className="font-calligraphy text-[#581C28] text-2xl sm:text-4xl md:text-5xl font-normal leading-tight mt-0.5 text-center">
            Your favorite song!
          </h2>
        </motion.div>

        {/* ── Clean Symmetrically Centered Cassette & Spool Overlay ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="relative my-1 sm:my-2 w-full max-w-[230px] xs:max-w-[265px] sm:max-w-[340px] md:max-w-[400px] mx-auto flex flex-col items-center justify-center translate-x-4 sm:translate-x-6 -translate-y-1.5 sm:-translate-y-2.5"
        >
          {/* Cassette Interactive Container */}
          <motion.div
            role="button"
            tabIndex={0}
            aria-label={isPlaying ? "Pause Laagi Na Choote" : isPaused ? "Resume Laagi Na Choote" : "Play Laagi Na Choote"}
            onClick={togglePlayPause}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePlayPause();
              }
            }}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative w-full cursor-pointer group select-none flex justify-center items-center rounded-xl transition-all duration-300 ${
              isPlaying ? "drop-shadow-2xl shadow-[#581C28]/30" : "drop-shadow-xl"
            }`}
          >
            {/* Clean Symmetrically Cropped Photo-Realistic Cassette Base Image (NO Baked-In Text) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/cassette_tape_exact.png"
              alt="Vintage Stereo Cassette with Dried Flower"
              className="w-full h-auto mix-blend-multiply select-none pointer-events-none transform transition-transform duration-300 group-hover:drop-shadow-2xl mx-auto"
            />

            {/* ── Rotating Reel / Spool Overlay Left (Centered in Left Reel Hole) ── */}
            <div
              className="absolute pointer-events-none rounded-full flex items-center justify-center overflow-hidden"
              style={{
                top: "43.7%",
                left: "31.9%",
                width: "5.5%",
                height: "9.87%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, ease: "linear", duration: 1.4 } : { duration: 0.3 }}
              >
                {/* Outer spool wheel background ring for contrast inside reel opening */}
                <circle cx="50" cy="50" r="46" fill="#1C1618" opacity="0.9" />
                {/* Inner center hub */}
                <circle cx="50" cy="50" r="18" fill="#FFFFFF" stroke="#1C1618" strokeWidth="3" />
                <circle cx="50" cy="50" r="7" fill="#1C1618" />
                {/* 6 High-Contrast Spool Teeth Spokes that make rotation 100% noticeable */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <g key={deg} transform={`rotate(${deg} 50 50)`}>
                    <rect
                      x="45"
                      y="5"
                      width="10"
                      height="22"
                      fill="#FFFFFF"
                      stroke="#1C1618"
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <circle cx="50" cy="11" r="2.5" fill="#1C1618" />
                  </g>
                ))}
              </motion.svg>
            </div>

            {/* ── Rotating Reel / Spool Overlay Right (Centered in Right Reel Hole) ── */}
            <div
              className="absolute pointer-events-none rounded-full flex items-center justify-center overflow-hidden"
              style={{
                top: "43.7%",
                left: "67.2%",
                width: "5.5%",
                height: "9.87%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, ease: "linear", duration: 1.4 } : { duration: 0.3 }}
              >
                {/* Outer spool wheel background ring for contrast inside reel opening */}
                <circle cx="50" cy="50" r="46" fill="#1C1618" opacity="0.9" />
                {/* Inner center hub */}
                <circle cx="50" cy="50" r="18" fill="#FFFFFF" stroke="#1C1618" strokeWidth="3" />
                <circle cx="50" cy="50" r="7" fill="#1C1618" />
                {/* 6 High-Contrast Spool Teeth Spokes that make rotation 100% noticeable */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <g key={deg} transform={`rotate(${deg} 50 50)`}>
                    <rect
                      x="45"
                      y="5"
                      width="10"
                      height="22"
                      fill="#FFFFFF"
                      stroke="#1C1618"
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <circle cx="50" cy="11" r="2.5" fill="#1C1618" />
                  </g>
                ))}
              </motion.svg>
            </div>

            {/* Subtle Playing State Glow Badge on Cassette */}
            {isPlaying && (
              <div className="absolute top-1.5 right-2 sm:top-2 sm:right-3 z-30 flex items-center gap-1 bg-[#581C28]/90 text-[#FAF6F0] text-[7px] sm:text-[8px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded-full shadow-md backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                PLAYING
              </div>
            )}
            {isPaused && (
              <div className="absolute top-1.5 right-2 sm:top-2 sm:right-3 z-30 flex items-center gap-1 bg-[#421D2A]/85 text-[#FAF6F0] text-[7px] sm:text-[8px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded-full shadow-md backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                PAUSED
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* ── Single Instruction Text Under Cassette (Centered 2-Line Block) ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-editorial italic text-[#4A2218] text-[11px] sm:text-sm md:text-base leading-snug mt-1.5 sm:mt-3 text-center font-medium max-w-xs sm:max-w-sm mx-auto"
        >
          {isPlaying ? (
            <span>(Now Playing "Laagi Na Choote"<br />tap cassette to pause ♡)</span>
          ) : isPaused ? (
            <span>(Music Paused<br />tap cassette to resume ♡)</span>
          ) : (
            <span>(Double tap on the cassette<br />to play the music!)</span>
          )}
        </motion.p>

        {/* ── Navigation BACK Button (Centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2.5 sm:mt-4 flex justify-center w-full"
        >
          <button
            type="button"
            onClick={handleBack}
            className="font-editorial font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs text-[#FAF6F0] bg-[#421D2A] hover:bg-[#581C28] border border-[#581C28]/40 px-6 py-2 sm:px-8 sm:py-2.5 rounded-full shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 mx-auto"
          >
            BACK
          </button>
        </motion.div>

      </div>

      {/* ── Footer Bar ── */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 pt-1.5 sm:pt-2 border-t border-[#6B3045]/30 flex flex-row items-center justify-between text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#6B3045] shrink-0 font-semibold"
      >
        <span>MAINA EDITIONS</span>
        <span className="font-editorial text-[#421D2A] font-bold tracking-[0.25em] sm:tracking-[0.3em]">MUSIC • MEMORIES • US</span>
        <span>PAGE 05 / 11</span>
      </motion.footer>
    </section>
  );
};
