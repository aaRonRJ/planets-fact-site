import { component$ } from "@builder.io/qwik"
import ImageIcon from "../image-icon/image-icon"

interface InfoContentProps {
  name: string
  content: string
  source: string
}

export default component$(({ name, content, source }: InfoContentProps) => {
  return (
    <div class="px-6 flex flex-col md:col-span-7 justify-center items-center md:items-start md:py-8 md:px-4 lg:col-span-10 lg:p-0 lg:justify-end">
      <h1 class="font-antonio font-medium text-40 leading-normal tracking-0 uppercase text-white md:text-48 lg:text-80">
        {name}
      </h1>
      <p class="w-3/4 text-white font-spartan font-regular text-11 leading-22 tracking-0 text-center mt-4 mb-8 md:text-left md:mt-6 md:w-11/12 lg:text-14 lg:leading-25 lg:my-6">
        {content}
      </p>
      <span class="font-spartan font-regular text-12 leading-25 tracking-0 text-gray-light flex items-center lg:text-14">
        Source:
        <a
          class="underline font-bold cursor-pointer pl-1"
          href={source}
          target="_blank"
          rel="noreferrer">
          Wikipedia
        </a>
        <ImageIcon
          src="/images/icon-source.svg"
          styles="ml-1 w-3 h-3"
          altImage="source"
        />
      </span>
    </div>
  )
})
