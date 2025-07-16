/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['laxmisboutique.com', 'images.pexels.com']
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://laxmisboutique.com/:path*',
        has: [
          {
            type: 'host',
            value: 'laxmisboutique.com',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;