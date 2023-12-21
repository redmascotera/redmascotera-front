import Image from 'next/image'
import { petList } from '@/services/petList'

export default function PetAdoption () {
  const getPetFormatedPersonality = (personalityList: string[]) => {
    return personalityList.map((value, index) => (`${value}${index === personalityList.length - 1 ? '' : ', '}`))
  }
  const getPetFormatedAge = (age: number) => {
    return age < 1 ? `${(age * 10).toFixed()} meses` : (age === 1 ? `${age} año` : `${age} años`)
  }
  return (
    <>
        <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,400px))] justify-center gap-4 p-4'>
            {petList.map((pet, index) => (
            <div
                key={pet.alt + index}
                className='bg-[rgba(0,0,0,.4)] p-4 rounded flex flex-col items-center justify-around gap-3'
            >
                <Image
                className='rounded'
                src={pet.photo}
                alt={pet.alt}
                width={300}
                height={300}
                />
                <article className='flex flex-col gap-2'>
                    <p>Nombre: {pet.name}</p>
                    <p>Genero: {pet.gender}</p>
                    <p>Edad: {getPetFormatedAge(pet.age)}</p>
                    <p>Tamaño: {pet.size}</p>
                    <p>Personalidad: {getPetFormatedPersonality(pet.personality)}</p>
                    <p>Actividad: {pet.energy}</p>
                    <p>Amigable con {pet.friendlyWith}</p>
                </article>
                <button className='bg-slate-300 text-blue-700 px-2 py-1 rounded hover:bg-slate-400 hover:text-blue-900 transition-colors'>Adoptar</button>
            </div>
            ))}
        </section>
    </>
  )
}
