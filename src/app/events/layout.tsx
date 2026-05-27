import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upcoming Events & Seminars | 開催予定イベント・セミナー',
  description: 'Join Japan-India Business seminars, including Semicon India 2026 briefings, semiconductor outlooks, and Bharat Mobility entry opportunities. セミコンインディア2026出展説明会や自動車ビジネス進出セミナーの開催情報を紹介。',
  alternates: {
    canonical: 'https://npo-jibb.org/events'
  },
  openGraph: {
    title: 'Upcoming Events & Seminars | JIBB',
    description: 'Join Japan-India Business seminars, including Semicon India 2026 briefings, semiconductor outlooks, and Bharat Mobility entry opportunities.',
    url: 'https://npo-jibb.org/events',
    type: 'website',
    images: [
      {
        url: 'https://www.npo-jibb.org/logo.webp',
        width: 1200,
        height: 630,
        alt: 'JIBB Upcoming Events & Seminars'
      }
    ]
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
