
export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        Edit Meeting — Coming in Week 04
      </h1>

      <p className="text-gray-600">
        Editing meeting ID: {id}
      </p>

      <p className="text-gray-600">
        The meeting editing form will be implemented
        in Week 04.
      </p>
    </section>
  );
}
