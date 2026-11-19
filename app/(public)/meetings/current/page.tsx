
import { redirect } from "next/navigation";
import { getMeetingByDate } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  const today = new Date();

  const sunday = new Date(today);

  sunday.setDate(today.getDate() - today.getDay());

  const sundayDate = [
    sunday.getFullYear(),
    String(sunday.getMonth() + 1).padStart(2, "0"),
    String(sunday.getDate()).padStart(2, "0"),
  ].join("-");

  const meeting = await getMeetingByDate(sundayDate);

  if (!meeting) {
    return (
      <section className="py-12 text-center">
        <h1 className="text-2xl font-bold">
          No Meeting Scheduled
        </h1>

        <p className="mt-3 text-gray-600">
          There is no sacrament meeting program recorded for this Sunday.
        </p>

        <a
          href="/meetings"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          View All Meetings
        </a>
      </section>
    );
  }

  redirect(`/meetings/${meeting.id}`);
}
