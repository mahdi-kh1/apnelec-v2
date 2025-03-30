import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Electrical Services | APN Elec',
  description: 'Comprehensive electrical services including installations, repairs, testing, and inspections by APN Elec. NAPIT registered electricians.',
  keywords: 'electrical services, electrician, electrical installation, electrical testing, NAPIT registered',
  openGraph: {
    title: 'Electrical Services | APN Elec',
    description: 'Comprehensive electrical services including installations, repairs, testing, and inspections.',
    url: 'https://apnelec.co.uk/services',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Electrical Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrical Services | APN Elec',
    description: 'Comprehensive electrical services including installations, repairs, testing, and inspections.',
    images: ['/images/services-twitter-image.jpg'],
  },
} 