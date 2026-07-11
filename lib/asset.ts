// Base path helper for static assets.
//
// The site deploys to GitHub Pages under a project sub-path (`/kings`), set as
// `basePath` in next.config.ts. `next/link` and `next/image` prepend that base
// path automatically, but RAW asset URLs (<img src>, <video>/<source>, CSS
// `url(...)`, poster images, preloads) do NOT — they must be prefixed by hand,
// or they resolve to the domain root and 404 in production.
//
// Keep BASE_PATH in sync with `basePath` in next.config.ts.
export const BASE_PATH = "/kings";

/**
 * Prefix a root-relative asset path with the deployment base path.
 * Pass paths beginning with "/" (e.g. "/assets/img/oil-rig.jpg").
 * Absolute URLs (http/https) and data URIs are returned unchanged.
 */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
