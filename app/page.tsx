"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { LessonOne } from "@/components/lessons/lesson-one";

const lessons = [{ id: 1, component: LessonOne }];

export default function Home() {
  return (
    <>
      <Navigation totalLessons={lessons.length} />

      <main className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-32 px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl mx-auto mb-32"
        >
          <div className="space-y-6">
            <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              Design Engineering
            </p>

            <h1 className="text-[40px] sm:text-[52px] font-medium text-neutral-950 dark:text-white tracking-tight leading-[1.1]">
              The details
              <br />
              most people skip.
            </h1>

            <p className="text-[17px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              Learn the art of micro-interactions and design refinement. Each
              lesson focuses on the subtle details that transform ordinary UI
              elements into refined, tactile experiences.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                className="
                  group inline-flex items-center gap-2
                  bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium
                  transition-colors duration-150
                  hover:bg-neutral-800
                  dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2
                "
              >
                Start Learning
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-150 group-hover:translate-y-0.5"
                >
                  <path
                    d="M8 3.5V12.5M8 12.5L3.5 8M8 12.5L12.5 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>

              <span className="text-[13px] text-neutral-400 dark:text-neutral-500 font-mono">
                {lessons.length} lesson{lessons.length !== 1 ? "s" : ""}{" "}
                available
              </span>
            </div>
          </div>
        </motion.div>

        {/* Lessons */}
        <div className="space-y-48">
          {lessons.map((lesson) => (
            <lesson.component key={lesson.id} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl mx-auto mt-48 pt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-neutral-400 dark:text-neutral-500 font-mono">
              More lessons coming soon.
            </p>

            <p className="text-[11px] text-neutral-300 dark:text-neutral-700 font-mono">
              Inspired by design engineering principles
            </p>
          </div>
        </motion.footer>
      </main>
    </>
  );
}
