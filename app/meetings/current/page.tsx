import { redirect } from "next/navigation";

import { getMeetings } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  const today = new Date();

  const sunday = new Date(today);

  sunday.setDate(today.getDate() - today.getDay());

  const date = sunday.toISOString().split("T")[0];

  const meeting = getMeetings(date)[0];

  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  }

  redirect("/meetings");
}