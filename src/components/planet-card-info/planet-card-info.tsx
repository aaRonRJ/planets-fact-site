import { component$, useStore, useTask$ } from "@builder.io/qwik"

import CardInfo from "../card-info/card-info"
import type { Planet } from '~/interfaces'

interface PlanetCardInfoProps {
  planet: Planet
}

export default component$(({ planet }: PlanetCardInfoProps) => {
  const infoData = useStore({
    "ROTATION TIME": planet.rotation,
    "REVOLUTION TIME": planet.revolution,
    RADIUS: planet.radius,
    "AVERAGE TEMP.": planet.temperature
  })

  useTask$(({ track }) => {
    track(() => planet)

    if (planet) {
      infoData['ROTATION TIME'] = planet.rotation
      infoData['REVOLUTION TIME'] = planet.revolution
      infoData['RADIUS'] = planet.radius
      infoData['AVERAGE TEMP.'] = planet.temperature
    }
  })

  return (
    <section class="flex flex-col justify-center items-center gap-2 text-white col-span-12 mt-7 mb-12 md:flex-row md:mx-6 md:mb-9 md:gap-[11px] lg:gap-[30px] lg:mt-12 lg:mb-14 lg:mx-8 xl:mx-auto xl:w-3/4">
      {Object.entries(infoData).map(([title, value]) => {
        return <CardInfo key={title} title={title} value={value} />
      })}
    </section>
  )
})
