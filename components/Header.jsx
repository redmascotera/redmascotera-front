import logo from '@/public/puppy-with-a-heart.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='h-16 flex items-center justify-around bg-slate-200 text-slate-700 gap-5 px-5 fixed w-full'>
      <h1 className='text-center w-60 font-medium text-xl uppercase text-yellow-700'>Red Mascotera</h1>
      <Image
        src={logo}
        alt='A puppy with a heart in his eyes'
        className='w-auto h-full'
      />
      <nav className='flex items-center justify-between w-full'>
        {/* Home sections */}
        <Link className='font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600' href={'#about'}>Nosotros</Link>
        <Link className='font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600' href={'#donation'}>Colaboración</Link>
        <Link className='font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600' href={'#contact'}>Contacto</Link>
        <Link className='font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600' href={'#pet-lost'}>Perdi a mi Mascota</Link>
        <Link className='font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600' href={'#pet-adoption'}>Adopción</Link>
        {/* Links/URL´s */}
        <Link className='font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600' href={'#'}>Mi Perfil</Link>
      </nav>
    </header>
  )
}
