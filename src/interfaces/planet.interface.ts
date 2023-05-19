import type { Image } from './image.interface'
import type { Resource } from './resource.interface'

export interface Planet {
  id: string;
  name: string;
  overview: Resource;
  structure: Resource;
  geology: Resource;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Image;
}
