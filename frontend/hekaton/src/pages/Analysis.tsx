import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Scale, ArrowLeft, ChevronLeft, ChevronRight, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import DocumentPanel from "@/components/DocumentPanel";
import ContradictionExplanation from "@/components/ContradictionExplanation";
import { mockAnalysis, Contradiction, Severity } from "@/types/contradiction";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 10;

const severityOrder: Record<Severity, number> = { critical: 0, important: 1, minor: 2 };
const severityIcon: Record<Severity, typeof AlertTriangle> = {
  critical: AlertTriangle,
  important: AlertCircle,
  minor: Info,
};
const severityColor: Record<Severity, { text: string; bg: string }> = {
  critical: { text: "text-critical", bg: "bg-critical/10" },
  important: { text: "text-important", bg: "bg-important/10" },
  minor: { text: "text-minor", bg: "bg-minor/10" },
};

const Analysis = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [listPage, setListPage] = useState(0);
  const navigate = useNavigate();
  const data = mockAnalysis;

  const sorted = useMemo(
    () => [...data.contradictions].sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]),
    [data.contradictions]
  );

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const pageItems = sorted.slice(listPage * ITEMS_PER_PAGE, (listPage + 1) * ITEMS_PER_PAGE);

  const selectedContradiction = selectedId !== null
    ? data.contradictions.find((c) => c.id === selectedId) ?? null
    : null;

  const severityCounts = {
    critical: data.contradictions.filter((c) => c.severity === "critical").length,
    important: data.contradictions.filter((c) => c.severity === "important").length,
    minor: data.contradictions.filter((c) => c.severity === "minor").length,
  };

  const handleSelect = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="h-5 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">ContraDict</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-critical/10 text-critical font-semibold">
                {severityCounts.critical} Critical
              </span>
              <span className="px-2 py-0.5 rounded-full bg-important/10 text-important font-semibold">
                {severityCounts.important} Important
              </span>
              <span className="px-2 py-0.5 rounded-full bg-minor/10 text-minor font-semibold">
                {severityCounts.minor} Minor
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-6 py-5 gap-5">
        {/* Document panels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ height: selectedContradiction ? "45vh" : "30vh", minHeight: "250px" }}
        >
          <DocumentPanel
            title={data.documentAName}
            text={data.documentAText}
            activeContradiction={selectedContradiction}
            side="A"
          />
          <DocumentPanel
            title={data.documentBName}
            text={data.documentBText}
            activeContradiction={selectedContradiction}
            side="B"
          />
        </motion.div>

        {/* Expanded contradiction detail */}
        <AnimatePresence>
          {selectedContradiction && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ContradictionExplanation contradiction={selectedContradiction} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contradiction list */}
        <div className="bg-card rounded-lg border border-border">
          <div className="px-5 py-3 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              All Contradictions
              <span className="text-muted-foreground font-normal ml-2">({sorted.length} total)</span>
            </h3>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => setListPage((p) => Math.max(0, p - 1))}
                  disabled={listPage <= 0}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Button>
                <span className="text-xs text-muted-foreground tabular-nums min-w-[60px] text-center">
                  {listPage + 1} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => setListPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={listPage >= totalPages - 1}
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            )}
          </div>
          <div className="divide-y divide-border">
            {pageItems.map((c) => {
              const Icon = severityIcon[c.severity];
              const colors = severityColor[c.severity];
              const isSelected = selectedId === c.id;

              return (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c.id)}
                  className={`w-full text-left px-5 py-3.5 flex items-center gap-3 transition-colors hover:bg-accent/50 ${
                    isSelected ? "bg-accent/30" : ""
                  }`}
                >
                  <div className={`flex-shrink-0 w-7 h-7 rounded-md ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-3.5 h-3.5 ${colors.text}`} />
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground truncate">{c.title}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} flex-shrink-0`}>
                    {c.severity}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analysis;
