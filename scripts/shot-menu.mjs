import { chromium } from "playwright-core";
import { spawn } from "node:child_process";
import { existsSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const PORT = 4199;
const BASE = `http://localhost:${PORT}/kings/`;

function findChromium() {
  const roots = [process.env.LOCALAPPDATA, join(os.homedir(), "AppData", "Local")].filter(Boolean);
  let best;
  for (const root of roots) {
    const ms = join(root, "ms-playwright");
    if (!existsSync(ms)) continue;
    for (const d of readdirSync(ms)) {
      const m = /^chromium(?:_headless_shell)?-(\d+)$/.exec(d);
      if (!m) continue;
      for (const rel of [join("chrome-win", "chrome.exe"), join("chrome-headless-shell-win64", "chrome-headless-shell.exe")]) {
        const p = join(ms, d, rel);
        if (existsSync(p)) { const rev = Number(m[1]); if (!best || rev > best.rev) best = { rev, path: p }; }
      }
    }
  }
  return best?.path;
}

const server = spawn("node", [join(HERE, "serve-out.mjs")], { env: { ...process.env, SERVE_PORT: String(PORT) }, stdio: "inherit" });
await new Promise((r) => setTimeout(r, 900));

mkdirSync(join(HERE, "..", "shots"), { recursive: true });
const browser = await chromium.launch({ executablePath: findChromium(), args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE, { waitUntil: "load" });

// Open the "What we do" mega panel (widest one) and screenshot.
await page.getByRole("button", { name: /what we do/i }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: join(HERE, "..", "shots", "menu-whatwedo.png") });

// Also the "About" panel (single column + feature).
await page.getByRole("button", { name: /^about$/i }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: join(HERE, "..", "shots", "menu-about.png") });

await browser.close();
server.kill();
console.log("shots written");
