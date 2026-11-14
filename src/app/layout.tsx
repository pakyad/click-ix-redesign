import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBar from '@/components/PromoBar'
import MotionRoot from '@/components/motion/MotionRoot'
import RouteWipe from '@/components/motion/RouteWipe'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://click-ix.com'),
  title: {
    default: 'Click iX — Smarter Screen. Smarter Business.',
    absolute: 'Click iX — Smarter Screen. Smarter Business.',
  },
  description:
    'Click iX builds the software that runs, sells and proves digital screen networks: CMS, ERP and CRM, programmatic demand and audience measurement.',
  applicationName: 'Click iX',
  authors: [{ name: 'CLICK IX Sdn Bhd' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'Click iX',
    locale: 'en_MY',
    title: 'Click iX — Smarter Screen. Smarter Business.',
    description:
      'The software that runs, sells and proves digital screen networks. Built and maintained in-house in Kuala Lumpur.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Click iX — Smarter Screen. Smarter Business.',
    description:
      'The software that runs, sells and proves digital screen networks. Built and maintained in-house in Kuala Lumpur.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          // Arms CSS-driven reveals before the body is parsed, so content is
          // never painted once and then hidden.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <PromoBar />
        <Header />
        {children}
        <Footer />
        <MotionRoot />
        <RouteWipe />
      </body>
    </html>
  )
}
