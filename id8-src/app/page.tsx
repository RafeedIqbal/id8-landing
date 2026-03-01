import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhatIsId8 from '@/components/WhatIsId8'
import HowItWorks from '@/components/HowItWorks'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      {/* Hero handled internally */}
      <Hero />
      <AnimatedSection><WhatIsId8 /></AnimatedSection>
      <AnimatedSection><HowItWorks /></AnimatedSection>
      <AnimatedSection><Waitlist /></AnimatedSection>
      <Footer />
    </main>
  )
}
