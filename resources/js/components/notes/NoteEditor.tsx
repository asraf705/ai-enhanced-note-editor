import { useState, useCallback } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Label } from '@/components/ui/label';
import { NoteControls } from './NoteControls';
import { AIEnhancementTools } from './AIEnhancementTools';

interface NoteEditorProps {
  initialContent?: string;
  onSave: (content: string) => Promise<void>;
  onDelete?: () => Promise<void>;
  onSummarize: () => Promise<void>;
  onExpand: () => Promise<void>;
  onFixGrammar: () => Promise<void>;
  onSimplify: () => Promise<void>;
  isNewNote?: boolean;
}

export function NoteEditor({
  initialContent = '',
  onSave,
  onDelete,
  onSummarize,
  onExpand,
  onFixGrammar,
  onSimplify,
  isNewNote = false,
}: NoteEditorProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [rawContent, setRawContent] = useState(initialContent);

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    onUpdate: ({ editor }: { editor: Editor }) => {
      setRawContent(editor.getHTML());
    },
  });

  const handleSave = useCallback(async () => {
    setIsProcessing(true);
    try {
      await onSave(rawContent);
    } finally {
      setIsProcessing(false);
    }
  }, [onSave, rawContent]);

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex justify-between items-center">
        <Label className="text-lg font-semibold">Note Editor</Label>
        <NoteControls 
          onSave={handleSave} 
          onDelete={onDelete ?? (() => Promise.resolve())} 
          isNewNote={isNewNote} 
          isProcessing={isProcessing}
        />
      </div>
      <AIEnhancementTools
        onSummarize={onSummarize}
        onExpand={onExpand}
        onFixGrammar={onFixGrammar}
        onSimplify={onSimplify}
        disabled={isProcessing}
      />
      <div className="flex-1 overflow-auto rounded-lg border p-4">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
}
