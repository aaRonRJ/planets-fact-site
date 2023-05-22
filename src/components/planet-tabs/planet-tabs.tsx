import { $, component$, useSignal, useStore } from "@builder.io/qwik"

import Tab from "../tab/tab"
import { usePlanets } from "~/hooks/use-planets"

interface Props {
  planet: string
}

export default component$(({ planet }: Props) => {
  const dataTabs = useStore({
    overview: "overview",
    structure: "structure",
    geology: "geology",
  })
  const { setTab } = usePlanets()

  const tabSelected = useSignal("overview")

  const toggleTab = $((tab: string) => {
    setTab(tab)
    tabSelected.value = tab
  })

  return (
    <div class="flex col-span-12 flex-col md:hidden">
      <div class="flex justify-between items-center px-6">
        {Object.entries(dataTabs).map(([, title]) => {
          return (
            <Tab
              key={title}
              namePlanet={planet}
              title={title}
              selected={tabSelected.value === title}
              toggleFn={toggleTab}
            />
          )
        })}
      </div>
    </div>
  )
})
