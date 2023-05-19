import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik'

import { PlanetsContext, type PlanetsState } from './planets.context'

import data from '../../data/data.json'

export const PlanetsProvider = component$(() => {
  const planetsState = useStore<PlanetsState>({
    planets: data,
    planet: 'mercury'
  })

  useContextProvider(PlanetsContext, planetsState)

  return <Slot />
})
