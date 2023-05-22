import { type PropFunction, component$, $ } from "@builder.io/qwik"

interface TabProp {
  title: string
  namePlanet: string
  selected: boolean
  toggleFn: PropFunction<(tab: string) => void>
}

export default component$(({ title, namePlanet, selected, toggleFn }: TabProp) => {
  return (
    <button
      class={[
        "uppercase font-spartan text-9 tracking-1.93 leading-normal font-bold py-5",
        `${
          selected
            ? `border-b-4 border-${namePlanet.toLowerCase()}`
            : "text-gray-light hover:text-white"
        }`,
      ]}
      onClick$={$(() => toggleFn(title))}>
      {title}
    </button>
  )
})
