import { SITE_URL } from "./src/lib/constants";

interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

const CANONICAL_HOST = new URL(SITE_URL).hostname;
const EXEMPT_SUFFIXES = [".workers.dev", ".local", ".localhost"] as const;
const EXEMPT_HOSTS = new Set([
  CANONICAL_HOST,
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
]);

function isExempt(hostname: string): boolean {
  if (EXEMPT_HOSTS.has(hostname)) return true;
  return EXEMPT_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
}

export default {
  fetch(request: Request, env: Env): Promise<Response> | Response {
    const url = new URL(request.url);
    if (isExempt(url.hostname)) {
      return env.ASSETS.fetch(request);
    }

    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return new Response(null, {
      status: 301,
      headers: {
        location: url.href,
        "cache-control": "public, max-age=3600",
      },
    });
  },
};
