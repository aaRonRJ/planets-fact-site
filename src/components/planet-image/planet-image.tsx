import {
  component$,
  useComputed$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik"

import type { Planet } from "~/interfaces"
import { getUrlImage } from "~/utils/utils"

interface PlanetImageProps {
  tab: string
  planet: Planet
}

export default component$(({ tab, planet }: PlanetImageProps) => {
  const accessResource = useComputed$(() =>
    tab === "structure" ? "structure" : "overview"
  )
  const urlImage = useComputed$(() => planet[accessResource.value].image)
  const imageSm = useComputed$(() => getUrlImage(urlImage.value, "small"))
  const imageMd = useComputed$(() => getUrlImage(urlImage.value, "medium"))
  const imageLg = useComputed$(() => getUrlImage(urlImage.value))
  const geologyImage = useStore({
    imageSm: "",
    imageMd: "",
    imageLg: "",
  })

  useVisibleTask$(({ track }) => {
    track(() => planet)
    geologyImage.imageSm = getUrlImage(planet.geology.image, "small")
    geologyImage.imageMd = getUrlImage(planet.geology.image, "medium")
    geologyImage.imageLg = getUrlImage(planet.geology.image)
  })

  return (
    <div class="grid col-span-12 h-[260px] md:h-[426px] lg:col-span-7 lg:h-[670px] relative">
      <picture class="flex items-center justify-center">
        <source srcSet={imageLg.value} media="(min-width: 1024px)"></source>
        <source srcSet={imageMd.value} media="(min-width: 768px)"></source>
        <img src={imageSm.value} alt={planet.name} />
      </picture>
      {tab === "geology" && (
        <picture class="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <source
            srcSet={geologyImage.imageLg}
            media="(min-width: 1024px)"></source>
          <source
            srcSet={geologyImage.imageMd}
            media="(min-width: 768px)"></source>
          <img src={geologyImage.imageSm} alt={tab} />
        </picture>
      )}
    </div>
  )
})
