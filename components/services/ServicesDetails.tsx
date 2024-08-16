import React from 'react'
import { styles } from '../common/style'

const ServicesDetails = () => {
  return (
    <>
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <p className="text-[#2D293E] font-bold font-lato text-xl xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et congue risus. Vivamus posuere sodales nisi, eu cursus urna
              efficitur ac. Nulla tristique, tellus eget consequat tempor, augue
              risus posuere neque, eget pellentesque velit dolor ac nisl.
              Maecenas laoreet eros sed mauris sagittis, id gravida eros
              posuere. Fusce a tortor massa. Aliquam lacinia nulla nec vehicula
              gravida. Maecenas venenatis eget tellus aliquam fermentum. Etiam
              scelerisque augue metus, et venenatis tortor mollis et.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
            className="w-full"
            alt="service details"
          />
        </div>
      </section>
      <section
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
            className="w-full"
            alt="service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <p className="text-[#2D293E] font-bold font-lato text-xl xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et congue risus. Vivamus posuere sodales nisi, eu cursus urna
              efficitur ac. Nulla tristique, tellus eget consequat tempor, augue
              risus posuere neque, eget pellentesque velit dolor ac nisl.
              Maecenas laoreet eros sed mauris sagittis, id gravida eros
              posuere. Fusce a tortor massa. Aliquam lacinia nulla nec vehicula
              gravida. Maecenas venenatis eget tellus aliquam fermentum. Etiam
              scelerisque augue metus, et venenatis tortor mollis et.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesDetails
