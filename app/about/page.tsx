'use client'

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Users, Target, Award, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      titleKey: 'about.mission',
      descKey: 'about.mission.desc',
    },
    {
      icon: Lightbulb,
      titleKey: 'about.vision',
      descKey: 'about.vision.desc',
    },
    {
      icon: Award,
      titleKey: 'about.values',
      descKey: 'about.values.desc',
    },
    {
      icon: Users,
      titleKey: 'about.team',
      descKey: 'about.team.desc',
    },
  ]

  const team = [
    {
      name: 'Larbi Aissana Ssreddine',
      role: 'Founder & Lead Developer',
      image: '/placeholder.svg?height=300&width=300',
      description: 'Full-stack developer with 5+ years of experience in modern web technologies.',
    },
    {
      name: 'Development Team',
      role: 'Frontend & Backend Specialists',
      image: '/placeholder.svg?height=300&width=300',
      description: 'Expert developers specializing in React, Node.js, and automation solutions.',
    },
    {
      name: 'Design Team',
      role: 'UI/UX Designers',
      image: '/placeholder.svg?height=300&width=300',
      description: 'Creative designers focused on user-centered design and modern aesthetics.',
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/20 square-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </div>
            <div className="bg-secondary/30 p-8 lg:p-12 rounded-2xl border border-border/50">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">50+</div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('stats.projects')}</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">5+</div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('stats.experience')}</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">100%</div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('stats.satisfaction')}</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">24/7</div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('stats.support')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('about.values.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-background border border-border/50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(value.descKey)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('about.team.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border/50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-lg">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('about.cta.subtitle')}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200">
              {t('about.cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
