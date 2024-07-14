import LocationComponent from "../components/locationComponent";
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
      <TextComponent theme="light" text="
      გორი თაუერსი სამი საცხოვრებელი ბლოკისგან შედგება. თითოეულ ბლოკს აქვს საკუთარი კეთილმოწყობილი ლობი, რომლებსაც ემსახურებათ კონსიერჟი. დაცული, იზოლირებული გამწვანებული ეზო 3500 კვ. მეტრზეა გაშლილი. შიდა და გარე საპარკინგე ადგილები. სასეირნო ბილიკებით, მოსასვენებელი სივცეებით, საბავშვო და სპორტული მოედნებით ისეა დაგეგმარებული, რომ  დღის ნებისმიერ მონაკვეთში დრო სასიამოვნოდ გაატაროთ და ქალაქის ცენტრში თავი მყუდროდ და კომფორტულად იგრძნოთ.

გორი თაუერსი გამოირჩევა მოდერნისტული დიზაინით. იდეალურ სახლს თქვენთვის ვაშენებთ ენერგოეფექტური, უმაღლესი ხარისის მასალებით. 
ჩვენთან სრულად არის დაცული თანამედროვე უსაფრთხოების ნორმები. 
      " />
    </div>
    <ChooseBlock />
    <LocationComponent />
    <ImageGallery theme='garden' />
    </>
  )
}
