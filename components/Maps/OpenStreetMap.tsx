'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import type { PetData } from '@/services/petList'
import { openStreetMapCopyright } from '@/services/streetMap'
import PetMapPopUp from './PetMapPopUp'
import 'leaflet/dist/leaflet.css'
// Fix pin marker icon error
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'
import styles from '@/components/Maps/PetMaps.module.css'

export default function OpenStreetMap ({ animalsList }: { animalsList: PetData[] }) {
  return (
    <div className='flex justify-center items-center'>
        <MapContainer
            center={[-34.6083, -58.3712]}
            zoom={14}
            scrollWheelZoom={true}
            className={`w-3/4 h-[500px] rounded-lg my-8 ${styles.mapContainer}`}
        >
            <TileLayer attribution={openStreetMapCopyright.attribution} url={openStreetMapCopyright.url}/>
            {/* Pets in adoption container */}
            {animalsList.map(pet => (
                <PetMapPopUp key={pet.alt} petData={pet}/>
            ))}
        </MapContainer>
    </div>
  )
}
