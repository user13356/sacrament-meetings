export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-blue-900 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold">
            Springfield Ward
          </h1>

          <p className="text-sm text-blue-200">
            Sacrament Meeting Planner
          </p>
        </div>

        <p className="text-sm">{today}</p>
      </div>
    </header>
  );
}