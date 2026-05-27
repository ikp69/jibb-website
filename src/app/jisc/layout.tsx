import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JISC - Japan-India Semiconductor Committee | 日印半導体コミッティ',
  description: 'Strengthening semiconductor collaboration, manufacturing growth, supply chain resilience, and academic/corporate synergy between Japan and India. 日印間の半導体産業の成長と新たな機会創出を加速させることを目指しています。',
  alternates: {
    canonical: 'https://npo-jibb.org/jisc'
  },
  openGraph: {
    title: 'JISC - Japan-India Semiconductor Committee | 日印半導体コミッティ',
    description: 'Strengthening semiconductor collaboration, manufacturing growth, supply chain resilience, and academic/corporate synergy between Japan and India.',
    url: 'https://npo-jibb.org/jisc',
    type: 'website',
    images: [
      {
        url: 'https://www.npo-jibb.org/logo.webp',
        width: 1200,
        height: 630,
        alt: 'JISC - Japan-India Semiconductor Committee'
      }
    ]
  },
}

export default function JISCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
