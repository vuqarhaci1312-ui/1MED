import { Link, useLocation, useSearchParams } from "react-router-dom";
import BlogData from "../../assets/jsonData/blog/BlogData.json";
import { buildBlogArchiveMonths } from "../../utils/blogChronology";

const ArchiveWidget = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const isLightMode = location.pathname.includes("-light");
    const basePath = isLightMode ? "/blog-with-sidebar-light" : "/blog-with-sidebar";
    const currentArchive = searchParams.get("archive");
    const category = searchParams.get("category");

    const months = buildBlogArchiveMonths(BlogData);

    const buildQuery = (opts: { archive?: string | null }) => {
        const p = new URLSearchParams();
        if (opts.archive) p.set("archive", opts.archive);
        if (category && category !== "Hamısı") p.set("category", category);
        const qs = p.toString();
        return qs ? `?${qs}` : "";
    };

    const allMonthsTo = () => {
        const p = new URLSearchParams();
        if (category && category !== "Hamısı") p.set("category", category);
        const qs = p.toString();
        return qs ? `${basePath}?${qs}` : basePath;
    };

    return (
        <>
            <div className="sidebar-item archives">
                <h4 className="title">Arxiv</h4>
                <div className="sidebar-info">
                    <ul>
                        {currentArchive && (
                            <li>
                                <Link
                                    to={allMonthsTo()}
                                    style={{
                                        fontWeight: "normal",
                                        color: "inherit",
                                    }}
                                >
                                    Bütün aylar
                                </Link>
                            </li>
                        )}
                        {months.map((m) => (
                            <li key={m.archiveKey}>
                                <Link
                                    to={`${basePath}${buildQuery({ archive: m.archiveKey })}`}
                                    style={{
                                        fontWeight: currentArchive === m.archiveKey ? "bold" : "normal",
                                        color: currentArchive === m.archiveKey ? "#ff4a17" : "inherit",
                                    }}
                                >
                                    {m.label} <span>{m.count}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ArchiveWidget;
