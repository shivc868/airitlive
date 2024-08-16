import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
const ServicesLogos = () => {
  const logosslider = [
    { src: '/img/pluto.webp', alt: 'Pluto' },
    { src: '/img/discovery.webp', alt: 'Discovery' },
    { src: '/img/tubi.webp', alt: 'Tubi' },
    { src: '/img/paramount.webp', alt: 'Paramount' },
    { src: '/img/pluto.webp', alt: 'Pluto' },
    { src: '/img/discovery.webp', alt: 'Discovery' },
    { src: '/img/tubi.webp', alt: 'Tubi' },
    { src: '/img/paramount.webp', alt: 'Paramount' },
  ]
  return (
    <>
      <section className="pb-20">
        <Marquee
          direction="right"
          speed={50}
          pauseOnHover={true}
          gradient={false}
        >
          {logosslider?.map((obj, index) => (
            <article className="mx-7">
              <Image
                key={index}
                src={obj.src}
                alt={obj.alt}
                width={171}
                height={99}
              />
            </article>
          ))}
        </Marquee>
      </section>
    </>
  )
}

export default ServicesLogos
