import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact APN Elec | Get in Touch',
  description: 'Contact APN Elec for solar installation, EV charging points, and electrical services. Request a quote or consultation today.',
  keywords: 'contact APN Elec, solar quote, electrical services contact, EV charger quote',
  openGraph: {
    title: 'Contact APN Elec | Get in Touch',
    description: 'Contact APN Elec for solar installation, EV charging points, and electrical services.',
    url: 'https://apnelec.co.uk/Contact',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact APN Elec',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact APN Elec | Get in Touch',
    description: 'Contact APN Elec for solar installation, EV charging points, and electrical services.',
    images: ['/images/contact-twitter-image.jpg'],
  },
} 