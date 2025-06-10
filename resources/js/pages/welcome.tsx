import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="AI-Enhanced Note Editor" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto py-6">
                    <header className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                            AI-Enhanced Note Editor
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Your intelligent note-taking companion.
                        </p>
                    </header>

                    <main className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Note List */}
                        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                                Your Notes
                            </h2>
                            {/* Placeholder for Note List */}
                            <p className="text-gray-500 dark:text-gray-400">
                                No notes yet. Create one to get started!
                            </p>
                        </section>

                        {/* Note Editor */}
                        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                                Note Editor
                            </h2>
                            {/* Placeholder for Note Editor */}
                            <p className="text-gray-500 dark:text-gray-400">
                                Start typing to create a new note or select an existing note to edit.
                            </p>
                        </section>
                    </main>

                    {/* AI Features Section */}
                    <section className="mt-10 bg-white dark:bg-gray-800 shadow rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            AI Features
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>AI-powered suggestions</li>
                            <li>Smart formatting</li>
                            <li>Contextual analysis</li>
                        </ul>
                    </section>

                    {auth.user ? (
                        <div className="mt-6 text-center">
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        </div>
                    ) : (
                        <div className="mt-6 text-center">
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

