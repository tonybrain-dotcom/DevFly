import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'DevFly — Modern Software Development for US Startups',
    template: '%s | DevFly',
  },
  description:
    'DevFly builds custom web applications, SaaS platforms, and startup MVPs. Freelancer pricing, agency-quality delivery. Based in the US & serving growing businesses worldwide.',
  keywords: [
    'web development',
    'SaaS development',
    'startup MVP',
    'React',
    'Next.js',
    'Node.js',
    'software agency',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DevFly',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
