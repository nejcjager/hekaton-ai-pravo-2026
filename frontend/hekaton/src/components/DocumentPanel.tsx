import { useEffect, useRef } from "react";
import { Contradiction, Severity } from "@/types/contradiction";

interface DocumentPanelProps {
  title: string;
  text: string;
  activeContradiction: Contradiction | null;
  side: "A" | "B";
}

const severityBgClass: Record<Severity, string> = {
  critical: "bg-[hsl(var(--highlight-critical))] border-l-4 border-critical",
  important: "bg-[hsl(var(--highlight-important))] border-l-4 border-important",
  minor: "bg-[hsl(var(--highlight-minor))] border-l-4 border-minor",
};

const DocumentPanel = ({ title, text, activeContradiction, side }: DocumentPanelProps) => {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (highlightRef.current) {
      highlightRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeContradiction]);

  const excerpt =
    side === "A"
      ? activeContradiction?.documentAExcerpt
      : activeContradiction?.documentBExcerpt;

  const renderText = () => {
    if (!activeContradiction || !excerpt) {
      return <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">{text}</p>;
    }

    const idx = text.indexOf(excerpt);
    if (idx === -1) {
      return <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">{text}</p>;
    }

    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + excerpt.length);
    const after = text.slice(idx + excerpt.length);

    return (
      <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">
        {before}
        <span
          ref={highlightRef}
          className={`inline px-1 py-0.5 rounded-sm ${severityBgClass[activeContradiction.severity]}`}
        >
          {match}
        </span>
        {after}
      </p>
    );
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-secondary/50">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-5">{renderText()}</div>
    </div>
  );
};

export default DocumentPanel;
