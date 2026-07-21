import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-8 text-center">
      <Image
        src="/meeting.jpg"
        alt="Sacrament meeting congregation"
        width={1200}
        height={500}
        className="mx-auto rounded-lg"
      />

      <h1 className="text-4xl font-bold">
        Sacrament Meeting Planner
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-gray-600">
        View, manage, and print sacrament meeting agendas for your ward or branch.
      </p>

      <Link
        href="/meetings"
        className="inline-block rounded bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
      >
        View Meetings
      </Link>
    </section>
  );
}