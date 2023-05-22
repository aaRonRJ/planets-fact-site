import { $, useComputed$, useContext } from '@builder.io/qwik'

import { PlanetsContext } from '~/context/planets/planets.context'
import { type Planet } from '~/interfaces'

export const usePlanets = () => {
  const planetsState = useContext(PlanetsContext)

  const setPlanet = $((planet: string) => {
    planetsState.planet = planet
  })

  const setPlanetInfo = $((planetInfo: Planet) => {
    planetsState.planetInfo = planetInfo
  })

  const setTab = $((tab: string) => {
    planetsState.tab = tab
  })

  return {
    planet: useComputed$(() => planetsState.planet),
    planetInfo: useComputed$(() => planetsState.planetInfo),
    planets: useComputed$(() => planetsState.planets),
    tab: useComputed$(() => planetsState.tab),
    setPlanet: $((planet: string) => setPlanet(planet)),
    setPlanetInfo: $((planetInfo: Planet) => setPlanetInfo(planetInfo)),
    setTab: $((tab: string) => setTab(tab))
  }
}
