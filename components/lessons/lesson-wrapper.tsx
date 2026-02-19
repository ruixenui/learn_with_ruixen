"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LessonWrapperProps {
  lessonNumber: number;
  category: string;
  title: string;
  description: string;
  children: React.ReactNode;
  bottomNote?: string;
  className?: string;
}

export function LessonWrapper({
  lessonNumber,
  category,
  title,
  description,
  children,
  bottomNote = "The details matter.",
  className,
}: LessonWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("w-full max-w-3xl mx-auto", className)}
    >
      {/* Lesson Number */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[11px] font-mono text-neutral-300 dark:text-neutral-700 tracking-wider">
          {String(lessonNumber).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Header */}
      <div className="mb-16 space-y-3">
        <p className="text-[13px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wide uppercase">
          {category}
        </p>
        <h2 className="text-[28px] sm:text-[32px] font-medium text-neutral-950 dark:text-white tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      {/* Content */}
      {children}

      {/* Bottom Note */}
      {bottomNote && (
        <p className="mt-8 text-[13px] text-neutral-400 dark:text-neutral-500 text-center font-mono">
          {bottomNote}
        </p>
      )}
    </motion.section>
  );
}
