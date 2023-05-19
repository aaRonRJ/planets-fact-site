import { component$, useStylesScoped$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

import style from "./nav-links.css?inline"

interface Props {
  styles?: string
  planet?: string
}

export default component$(({ styles = "", planet = "" }: Props) => {
  useStylesScoped$(style)

  return (
    <nav class={styles}>
      <ul class="flex">
        <li
          class={[
            "nav-item",
            planet === "mercury"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/mercury">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Mercury
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "venus"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/venus">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Venus
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "earth"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/earth">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Earth
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "mars"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/mars">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Mars
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "jupiter"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/jupiter">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Jupiter
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "saturn"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/saturn">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Saturn
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "uranus"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/uranus">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Uranus
            </h4>
          </Link>
        </li>
        <li
          class={[
            "nav-item",
            planet === "neptune"
              ? `border-t-4 border-${planet} md:pt-1 lg:pt-[29px]`
              : "md:pt-2 lg:pt-[33px]",
          ]}>
          <Link href="/planets/neptune">
            <h4 class="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
              Neptune
            </h4>
          </Link>
        </li>
      </ul>
    </nav>
  )
})
