'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
          description: 'We\'ll get back to you as soon as possible.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            {t('contact.subtitle')}
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t('contact.info')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Blida, Algeria</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-muted-foreground">
                    <div>+213 558 968 603</div>
                    <div>+213 794 072 029</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">contact@web01.agency</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t('contact.hours')}
              </h3>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('contact.hours.time')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  {t('contact.quote')}
                </Button>
              </Link>
              <Link href="tel:+213558968603">
                <Button variant="outline" size="lg" className="rounded-full">
                  {t('contact.call')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
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
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder={t('contact.form.subject')}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded-lg"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
