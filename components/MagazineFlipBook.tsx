"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HeroSection } from "./sections/HeroSection";
import { PageTwoSection } from "./sections/PageTwoSection";
import { OurStorySection } from "./sections/OurStorySection";
import { MemoryWallSection } from "./sections/MemoryWallSection";
import { MusicSection } from "./sections/MusicSection";
import { LittleThingsSection } from "./sections/LittleThingsSection";
import { PhotoGallerySection } from "./sections/PhotoGallerySection";
import { MayFifthSection } from "./sections/MayFifthSection";
import { SeptemberFourthSection } from "./sections/SeptemberFourthSection";
import { LetterSection } from "./sections/LetterSection";
import { FinalPageSection } from "./sections/FinalPageSection";

const PAGES = [
  { id: "hero", num: "01", component: <HeroSection /> },
  { id: "page-two", num: "02", component: <PageTwoSection /> },
  { id: "our-story", num: "03", component: <OurStorySection /> },
  { id: "memory-wall", num: "04", component: <MemoryWallSection /> },
  { id: "music", num: "05", component: <MusicSection /> },
  { id: "little-things", num: "06", component: <LittleThingsSection /> },
  { id: "gallery", num: "07", component: <PhotoGallerySection /> },
  { id: "may-fifth", num: "08", component: <MayFifthSection /> },
  { id: "september-fourth", num: "09", component: <SeptemberFourthSection /> },
  { id: "letter", num: "10", component: <LetterSection /> },
  { id: "final", num: "11", component: <FinalPageSection /> },
];

export const MagazineFlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isFlippingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const totalPages = PAGES.length;

  // Detect mobile viewport width dynamically for GPU-optimized mobile transition
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToPage = useCallback(
    (pageIndex: number) => {
      if (isFlippingRef.current) return;
      if (pageIndex < 0 || pageIndex >= totalPages) return;

      isFlippingRef.current = true;
      setDirection(pageIndex > currentPage ? "next" : "prev");
      setCurrentPage(pageIndex);

      // Fast response (380ms) so users can swipe quickly 1 -> 2 -> 3 without lockup
      setTimeout(() => {
        isFlippingRef.current = false;
      }, 380);
    },
    [currentPage, totalPages]
  );

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  // Listen for custom navigation events from section buttons (e.g. BACK TO TOP / NEXT PAGE)
  useEffect(() => {
    const handleCustomNav = (e: Event) => {
      const customEv = e as CustomEvent;
      if (typeof customEv.detail === "number") {
        goToPage(customEv.detail);
      } else if (customEv.detail === "next") {
        nextPage();
      } else if (customEv.detail === "prev" || customEv.detail === "top") {
        goToPage(0);
      }
    };

    window.addEventListener("magazine-goto-page", handleCustomNav);
    return () => window.removeEventListener("magazine-goto-page", handleCustomNav);
  }, [goToPage, nextPage]);

  // Keyboard navigation listener (EXCLUSIVELY ArrowRight and ArrowLeft)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextPage();
      } else if (e.key === "ArrowLeft") {
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, prevPage]);

  // Touch swipe gesture handlers for mobile (Strict horizontal ratio & fast response)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartXRef.current - touchEndX;
    const diffY = touchStartYRef.current - touchEndY;

    // Trigger page flip ONLY if horizontal movement is significantly stronger than vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) * 1.4 && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        nextPage();
      } else {
        prevPage();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Direct click on explicit left/right edge zones
  const handleViewportClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest(".cursor-pointer") ||
      target.closest("select")
    ) {
      return;
    }

    const width = window.innerWidth;
    if (e.clientX > width * 0.88) {
      nextPage();
    } else if (e.clientX < width * 0.12) {
      prevPage();
    }
  };

  return (
    <>
      <main
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleViewportClick}
        style={{ touchAction: "pan-y" }}
        className="relative h-screen w-screen overflow-hidden bg-[#F3E8D8] text-[#211B1D] select-none perspective-[1600px]"
      >
        {/* ── 3D / Hardware-Accelerated Page Stack ── */}
        <div className="relative h-full w-full preserve-3d">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={
                isMobile
                  ? direction === "next" ? { x: "100%", opacity: 0.9, scale: 0.98, rotateY: 0 } : { x: "-100%", opacity: 0.9, scale: 0.98, rotateY: 0 }
                  : direction === "next" ? { rotateY: 90, opacity: 0.85, x: "0%", transformOrigin: "left center" } : { rotateY: -90, opacity: 0.85, x: "0%", transformOrigin: "right center" }
              }
              animate={
                isMobile
                  ? { x: "0%", opacity: 1, scale: 1, rotateY: 0 }
                  : { rotateY: 0, opacity: 1, x: "0%", scale: 1 }
              }
              exit={
                isMobile
                  ? direction === "next" ? { x: "-100%", opacity: 0.9, scale: 0.98, rotateY: 0 } : { x: "100%", opacity: 0.9, scale: 0.98, rotateY: 0 }
                  : direction === "next" ? { rotateY: -90, opacity: 0.85, x: "0%", transformOrigin: "left center" } : { rotateY: 90, opacity: 0.85, x: "0%", transformOrigin: "right center" }
              }
              transition={{
                duration: isMobile ? 0.35 : 0.65,
                ease: "easeInOut",
              }}
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className="absolute inset-0 h-full w-full bg-[#F3E8D8] shadow-2xl overflow-hidden"
            >
              {/* Spine Paper Fold Shadow Gradient */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-12 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-40" />

              {/* Active Magazine Page Component (Allows Normal Vertical Scroll) */}
              <div className="h-full w-full overflow-y-auto overflow-x-hidden">
                {PAGES[currentPage].component}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Editorial Side Navigation Arrows ── */}
        {currentPage > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPage();
            }}
            aria-label="Previous Page"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-[#6B3045]/10 hover:bg-[#6B3045]/20 text-[#6B3045] transition-all cursor-pointer backdrop-blur-xs hidden sm:flex items-center justify-center group border border-[#6B3045]/20 shadow-md"
          >
            <span className="text-xs font-mono font-bold group-hover:-translate-x-0.5 transition-transform">
              ←
            </span>
          </button>
        )}

        {currentPage < totalPages - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPage();
            }}
            aria-label="Next Page"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-[#6B3045]/10 hover:bg-[#6B3045]/20 text-[#6B3045] transition-all cursor-pointer backdrop-blur-xs hidden sm:flex items-center justify-center group border border-[#6B3045]/20 shadow-md"
          >
            <span className="text-xs font-mono font-bold group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </button>
        )}

        {/* ── Floating Editorial Page Indicator Badge ── */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#F3E8D8]/90 px-4 py-1 rounded-full border border-[#6B3045]/25 shadow-md backdrop-blur-xs">
          <span className="font-editorial font-bold text-xs sm:text-sm text-[#421D2A] tracking-widest">
            {PAGES[currentPage].num} / {totalPages < 10 ? `0${totalPages}` : totalPages}
          </span>
        </div>
      </main>
    </>
  );
};
