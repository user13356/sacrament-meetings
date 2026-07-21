import Image from "next/image";
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

async function getMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(
    "http://localhost:3000/api/meetings",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

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

        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}