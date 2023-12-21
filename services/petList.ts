import brownDog from '@/public/brown-dog-looking-curious.jpg'
import whiteDog from '@/public/white-puppy.jpg'
import grayCat from '@/public/cat-paying-attention.jpg'
// Types for maps position
import { type LatLngTuple } from 'leaflet'
import { type StaticImageData } from 'next/image'

/*
MODELO
{
    photo: ,
    alt: ,
    description: 'DESCRIPCIÓN',
    gender: ['hembra', 'macho'],
    age: ,
    size: ['pequeño', 'mediano', 'grande', 'muy grande'],
    personality: [
      'curioso', 'independiente', 'dependiente', 'ansioso', 'sociable', 'inteligente',
      'juguetón', 'aventurero', 'observador', 'desconfiado', 'afectuoso', 'gentil', 'cariñoso', 'dócil'
    ],
    energy: ['tranquilo', 'equilibrado', 'enérgico'],
    friendlyWith: ['nadie', 'solo misma especie', 'todas las especies', 'solo otra especie']
    location: [-34.61315, -58.37723]
}
*/

export interface PetData {
  name?: string
  photo: StaticImageData
  alt: string
  description: string
  gender: string
  age: number
  size: string
  personality: string[]
  energy: string | string[]
  friendlyWith: string | string[]
  location: {
    position: LatLngTuple
    label: string
  }
}

export const petList: PetData[] = [
  {
    name: 'Colita',
    photo: brownDog,
    alt: 'brown-dog-looking-curious',
    description: 'DESCRIPCIÓN',
    gender: 'hembra',
    age: 2,
    size: 'mediano',
    personality: ['curioso', 'independiente', 'sociable', 'cariñoso'],
    energy: 'equilibrado',
    friendlyWith: 'todas las especies',
    location: {
      position: [-34.6083, -58.3712],
      label: 'Default marker - Pet Adoption'
    }
  },
  {
    name: 'Pochoclo',
    photo: whiteDog,
    alt: 'white-puppy',
    description: 'DESCRIPCIÓN',
    gender: 'macho',
    age: 0.5,
    size: 'pequeño',
    personality: ['juguetón', 'aventurero', 'afectuoso', 'cariñoso'],
    energy: 'enérgico',
    friendlyWith: 'todas las especies',
    location: {
      position: [-34.6037, -58.3816],
      label: 'Default marker - Pet Adoption'
    }
  },
  {
    name: 'Maila',
    photo: grayCat,
    alt: 'cat-paying-attention',
    description: 'DESCRIPCIÓN',
    gender: 'hembra',
    age: 1,
    size: 'mediano',
    personality: ['curioso', 'independiente', 'observador', 'dócil'],
    energy: 'tranquilo',
    friendlyWith: 'todas las especies',
    location: {
      position: [-34.5976, -58.4309],
      label: 'Default marker - Pet Adoption'
    }
  }
]
