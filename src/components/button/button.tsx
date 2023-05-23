import { type PropFunction, component$ } from "@builder.io/qwik"

interface ButtonProps {
  planetName: string
  title: string
  id: string
  selected: boolean
  index: string
  toggleFn: PropFunction<(option: string) => void>
}

export default component$(
  ({ planetName, title, id, selected, index, toggleFn }: ButtonProps) => {
    return (
      <button
        class={[
          "text-white",
          `${
            selected
              ? `bg-${planetName.toLowerCase()} hover:bg-${planetName.toLowerCase()}`
              : "hover:bg-darkGray/20"
          }`,
          "uppercase flex items-center border border-gray py-2 px-5 md:w-[261px] lg:w-10/12 lg:py-3 lg:px-7 xl:w-7/12",
        ]}
        onClick$={() => toggleFn(index)}>
        <span class="font-spartan font-bold mr-4 text-white/50 tracking-1.93 text-9 leading-25 lg:mr-7 lg:text-12 lg:tracking-2.57">
          {id}
        </span>
        <h3 class="font-spartan font-bold text-9 leading-25 tracking-1.93 lg:text-12 lg:tracking-2.57">
          {title}
        </h3>
      </button>
    )
  }
)
