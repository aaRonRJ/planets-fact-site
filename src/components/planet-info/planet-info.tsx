import { component$ } from '@builder.io/qwik'

import InfoContent from '../info-content/info-content'
import PlanetButton from '../planet-button/planet-button'

interface PlanetInfoProps {
  name: string
  source: string
  content: string
}

export default component$(({ name, source, content }: PlanetInfoProps) => {
  return (
    <div class="col-span-12 md:grid md:grid-cols-12 md:gap-4 lg:col-span-5 lg:gap-0 lg:py-8 lg:px-4">
      <InfoContent name={name} content={content} source={source} />

      <PlanetButton planetName={name} />
    </div>
  )
})
