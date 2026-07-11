import { defineConfig, devices } from "@playwright/test";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import os from "node:os";

const PORT = 4173;
const BASE = `/kings`;
const URL = `http://localhost:${PORT}${BASE}`;

// Use the highest locally-installed Chromium build. Revision-checked
// binaries may be absent offline, but any present Chrome-for-Testing build
// (full chrome or headless shell) works for our DOM/click/assertion tests.
function findChromium() {
  const roots = [
    process.env.LOCALAPPDATA,
    join(os.homedir(), "AppData", "Local"),
  ].filter(Boolean) as string[];
  let best: { rev: number; path: string } | undefined;
  for (const root of roots) {
    const msDir = join(root, "ms-playwright");
    if (!existsSync(msDir)) continue;
    for (const d of readdirSync(msDir)) {
      const m = /^chromium(?:_headless_shell)?-(\d+)$/.exec(d);
      if (!m) continue;
      for (const rel of [
        join("chrome-win", "chrome.exe"),
        join("chrome-headless-shell-win64", "chrome-headless-shell.exe"),
      ]) {
        const p = join(msDir, d, rel);
        if (existsSync(p)) {
          const rev = Number(m[1]);
          if (!best || rev > best.rev) best = { rev, path: p };
        }
      }
    }
  }
  return best?.path;
}
const executablePath = findChromium();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: 1, // single worker: the webServer is shared and videos are heavy
  reporter: [["list"]],
  use: {
    baseURL: URL,
    headless: true,
    // Point Playwright at the locally-available Chromium build directly
    // (the revision-checked default binary may be absent offline).
    // In the test runner, executablePath lives under launchOptions.
    ...(executablePath
      ? { launchOptions: { executablePath, args: ["--no-sandbox"] } }
      : {}),
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `node scripts/serve-out.mjs`,
    url: URL,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
    env: { SERVE_PORT: String(PORT) },
  },
});
