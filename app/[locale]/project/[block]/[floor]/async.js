import FloorSwitch from "@/app/components/floorSwitch";
import SelectApartment from "@/app/components/selectApartment";
import FabricApartmentMap from "@/app/components/selectApartmentMap";
import axios from "axios";
import { notFound } from 'next/navigation'

export default async function AsyncFloor({params, blockTr, floorTr, chooseTr, aptTr}) {
    const floorData = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV=='production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/api/blocks/${params.block}/floors/${params.floor}`);
    const floor = floorData.data.floor
    const apartments = floorData.data.apartments
    if(!floor){
        notFound()
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">{floor.block_name} {blockTr}</h1>
            <FloorSwitch floor={floor.floor_id} locale={params.locale} floorTr={floorTr} />
        </div>
        <SelectApartment params={params} apartments={apartments} locale={params.locale} chooseTr={chooseTr} aptTr={aptTr} />
        <FabricApartmentMap params={params} apartments={apartments} floor={floor} locale={params.locale} />
    </div>
  )
}
