'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import { petList } from '@/services/petList'
import { openStreetMapCopyright } from '@/services/streetMap'
import PetMapPopUp from './PetMapPopUp'
import 'leaflet/dist/leaflet.css'
// Fix pin marker icon error
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'

export default function OpenStreetMap () {
  return (
    <div className='flex justify-center items-center'>
        <MapContainer
            center={[-34.6083, -58.3712]}
            zoom={14}
            scrollWheelZoom={false}
            className='w-3/4 h-[500px] rounded-lg my-8'
        >
            <TileLayer attribution={openStreetMapCopyright.attribution} url={openStreetMapCopyright.url}/>
            {/* Pets in adoption container */}
            {petList.map(pet => (
                <PetMapPopUp key={pet.alt} petData={pet}/>
            ))}
        </MapContainer>
    </div>
  )
}
