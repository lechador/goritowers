import axios from "axios";
import { notFound } from 'next/navigation'
import FabricFloorMap from "@/app/components/floorMap";
import SelectFloor from "@/app/components/selectFloor";
import TextComponent from "@/app/components/textComponent";

export default async function AsyncBlock({params, description, blockTr, text, choose}) {
    const blockData = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV=='production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/api/blocks/${params.block}`);
    const block = blockData.data.block
    const floors = blockData.data.floors
  
    if(!block || !block.ongoing){
      notFound()
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">{block.block_name} {blockTr}</h1>
            <h2 className="text-3xl">{text}</h2>
        </div>
        <SelectFloor floors={floors} block={params.block} locale={params.locale} choose={choose} />
        <FabricFloorMap block={params.block} locale={params.locale} />
        <TextComponent theme="dark" text={description} />
    </div>
  )
}
