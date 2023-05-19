import { component$ } from '@builder.io/qwik'

interface LineProps {
  styles?: string
}

export default component$(({ styles = '' }: LineProps) => {
  return (
    <div class={['h-px', styles, 'bg-gray']}></div>
  )
})
