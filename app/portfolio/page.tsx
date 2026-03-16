import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Case studies and featured projects built by DevFly — web apps, SaaS platforms, and startup MVPs.',
}

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    category: 'SaaS Platform',
    desc: 'A real-time analytics platform for e-commerce brands. Features custom reporting, funnel analysis, cohort tracking, and CSV/PDF export. Serves 500+ daily active users.',
    challenge: 'The client needed a self-serve analytics tool that could replace multiple third-party subscriptions, saving $3,000/month.',
    outcome: 'Launched in 10 weeks. Reduced analytics costs by 70% and improved decision speed significantly.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    color: 'from-brand-600 to-brand-800',
    category_color: 'bg-brand-600/20 text-brand-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Two-Sided Marketplace MVP',
    category: 'Startup MVP',
    desc: 'A marketplace connecting independent consultants with SMB clients. Includes service listings, booking, escrow payments, and review system.',
    challenge: 'First-time founders needed an MVP to validate their concept and attract seed investment.',
    outcome: 'Launched in 8 weeks. Secured $400k seed round using the live product as a demo.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe', 'Vercel'],
    color: 'from-purple-700 to-brand-700',
    category_color: 'bg-purple-600/20 text-purple-400',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Healthcare Scheduling System',
    category: 'Web Application',
    desc: 'HIPAA-compliant appointment scheduling for a US medical group with 50+ providers. Includes patient portal, automated reminders, EHR integration, and billing.',
    challenge: 'Legacy scheduling software was causing 200+ missed appointments per month and significant staff overhead.',
    outcome: 'Reduced missed appointments by 60% and cut scheduling admin time in half.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS'],
    color: 'from-emerald-700 to-brand-700',
    category_color: 'bg-emerald-600/20 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'Headless E-Commerce Platform',
    category: 'E-Commerce',
    desc: 'Custom headless storefront for a DTC brand doing $2M/year in revenue. Replaced a slow Shopify theme with a blazing-fast Next.js frontend with 98 Lighthouse scores.',
    challenge: 'Poor site performance was hurting SEO rankings and conversion rates, especially on mobile.',
    outcome: 'Page speed improved by 3x. Conversion rate increased 22% within 60 days of launch.',
    tags: ['Next.js', 'Shopify Storefront API', 'Sanity', 'Stripe', 'Vercel'],
    color: 'from-orange-700 to-brand-700',
    category_color: 'bg-orange-600/20 text-orange-400',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
  },
  {
    title: 'B2B Proposal Automation SaaS',
    category: 'SaaS Platform',
    desc: 'A proposal and contract automation tool for agencies. Drag-and-drop proposal builder, e-signature, payment collection, and CRM integration.',
    challenge: 'Agency owners were spending 5–8 hours per week manually creating proposals in Google Docs.',
    outcome: 'Average proposal creation time reduced from 2 hours to 12 minutes.',
    tags: ['React', 'Laravel', 'MySQL', 'Stripe', 'AWS'],
    color: 'from-sky-700 to-brand-700',
    category_color: 'bg-sky-600/20 text-sky-400',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    title: 'Real-Time Collaboration Tool',
    category: 'Web Application',
    desc: 'A lightweight project management tool with real-time board updates, mentions, file attachments, and Slack/email notifications. Built for remote teams.',
    challenge: 'The client wanted a focused, distraction-free alternative to Jira for their 30-person remote team.',
    outcome: 'Shipped in 12 weeks and adopted company-wide within 2 weeks of launch.',
    tags: ['Next.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS'],
    color: 'from-pink-700 to-brand-700',
    category_color: 'bg-pink-600/20 text-pink-400',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-dark-900 bg-hero-grid relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Our Work</span>
          <h1 className="section-title text-5xl lg:text-6xl">
            Projects That <span className="gradient-text">Drive Real Outcomes</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            We don&apos;t just write code — we solve business problems. Every project has a challenge, a solution, and a measured result.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="card group hover:-translate-y-1 flex flex-col">
                {/* Visual */}
                <div className="h-44 rounded-xl overflow-hidden relative mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                </div>

                {/* Content */}
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 ${project.category_color}`}>
                  {project.category}
                </span>
                <h2 className="text-lg font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

                <div className="bg-dark-600 rounded-xl p-4 mb-4 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Challenge</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-accent-400 uppercase mb-1">Outcome</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-brand-300 bg-brand-600/15 border border-brand-500/20 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors py-1">
                    <Github className="w-3.5 h-3.5" /> Code
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors py-1 ml-3">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to build your project?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let&apos;s talk about your vision. We&apos;ll help you scope, architect, and ship it.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Contact Us to Build Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
