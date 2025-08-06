'use client'

import { useLanguage } from '@/components/language-provider'
import { Search, Palette, Code, Rocket, Wrench } from 'lucide-react'

export function ProcessSection() {
  const { t } = useLanguage()

  const steps = [
    { icon: Search, key: 'discovery', number: '01' },
    { icon: Palette, key: 'design', number: '02' },
    { icon: Code, key: 'development', number: '03' },
    { icon: Rocket, key: 'deployment', number: '04' },
    { icon: Wrench, key: 'maintenance', number: '05' },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t(`process.${step.key}`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`process.${step.key}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
