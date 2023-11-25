import styles from '@/components/Form/Form.module.css'

export default function FormContainer ({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className={'grid grid-rows-[4rem,1fr,4rem] min-h-[calc(100vh-4rem)] ' + styles.formContainer}>
        {children}
    </main>
  )
}
