import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with DevFly. Book a free consultation or submit your project details.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
