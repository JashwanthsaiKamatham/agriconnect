/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // `next lint` runs separately in CI; don't block production builds on lint warnings.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Safe, non-breaking security headers.
          // NOTE: no X-Frame-Options / frame-ancestors here on purpose — the app
          // is designed to be embeddable (preview sandboxes, extension dashboards).
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
    ];
  },
};

export default nextConfig;
