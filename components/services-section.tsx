'use client'

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Code, Server, Layers, ShoppingCart, WorkflowIcon as Wordpress, Smartphone, MessageCircle, Send, Facebook, Zap, Database, Cloud } from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    { icon: Code, key: 'frontend', color: 'text-blue-500' },
    { icon: Server, key: 'backend', color: 'text-green-500' },
    { icon: Layers, key: 'fullstack', color: 'text-purple-500' },
    { icon: ShoppingCart, key: 'ecommerce', color: 'text-orange-500' },
    { icon: Wordpress, key: 'wordpress', color: 'text-blue-600' },
    { icon: Smartphone, key: 'mobile', color: 'text-pink-500' },
    { icon: MessageCircle, key: 'whatsapp', color: 'text-green-600' },
    { icon: Send, key: 'telegram', color: 'text-blue-400' },
    { icon: Facebook, key: 'facebook', color: 'text-blue-700' },
    { icon: Zap, key: 'api', color: 'text-yellow-500' },
    { icon: Database, key: 'database', color: 'text-red-500' },
    { icon: Cloud, key: 'cloud', color: 'text-gray-500' },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-card border border-border p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-secondary/50 ${service.color} mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(`services.${service.key}`)}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {t(`services.${service.key}.desc`)}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button variant="outline" size="lg" className="rounded-full">
              {t('services.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
