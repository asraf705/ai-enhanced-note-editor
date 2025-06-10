import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollAreaViewport } from '@/components/ui/scroll-area';

import { format } from 'date-fns';

interface Note {
  id: string;
  title: string;
  updatedAt: Date;
  preview: string;
}

interface NoteListProps {
  notes: Note[];
  onSelect: (id: string) => void;
  onCreate: () => void;
  currentNoteId?: string;
}

export function NoteList({ notes, onSelect, onCreate, currentNoteId }: NoteListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Your Notes</h2>
        <Button size="sm" onClick={onCreate}>
          New Note
        </Button>
      </div>
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full p-2 border rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ScrollArea className="flex-1">
        <ScrollAreaViewport className="h-full">
          <div className="space-y-2">

          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                note.id === currentNoteId
                  ? 'bg-primary/10 border border-primary/20'
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => onSelect(note.id)}
            >
              <h3 className="font-medium truncate">{note.title}</h3>
              <p className="text-sm text-muted-foreground truncate">{note.preview}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {format(new Date(note.updatedAt), 'MMM d, yyyy h:mm a')}
              </p>
            </div>
          ))}
          </div>
        </ScrollAreaViewport>
      </ScrollArea>

    </div>
  );
}
