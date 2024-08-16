import ContactUs from '@/components/common/contactus/ContactUs'
import Faqs from '@/components/common/Faqs'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ServicesDetails from '@/components/services/ServicesDetails'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesLogos from '@/components/services/ServicesLogos'
import Testimonial from '@/components/testimonial/Testimonial'
import React from 'react'

const ServicesPage = () => {
  return (
    <>
      <main className="bg-[#F5E7FF]">
        <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
          <Header additionalclass="absolute" />
          <ServicesHero />
          <ServicesLogos />
        </div>
        <ServicesDetails />
        <Testimonial />
        <Faqs />
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}

export default ServicesPage
