import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

import LoadingPlanet from "~/components/loading-planet/loading-planet"

export default component$(() => {
  return <LoadingPlanet />
})

export const head: DocumentHead = {
  title: "The planets",
  meta: [
    {
      name: "description",
      content: "Info about the planets of solar system",
    },
  ],
}
