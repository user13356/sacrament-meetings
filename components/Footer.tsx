export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-100 py-6 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} Springfield Ward
      </p>

      <p>Sacrament Meeting Planner</p>
    </footer>
  );
}