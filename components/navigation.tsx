"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavigationProps {
  totalLessons: number;
}

export function Navigation({ totalLessons }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Progress bar */}
      <div className="h-0.5 bg-neutral-100 dark:bg-neutral-900">
        <motion.div
          className="h-full bg-neutral-900 dark:bg-white origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-medium text-neutral-950 dark:text-white tracking-tight">
            Learn Ruixen UI
          </span>
          <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 rounded">
            {totalLessons} lessons
          </span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={cn(
            "p-2 rounded-lg",
            "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
            "hover:bg-neutral-100 dark:hover:bg-neutral-900",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          )}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 2V4M10 16V18M18 10H16M4 10H2M15.657 4.343L14.243 5.757M5.757 14.243L4.343 15.657M15.657 15.657L14.243 14.243M5.757 5.757L4.343 4.343"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>
    </motion.header>
  );
}
