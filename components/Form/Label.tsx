import styles from '@/components/Form/Form.module.css'

export default function Label ({ children, htmlFor }: {
  children: React.ReactNode
  htmlFor: string
}) {
  return (
    <label htmlFor={htmlFor} className={'text-lg ' + styles.label}>
      {children}
    </label>
  )
}
