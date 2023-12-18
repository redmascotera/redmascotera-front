'use client'
import Link from 'next/link'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from '@/components/Header/Header.module.css'

interface DropDownLinksComponent {
  children: React.ReactNode
  listLinks: Array<{ href: string, title: string }>
  className?: string
}

export default function DropDownLinks ({ children, listLinks, className }: DropDownLinksComponent) {
  const [menuDisplayed, setMenuDisplayed] = useState(false)

  return (
      <div className='relative' onMouseLeave={() => { setMenuDisplayed(false) }}>
        <li
          className={`${menuDisplayed ? 'bg-slate-100 text-yellow-600 rounded-t-lg' : 'rounded-lg'} flex items-center justify-between cursor-pointer list-none font-medium text-lg transition-all hover:bg-slate-100 p-2 hover:text-yellow-600 ${className} ${styles.link}`}
          onClick={() => { setMenuDisplayed(!menuDisplayed) }}
        >
          {children}
          <IoIosArrowDown />
        </li>
        <div className={menuDisplayed ? 'flex flex-col items-center gap-2 absolute top-11 p-2 bg-slate-900 rounded-b-md rounded-tr-md w-52 text-yellow-50' : 'hidden'}>
          {listLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='hover:bg-white hover:text-black py-1 px-2 rounded'
            >
                {link.title}
            </Link>
          ))}
        </div>
      </div>
  )
}
