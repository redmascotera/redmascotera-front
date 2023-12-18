import Link from 'next/link'
import styles from '@/components/Header/Header.module.css'

interface LinkToVisitComponent {
  children: React.ReactNode
  href: string
  className?: string
}

export default function LinkToVisit ({ children, href, className }: LinkToVisitComponent) {
  return (
      <Link
        className={`font-medium text-lg transition-all hover:bg-slate-100 p-2 rounded-lg hover:text-yellow-600 ${className} ` + styles.link}
        href={href}
      >
              {children}
      </Link>
  )
}
