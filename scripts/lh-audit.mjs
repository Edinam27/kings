import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "fs";
import { join } from "node:path";
import os from "node:os";

// Target URL: pass as CLI arg (node scripts/lh-audit.mjs <url>) or
// LH_URL=<url>; otherwise defaults to the live GitHub Pages site.
const url = process.argv[2] ?? process.env.LH_URL ?? "https://edinam27.github.io/kings/";

import { existsSync, readdirSync } from "node:fs";

function findChrome() {
  const roots = [
    process.env.LOCALAPPDATA,
    ...(process.env.USERPROFILE ? [process.env.USERPROFILE] : []),
    join(os.homedir(), "AppData", "Local"),
  ].filter(Boolean);
  let best;
  for (const root of roots) {
    const ms = join(root, "ms-playwright");
    if (!existsSync(ms)) continue;
    for (const d of readdirSync(ms)) {
      const m = /^chromium(?:_headless_shell)?-(\d+)$/.exec(d);
      if (!m) continue;
      for (const rel of [
        join("chrome-win", "chrome.exe"),
        join("chrome-headless-shell-win64", "chrome-headless-shell.exe"),
      ]) {
        const p = join(ms, d, rel);
        if (existsSync(p)) {
          const rev = Number(m[1]);
          if (!best || rev > best.rev) best = { rev, path: p };
        }
      }
    }
  }
  return best?.path;
}
const chromePath = findChrome();
if (!chromePath) {
  console.error("Could not locate a Chromium binary under ms-playwright.");
  process.exit(1);
}

// Launch Chrome ourselves and let chrome-launcher pick a free port.
// (Passing a fixed `port` to lighthouse without a running Chrome makes it
// try to *connect* to that port instead of launching — hence ECONNREFUSED.)
const chrome = await chromeLauncher.launch({
  chromePath,
  chromeFlags: [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
  ],
});

const opts = {
  logLevel: "error",
  output: "json",
  onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  port: chrome.port,
};

try {
  const r = (await lighthouse(url, opts)).lhr;
  console.log(`\nLighthouse — ${url}`);
  for (const c of ["performance", "accessibility", "best-practices", "seo"]) {
    console.log(c.padEnd(16), Math.round(r.categories[c].score * 100));
  }
  const m = r.audits;
  console.log("--- core web vitals ---");
  console.log("LCP", m["largest-contentful-paint"].displayValue);
  console.log("TBT", m["total-blocking-time"].displayValue);
  console.log("CLS", m["cumulative-layout-shift"].displayValue);
  console.log("FCP", m["first-contentful-paint"].displayValue);
  console.log("SI ", m["speed-index"].displayValue);

  fs.mkdirSync("coverage/lh", { recursive: true });
  fs.writeFileSync("coverage/lh/report.json", JSON.stringify(r, null, 2));
} finally {
  await chrome.kill();
}
