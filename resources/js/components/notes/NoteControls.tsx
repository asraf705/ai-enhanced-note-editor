import { Button } from '@/components/ui/button';
import { Save, Trash2, Loader2 } from 'lucide-react';

interface NoteControlsProps {
  onSave: () => Promise<void>;
  onDelete: () => Promise<void>;
  isNewNote: boolean;
  isProcessing: boolean;
}

export function NoteControls({ 
  onSave, 
  onDelete, 
  isNewNote, 
  isProcessing 
}: NoteControlsProps) {
  const handleSave = async () => {
    await onSave();
  };

  const handleDelete = async () => {
    await onDelete();
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="default"
        size="sm"
        onClick={handleSave}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Save className="w-4 h-4 mr-2" />
        )}
        Save
      </Button>
      {!isNewNote && (
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Trash2 className="w-4 h-4 mr-2" />
          )}
          Delete
        </Button>
      )}
    </div>
  );
}
