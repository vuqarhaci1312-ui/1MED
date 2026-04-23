import { useEffect, useState } from "react";
import { BLOG_COVER_DEFAULT_FILE, getBlogCoverRelativePath } from "../../utils/blogCoverByTag";

const BASE = "/assets/img/blog";
const FALLBACK_SRC = `${BASE}/covers/${BLOG_COVER_DEFAULT_FILE}`;

const RASTER_EXT = /\.(jpe?g|png|webp|gif)(\?.*)?$/i;

function isRasterBlogFile(name?: string): boolean {
    const n = name?.trim();
    return !!n && RASTER_EXT.test(n);
}

interface BlogCoverImageProps {
    /** Teq mövzu üzlüyünü seçir (covers/*.svg). */
    tag?: string;
    /** Şəkil yolu (`thumb` / `thumbFull`). Raster (.jpg və s.) varsa, teqdən üstün tutulur. */
    fileName?: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

function resolveBlogCoverSrc(tagProp?: string, fileNameProp?: string): string {
    const file = fileNameProp?.trim();
    if (file && isRasterBlogFile(file)) return `${BASE}/${file}`;
    if (tagProp?.trim()) return `${BASE}/${getBlogCoverRelativePath(tagProp.trim())}`;
    if (file) return `${BASE}/${file}`;
    return FALLBACK_SRC;
}

const BlogCoverImage = ({ tag, fileName, alt, width, height, className }: BlogCoverImageProps) => {
    const [src, setSrc] = useState(() => resolveBlogCoverSrc(tag, fileName));

    useEffect(() => {
        setSrc(resolveBlogCoverSrc(tag, fileName));
    }, [tag, fileName]);

    const cls = ["blog-cover-img", className].filter(Boolean).join(" ");

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cls}
            onError={() => setSrc((current) => (current === FALLBACK_SRC ? current : FALLBACK_SRC))}
        />
    );
};

export default BlogCoverImage;
