import type { Metadata } from 'next';
import { inter } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanganak.org'),
  title: {
    template: '%s | Sanganak',
    default: 'Sanganak - Digital Innovation & Technology Solutions',
  },
  description: 'End-to-end technology solutions including AI/ML, web development, mobile apps, cloud services, digital marketing, and IT consulting for businesses across India.',
  keywords: [
    'artificial intelligence', 
    'machine learning', 
    'web development', 
    'mobile apps', 
    'cloud services', 
    'digital marketing',
    'IT consulting',
    'technology solutions',
    'business automation',
    'India',
    'professional',
    'enterprise'
  ],
  authors: [{ name: 'Sanganak Team' }],
  creator: 'Sanganak',
  publisher: 'Sanganak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  applicationName: 'Sanganak',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  category: 'technology',
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
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sanganak.org',
    title: 'Sanganak - Digital Innovation & Technology Solutions',
    description: 'End-to-end technology solutions including AI/ML, web development, mobile apps, cloud services, digital marketing, and IT consulting for businesses across India.',
    siteName: 'Sanganak',
    images: [{
      url: 'https://sanganak.org/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Sanganak - Digital Innovation & Technology Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanganak - Digital Innovation & Technology Solutions',
    description: 'End-to-end technology solutions including AI/ML, web development, mobile apps, cloud services, digital marketing, and IT consulting for businesses across India.',
    images: ['https://sanganak.org/twitter-image.png'],
    creator: '@sanganak',
    site: '@sanganak',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['your-personal-website'],
    },
  },
  appleWebApp: {
    capable: true,
    title: 'Sanganak',
    statusBarStyle: 'black-translucent',
  },
  alternates: {
    canonical: 'https://sanganak.org',
    languages: {
      'en-US': 'https://sanganak.org/en-US',
      'hi-IN': 'https://sanganak.org/hi-IN',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}