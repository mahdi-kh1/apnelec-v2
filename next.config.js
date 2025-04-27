/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://apnelec13.vercel.app'
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
  }
}

module.exports = nextConfig
