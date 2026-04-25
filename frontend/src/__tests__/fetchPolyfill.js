// Polyfill fetch globals for jsdom (Node 18+ has them built-in but jsdom doesn't expose them)
const { fetch, Request, Response, Headers, FormData } = globalThis;
if (!global.fetch) {
  Object.assign(global, { fetch, Request, Response, Headers, FormData });
}
