// Minimal static server for the Next.js static export (`out/`).
// Mirrors GitHub Pages: `out/` is served at the site's basePath (`/kings`),
// so absolute links like `/kings/about/` resolve exactly as in production.
// Used by Playwright (webServer) and the local Lighthouse audit.

import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = fileURLToPath(new URL("../out", import.meta.url));
const BASE_PATH = "/kings";
const PORT = Number(process.env.SERVE_PORT ?? 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff2": "font/woff2",
};

function resolveFile(urlPath) {
  // Strip the basePath so /kings/about -> out/about.
  let p = urlPath.split("?")[0];
  if (p.startsWith(BASE_PATH)) p = p.slice(BASE_PATH.length) || "/";
  if (p === "" || p === "/") p = "/index.html";

  // Prevent path traversal.
  const safe = normalize(p).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(OUT_DIR, safe);
  return filePath;
}

const server = http.createServer(async (req, res) => {
  try {
    let filePath = resolveFile(req.url ?? "/");

    let info;
    try {
      info = await stat(filePath);
    } catch {
      // SPA-ish fallback: unknown non-asset paths -> index.html (404 page handled by Next's own 404.html).
      if (!extname(filePath)) {
        filePath = join(OUT_DIR, "index.html");
        info = await stat(filePath);
      } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 Not Found");
        return;
      }
    }

    if (info.isDirectory()) {
      filePath = join(filePath, "index.html");
    }

    const body = await readFile(filePath);
    const type = TYPES[extname(filePath).toLowerCase()] ?? "application/octet-stream";
    res.writeHead(200, { "content-type": type });
    res.end(body);
  } catch (err) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("500 " + String(err));
  }
});

server.listen(PORT, () => {
  console.log(`serve-out: ${OUT_DIR} -> http://localhost:${PORT}${BASE_PATH}/`);
});
