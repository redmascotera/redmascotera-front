import DropDownLinks from './DropDownLinks'
import LinkToVisit from './LinkToVisit'

export default function NavLinks () {
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
    <LinkToVisit href={'#about'}>Nosotros</LinkToVisit>
    <LinkToVisit href={'#donation'}>Colaboración</LinkToVisit>
    <LinkToVisit href={'#contact'}>Contacto</LinkToVisit>
    <LinkToVisit href={'#pet-lost'}>Perdí a mi Mascota</LinkToVisit>
    <DropDownLinks listLinks={adoptionLinks}>Adopcion</DropDownLinks>
    <LinkToVisit href={'/sign-up'} className={'text-red-300 hover:text-red-400'}>Mi Perfil</LinkToVisit>
    </>
  )
}
