import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-6">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-4">
          <p>Last updated: March 15, 2026</p>
          <p>
            By accessing or using the DevFly website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
          </p>
          <h2 className="text-white text-xl font-bold mt-6 mb-2">Use of Site</h2>
          <p>
            This site is provided for informational purposes and to allow users to contact DevFly about software development services. You agree not to misuse the site or submit false information.
          </p>
          <h2 className="text-white text-xl font-bold mt-6 mb-2">Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, and code samples, is the property of DevFly unless otherwise stated.
          </p>
          <h2 className="text-white text-xl font-bold mt-6 mb-2">Contact</h2>
          <p>
            Questions about these Terms? Contact us at{' '}
            <a href="mailto:tony.brain@kandykoi.com" className="text-brand-400 hover:underline">
              tony.brain@kandykoi.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
