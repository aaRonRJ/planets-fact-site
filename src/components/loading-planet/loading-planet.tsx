import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <div class="flex flex-col justify-center items-center min-h-screen">
      <img
        class="w-[200px] animate-bounce md:w-[300px]"
        src="/images/earth-loading.svg"
        alt="Loading planet earth"
      />

      <h1 class="text-white font-antonio font-bold text-24 tracking-1 animate-pulse md:text-40">
        Loading...
      </h1>
    </div>
  )
})
