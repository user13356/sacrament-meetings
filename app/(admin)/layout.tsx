
import Link from "next/link";
import type { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold">
            Meeting Administration
          </h1>

          <Link
            href="/meetings"
            className="text-sm text-blue-600"
          >
            Back to Meetings
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        {children}
      </main>
    </div>
  );
}
