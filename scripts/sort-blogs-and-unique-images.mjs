/**
 * 1) BlogData.json və BlogV3Data.json-u tarixə görə ən yeni → ən köhnə sıralayır.
 * 2) Sonra teqlə uyğun covers/*.svg üzlüklərini yazır (sync-blog-thumbs-from-tag.mjs).
 *
 * Köhnə Unsplash jpg: yalnız əlavə bayraqla —
 *   node scripts/sort-blogs-and-unique-images.mjs --download-legacy-jpg
 *
 * Yalnız çatışmayan blog-id-*.jpg bərpası:
 *   node scripts/sort-blogs-and-unique-images.mjs --repair-missing
 */
import fs from "fs";
import path from "path";
import https from "https";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogDir = path.join(root, "public/assets/img/blog");
const blogDataPath = path.join(root, "src/assets/jsonData/blog/BlogData.json");
const blogV3Path = path.join(root, "src/assets/jsonData/blog/BlogV3Data.json");

const MONTHS = {
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

function parseBlogDate(dateStr) {
  if (!dateStr) return 0;
  const m = String(dateStr).trim().match(/^(\d+)\s+([^,]+),\s*(\d{4})/);
  if (!m) return 0;
  const d = parseInt(m[1], 10);
  const mo = MONTHS[m[2].trim()];
  const y = parseInt(m[3], 10);
  if (!mo) return 0;
  return new Date(y, mo - 1, d).getTime();
}

function sortBlogsNewestFirst(arr) {
  return [...arr].sort((a, b) => {
    const ta = parseBlogDate(a.date);
    const tb = parseBlogDate(b.date);
    if (tb !== ta) return tb - ta;
    return (b.id ?? 0) - (a.id ?? 0);
  });
}

/** 56 fərqli Unsplash photo-id (təkrar yoxdur) */
const UNIQUE_PHOTO_IDS = [
  "1504384308090-c894fdcc538d",
  "1522071820081-009f0129c71c",
  "1498050108023-d524f86bc9ca",
  "1523240795612-9a1b3b782aba",
  "1517245386807-bb43f82c33c4",
  "1552664730-d307ca884978",
  "1542744173-8e7e53415bb0",
  "1496181133206-80ce9b088a8d",
  "1517694712202-14dd9538aa97",
  "1526374965328-7f101d73b576",
  "1504805572947-34fad45aed93",
  "1557804507-896a20d53273",
  "1516321497487-e288fb19713c",
  "1556761175-5973dc0f32e7",
  "1521731972812-d69872a51fad",
  "1486312338210-ce6712c5e4d0",
  "1507679799987-c73779587ccf",
  "1517248135467-4c7edcad34c4",
  "1521737604893-d2352a4d1250",
  "1519389950473-47ba0277781c",
  "1460925895917-afdab827c52f",
  "1432888622747-4eb33a24f903",
  "1551288049-bebda4e38f71",
  "1554224155-6726b3ff858f",
  "1574717024653-61fd2cf4d44d",
  "1611162616305-c69b3fa7fbe0",
  "1563986768609-322da13575f3",
  "1529626455594-4ff2812b5f88",
  "1561070791-36c11767b8a9",
  "1677442136019-21780ecad995",
  "1620712947653-b002d9e2b07b",
  "1455392589371-b737c71a3f4e",
  "1639761051544-48b08738ec2f",
  "1473341304170-971d9925d16b",
  "1478730903279-6f8d84da4524",
  "1507003211169-0a1dd7228f2d",
  "1556742049-0cfed4f6a45d",
  "1507925921958-8a62f3d1a50d",
  "1456324504039-3983ca384594",
  "1551434678-e076c223a692",
  "1573496359142-b8d87734a5a2",
  "1524661135-423995f22d0f",
  "1512941937669-90a1b58e7e9c",
  "1488199612216-5d1a47bbd2e5",
  "1516321318421-f851f0d8d1e5",
  "1520607162513-77705c0f73d4",
  "1531482615713-2afd69097998",
  "1542437773-4d7c29c4dc5b",
  "1557804507-896a20d53274",
  "1560472354-1096c63d8f24",
  "1573164713714-d95e436ab8d6",
  "1586281380117-5e60b193d2b8",
  "1596526138083-43ce6e64bbe6",
  "1600886292018-361f77048e3b",
  "1611224923853-80b567fdf09e",
  "1625246338718-1f9e8c87eaa9",
];

function photoUrl(photoId) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1600&q=85`;
}

function isValidJpegFile(filePath) {
  try {
    const fd = fs.openSync(filePath, "r");
    const buf = Buffer.alloc(3);
    fs.readSync(fd, buf, 0, 3, 0);
    fs.closeSync(fd);
    return buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
  } catch {
    return false;
  }
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlink(dest, () => {});
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(String(res.statusCode)));
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    });
    req.on("error", reject);
    req.setTimeout(60000, () => {
      req.destroy();
      file.close();
      fs.unlink(dest, () => {});
      reject(new Error("timeout"));
    });
  });
}

async function ensureBlogImage(blogId) {
  const idx = (blogId - 1) % UNIQUE_PHOTO_IDS.length;
  const fname = `blog-id-${blogId}.jpg`;
  const dest = path.join(blogDir, fname);
  let ok = false;
  for (let k = 0; k < UNIQUE_PHOTO_IDS.length && !ok; k++) {
    const tryPid = UNIQUE_PHOTO_IDS[(idx + k) % UNIQUE_PHOTO_IDS.length];
    try {
      await download(photoUrl(tryPid), dest);
      const st = fs.statSync(dest);
      if (st.size > 8000 && isValidJpegFile(dest)) ok = true;
      else fs.unlinkSync(dest);
    } catch {
      try {
        fs.unlinkSync(dest);
      } catch {
        /* */
      }
    }
  }
  if (!ok) throw new Error(`Download failed for blog ${blogId}`);
  return fname;
}

async function main() {
  if (UNIQUE_PHOTO_IDS.length < 56 || new Set(UNIQUE_PHOTO_IDS).size !== UNIQUE_PHOTO_IDS.length) {
    throw new Error(`Need 56 unique photo ids, got ${UNIQUE_PHOTO_IDS.length} unique ${new Set(UNIQUE_PHOTO_IDS).size}`);
  }

  const repairMissing = process.argv.includes("--repair-missing");

  const blogData = JSON.parse(fs.readFileSync(blogDataPath, "utf8"));

  fs.mkdirSync(blogDir, { recursive: true });

  if (repairMissing) {
    for (const blog of blogData) {
      const id = blog.id;
      const dest = path.join(blogDir, `blog-id-${id}.jpg`);
      const need =
        !fs.existsSync(dest) || fs.statSync(dest).size < 8000 || !isValidJpegFile(dest);
      if (!need) continue;
      await ensureBlogImage(id);
      console.log("repair img", id);
    }
    console.log("Repair-missing OK.");
    return;
  }

  const blogV3 = JSON.parse(fs.readFileSync(blogV3Path, "utf8"));
  const sortedData = sortBlogsNewestFirst(blogData);
  const sortedV3 = sortBlogsNewestFirst(blogV3);

  const downloadLegacy = process.argv.includes("--download-legacy-jpg");

  if (downloadLegacy) {
    for (const blog of sortedData) {
      await ensureBlogImage(blog.id);
      const fname = `blog-id-${blog.id}.jpg`;
      blog.thumb = fname;
      blog.thumbFull = fname;
      const v3 = sortedV3.find((x) => x.id === blog.id);
      if (v3) {
        v3.thumb = fname;
        v3.thumbFull = fname;
      }
      console.log("img", blog.id);
    }
  }

  fs.writeFileSync(blogDataPath, JSON.stringify(sortedData, null, 4));
  fs.writeFileSync(blogV3Path, JSON.stringify(sortedV3, null, 4));

  if (!downloadLegacy) {
    const syncScript = path.join(__dirname, "sync-blog-thumbs-from-tag.mjs");
    const r = spawnSync(process.execPath, [syncScript], { cwd: root, stdio: "inherit" });
    if (r.status !== 0) process.exit(r.status ?? 1);
    console.log("Sorted + tag covers OK.");
  } else {
    console.log("Sorted + legacy JPG OK.");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
