import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'EV Charging Solutions | APN Elec',
  description: 'OZEV authorized EV charging point installation for homes and businesses. Expert installation of electric vehicle chargers by APN Elec.',
  keywords: 'EV charging, electric vehicle, charging points, OZEV authorized, EV charger installation',
  openGraph: {
    title: 'EV Charging Solutions | APN Elec',
    description: 'OZEV authorized EV charging point installation for homes and businesses.',
    url: 'https://apnelec.co.uk/EV-solutions',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/ev-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EV Charging Installation',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EV Charging Solutions | APN Elec',
    description: 'OZEV authorized EV charging point installation for homes and businesses.',
    images: ['/images/ev-twitter-image.jpg'],
  },
} 