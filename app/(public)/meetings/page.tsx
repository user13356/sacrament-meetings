
import Image from "next/image";

import MeetingCard from "@/components/MeetingCard";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";

import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const query = params.query || "";
  const currentPage = Math.max(1, Number(params.page) || 1);

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <section className="space-y-8">

      <Image
        src="/meeting.jpg"
        alt="Sacrament meeting congregation"
        width={1200}
        height={500}
        className="mx-auto rounded-lg shadow"
        priority
      />

      <div>
        <h1 className="mb-8 text-center text-3xl font-bold">
          All Meetings
        </h1>

        {/* Search */}
        <MeetingSearch />

        {/* Meeting Results */}
        {meetings.length === 0 ? (
          <p className="py-10 text-center text-gray-500">
            No meetings found. Try another search.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {meetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination totalPages={totalPages} />

      </div>
    </section>
  );
}
