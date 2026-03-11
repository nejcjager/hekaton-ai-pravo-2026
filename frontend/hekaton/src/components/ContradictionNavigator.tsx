import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContradictionNavigatorProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const ContradictionNavigator = ({ current, total, onPrev, onNext }: ContradictionNavigatorProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={onPrev}
        disabled={current <= 1}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium text-foreground min-w-[80px] text-center tabular-nums">
        {current} of {total}
      </span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={onNext}
        disabled={current >= total}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ContradictionNavigator;
