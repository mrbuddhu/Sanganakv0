import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanganak - Innovative IT Solutions | Web, Mobile, Blockchain, AI',
  description: 'Sanganak is a Bihar-based IT startup providing cutting-edge technology solutions including web and mobile app development, UI/UX design, blockchain, and AI solutions.',
  keywords: 'Sanganak, sanganak org, sanganak.org, IT solutions, web development, mobile app development, UI/UX design, blockchain, AI solutions, Bihar startup',
  openGraph: {
    title: 'Sanganak - Innovative IT Solutions | Web, Mobile, Blockchain, AI',
    description: 'Sanganak is a Bihar-based IT startup providing cutting-edge technology solutions including web and mobile app development, UI/UX design, blockchain, and AI solutions.',
    url: 'https://sanganak.org',
    siteName: 'Sanganak',
    images: [
      {
        url: 'https://sanganak.org/api/og',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanganak - Innovative IT Solutions | Web, Mobile, Blockchain, AI',
    description: 'Sanganak is a Bihar-based IT startup providing cutting-edge technology solutions including web and mobile app development, UI/UX design, blockchain, and AI solutions.',
    images: ['https://sanganak.org/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}