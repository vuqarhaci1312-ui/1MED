/**
 * BlogData.json və BlogV3Data.json-da thumb / thumbFull dəyərlərini teqlə uyğun covers/*.svg edir.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const blogDataPath = path.join(root, "src/assets/jsonData/blog/BlogData.json");
const blogV3Path = path.join(root, "src/assets/jsonData/blog/BlogV3Data.json");

const BLOG_COVER_DEFAULT_FILE = "cover-default.svg";

const TAG_TO_COVER = {
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

function relForTag(tag) {
  const file = TAG_TO_COVER[String(tag || "").trim()] ?? BLOG_COVER_DEFAULT_FILE;
  return `covers/${file}`;
}

function patch(arr) {
  for (const b of arr) {
    const rel = relForTag(b.tag);
    b.thumb = rel;
    b.thumbFull = rel;
  }
}

const blogData = JSON.parse(fs.readFileSync(blogDataPath, "utf8"));
const blogV3 = JSON.parse(fs.readFileSync(blogV3Path, "utf8"));
patch(blogData);
patch(blogV3);
fs.writeFileSync(blogDataPath, JSON.stringify(blogData, null, 4));
fs.writeFileSync(blogV3Path, JSON.stringify(blogV3, null, 4));
console.log("thumb/thumbFull synced to covers/*.svg from tag.");
