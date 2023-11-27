import FieldContainer from '@/components/Form/FieldContainer'
import FormContainer from '@/components/Form/FormContainer'
import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import styles from '@/components/Form/Form.module.css'
import Link from 'next/link'
import SendData from '@/components/Form/SendData'

export default function SignIn () {
  return (
    <FormContainer>
        <h2 className={'text-center text-lg self-center ' + styles.formTitle}>Iniciar Sesión en Red Mascotera</h2>
        <section className="flex items-center justify-center">
            <form className={'bg-slate-500 p-4 min-w-[25rem] rounded-md h-[400px] gap-16 flex flex-col justify-center ' + `${styles.form} ${styles.formSignIn}`}>
                <FieldContainer>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input type="email" />
                </FieldContainer>
                <FieldContainer>
                    <Label htmlFor='password'>Contraseña</Label>
                    <Input type='password'/>
                </FieldContainer>
                <FieldContainer className='col-span-2 flex items-center justify-center'>
                    <SendData label='Iniciar Sesión'/>
                </FieldContainer>
            </form>
        </section>
        <section className='flex justify-center self-center'>
            <p className={styles.formFooter}>
                No tienes una cuenta? Registrate <Link href="/sign-up" className='underline rounded-sm'>aquí</Link>
            </p>
      </section>
    </FormContainer>
  )
}
