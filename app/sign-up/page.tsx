import FieldContainer from '@/components/Form/FieldContainer'
import FormContainer from '@/components/Form/FormContainer'
import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import SendData from '@/components/Form/SendData'
import Link from 'next/link'

export default function SignUp () {
  return (
    <FormContainer>
      <h2 className="text-center text-lg self-center">Registrarse en Red Mascotera</h2>
      <section className="flex items-center justify-center">
        <form className="bg-slate-500 p-4 w-1/2 grid grid-cols-2 rounded-md h-[400px] gap-4">
          <FieldContainer>
            <Label htmlFor="name">Nombre</Label>
            <Input type="text" />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="apellido">Apellido</Label>
            <Input type="text" />
          </FieldContainer>
          <FieldContainer className="col-span-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input type="email" />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input type="text" />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="contraseña">Contraseña</Label>
            <Input type="password" />
          </FieldContainer>
          <FieldContainer className="col-span-2 flex items-center justify-center">
            <SendData label='Registrarse'/>
          </FieldContainer>
        </form>
      </section>
      <section className='flex justify-center self-center'>
        <p>
          Ya tienes una cuenta creada? Inicia sesión <Link href="/sign-in" className='underline rounded-sm'>aquí</Link>
        </p>
      </section>
    </FormContainer>
  )
}
