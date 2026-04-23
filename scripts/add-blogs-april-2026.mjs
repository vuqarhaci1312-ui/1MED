/**
 * 2026-cı il aprel ayının 1–23ü üçün gündəlik bir geniş məqalə əlavə edir.
 * BlogData.json və BlogV3Data.json-un əvvəlinə yazır (ən yeni üstə).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const TAG_TO_THUMB = {
  SEO: "covers/cover-seo.svg",
  Analitika: "covers/cover-strategy.svg",
  Vebsayt: "covers/cover-web.svg",
  LinkedIn: "covers/cover-social.svg",
  Email: "covers/cover-email.svg",
  Reklam: "covers/cover-ads.svg",
  Məzmun: "covers/cover-content.svg",
  Video: "covers/cover-video.svg",
  Strategiya: "covers/cover-strategy.svg",
  "Sosial Media": "covers/cover-social.svg",
};

function thumb(tag) {
  return TAG_TO_THUMB[tag] ?? "covers/cover-default.svg";
}

function delay(i) {
  return ["300ms", "700ms", "500ms"][i % 3];
}

function baseCard(p, i) {
  const th = thumb(p.tag);
  return {
    dateIcon: "far fa-calendar-alt",
    author: "1MEDIA Komandası",
    authorIcon: "far fa-user-circle",
    btnText: "Davamı",
    btnIcon: "fas fa-angle-right",
    thumbFull: th,
    thumb: th,
    animationDelay: delay(i),
    id: p.id,
    date: p.date,
    tag: p.tag,
    title: p.title,
    text: p.text,
  };
}

function toV3(p, i) {
  return { ...baseCard(p, i), title2: p.title2, fullContent: p.fullContent };
}

import { APRIL_2026_POSTS } from "./april-2026-posts-data.mjs";

const POSTS = APRIL_2026_POSTS;

const blogDataPath = path.join(root, "src", "assets", "jsonData", "blog", "BlogData.json");
const blogV3Path = path.join(root, "src", "assets", "jsonData", "blog", "BlogV3Data.json");

const existingData = JSON.parse(fs.readFileSync(blogDataPath, "utf8"));
const existingV3 = JSON.parse(fs.readFileSync(blogV3Path, "utf8"));

if (existingData.some((b) => b.id === 99)) {
  console.log("Aprel 2026 məqalələri artıq əlavə olunub (id 99 tapıldı). Çıxılır.");
  process.exit(0);
}

const newCards = POSTS.map((p, i) => baseCard(p, i));
const newV3 = POSTS.map((p, i) => toV3(p, i));

fs.writeFileSync(blogDataPath, JSON.stringify([...newCards, ...existingData], null, 4) + "\n", "utf8");
fs.writeFileSync(blogV3Path, JSON.stringify([...newV3, ...existingV3], null, 4) + "\n", "utf8");

console.log(`Əlavə edildi: ${POSTS.length} geniş məqalə (id ${POSTS[POSTS.length - 1].id}–${POSTS[0].id}, 01–23 Aprel 2026).`);
