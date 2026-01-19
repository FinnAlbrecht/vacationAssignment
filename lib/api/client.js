// This client-side utility ensures all API calls use relative paths
// which will be proxied through Next.js

export function getApiUrl(path) {
  // Always use relative paths for client-side requests
  // These will be proxied through Next.js to the backend
  return `/api${path.startsWith('/') ? path : '/' + path}`;
}
