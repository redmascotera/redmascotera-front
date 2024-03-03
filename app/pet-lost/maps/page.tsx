import dynamic from 'next/dynamic'
import styles from '@/components/Maps/PetMaps.module.css'
import { PetLostList } from '@/services/petList'
// Fix importing and building errors related with leaflet´s css and js files
const OpenStreetMap = dynamic(async () => await import('@/components/Maps/OpenStreetMap'), { ssr: false })

export default function PetMaps () {
  return (
    <>
        <h2 className={`p-4 text-2xl ${styles.title}`}>Mapa Animalitos Perdidos</h2>
        <OpenStreetMap animalsList={PetLostList}/>
    </>
  )
}
