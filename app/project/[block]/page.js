import ChooseBlockCard from "@/app/components/chooseBlockCard";
import SelectFloor from "@/app/components/selectFloor";
import TextComponent from "@/app/components/textComponent";
import axios from "axios";
import { notFound } from 'next/navigation'

export default async function page({ params }) {
  const blockData = await axios.get(`${process.env.WEBSITE_URL}/api/blocks/${params.block}`);
  const block = blockData.data.block
  const floors = blockData.data.floors

  if(!block){
    notFound()
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">{block.block_name} ბლოკი</h1>
            <h2 className="text-3xl">შეარჩიე შენი სახლი</h2>
        </div>
        <SelectFloor floors={floors} block={params.block} />
        <ChooseBlockCard image={block.block_image_big} />
        <TextComponent theme="dark" text="ახალი თანამედროვე პროექტი არქი ნუცუბიძე 2 A ბლოკი საბურთალოს IV პლატოზე, ლისის ტბიდან 10 წუთის სავალზე მდებარეობს. 21-სართულიანი საცხოვრებელი სახლი დახვეწილი ექსტერიერით გარშემო არსებული ყველა სხვა შენობისგან გამოირჩევა. მისი ფასადის მოსაპირკეთებლად ვენტილირებადი HPL პანელები და ელასტიკური აგური გამოიყენება. პროექტი მოიცავს კომერციულ ფართს, ღია და დახურულ ავტოსადგომს, გამწვანებულ ეზოს საბავშვო გასართობი სივრცითა  და სპორტული მოედნით. მშენებლობა მიმდინარეობს გერმანული ბრენდის YTONG-ის ხანძარგამძლე, ეკოლოგიურად სუფთა, ენერგოეფექტური სამშენებლო ბლოკით, რომელიც ტემპერატურას ყველა სეზონზე ინარჩუნებს და 40%-ით ზოგავს ენერგიას, რის შედეგადაც კომუნალური გადასახადები მცირდება." />
    </div>
  )
}
