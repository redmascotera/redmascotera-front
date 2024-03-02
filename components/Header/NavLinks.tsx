import DropDownLinks from './DropDownLinks'
import LinkToVisit from './LinkToVisit'

export default function NavLinks () {
  const lostLinks = [
    {
      href: '/pet-lost/profiles',
      title: 'Perfiles Animalitos'
    },
    {
      href: '/pet-lost/maps',
      title: 'Mapa'
    }
  ]

  const adoptionLinks = [
    {
      href: '/pet-adoption/profiles',
      title: 'Perfiles animalitos'
    },
    {
      href: '/pet-adoption/maps',
      title: 'Mapa'
    }
  ]

  return (
    <>
    {/* Home sections */}
    <DropDownLinks listLinks={lostLinks}>Perdí a mi Mascota</DropDownLinks>
    <DropDownLinks listLinks={adoptionLinks}>Adopcion</DropDownLinks>
    <LinkToVisit href={'/sign-up'} className={'text-red-300 hover:text-red-400'}>Mi Perfil</LinkToVisit>
    </>
  )
}
