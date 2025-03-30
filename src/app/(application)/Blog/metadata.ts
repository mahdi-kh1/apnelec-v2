import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog | APN Elec',
  description: 'Explore our blog for insights, tips, and updates about solar energy, EV charging, and electrical services.',
  keywords: 'solar blog, electrical blog, EV charging blog, renewable energy articles',
  openGraph: {
    title: 'Blog | APN Elec',
    description: 'Explore our blog for insights, tips, and updates about solar energy, EV charging, and electrical services.',
    url: 'https://apnelec.co.uk/Blog',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'APN Elec Blog',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | APN Elec',
    description: 'Explore our blog for insights, tips, and updates about solar energy, EV charging, and electrical services.',
    images: ['/images/blog-twitter-image.jpg'],
  },
} 