import Header from '../Components/Header'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import LatestsWorks from '../sections/LatestsWorks'
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <LatestsWorks />
      <Contact />
      <Footer />
    </main>
  )
}

export default MainLayout
