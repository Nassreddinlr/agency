'use client'

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Code, Server, Layers, ShoppingCart, WorkflowIcon as Wordpress, Smartphone, MessageCircle, Send, Facebook, Zap, Database, Cloud, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      key: 'frontend',
      color: 'text-blue-500',
      features: ['React & Next.js', 'Vue.js Development', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
    },
    {
      icon: Server,
      key: 'backend',
      color: 'text-green-500',
      features: ['Node.js & Express', 'Python & Django', 'Database Design', 'API Development', 'Cloud Integration'],
    },
    {
      icon: Layers,
      key: 'fullstack',
      color: 'text-purple-500',
      features: ['Complete Web Apps', 'Authentication Systems', 'Payment Integration', 'Admin Dashboards', 'Real-time Features'],
    },
    {
      icon: ShoppingCart,
      key: 'ecommerce',
      color: 'text-orange-500',
      features: ['Custom Online Stores', 'Inventory Management', 'Payment Processing', 'Order Tracking', 'Multi-vendor Support'],
    },
    {
      icon: Wordpress,
      key: 'wordpress',
      color: 'text-blue-600',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce Stores', 'Performance Optimization', 'Security Hardening'],
    },
    {
      icon: Smartphone,
      key: 'mobile',
      color: 'text-pink-500',
      features: ['React Native Apps', 'Flutter Development', 'iOS & Android', 'Cross-platform', 'App Store Deployment'],
    },
    {
      icon: MessageCircle,
      key: 'whatsapp',
      color: 'text-green-600',
      features: ['WhatsApp Business API', 'Automated Responses', 'Order Processing', 'Customer Support', 'Marketing Campaigns'],
    },
    {
      icon: Send,
      key: 'telegram',
      color: 'text-blue-400',
      features: ['Custom Telegram Bots', 'Automated Notifications', 'Business Integration', 'User Management', 'Analytics Dashboard'],
    },
    {
      icon: Facebook,
      key: 'facebook',
      color: 'text-blue-700',
      features: ['Facebook Messenger Bots', 'Lead Generation', 'Customer Support', 'Marketing Automation', 'Analytics Integration'],
    },
    {
      icon: Zap,
      key: 'api',
      color: 'text-yellow-500',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party Integrations', 'Microservices', 'API Documentation'],
    },
    {
      icon: Database,
      key: 'database',
      color: 'text-red-500',
      features: ['Database Design', 'MySQL & PostgreSQL', 'MongoDB & Redis', 'Data Migration', 'Performance Tuning'],
    },
    {
      icon: Cloud,
      key: 'cloud',
      color: 'text-gray-500',
      features: ['AWS Deployment', 'Google Cloud', 'Azure Integration', 'CI/CD Pipelines', 'Monitoring & Scaling'],
    },
  ]

  const packages = [
    {
      nameKey: 'services.package.starter',
      price: '$2,500',
      descKey: 'services.package.starter.desc',
      features: [
        'Responsive Website Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Integration',
        '3 Months Support',
        'Mobile Optimization'
      ],
      popular: false
    },
    {
      nameKey: 'services.package.professional',
      price: '$5,000',
      descKey: 'services.package.professional.desc',
      features: [
        'Full-Stack Web Application',
        'User Authentication',
        'Database Integration',
        'Admin Dashboard',
        'Payment Integration',
        'API Development',
        '6 Months Support',
        'Performance Optimization'
      ],
      popular: true
    },
    {
      nameKey: 'services.package.enterprise',
      price: '$10,000+',
      descKey: 'services.package.enterprise.desc',
      features: [
        'Custom Enterprise Solution',
        'Advanced Security Features',
        'Third-party Integrations',
        'Automation & Bots',
        'Cloud Deployment',
        'Scalable Architecture',
        '12 Months Support',
        'Dedicated Project Manager'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/20 square-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t('services.page.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('services.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-card border border-border/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-secondary/50 ${service.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                      {t(`services.${service.key}`)}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`services.${service.key}.desc`)}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className="w-full rounded-full hover:scale-105 transition-transform duration-200 mt-6">
                      {t('services.get.quote')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('services.process.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', titleKey: 'services.process.consultation', descKey: 'services.process.consultation.desc' },
              { step: '02', titleKey: 'services.process.planning', descKey: 'services.process.planning.desc' },
              { step: '03', titleKey: 'services.process.development', descKey: 'services.process.development.desc' },
              { step: '04', titleKey: 'services.process.launch', descKey: 'services.process.launch.desc' },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                  {t(item.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('services.cta.title')}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('services.cta.subtitle')}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200">
              {t('services.cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
