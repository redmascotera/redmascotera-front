import logo from '@/public/puppy-with-a-heart.png'
import Image from 'next/image'
import styles from '@/components/Header/Header.module.css'
import NavLinks from './NavLinks'
import ResponsiveNavBar from './ResponsiveNavBar'

export default function Header () {
  return (
    <header className={'h-16 flex items-center justify-around bg-slate-200 text-slate-700 gap-5 px-5 fixed w-full ' + styles.header}>
      <h1 className={'text-center w-60 font-medium text-xl uppercase text-yellow-700 ' + styles.title}>Red Mascotera</h1>
      <Image
        src={logo}
        alt='A puppy with a heart in his eyes'
        className={'w-auto h-full ' + styles.logo}
      />
      <nav className={'flex items-center justify-between w-full ' + styles.navBar}>
        <NavLinks />
      </nav>
      <ResponsiveNavBar />
    </header>
  )
}
