import brownDog from '@/public/brown-dog-looking-curious.jpg'
import whiteDog from '@/public/white-puppy.jpg'
import grayCat from '@/public/cat-paying-attention.jpg'

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
}
*/

export const petList = [
  {
    photo: brownDog,
    alt: 'brown-dog-looking-curious',
    description: 'DESCRIPCIÓN',
    gender: 'hembra',
    age: 2,
    size: 'mediano',
    personality: ['curioso', 'independiente', 'sociable', 'cariñoso'],
    energy: 'equilibrado',
    friendlyWith: 'todas las especies'
  },
  {
    photo: whiteDog,
    alt: 'white-puppy',
    description: 'DESCRIPCIÓN',
    gender: 'macho',
    age: 0.5,
    size: 'pequeño',
    personality: ['juguetón', 'aventurero', 'afectuoso', 'cariñoso'],
    energy: 'enérgico',
    friendlyWith: 'todas las especies'
  },
  {
    photo: grayCat,
    alt: 'cat-paying-attention',
    description: 'DESCRIPCIÓN',
    gender: 'hembra',
    age: 1,
    size: 'mediano',
    personality: ['curioso', 'independiente', 'observador', 'dócil'],
    energy: 'tranquilo',
    friendlyWith: 'todas las especies'
  }
]
