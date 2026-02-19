"use client";

import { LessonWrapper } from "./lesson-wrapper";
import { Annotation } from "@/components/ui/annotation";
import { CodeBlock } from "@/components/ui/code-block";

function BoringButton() {
  return (
    <button className="bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer">
      Get Started
    </button>
  );
}

function RefinedButton() {
  return (
    <button
      className="
        group
        bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer
        transition-all duration-150 ease-out
        hover:bg-neutral-800 hover:scale-[0.98]
        active:scale-[0.96] active:bg-neutral-950
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 dark:active:bg-neutral-200
        dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950
      "
    >
      <span className="inline-flex items-center gap-1.5">
        Get Started
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
        >
          <path
            d="M6.5 3.5L11 8L6.5 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

const refinedButtonCode = `function RefinedButton() {
  return (
    <button
      className="
        group
        bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium

        // Smooth transitions
        transition-all duration-150 ease-out

        // Hover: slight color shift + scale down
        hover:bg-neutral-800 hover:scale-[0.98]

        // Active: deeper press effect
        active:scale-[0.96] active:bg-neutral-950

        // Focus: accessible ring indicator
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-neutral-950
        focus-visible:ring-offset-2

        // Dark mode
        dark:bg-white dark:text-neutral-950
        dark:hover:bg-neutral-100
      "
    >
      <span className="inline-flex items-center gap-1.5">
        Get Started
        {/* Arrow icon with hover animation */}
        <svg className="transition-transform group-hover:translate-x-0.5">
          ...
        </svg>
      </span>
    </button>
  )
}`;

export function LessonOne() {
  return (
    <LessonWrapper
      lessonNumber={1}
      category="Interaction Design"
      title="Buttons shouldn't be boring."
      description="Here's a button that actually feels good to click. The difference between &ldquo;works&rdquo; and &ldquo;feels right&rdquo; is in the details most people skip."
    >
      {/* Before / After Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
        {/* Before */}
        <div className="bg-white dark:bg-neutral-950 p-10 flex flex-col">
          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
            Before
          </p>

          <div className="flex items-center justify-center h-[120px]">
            <BoringButton />
          </div>

          <div className="mt-10 space-y-2.5">
            <Annotation>No hover feedback</Annotation>
            <Annotation>No focus indicator</Annotation>
            <Annotation>No press response</Annotation>
            <Annotation>Static &mdash; feels dead</Annotation>
          </div>
        </div>

        {/* After */}
        <div className="bg-white dark:bg-neutral-950 p-10 flex flex-col">
          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
            After
          </p>

          <div className="flex items-center justify-center h-[120px]">
            <RefinedButton />
          </div>

          <div className="mt-10 space-y-2.5">
            <Annotation>scale(0.98) on hover &mdash; subtle intent</Annotation>
            <Annotation>ring-2 focus-visible &mdash; accessibility</Annotation>
            <Annotation>150ms color transition &mdash; smooth</Annotation>
            <Annotation>scale(0.96) on press &mdash; tactile depth</Annotation>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="mt-12">
        <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
          Implementation
        </p>
        <CodeBlock
          code={refinedButtonCode}
          language="tsx"
          filename="refined-button.tsx"
        />
      </div>
    </LessonWrapper>
  );
}
