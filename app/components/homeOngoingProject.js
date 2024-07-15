import Image from "next/image"
import Link from "next/link"

export default function HomeOngoingProject() {

  const data = [
    {
      description: "მიწისქვეშა კეთილმოწყობილი და დაცული საპარკინგე ადგილი დაგიზოგავთ დროს და ენერგიას, რომელიც ავტომობილის გაჩერებაში უნდა დაგეხარჯათ.",
      title: "პარკინგი",
      title2: "აქ ყოველთვის არის შენი ადგილი!",
      image: "/parking.webp"
    }, 
    {
      description: "სავაჭრო და საოფისე სივრცეები გამოვყავით იმისთვის, რომ ტერიტორიიდან გაუსვლელად შეიძინოთ ოჯახისთვის საჭირო სურსათი და  ყოველდღიური საჭიროების ნივთები.",
      title: "კომერციული სივრცეები",
      title2: "ადგილზე გაქვს ყველაფერი!",
      image: "/images/26_result.webp"
    }, 
    {
      description: "გორი თაუერსი აღჭურვილია თანამედროვე უსაფრთხოების სისტემებით, სამეთვალყურეო კამერებით. ტერიტორიას 24 საათის განმავლობაში ემსახურება  დაცვა.",
      title: "უსაფრთხოება ოჯახის სიმშვიდისთვის!",
      image: "/images/17_result.webp"
    }, 
    {
      description: "კონსიერჟის მომსახურებასთან ერთად კეთილმოწყობილი, თანამედროვე, მყუდრო და ლამაზი ლობი საუკეთესო ადგილია საქმიანი შეხვედრების მოსაწყობად, სტუმრების მისაღებად და მაცხოვრებლების შეკრებისთვის.",
      title: "ლობი",
      title2: "ადგილი შენი შეხვედრებისთვის!",
      image: "/images/23_result.webp"
    }, 
    {
      description: "დღის ბოლოს, შვილებთან ერთად სეირნობა და თამაში საუკეთესო განტვირთვაა. გეკუთვნის 3500 კვადრატული გამწვანებული და დაცული შიდა ეზო, სუფთა ჰაერზე თავშეყრის ადგილებით, მოსასვენებელი სივრცეებით და საბავშვო გასართობი მოედნებით.",
      title: "ეზო",
      title2: "სიმწვანეში ცხოვრებისთვის!",
      image: "/images/14_result.webp"
    }
  ]

  return (
    <section data-theme="dark" className="cursor-pointer">
      <Link href="/project">
      <div className="container max-w-xl p-6 py-12 mx-auto md:space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            {/* <h2 className="text-3xl font-bold tracki text-center sm:text-5xl">მიმდინარე პროექტი</h2> */}
            <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
            გორი თაუერსი სამი საცხოვრებელი ბლოკისგან შედგება. თითოეულ ბლოკს აქვს საკუთარი კეთილმოწყობილი ლობი, რომლებსაც ემსახურებათ კონსიერჟი. დაცული, იზოლირებული გამწვანებული ეზო 3500 კვ. მეტრზეა გაშლილი. შიდა და გარე საპარკინგე ადგილები. სასეირნო ბილიკებით, მოსასვენებელი სივცეებით, საბავშვო და სპორტული მოედნებით ისეა დაგეგმარებული, რომ  დღის ნებისმიერ მონაკვეთში დრო სასიამოვნოდ გაატაროთ და ქალაქის ცენტრში თავი მყუდროდ და კომფორტულად იგრძნოთ.
            </p>
            <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
            გორი თაუერსი გამოირჩევა მოდერნისტული დიზაინით. იდეალურ სახლს თქვენთვის ვაშენებთ ენერგოეფექტური, უმაღლესი ხარისის მასალებით. ჩვენთან სრულად არის დაცული თანამედროვე უსაფრთხოების ნორმები. 
            </p>
          </div>
          <h3 className="text-2xl font-bold text-center sm:text-3xl">ინფრასტრუქტურა</h3>
        {
          data.map((item, index) => { 
            return(
              <div key={index}>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className={index==1 || index ==3 ? "lg:col-start-2 flex flex-col justify-evenly h-full" : "flex justify-evenly flex-col h-full"}>
                  <div className="mt-12 space-y-12">
                            <div className="flex justify-center">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4 flex items-center flex-col">
                                <h4 className="text-3xl font-medium text-defaultOrange">{item.title}</h4>
                                {
                                  item.title2 && (
                                    <h4 className="text-xl font-medium text-defaultOrange">{item.title2}</h4>
                                  )
                                }
                              </div>
                            </div>
                    </div>
                    <p className="mt-3 text-xl text-center">{item.description}</p>
                  </div>
                  <div className={index==1 || index ==3 ? "mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" : "mt-10 lg:mt-0"}>
                    <Image 
                      src={item.image} 
                      alt="" 
                      className="mx-auto rounded-lg shadow-lg" 
                      width={600}
                      height={400}
                     />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </Link>
    </section>
  )
}
