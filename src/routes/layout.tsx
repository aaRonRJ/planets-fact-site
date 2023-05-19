import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city'

import Header from '~/components/header/header'
import { PlanetsProvider } from '~/context/planets/planets-provider'

export const useGetPlanet = routeLoader$<string>(({ params }) => {
  return params.id ?? ''
})

export default component$(() => {
  const planet = useGetPlanet()

  return (
    <PlanetsProvider>
      <Header planet={planet.value} />

      <main>
        <Slot />
      </main>

      {/** TODO: Footer */}
    </PlanetsProvider>
  );
});
