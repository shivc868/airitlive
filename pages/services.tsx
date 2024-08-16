import Header from '@/components/common/Header'
import ServicesDetails from '@/components/services/ServicesDetails'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesLogos from '@/components/services/ServicesLogos'
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
      </main>
    </>
  )
}

export default ServicesPage
