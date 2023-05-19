import { $, type PropFunction } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"

interface ImageIconProps {
  src: string
  styles: string
  altImage: string
  eventClick?: PropFunction<() => void>
}

export default component$(
  ({
    src,
    styles = "",
    altImage = "",
    eventClick = undefined,
  }: ImageIconProps) => {
    const handleClick = $(() => {
      if (eventClick) {
        eventClick()
      }
    })

    return (
      <img src={src} class={styles} alt={altImage} onClick$={handleClick} />
    )
  }
)
