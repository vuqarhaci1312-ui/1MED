/** Azərbaycan ay adları ilə blog tarixini müqayisə üçün */
const MONTHS: Record<string, number> = {
    Yanvar: 1,
    Fevral: 2,
    Mart: 3,
    Aprel: 4,
    May: 5,
    İyun: 6,
    İyul: 7,
    Avqust: 8,
    Sentyabr: 9,
    Oktyabr: 10,
    Noyabr: 11,
    Dekabr: 12,
};

export function parseBlogDate(dateStr?: string): number {
    if (!dateStr) return 0;
    const m = dateStr.trim().match(/^(\d+)\s+([^,]+),\s*(\d{4})/);
    if (!m) return 0;
    const day = parseInt(m[1], 10);
    const monthName = m[2].trim();
    const year = parseInt(m[3], 10);
    const month = MONTHS[monthName];
    if (!month) return 0;
    return new Date(year, month - 1, day).getTime();
}

/** Məs. "23 Aprel, 2026" → "2026-04" (Arxiv filter üçün) */
export function parseBlogYearMonthKey(dateStr?: string): string | null {
    if (!dateStr) return null;
    const m = dateStr.trim().match(/^(\d+)\s+([^,]+),\s*(\d{4})/);
    if (!m) return null;
    const monthName = m[2].trim();
    const year = parseInt(m[3], 10);
    const monthNum = MONTHS[monthName];
    if (!monthNum) return null;
    return `${year}-${String(monthNum).padStart(2, "0")}`;
}

export interface BlogArchiveMonthEntry {
    archiveKey: string;
    label: string;
    count: number;
}

/** Blog tarixlərindən unikal ay/il; ən yeni ay əvvəl */
export function buildBlogArchiveMonths<T extends { date?: string }>(blogs: T[]): BlogArchiveMonthEntry[] {
    const acc = new Map<string, { label: string; count: number }>();
    for (const b of blogs) {
        const key = parseBlogYearMonthKey(b.date);
        if (!key) continue;
        const m = b.date!.trim().match(/^(\d+)\s+([^,]+),\s*(\d{4})/);
        const monthName = m![2].trim();
        const year = m![3];
        const label = `${monthName} ${year}`;
        const cur = acc.get(key);
        if (cur) cur.count += 1;
        else acc.set(key, { label, count: 1 });
    }
    return [...acc.entries()]
        .map(([archiveKey, v]) => ({ archiveKey, label: v.label, count: v.count }))
        .sort((a, b) => b.archiveKey.localeCompare(a.archiveKey));
}

/** Ən yeni → ən köhnə (siyahı səhifəsi 1-ci səhifədə ən yeni) */
export function sortBlogsNewestFirst<T extends { date?: string; id?: number }>(blogs: T[]): T[] {
    return [...blogs].sort((a, b) => {
        const ta = parseBlogDate(a.date);
        const tb = parseBlogDate(b.date);
        if (tb !== ta) return tb - ta;
        return (b.id ?? 0) - (a.id ?? 0);
    });
}

/**
 * Siyahı ən yeni → ən köhnə olduqda: "əvvəlki" = xronoloji olaraq daha köhnə, "növbəti" = daha yeni.
 */
/** Məs. "13 Fevral, 2026" → ana səhifə kartı üçün gün və qısa ay. */
export function splitBlogDateForHomeCard(dateStr?: string): { day: string; monthShort: string } {
    if (!dateStr) return { day: "", monthShort: "" };
    const m = dateStr.trim().match(/^(\d+)\s+([^,]+),\s*(\d{4})/);
    if (!m) return { day: "", monthShort: "" };
    const monthName = m[2].trim();
    const monthShort = monthName.slice(0, 3);
    return { day: m[1], monthShort };
}

export function getChronologicalNeighbors<T extends { id?: number; date?: string; title?: string }>(
    blogs: T[],
    currentId: number,
): { older: T | undefined; newer: T | undefined } {
    const sorted = sortBlogsNewestFirst(blogs);
    const idx = sorted.findIndex((b) => b.id === currentId);
    if (idx === -1 || sorted.length === 0) {
        return { older: undefined, newer: undefined };
    }
    const n = sorted.length;
    return {
        older: sorted[(idx + 1) % n],
        newer: sorted[(idx - 1 + n) % n],
    };
}
