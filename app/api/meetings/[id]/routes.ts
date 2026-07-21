import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteProps
) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return NextResponse.json(
      {
        message: "Invalid meeting id",
      },
      {
        status: 400,
      }
    );
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json(
      {
        message: "Meeting not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(meeting);
}