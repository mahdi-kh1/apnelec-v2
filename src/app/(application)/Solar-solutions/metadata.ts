import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Solar Solutions | APN Elec',
  description: 'Professional solar panel installation services by APN Elec. MCS accredited installers providing high-quality solar PV systems for homes and businesses.',
  keywords: 'solar panels, solar PV, solar installation, renewable energy, MCS accredited, solar power',
  openGraph: {
    title: 'Solar Solutions | APN Elec',
    description: 'Professional solar panel installation services by APN Elec. MCS accredited installers.',
    url: 'https://apnelec.co.uk/Solar-solutions',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/solar-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Panel Installation',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Solutions | APN Elec',
    description: 'Professional solar panel installation services by APN Elec. MCS accredited installers.',
    images: ['/images/solar-twitter-image.jpg'],
  },
} 