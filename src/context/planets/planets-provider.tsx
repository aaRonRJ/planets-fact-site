import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik'

import { PlanetsContext, type PlanetsState } from './planets.context'

import data from '../../data/data.json'
import { getPlanetsInfo } from '~/utils/utils'

export const PlanetsProvider = component$(() => {
  const planetsState = useStore<PlanetsState>({
    planets: getPlanetsInfo(data),
    planet: 'mercury',
    tab: 'overview'
  })

  useContextProvider(PlanetsContext, planetsState)

  return <Slot />
})
