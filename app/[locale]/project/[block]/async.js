import { notFound } from 'next/navigation'
import FabricFloorMap from "@/app/components/floorMap";
import SelectFloor from "@/app/components/selectFloor";
import TextComponent from "@/app/components/textComponent";
import { getBlockData } from "@/lib/data";

export default async function AsyncBlock({params, description, blockTr, text, choose}) {
    const data = await getBlockData(params.block);
    if (!data) return notFound();
    const { block, floors } = data;
  
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
