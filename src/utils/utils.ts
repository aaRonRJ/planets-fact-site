import type { Resource } from "../interfaces"
import { type Planet } from "../interfaces"
import data from "../data/data.json"

type MinResource = Pick<Resource, "content" | "source">
type Image = { planet: string; internal: string; geology: string }

interface PlanetInfo {
  id: string
  name: string
  overview: MinResource
  structure: MinResource
  geology: MinResource
  rotation: string
  revolution: string
  radius: string
  temperature: string
  images: Image
}

export function getPlanetsInfo(data: PlanetInfo[]): Planet[] {
  return data.map((planet: PlanetInfo) => ({
    id: planet.id,
    name: planet.name,
    overview: {
      ...planet.overview,
      image: planet.images.planet,
    },
    structure: {
      ...planet.structure,
      image: planet.images.internal,
    },
    geology: {
      ...planet.geology,
      image: planet.images.geology,
    },
    rotation: planet.rotation,
    revolution: planet.revolution,
    radius: planet.radius,
    temperature: planet.temperature,
  }))
}

export function getUrlImage(url: string, size?: string): string {
  const [, name, ext] = url.split(".")

  return size
    ? `${name}-${size}.${ext}`.replace("assets", "images")
    : `${name}.${ext}`.replace("assets", "images")
}

export function getResource(planetInfo: Planet, resource: string): Resource {
  return resource === "structure" ? planetInfo.structure : planetInfo.overview
}

export function getPlanet(planetId: string): Planet {
  const planets = getPlanetsInfo(data)

  return planets.find((item) => item.id === planetId)!
}
