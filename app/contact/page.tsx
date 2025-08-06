'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    budget: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: 'We\'ll get back to you within 24 hours.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service: '',
          budget: '',
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full-Stack Web Application',
    'E-commerce Platform',
    'WordPress Solution',
    'Mobile Application',
    'WhatsApp Bot',
    'Telegram Bot',
    'Facebook Messenger Bot',
    'API Development',
    'Database Design',
    'Cloud Deployment',
    'Other'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    'Over $25,000'
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, security patches, and technical support. Support terms vary by package.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'We specialize in integrating with existing systems, APIs, and databases. We can modernize legacy systems or build new features on top of existing infrastructure.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes! Every project is unique, so we provide custom quotes based on your specific requirements, timeline, and complexity. Contact us for a personalized estimate.'
    },
    {
      question: 'Can you help with digital marketing?',
      answer: 'While we focus on development, we can integrate marketing tools, analytics, SEO optimization, and automation features to support your marketing efforts.'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/20 square-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t('contact.page.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('contact.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {t('contact.get.in.touch')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('contact.get.in.touch.desc')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-secondary/30 rounded-2xl border border-border/50">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">{t('contact.office.location')}</h3>
                    <p className="text-muted-foreground">Blida, Algeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-secondary/30 rounded-2xl border border-border/50">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">{t('contact.phone.numbers')}</h3>
                    <div className="text-muted-foreground space-y-1">
                      <div>+213 558 968 603</div>
                      <div>+213 794 072 029</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-secondary/30 rounded-2xl border border-border/50">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">{t('contact.email.address')}</h3>
                    <p className="text-muted-foreground">contact@web01.agency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-secondary/30 rounded-2xl border border-border/50">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">{t('contact.hours')}</h3>
                    <p className="text-muted-foreground">{t('contact.hours.time')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">{t('contact.quick.response')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.quick.response.desc')}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border/50 p-8 lg:p-10 rounded-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                {t('contact.send.message')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="phone"
                      placeholder={t('contact.form.phone')}
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    >
                      <option value="">{t('contact.select.service')}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="subject"
                      placeholder={t('contact.form.subject')}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    >
                      <option value="">{t('contact.budget.range')}</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-xl"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('contact.faq.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background border border-border/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4">
                <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
