import { $, component$, useSignal, useStore } from "@builder.io/qwik"

import Button from "../button/button"
import { usePlanets } from "~/hooks/use-planets"

interface PlanetButtonProps {
  planetName: string
}

interface DataButtonOptions {
  id: string
  title: string
}

interface DataButton {
  overview: DataButtonOptions
  structure: DataButtonOptions
  geology: DataButtonOptions
}

export default component$(({ planetName }: PlanetButtonProps) => {
  const { setTab } = usePlanets()
  const selectedButton = useSignal("overview")
  const dataButtons = useStore<DataButton>({
    overview: {
      id: "01",
      title: "Overview",
    },
    structure: {
      id: "02",
      title: "Internal structure",
    },
    geology: {
      id: "03",
      title: "Surface geology",
    },
  })

  const toggleButton = $((button: string) => {
    setTab(button)
    selectedButton.value = button
  })

  return (
    <div class="hidden px-6 md:flex md:col-span-5 md:px-0 md:flex-col md:justify-center md:gap-4 md:items-start lg:col-span-12 lg:justify-start lg:mt-10">
      {Object.entries(dataButtons).map(([index, { id, title }]) => {
        return (
          <Button
            key={index}
            planetName={planetName}
            title={title}
            id={id}
            selected={selectedButton.value === index}
            index={index}
            toggleFn={toggleButton}
          />
        )
      })}
    </div>
  )
})
