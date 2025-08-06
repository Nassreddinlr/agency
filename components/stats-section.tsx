'use client'

import { useLanguage } from '@/components/language-provider'

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { number: '50+', key: 'stats.projects' },
    { number: '5+', key: 'stats.experience' },
    { number: '100%', key: 'stats.satisfaction' },
    { number: '24/7', key: 'stats.support' },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-background border border-border p-6 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {t(stat.key)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
