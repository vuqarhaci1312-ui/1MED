/**
 * Blog üz şəkli: teqə görə bir neçə mövzu üzlüyü (covers/*.svg).
 * Hər məqaləyə ayrı foto faylı yox — eyni mövzulu məqalələr eyni üzlüyü paylaşır.
 */
export const BLOG_COVER_DEFAULT_FILE = "cover-default.svg";

const TAG_TO_COVER: Record<string, string> = {
    SEO: "cover-seo.svg",
    "Zero-Click SEO": "cover-seo.svg",
    "Voice Search": "cover-seo.svg",
    "AI SEO": "cover-seo.svg",

    "Sosial Media": "cover-social.svg",
    "Facebook Ads": "cover-ads.svg",
    LinkedIn: "cover-social.svg",
    "LinkedIn Premium": "cover-social.svg",
    Reels: "cover-social.svg",
    TikTok: "cover-social.svg",
    "TikTok Gəlir": "cover-social.svg",
    YouTube: "cover-social.svg",
    "YouTube Gəlir": "cover-social.svg",
    "AI Social Media": "cover-social.svg",
    "Community Growth": "cover-social.svg",
    "UGC Strategy": "cover-social.svg",

    Video: "cover-video.svg",
    "AI Video": "cover-video.svg",

    Email: "cover-email.svg",
    "Email Marketing": "cover-email.svg",

    Vebsayt: "cover-web.svg",
    AdSense: "cover-web.svg",

    Strategiya: "cover-strategy.svg",
    "Məzmun Planı": "cover-strategy.svg",
    ROI: "cover-strategy.svg",
    Analitika: "cover-strategy.svg",
    "AI Analytics": "cover-strategy.svg",

    Məzmun: "cover-content.svg",
    "Interactive Content": "cover-content.svg",
    Podcast: "cover-content.svg",

    Reklam: "cover-ads.svg",
    "Affiliate Marketing": "cover-ads.svg",

    Branding: "cover-brand.svg",
    "Personal Branding": "cover-brand.svg",
    Influencer: "cover-brand.svg",
    "Micro-Influencer": "cover-brand.svg",

    "AI & Automation": "cover-ai.svg",
    "AI Automation": "cover-ai.svg",
    "AI CRM": "cover-ai.svg",
    "AI Copywriting": "cover-ai.svg",
    "AI Design": "cover-ai.svg",
    "AI Marketing": "cover-ai.svg",
    "AI Tools": "cover-ai.svg",

    "NFT Marketing": "cover-web3.svg",
    "Web3 Marketing": "cover-web3.svg",

    "Privacy Marketing": "cover-privacy.svg",

    Sustainability: "cover-sustainability.svg",

    Freelancing: "cover-freelance.svg",
};

/** `covers/cover-seo.svg` formatında nisbət yol */
export function getBlogCoverRelativePath(tag: string): string {
    const key = tag.trim();
    const file = TAG_TO_COVER[key] ?? BLOG_COVER_DEFAULT_FILE;
    return `covers/${file}`;
}
