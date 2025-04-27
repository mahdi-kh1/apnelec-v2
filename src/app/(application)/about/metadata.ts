import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About APN Elec | Our Story & Expertise',
  description: 'Learn about APN Elec, our team of certified professionals, and our commitment to quality solar and electrical installations.',
  keywords: 'about APN Elec, solar installers, electrical contractors, MCS certified, OZEV authorized',
  openGraph: {
    title: 'About APN Elec | Our Story & Expertise',
    description: 'Learn about APN Elec, our team of certified professionals, and our commitment to quality.',
    url: 'https://apnelec.co.uk/About',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'APN Elec Team',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About APN Elec | Our Story & Expertise',
    description: 'Learn about APN Elec, our team of certified professionals, and our commitment to quality.',
    images: ['/images/about-twitter-image.jpg'],
  },
} 