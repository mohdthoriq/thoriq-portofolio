"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      setIsVisible(scrollTop > 200);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const strokeDashoffset =
    CIRCUMFERENCE - (scrollProgress / 100) * CIRCUMFERENCE;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 22,
          }}
          className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 z-50"
        >
          {/* Subtle Ambient Pulse Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md animate-pulse pointer-events-none" />

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.12, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex size-12 items-center justify-center rounded-full bg-slate-900/90 backdrop-blur-md border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 shadow-xl shadow-black/40 hover:shadow-blue-500/30 hover:border-blue-400 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
          >
            {/* Circular Progress SVG Ring */}
            <svg
              className="absolute inset-0 size-full -rotate-90 pointer-events-none"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              {/* Background circle track */}
              <circle
                cx="24"
                cy="24"
                r={RADIUS}
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-white/10"
              />
              {/* Dynamic progress circle with smooth animation */}
              <circle
                cx="24"
                cy="24"
                r={RADIUS}
                stroke="url(#scrollGradient)"
                strokeWidth="2.5"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-[stroke-dashoffset] duration-200 ease-out"
              />
              <defs>
                <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Bouncing Arrow Icon */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex items-center justify-center"
            >
              <FaArrowUp className="size-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
