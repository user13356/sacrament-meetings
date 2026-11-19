
import { notFound } from "next/navigation";
import { getMeetingById } from "@/lib/meetings-db";
import MeetingDetail from "@/components/MeetingDetail";

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <MeetingDetail meeting={meeting} />
    </section>
  );
}
