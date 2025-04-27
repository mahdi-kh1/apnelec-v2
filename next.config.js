/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://apnelec13.vercel.app'
  },
  // Ensure all routes are lowercase
  async rewrites() {
    return [
      // Convert all uppercase to lowercase in paths
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-case-fix',
            value: 'true',
          },
        ],
        destination: '/:path*/lowercase',
      },
    ];
  },
  async redirects() {
    return [
      // Redirect any capitalized paths to lowercase
      {
        source: '/About',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/Blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Blog/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/Solar-solutions/:path*',
        destination: '/solar-solutions/:path*',
        permanent: true,
      },
      {
        source: '/EV-solutions/:path*',
        destination: '/ev-solutions/:path*',
        permanent: true,
      },
      {
        source: '/Services/:path*',
        destination: '/services/:path*',
        permanent: true,
      }
    ]
  },
  experimental: {
    // Next.js 13 features that help with file consistency
    serverComponentsExternalPackages: [],
    outputFileTracingExcludes: {
      '*': ['node_modules/**', '.git/**', '**/*.{jpg,jpeg,png,svg}'],
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Force case-sensitive path resolution in webpack
      config.resolve.plugins = config.resolve.plugins || [];
    }
    
    return config;
  },
}

module.exports = nextConfig
