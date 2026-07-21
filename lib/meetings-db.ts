import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",

    presiding: "Bishop James Smith",
    conducting: "Brother Alan Jones",

    announcements: [
      "Ward temple night on May 10",
      "Youth activity Wednesday at 7:00 PM"
    ],

    openingHymn: {
      number: 2,
      title: "The Spirit of God"
    },

    openingPrayer: "Sister Williams",

    wardBusiness: [
      {
        description: "Sustain new Primary President"
      }
    ],

    stakeBusiness: false,

    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering"
    },

    speakers: [
      {
        name: "Sister Brown",
        topic: "Faith in Jesus Christ",
        type: "speaker"
      },
      {
        name: "Youth Choir",
        topic: "",
        type: "musical-number"
      },
      {
        name: "Brother Davis",
        topic: "Prayer",
        type: "speaker"
      }
    ],

    closingHymn: {
      number: 31,
      title: "O God, Our Help in Ages Past"
    },

    closingPrayer: "Brother Miller"
  },

  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",

    presiding: "Bishop James Smith",
    conducting: "Brother Alan Jones",

    announcements: [
      "Stake conference next week"
    ],

    openingHymn: {
      number: 100,
      title: "Nearer, My God, to Thee"
    },

    openingPrayer: "Brother Clark",

    wardBusiness: [],

    stakeBusiness: false,

    sacramentHymn: {
      number: 170,
      title: "God, Our Father, Hear Us Pray"
    },

    speakers: [],

    closingHymn: {
      number: 85,
      title: "How Firm a Foundation"
    },

    closingPrayer: "Sister Green"
  },

  {
    id: 3,
    date: "2026-05-17",
    meetingType: "stake",

    presiding: "Stake President Johnson",
    conducting: "Counselor Lee",

    announcements: [
      "Stake Conference"
    ],

    openingHymn: {
      number: 6,
      title: "Redeemer of Israel"
    },

    openingPrayer: "Brother White",

    wardBusiness: [],

    stakeBusiness: true,

    sacramentHymn: {
      number: 174,
      title: "While of These Emblems We Partake"
    },

    speakers: [
      {
        name: "Stake Presidency",
        topic: "Conference Messages",
        type: "speaker"
      }
    ],

    closingHymn: {
      number: 19,
      title: "We Thank Thee, O God, for a Prophet"
    },

    closingPrayer: "Sister Evans"
  },

  {
    id: 4,
    date: "2026-05-24",
    meetingType: "regular",

    presiding: "Bishop James Smith",
    conducting: "Brother Alan Jones",

    announcements: [
      "Ward picnic this Saturday"
    ],

    openingHymn: {
      number: 66,
      title: "Rejoice, the Lord Is King!"
    },

    openingPrayer: "Brother Wilson",

    wardBusiness: [
      {
        description: "Missionary farewell"
      }
    ],

    stakeBusiness: false,

    sacramentHymn: {
      number: 173,
      title: "While of These Emblems We Partake"
    },

    speakers: [
      {
        name: "Sister Adams",
        topic: "Service",
        type: "speaker"
      },
      {
        name: "Brother Young",
        topic: "Charity",
        type: "speaker"
      }
    ],

    closingHymn: {
      number: 136,
      title: "I Know That My Redeemer Lives"
    },

    closingPrayer: "Sister Thomas"
  },

  {
    id: 5,
    date: "2026-05-31",
    meetingType: "general",

    presiding: "Area Authority",

    conducting: "Brother Harris",

    announcements: [
      "Broadcast begins at 10:00 AM"
    ],

    openingHymn: {
      number: 72,
      title: "Praise to the Lord"
    },

    openingPrayer: "Brother Lewis",

    wardBusiness: [],

    stakeBusiness: true,

    sacramentHymn: {
      number: 175,
      title: "O God, the Eternal Father"
    },

    speakers: [
      {
        name: "General Authority Broadcast",
        topic: "Worldwide Devotional",
        type: "speaker"
      }
    ],

    closingHymn: {
      number: 304,
      title: "Teach Me to Walk in the Light"
    },

    closingPrayer: "Sister Martin"
  }
];

/**
 * Return all meetings
 * Optionally filter by date.
 */
export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

/**
 * Return a single meeting by ID.
 */
export function getMeetingById(
  id: number
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}