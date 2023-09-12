import ChooseBlock from "../components/chooseBlock";
import LocationComponent from "../components/locationComponent";
import PaymentDetails from "../components/paymentDetails";
import TextComponent from "../components/textComponent";
import axios from "axios";
import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import("../components/imageGallery"), {
  ssr: false
})

export const metadata = {
  title: 'მიმდინარე პროექტი - გორითაუერსი',
  description: 'გორითაურსი',
}
export default async function page() {
  const {data} = await axios.get(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/blocks`);
  return (
    <>
    <div className="relative w-full">
      <div className="relative">
        <div
          className="bg-cover h-[60vh] lg:rounded-br-full bg-[url('https://static.archi.ge/%E1%83%9C%E1%83%A3%E1%83%AA%E1%83%A33/cover-00-00-20-19-still004-86b0fb65.jpg')]"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black text-white lg:mb-20 lg:ml-20">
          <h2 className="text-5xl font-bold">გორი თაუერსი</h2>
        </div>
      </div>
      <TextComponent theme="light" text="ახალი თანამედროვე საცხოვრებელი კომპლექსი არქი ნუცუბიძე 2 საბურთალოს IV პლატოზე, ლისის ტბიდან 10 წუთის სავალზე მდებარეობს. ამ კომპლექსის საცხოვრებელი სახლები დახვეწილი ექსტერიერით გარშემო არსებული ყველა სხვა შენობისგან გამოირჩევა. ფასადის მოსაპირკეთებლად ვენტილირებადი HPL პანელები და ელასტიკური აგური გამოიყენება. პროექტი მოიცავს კომერციულ ფართს, ღია და დახურულ ავტოსადგომს, გამწვანებულ ეზოს საბავშვო გასართობი სივრცითა და სპორტული მოედნით. მშენებლობა მიმდინარეობს გერმანული ბრენდის YTONG-ის ხანძარგამძლე, ეკოლოგიურად სუფთა, ენერგოეფექტური სამშენებლო ბლოკით, რომელიც ტემპერატურას ყველა სეზონზე ინარჩუნებს და 40%-ით ზოგავს ენერგიას, რის შედეგადაც კომუნალური გადასახადები მცირდება." />
    </div>
    <ChooseBlock data={data.blocks} />
    <LocationComponent />
    <ImageGallery theme='garden' />
    <PaymentDetails />
    </>
  )
}
