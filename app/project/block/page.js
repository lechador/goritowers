import ChooseBlockCard from "@/app/components/chooseBlockCard";
import TextComponent from "@/app/components/textComponent";

export default function page() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">A ბლოკი</h1>
            <h2 className="text-3xl">შეარჩიე შენი სახლი</h2>
        </div>
        <ChooseBlockCard />
        <TextComponent theme="dark" text="ახალი თანამედროვე პროექტი არქი ნუცუბიძე 2 A ბლოკი საბურთალოს IV პლატოზე, ლისის ტბიდან 10 წუთის სავალზე მდებარეობს. 21-სართულიანი საცხოვრებელი სახლი დახვეწილი ექსტერიერით გარშემო არსებული ყველა სხვა შენობისგან გამოირჩევა. მისი ფასადის მოსაპირკეთებლად ვენტილირებადი HPL პანელები და ელასტიკური აგური გამოიყენება. პროექტი მოიცავს კომერციულ ფართს, ღია და დახურულ ავტოსადგომს, გამწვანებულ ეზოს საბავშვო გასართობი სივრცითა  და სპორტული მოედნით. მშენებლობა მიმდინარეობს გერმანული ბრენდის YTONG-ის ხანძარგამძლე, ეკოლოგიურად სუფთა, ენერგოეფექტური სამშენებლო ბლოკით, რომელიც ტემპერატურას ყველა სეზონზე ინარჩუნებს და 40%-ით ზოგავს ენერგიას, რის შედეგადაც კომუნალური გადასახადები მცირდება." />
    </div>
  )
}
