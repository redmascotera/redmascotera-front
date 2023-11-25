import Link from 'next/link'
import styles from '@/components/Header/Header.module.css'

function LinkToVisit ({ children, href, className }) {
  return (
    <Link
    className={`font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600 ${className} ` + styles.link}
    href={href}>
            {children}
    </Link>
  )
}

export default function NavLinks () {
  return (
    <>
    {/* Home sections */}
    <LinkToVisit href={'#about'}>Nosotros</LinkToVisit>
    <LinkToVisit href={'#donation'}>Colaboración</LinkToVisit>
    <LinkToVisit href={'#contact'}>Contacto</LinkToVisit>
    <LinkToVisit href={'#pet-lost'}>Perdí a mi Mascota</LinkToVisit>
    <LinkToVisit href={'#pet-adoption'}>Adopción</LinkToVisit>
    <LinkToVisit href={'/sign-up'} className={'text-red-300 hover:text-red-400'}>Mi Perfil</LinkToVisit>
    </>
  )
}
