// Local Lighthouse audit: serves the static export at /kings and runs
// scripts/lh-audit.mjs against it, then tears the server down.
// Usage: npm run audit:local

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const PORT = 4173;
const BASE = "http://localhost:" + PORT + "/kings";

const server = spawn("node", [join(HERE, "serve-out.mjs")], {
  env: { ...process.env, SERVE_PORT: String(PORT) },
  stdio: "inherit",
});

function shutdown(code = 0) {
  try {
    server.kill();
  } finally {
    process.exit(code);
  }
}

// Give the static server a moment to bind, then run the audit.
server.on("spawn", async () => {
  await new Promise((r) => setTimeout(r, 800));
  try {
    const audit = spawn(
      "node",
      [join(HERE, "lh-audit.mjs"), BASE],
      { stdio: "inherit" }
    );
    audit.on("exit", (c) => shutdown(c ?? 0));
  } catch (e) {
    console.error(e);
    shutdown(1);
  }
});

server.on("error", (e) => {
  console.error("serve-out failed:", e);
  process.exit(1);
});

process.on("SIGINT", () => shutdown(0));
