import { createContextId } from '@builder.io/qwik'

import type { Planet } from '~/interfaces'

export interface PlanetsState {
  planets: Planet[]
  planet: string
}

export const PlanetsContext = createContextId<PlanetsState>('planets-context')
