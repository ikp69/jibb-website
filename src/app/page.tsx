import {
  Navbar,
  Hero,
  WhoWeAre,
  Vision,
  Mission,
  Beliefs,
  Framework,
  Sectors,
  Methodology,
  InnovationHub,
  CTA,
  Footer,
} from '@/components'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Japan India Business Bureau',
  'alternateName': 'NPO JIBB / 日印ビジネス局',
  'url': 'https://npo-jibb.org',
  'logo': 'https://www.npo-jibb.org/logo.webp',
  'description': 'Enabling the Next Global Manufacturing Shift. We connect stakeholders, businesses, institutions, and governments to create meaningful partnerships between Japan and India.',
  'sameAs': [
    'https://www.linkedin.com/company/japan-india-business-bureau'
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Vision />
      <Mission />
      <Beliefs />
      <Framework />
      <Sectors />
      <Methodology />
      <InnovationHub />
      <CTA />
      <Footer />
    </>
  )
}
