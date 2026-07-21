import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <section className="space-y-8 rounded-lg bg-white p-8 shadow">

      <div>
        <h1 className="text-3xl font-bold">
          Sacrament Meeting
        </h1>

        <p className="text-gray-600">
          {meeting.date}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Meeting Information
        </h2>

        <p>Type: {meeting.meetingType}</p>

        <p>Presiding: {meeting.presiding}</p>

        <p>Conducting: {meeting.conducting}</p>
      </div>

      {meeting.announcements &&
        meeting.announcements.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">
              Announcements
            </h2>

            <ul className="list-disc pl-6">
              {meeting.announcements.map(
                (announcement, index) => (
                  <li key={index}>
                    {announcement}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      <div>
        <h2 className="text-xl font-semibold">
          Opening Hymn
        </h2>

        <p>
          #{meeting.openingHymn.number}{" "}
          {meeting.openingHymn.title}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Opening Prayer
        </h2>

        <p>{meeting.openingPrayer}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Ward Business
        </h2>

        {meeting.wardBusiness.length === 0 ? (
          <p>None</p>
        ) : (
          <ul className="list-disc pl-6">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>
                {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Stake Business
        </h2>

        <p>{meeting.stakeBusiness ? "Yes" : "No"}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Sacrament Hymn
        </h2>

        <p>
          #{meeting.sacramentHymn.number}{" "}
          {meeting.sacramentHymn.title}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Speakers & Musical Numbers
        </h2>

        <ul className="space-y-3">
          {meeting.speakers.map((speaker, index) => (
            <li
              key={index}
              className="rounded border p-3"
            >
              <p className="font-semibold">
                {speaker.name}
              </p>

              {speaker.type === "speaker" ? (
                <p>{speaker.topic}</p>
              ) : (
                <p>Musical Number</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Closing Hymn
        </h2>

        <p>
          #{meeting.closingHymn.number}{" "}
          {meeting.closingHymn.title}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Closing Prayer
        </h2>

        <p>{meeting.closingPrayer}</p>
      </div>
    </section>
  );
}