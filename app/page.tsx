import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesSection } from '@/components/services-section'
import { TechnologiesSection } from '@/components/technologies-section'
import { ProcessSection } from '@/components/process-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProcessSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
