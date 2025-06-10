import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { NoteEditor } from '@/components/notes/NoteEditor';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <NoteEditor
                    initialContent=""
                    onSave={async (content) => {
                        console.log('Saving note:', content);
                        // Add actual save logic here
                    }}
                    onSummarize={async () => {
                        console.log('Summarizing note');
                        // Add summarize logic here
                    }}
                    onExpand={async () => {
                        console.log('Expanding note');
                        // Add expand logic here
                    }}
                    onFixGrammar={async () => {
                        console.log('Fixing grammar');
                        // Add grammar fix logic here
                    }}
                    onSimplify={async () => {
                        console.log('Simplifying note');
                        // Add simplify logic here
                    }}
                    isNewNote={true}
                />
            </div>
        </AppLayout>
    );
}
