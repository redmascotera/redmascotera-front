import logo from '@/public/red_mascotera_logo_banner.png'
import Image from 'next/image'
import styles from '@/components/Header/Header.module.css'
import NavLinks from './NavLinks'
import ResponsiveNavBar from './ResponsiveNavBar'
import Link from 'next/link'

export default function Header () {
  return (
    <header className={'h-16 flex items-center justify-around bg-slate-200 text-slate-700 gap-5 px-5 fixed w-full z-[2000] ' + styles.header}>
      <Link href="/">
        <Image
          src={logo}
          alt='A puppy with a heart in his eyes'
          className={'w-44 ' + styles.logo}
        />
      </Link>
      <nav className={'flex items-center justify-end gap-8 w-full ' + styles.navBar}>
        <NavLinks />
      </nav>
      <ResponsiveNavBar />
    </header>
  )
}
