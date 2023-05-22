import { $, component$, useComputed$, useContext, useSignal } from "@builder.io/qwik"

import ImageIcon from "../image-icon/image-icon"
import Line from "../line/line"
import NavLinks from "../nav-links/nav-links"
import { PlanetsContext } from '~/context/planets/planets.context'
import NavMenu from '../nav-menu/nav-menu'

interface Props {
  planet?: string
}

export default component$(({ planet = "" }: Props) => {
  const showMenu = useSignal(false)
  const { planets } = useContext(PlanetsContext)

  const iconHamburger = useComputed$(
    () => `/images/icon-hamburger-${showMenu.value ? "open" : "close"}.svg`
  )

  const navMenuClasses = useComputed$(() => {
    const classes = ['flex px-6 z-10 fixed bg-darkBlue pt-6 w-full', showMenu.value ? 'ease-in duration-300 top-[69px]' : 'ease-in duration-300 mt-[-547px] top-[-69px]', 'md:hidden']

    return classes.toString().replaceAll(',', ' ')
  })

  const toggleMenu = $(() => {
    showMenu.value = !showMenu.value
  })

  return (
    <>
      <header class="flex top-0 w-full fixed justify-between items-center px-6 py-4 bg-darkBlue z-10 md:flex-col md:w-auto md:relative md:justify-center md:pt-8 md:pb-0 lg:flex-row lg:items-start lg:pt-0 lg:pb-5 lg:px-8 lg:justify-between">
        <h1 class="font-antonio text-white text-28 font-medium uppercase tracking-1.05 leading-normal lg:pt-[22px]">
          The planets
        </h1>

        <ImageIcon
          src={iconHamburger.value}
          styles="cursor-pointer w-6 h-4 md:hidden"
          altImage="icono para menú en dispositivos móviles"
          eventClick={toggleMenu}
        />

        <NavLinks
          styles="hidden md:flex md:mb-6 md:mt-[33px] lg:mb-0 lg:mt-0"
          planet={planet}
        />
      </header>

      <Line styles="fixed top-[68px] w-full z-10 md:static" />

      <NavMenu planets={planets} eventClick={toggleMenu} classes={navMenuClasses.value} />
    </>
  )
})
