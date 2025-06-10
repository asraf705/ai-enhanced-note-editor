import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';

interface AIEnhancementToolsProps {
  onSummarize: () => Promise<void>;
  onExpand: () => Promise<void>;
  onFixGrammar: () => Promise<void>;
  onSimplify: () => Promise<void>;
  disabled?: boolean;
}

export function AIEnhancementTools({
  onSummarize,
  onExpand,
  onFixGrammar,
  onSimplify,
  disabled = false,
}: AIEnhancementToolsProps) {
  return (
    <div className="flex flex-wrap gap-2 p-2 border rounded-lg bg-muted/50">
      <Button
        variant="outline"
        size="sm"
        onClick={onSummarize}
        disabled={disabled}
      >
        {disabled ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Sparkles className="w-4 h-4 mr-2" />
        )}
        Summarize
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onExpand}
        disabled={disabled}
      >
        {disabled ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Sparkles className="w-4 h-4 mr-2" />
        )}
        Expand
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onFixGrammar}
        disabled={disabled}
      >
        {disabled ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Sparkles className="w-4 h-4 mr-2" />
        )}
        Fix Grammar
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onSimplify}
        disabled={disabled}
      >
        {disabled ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Sparkles className="w-4 h-4 mr-2" />
        )}
        Simplify
      </Button>
    </div>
  );
}
