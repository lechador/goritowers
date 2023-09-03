import ChooseFloorCard from "@/app/components/chooseFloorCard";
import SelectApartment from "@/app/components/selectApartment";
import axios from "axios";
import { notFound } from 'next/navigation'

export default async function page({params}) {
  const floorData = await axios.get(`http://localhost:3000/api/blocks/${params.block}/floors/${params.floor}`);
  const floor = floorData.data.floor
  const apartments = floorData.data.apartments

  if(!floor){
    notFound()
  }
  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">{floor.block_name} ბლოკი</h1>
            <h2 className="text-3xl text-teal-500	font-bold">სართული {floor.floor_id}</h2>
        </div>
        <SelectApartment params={params} apartments={apartments} />
        <ChooseFloorCard floor={floor} />
    </div>
  )
}