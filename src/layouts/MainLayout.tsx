import Header from '../Components/Header'
import WhatsAppFloatingButton from '../Components/WhatsAppFlotingButton'
import AboutUs from '../sections/AboutUs'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import LatestsWorks from '../sections/LatestsWorks'
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'

const MainLayout = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <LatestsWorks />
      <AboutUs />
      <Contact />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}

export default MainLayout
