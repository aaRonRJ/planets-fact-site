import { createContextId } from '@builder.io/qwik'

import type { Planet } from '~/interfaces'

export interface PlanetsState {
  planets: Planet[]
  planet: string
  tab: string
  planetInfo?: Planet
}

export const PlanetsContext = createContextId<PlanetsState>('planets-context')
