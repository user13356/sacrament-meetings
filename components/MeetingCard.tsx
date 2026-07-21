import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <Link href={`/meetings/${meeting.id}`}>
      <article className="rounded-lg border bg-white p-6 shadow transition hover:shadow-lg">
        <h2 className="text-xl font-bold">
          {meeting.date}
        </h2>

        <p className="mt-2 capitalize">
          Meeting Type: {meeting.meetingType}
        </p>

        <p>Presiding: {meeting.presiding}</p>

        <p>Conducting: {meeting.conducting}</p>

        <p className="mt-4 text-blue-700">
          View Program →
        </p>
      </article>
    </Link>
  );
}