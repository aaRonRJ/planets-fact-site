import { $, useContext } from '@builder.io/qwik'
import { PlanetsContext } from '~/context/planets/planets.context'

export const usePlanets = () => {
  const planetsState = useContext(PlanetsContext)

  const setPlanet = $((planet: string) => {
    planetsState.planet = planet
  })

  return {
    planet: planetsState.planet,
    setPlanet: $((planet: string) => setPlanet(planet))
  }
}
