'use client'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import NavLinks from './NavLinks'
import styles from '@/components/Header/Header.module.css'

export default function ResponsiveNavBar () {
  const [hamburguerMenu, toggleHamburguerMenu] = useState(false)

  return (
    <>
    {/* Responsive Navigation Bar */}
    {hamburguerMenu
      ? < AiOutlineClose
      className={'cursor-pointer w-8 text-2xl ' + styles.hamburguerMenu}
      onClick={() => { toggleHamburguerMenu(false) }}
      />
      : <FiMenu
      className={'cursor-pointer w-8 text-2xl ' + styles.hamburguerMenu}
      onClick={() => { toggleHamburguerMenu(true) }}
      />
    }
    <nav className={`flex flex-col text-yellow-50 justify-center items-center gap-4 ${hamburguerMenu ? '' : 'hidden'} ` + styles.responsiveNavBar}>
        <NavLinks />
    </nav>
    </>
  )
}
