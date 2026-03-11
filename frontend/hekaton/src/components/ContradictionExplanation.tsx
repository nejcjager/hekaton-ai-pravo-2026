import { AlertTriangle, AlertCircle, Info, MessageSquareQuote } from "lucide-react";
import { Contradiction, Severity } from "@/types/contradiction";
import { motion, AnimatePresence } from "framer-motion";

interface ContradictionExplanationProps {
  contradiction: Contradiction | null;
}

const severityConfig: Record<Severity, { label: string; icon: typeof AlertTriangle; colorClass: string; bgClass: string }> = {
  critical: { label: "Critical", icon: AlertTriangle, colorClass: "text-critical", bgClass: "bg-critical/10" },
  important: { label: "Important", icon: AlertCircle, colorClass: "text-important", bgClass: "bg-important/10" },
  minor: { label: "Minor", icon: Info, colorClass: "text-minor", bgClass: "bg-minor/10" },
};

const ContradictionExplanation = ({ contradiction }: ContradictionExplanationProps) => {
  if (!contradiction) return null;

  const config = severityConfig[contradiction.severity];
  const Icon = config.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={contradiction.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="bg-card rounded-lg border border-border p-5"
      >
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-9 h-9 rounded-lg ${config.bgClass} flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${config.colorClass}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-sm font-semibold text-foreground">{contradiction.title}</h4>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${config.bgClass} ${config.colorClass}`}>
                {config.label}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {contradiction.explanation}
            </p>
            {contradiction.suggestedQuestions.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <MessageSquareQuote className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Suggested Questions
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {contradiction.suggestedQuestions.map((q, i) => (
                    <li key={i} className="text-sm text-foreground/70 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/30">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContradictionExplanation;
