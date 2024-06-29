import ChooseBlockCard from "@/app/components/chooseBlockCard";
import FabricFloorMap from "@/app/components/floorMap";
import SelectFloor from "@/app/components/selectFloor";
import TextComponent from "@/app/components/textComponent";
import axios from "axios";
import { notFound } from 'next/navigation'

export default async function page({ params }) {
  const blockData = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV=='production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/api/blocks/${params.block}`);
  const block = blockData.data.block
  const floors = blockData.data.floors

  if(!block || !block.ongoing){
    notFound()
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">{block.block_name} ბლოკი</h1>
            <h2 className="text-3xl">შეარჩიე შენი სახლი</h2>
        </div>
        <SelectFloor floors={floors} block={params.block} />
        <FabricFloorMap block={params.block} />
        <TextComponent theme="dark" text="
        გორი თაუერსი სამი საცხოვრებელი ბლოკისგან შედგება. თითოეულ ბლოკს აქვს საკუთარი კეთილმოწყობილი ლობი, რომლებსაც ემსახურებათ კონსიერჟი. დაცული, იზოლირებული გამწვანებული ეზო 3500 კვ. მეტრზეა გაშლილი. შიდა და გარე საპარკინგე ადგილები. სასეირნო ბილიკებით, მოსასვენებელი სივცეებით, საბავშვო და სპორტული მოედნებით ისეა დაგეგმარებული, რომ  დღის ნებისმიერ მონაკვეთში დრო სასიამოვნოდ გაატაროთ და ქალაქის ცენტრში თავი მყუდროდ და კომფორტულად იგრძნოთ.

გორი თაუერსი გამოირჩევა მოდერნისტული დიზაინით. იდეალურ სახლს თქვენთვის ვაშენებთ ენერგოეფექტური, უმაღლესი ხარისის მასალებით. 
ჩვენთან სრულად არის დაცული თანამედროვე უსაფრთხოების ნორმები. 
        " />
    </div>
  )
}
