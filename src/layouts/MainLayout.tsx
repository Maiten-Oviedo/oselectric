import { lazy, Suspense } from 'react'
import Hero from '../sections/Hero'

const Header = lazy(() => import('../Components/Header'))
const WhatsAppFloatingButton = lazy(
  () => import('../Components/WhatsAppFlotingButton')
)
const AboutUs = lazy(() => import('../sections/AboutUs'))
const Contact = lazy(() => import('../sections/Contact'))
const Footer = lazy(() => import('../sections/Footer'))

const LatestsWorks = lazy(() => import('../sections/LatestsWorks'))
const Services = lazy(() => import('../sections/Services'))
const WhyChooseUs = lazy(() => import('../sections/WhyChooseUs'))

const MainLayout = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Suspense fallback={<div>Cargando...</div>}>
        <Services />
        <WhyChooseUs />
        <LatestsWorks />
        <AboutUs />
        <Contact />
        <Footer />
        <WhatsAppFloatingButton />
      </Suspense>
    </main>
  )
}

export default MainLayout
