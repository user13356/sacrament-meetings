
import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <section className="space-y-8 rounded-lg bg-white p-8 shadow">

      {/* Meeting Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Sacrament Meeting
        </h1>

        <p className="text-gray-600">
          {meeting.date}
        </p>
      </div>

      {/* Meeting Information */}
      <div>
        <h2 className="text-xl font-semibold">
          Meeting Information
        </h2>

        <p>Type: {meeting.meetingType || "Regular"}</p>
        <p>Presiding: {meeting.presiding || "Not assigned"}</p>
        <p>Conducting: {meeting.conducting || "Not assigned"}</p>
      </div>

      {/* Announcements */}
      <div>
        <h2 className="text-xl font-semibold">
          Announcements
        </h2>

        {meeting.announcements?.length ? (
          <ul className="list-disc pl-6">
            {meeting.announcements.map((announcement, index) => (
              <li key={index}>
                {announcement}
              </li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}
      </div>

      {/* Opening Hymn */}
      <div>
        <h2 className="text-xl font-semibold">
          Opening Hymn
        </h2>

        {meeting.openingHymn ? (
          <p>
            #{meeting.openingHymn.number}{" "}
            {meeting.openingHymn.title}
          </p>
        ) : (
          <p className="text-gray-500">Not assigned</p>
        )}
      </div>

      {/* Opening Prayer */}
      <div>
        <h2 className="text-xl font-semibold">
          Opening Prayer
        </h2>

        <p>{meeting.openingPrayer || "Not assigned"}</p>
      </div>

      {/* Ward Business */}
      <div>
        <h2 className="text-xl font-semibold">
          Ward Business
        </h2>

        {meeting.wardBusiness?.length ? (
          <ul className="list-disc pl-6">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>
                {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}
      </div>

      {/* Stake Business */}
      <div>
        <h2 className="text-xl font-semibold">
          Stake Business
        </h2>

        <p>{meeting.stakeBusiness ? "Yes" : "No"}</p>
      </div>

      {/* Sacrament Hymn */}
      <div>
        <h2 className="text-xl font-semibold">
          Sacrament Hymn
        </h2>

        {meeting.sacramentHymn ? (
          <p>
            #{meeting.sacramentHymn.number}{" "}
            {meeting.sacramentHymn.title}
          </p>
        ) : (
          <p className="text-gray-500">Not assigned</p>
        )}
      </div>

      {/* Speakers and Musical Numbers */}
      <div>
        <h2 className="text-xl font-semibold">
          Speakers & Musical Numbers
        </h2>

        {meeting.speakers?.length ? (
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
                  <p>{speaker.topic || "Topic not specified"}</p>
                ) : (
                  <p>Musical Number</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No speakers or musical numbers assigned.</p>
        )}
      </div>

      {/* Closing Hymn */}
      <div>
        <h2 className="text-xl font-semibold">
          Closing Hymn
        </h2>

        {meeting.closingHymn ? (
          <p>
            #{meeting.closingHymn.number}{" "}
            {meeting.closingHymn.title}
          </p>
        ) : (
          <p className="text-gray-500">Not assigned</p>
        )}
      </div>

      {/* Closing Prayer */}
      <div>
        <h2 className="text-xl font-semibold">
          Closing Prayer
        </h2>

        <p>{meeting.closingPrayer || "Not assigned"}</p>
      </div>

    </section>
  );
}
