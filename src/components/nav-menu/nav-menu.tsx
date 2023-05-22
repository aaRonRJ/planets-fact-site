import { type PropFunction, component$, Fragment, useStylesScoped$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

import Line from "../line/line"
import ImageIcon from "../image-icon/image-icon"
import type { Planet } from "~/interfaces"

import styles from './nav-menu.css?inline'

interface Props {
  classes?: string
  planets: Planet[]
  eventClick?: PropFunction<() => void>
}

export default component$(
  ({ planets, classes = "", eventClick = undefined }: Props) => {
    useStylesScoped$(styles)

    return (
      <nav class={classes}>
        <ul class="w-full mr-2">
          {planets.map(({id, name}: Planet) => {
            return (
              <Fragment key={id}>
                <li onClick$={eventClick} class="hover:bg-darkGray/20">
                  <Link
                    href={`/planets/${id}`}
                    class="w-full py-5 flex items-center uppercase justify-between">
                    <div class="flex items-center">
                      <ImageIcon
                        src={`/images/oval-${id}.svg`}
                        styles="h-5 w-5 rounded-full mr-6"
                        altImage={name}
                      />

                      <h4 class="planet-title">{name}</h4>
                    </div>

                    <ImageIcon
                      src="/images/arrow-right.svg"
                      styles="h-3 w-3"
                      altImage="arrow-menu"
                    />
                  </Link>
                </li>
                <Line styles="last:hidden" />
              </Fragment>
            )
          })}
        </ul>
      </nav>
    )
  }
)
