interface AnnotationProps {
  children: React.ReactNode;
}

export function Annotation({ children }: AnnotationProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
      <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
      {children}
    </span>
  );
}
