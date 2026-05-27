import type { Metadata } from 'next'
import { Cormorant, Montserrat, Noto_Sans_JP } from 'next/font/google'
import { LanguageProvider } from '@/lib/LanguageContext'
import ThemeScript from '@/components/ThemeScript'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://npo-jibb.org'),
  title: {
    default: 'JIBB - Japan India Business Bureau | 日印ビジネス局',
    template: '%s | JIBB'
  },
  description: 'Enabling the Next Global Manufacturing Shift. We connect stakeholders, businesses, institutions, and governments to create meaningful partnerships between Japan and India. 日本とインドの間で有意義なパートナーシップを構築します。',
  keywords: ['Japan India Business Bureau', 'JIBB', 'Semiconductor Committee', 'NPO JIBB', 'India Japan Business', '日印ビジネス局'],
  alternates: {
    canonical: 'https://npo-jibb.org'
  },
  openGraph: {
    title: 'JIBB - Japan India Business Bureau | 日印ビジネス局',
    description: 'Enabling the Next Global Manufacturing Shift. We connect stakeholders, businesses, institutions, and governments to create meaningful partnerships between Japan and India.',
    url: 'https://npo-jibb.org',
    siteName: 'JIBB',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://www.npo-jibb.org/logo.webp',
        width: 1200,
        height: 630,
        alt: 'JIBB Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JIBB - Japan India Business Bureau | 日印ビジネス局',
    description: 'Enabling the Next Global Manufacturing Shift. We connect stakeholders, businesses, institutions, and governments to create meaningful partnerships between Japan and India.',
    images: ['https://www.npo-jibb.org/logo.webp']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${notoSansJP.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
