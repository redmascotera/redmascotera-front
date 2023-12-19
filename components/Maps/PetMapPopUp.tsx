import { type PetData } from '@/services/petList'
import { customIcon } from '@/services/streetMap'
import Image from 'next/image'
import { Marker, Popup } from 'react-leaflet'

export default function PetMapPopUp ({ petData }: { petData: PetData }) {
  return (
    <Marker key={petData.alt} position={petData.location.position} title={petData.alt} icon={customIcon}>
        <Popup>
            <div className='flex flex-col items-center'>
                <p className='w-40 text-center'>{petData.name}</p>
                <Image
                    src={petData.photo}
                    alt={petData.alt}
                    width={150}
                    height={150}
                />
            </div>
        </Popup>
    </Marker>
  )
}
