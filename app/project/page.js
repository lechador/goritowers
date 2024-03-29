import LocationComponent from "../components/locationComponent";
import PaymentDetails from "../components/paymentDetails";
import TextComponent from "../components/textComponent";
import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import("../components/imageGallery"), {
  ssr: false
})

const ChooseBlock = dynamic(() => import("../components/chooseBlock"))

export const metadata = {
  title: 'მიმდინარე პროექტი - გორითაუერსი',
  description: 'გორითაურსი',
}
export default function page() {
 
  return (
    <>
    <div className="relative w-full">
      <div className="relative">
        <div
          className="bg-cover h-[60vh] lg:rounded-br-full bg-[url('/project-image.webp')]"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black text-white lg:mb-20 lg:ml-20">
          <h2 className="text-5xl font-bold">გორი თაუერსი</h2>
        </div>
      </div>
      <TextComponent theme="light" text="ახალი თანამედროვე საცხოვრებელი კომპლექსი არქი ნუცუბიძე 2 საბურთალოს IV პლატოზე, ლისის ტბიდან 10 წუთის სავალზე მდებარეობს. ამ კომპლექსის საცხოვრებელი სახლები დახვეწილი ექსტერიერით გარშემო არსებული ყველა სხვა შენობისგან გამოირჩევა. ფასადის მოსაპირკეთებლად ვენტილირებადი HPL პანელები და ელასტიკური აგური გამოიყენება. პროექტი მოიცავს კომერციულ ფართს, ღია და დახურულ ავტოსადგომს, გამწვანებულ ეზოს საბავშვო გასართობი სივრცითა და სპორტული მოედნით. მშენებლობა მიმდინარეობს გერმანული ბრენდის YTONG-ის ხანძარგამძლე, ეკოლოგიურად სუფთა, ენერგოეფექტური სამშენებლო ბლოკით, რომელიც ტემპერატურას ყველა სეზონზე ინარჩუნებს და 40%-ით ზოგავს ენერგიას, რის შედეგადაც კომუნალური გადასახადები მცირდება." />
    </div>
    <ChooseBlock />
    <LocationComponent />
    <ImageGallery theme='garden' />
    <PaymentDetails />
    </>
  )
}
