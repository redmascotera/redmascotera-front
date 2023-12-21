import dynamic from 'next/dynamic'
import styles from '@/components/Maps/PetMaps.module.css'
// Fix importing and building errors related with leaflet´s css and js files
const OpenStreetMap = dynamic(async () => await import('@/components/Maps/OpenStreetMap'), { ssr: false })

export default function PetMaps () {
  return (
    <>
        <h2 className={`p-4 text-2xl ${styles.title}`}>Mapa Animalitos en Adopción</h2>
        <OpenStreetMap />
    </>
  )
}
