
"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface MeetingsPaginationProps {
    totalPages: number;
    currentPage: number;
}

export default function MeetingsPagination({
    totalPages,
    currentPage,
}: MeetingsPaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function goToPage(page: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", String(page));

        router.push(`/meetings?${params.toString()}`);
    }

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-4 py-8">

            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="rounded border px-4 py-2 disabled:opacity-40"
            >
                Previous
            </button>

            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="rounded border px-4 py-2 disabled:opacity-40"
            >
                Next
            </button>

        </div>
    );
}
