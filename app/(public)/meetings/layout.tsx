
import Link from "next/link";
import type { ReactNode } from "react";

export default function MeetingsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/meetings"
            className="text-lg font-bold"
          >
            Sacrament Meetings
          </Link>

          <div className="flex gap-6 text-sm">
            <Link href="/meetings">All Meetings</Link>
            <Link href="/meetings/current">Current Meeting</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {children}
      </main>
    </div>
  );
}
