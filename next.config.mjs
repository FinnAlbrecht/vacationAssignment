/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        // Nur zu Backend rewrite wenn nicht in /api oder /todos routes
        return {
            beforeFiles: [
                // Diese Routes sollten als Proxy zum Backend gehen
                // Aber NICHT die eigenen /api routes
            ],
            afterFiles: [],
            fallback: [
                {
                    source: '/todos/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_URL}/todos/:path*`,
                },
            ],
        };
    },
  };
  
  export default nextConfig;