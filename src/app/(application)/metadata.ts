import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'APN Elec | Solar Installation & Electrical Services',
  description: 'Professional solar panel installation, EV charging solutions, and electrical services by APN Elec. MCS accredited and OZEV authorized installers.',
  keywords: 'solar installation, electrical services, EV charging, solar panels, renewable energy',
  openGraph: {
    title: 'APN Elec | Solar Installation & Electrical Services',
    description: 'Professional solar panel installation, EV charging solutions, and electrical services by APN Elec.',
    url: 'https://apnelec.co.uk',
    siteName: 'APN Elec',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'APN Elec Solar Installation',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APN Elec | Solar Installation & Electrical Services',
    description: 'Professional solar panel installation, EV charging solutions, and electrical services.',
    images: ['/images/twitter-image.jpg'],
  },
} 