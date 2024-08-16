import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './AppIcons'
import HeaderLinks from './HeaderLinks'
import { styles } from './style'

interface IHeaderProps {
  additionalclass: string
}

const Header = (props: IHeaderProps) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileNav])
  return (
    <>
      <section className={`z-[1000] px-8 w-full ${props.additionalclass}`}>
        <div className={styles.container}>
          <nav className="py-4">
            <header className="flex items-center justify-between">
              <img
                src="/img/logo.png"
                className="w-[80px] lg:w-[100px]"
                alt=""
              />
              <div className="hidden lg:flex items-center gap-16 justify-between">
                <div className="flex gap-10">
                  <HeaderLinks />
                </div>
                <button className="btn-primary">Get in touch</button>
              </div>

              <button
                aria-expanded={showMobileNav}
                aria-controls="nav-panel"
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="lg:hidden"
              >
                {showMobileNav ? <CloseIcon /> : <MenuIcon />}
              </button>
            </header>
          </nav>
        </div>

        {showMobileNav && (
          <div className="lg:hidden py-4 left-0 flex justify-center items-center absolute bg-main-bg top-[83px] z-0 w-full">
            <div className="flex items-center justify-center gap-6 flex-col">
              <HeaderLinks />
              <button className="btn-primary">Get in touch</button>
            </div>
          </div>
        )}
      </section>
      {showMobileNav && (
        <div
          onClick={() => setShowMobileNav(false)}
          className="fixed top-0 left-0 bg-black bg-opacity-40 h-screen w-full z-[10]"
        ></div>
      )}
    </>
  )
}

export default Header
