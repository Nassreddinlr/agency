'use client'

import { useLanguage } from '@/components/language-provider'

export function TechnologiesSection() {
  const { t } = useLanguage()

  const technologies = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PHP', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
    ],
    mobile: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'WhatsApp API', icon: '💬' },
      { name: 'Telegram API', icon: '✈️' },
      { name: 'Facebook API', icon: '📘' },
    ],
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('tech.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-background border border-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {t(`tech.${category}`)}
              </h3>
              <div className="space-y-4">
                {techs.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
