import { component$, useStore, useTask$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"

import PlanetImage from "~/components/planet-image/planet-image"
import PlanetInfo from '~/components/planet-info/planet-info'
import PlanetTabs from "~/components/planet-tabs/planet-tabs"
import { usePlanets } from "~/hooks/use-planets"
import type { Resource, Planet } from '~/interfaces'
import { getPlanet, getResource } from "~/utils/utils"

export const usePlanet = routeLoader$<Planet>(({ params, redirect }) => {
  const planet = params.id

  if (!planet) {
    redirect(301, "/planets/mercury")
  }



  return getPlanet(planet)
})

export default component$(() => {
  const planetInfo = usePlanet()
  const { tab } = usePlanets()

  const resource = useStore<Resource>({
    content: '',
    image: '',
    source: ''
  })

  useTask$(({ track }) => {
    track(() => tab.value)

    const aux = getResource(planetInfo.value, tab.value)

    if (aux) {
      resource.content = aux.content
      resource.image = aux.image
      resource.source = aux.source
    }
  })

  return (
    planetInfo ? (
      <section class="text-white grid grid-cols-12 gap-4 gap-y-0 mt-[69px] md:gap-y-0 md:mt-0 md:mx-6 lg:gap-y-0 lg:gap-8 lg:mx-8">
        <PlanetTabs planet={planetInfo.value.id} />

        <PlanetImage planet={planetInfo.value} tab={tab.value} />

        <PlanetInfo content={resource.content} source={resource.source} name={planetInfo.value.name} />
      </section>
    ) : <p>Cargando</p>
  )
})
