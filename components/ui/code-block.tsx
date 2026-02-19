"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="relative group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            {filename}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
            {language}
          </span>
        </div>
      )}

      {/* Code */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-white dark:bg-neutral-950 text-[13px] leading-relaxed">
          <code className="font-mono text-neutral-800 dark:text-neutral-200">
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="select-none w-8 shrink-0 text-neutral-300 dark:text-neutral-700 text-right pr-4">
                    {i + 1}
                  </span>
                )}
                <span className="flex-1">{line || " "}</span>
              </div>
            ))}
          </code>
        </pre>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-md",
            "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300",
            "bg-neutral-100 dark:bg-neutral-800",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-150",
            "focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          )}
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="text-green-500"
            >
              <path
                d="M13.5 4.5L6 12L2.5 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect
                x="5"
                y="5"
                width="8"
                height="8"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 11V3.5C3 3.22386 3.22386 3 3.5 3H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
