'use client'

import { useLanguage } from '@/components/language-provider'
import { Users, Settings, Zap, HeadphonesIcon, DollarSign, Cpu } from 'lucide-react'

export function WhyChooseSection() {
  const { t } = useLanguage()

  const reasons = [
    { icon: Users, key: 'experienced' },
    { icon: Settings, key: 'custom' },
    { icon: Zap, key: 'fast' },
    { icon: HeadphonesIcon, key: 'support' },
    { icon: DollarSign, key: 'pricing' },
    { icon: Cpu, key: 'modern' },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="bg-background border border-border p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`why.${reason.key}`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`why.${reason.key}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
