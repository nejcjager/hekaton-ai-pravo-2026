import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scale, ArrowRight, Shield, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import FileDropZone from "@/components/FileDropZone";
import { motion } from "framer-motion";

const Index = () => {
  const [fileA, setFileA] = useState<File | null>(null);
  const [fileB, setFileB] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [compareMode, setCompareMode] = useState<"between" | "within">("between");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate backend processing, then navigate to results with mock data
    setTimeout(() => {
      navigate("/analysis");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
              ContraDict
            </span>
          </div>
          <span className="text-xs text-muted-foreground tracking-wide">
            Legal Contradiction Analysis
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          {/* Hero text */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Uncover Every Contradiction
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Upload two legal documents and let AI identify factual contradictions,
              temporal inconsistencies, and logical gaps — in seconds.
            </p>
          </div>

          {/* Comparison mode switch */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-card border border-border rounded-lg px-5 py-3 flex items-center gap-4">
              <Label
                htmlFor="compare-mode"
                className={`text-sm cursor-pointer transition-colors ${
                  compareMode === "within" ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Within one party
              </Label>
              <Switch
                id="compare-mode"
                checked={compareMode === "between"}
                onCheckedChange={(checked) => setCompareMode(checked ? "between" : "within")}
              />
              <Label
                htmlFor="compare-mode"
                className={`text-sm cursor-pointer transition-colors ${
                  compareMode === "between" ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Between two parties
              </Label>
            </div>
          </div>

          {/* Upload area */}
          <div className={`grid gap-6 mb-8 ${compareMode === "between" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-md mx-auto"}`}>
            <FileDropZone label={compareMode === "between" ? "Document A" : "Party Documents"} file={fileA} onFileSelect={setFileA} />
            {compareMode === "between" && (
              <FileDropZone label="Document B" file={fileB} onFileSelect={setFileB} />
            )}
          </div>

          {/* Analyze button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-sm font-semibold tracking-wide gap-2"
              disabled={!fileA || (compareMode === "between" && !fileB) || isAnalyzing}
              onClick={handleAnalyze}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Contradictions
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            {[
              { icon: Eye, title: "Detect", desc: "Identifies direct, temporal, and logical contradictions" },
              { icon: Shield, title: "Assess", desc: "Rates severity: critical, important, or minor" },
              { icon: Zap, title: "Prepare", desc: "Generates targeted questions for cross-examination" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">
            Built for legal professionals · Supports English & Slovenian
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
