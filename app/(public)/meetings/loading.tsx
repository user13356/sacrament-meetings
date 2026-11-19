
export default function Loading() {
  return (
    <section className="animate-pulse space-y-8">
      <div className="h-48 rounded-lg bg-gray-200" />

      <div className="h-8 w-64 rounded bg-gray-200" />

      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="space-y-4 rounded-lg border p-6"
          >
            <div className="h-6 w-1/2 rounded bg-gray-200" />
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="h-20 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </section>
  );
}
