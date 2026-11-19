
"use client";

import {
    useSearchParams,
    usePathname,
    useRouter,
} from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export function MeetingSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", "1");

        if (term.trim()) {
            params.set("query", term.trim());
        } else {
            params.delete("query");
        }

        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    const currentQuery = searchParams.get("query") ?? "";

    return (
        <div className="mb-8">
            <label
                htmlFor="meeting-search"
                className="mb-2 block text-sm font-medium"
            >
                Search Meetings
            </label>

            <input
                key={currentQuery}
                id="meeting-search"
                type="search"
                placeholder="Search by speaker, leader, or meeting type..."
                defaultValue={currentQuery}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Search meetings"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
}
