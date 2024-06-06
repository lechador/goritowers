import Link from "next/link"

export default function HomeOngoingProject() {

  const data = [
    {
      mainTitle: "ინფრასტრუქტურა", 
      description: "საცხოვრებელი კომპლექსი მოიცავს 5 000 კვ.მ. გამწვანებულ ეზოს, ღია აუზს, სპორტულ მოედანს, დასასვენებელ სივრცეებს, ღია და დახურულ ავტოსადგომს. რივერთაუნის ტერიტორიაზე ასევე განთავსდება კაფე, სუპერმარკეტი და აფთიაქი.",
      itemTitles: [
        {
          title: "საბავშვო მოედანი"
        },
        {
          title: "საბავშვო მოედანი"
        },
        {
          title: "საბავშვო მოედანი"
        },
      ],
      image: "/002.webp"
    }, 
    {
      mainTitle: "ინფრასტრუქტურა", 
      description: "საცხოვრებელი კომპლექსი მოიცავს 5 000 კვ.მ. გამწვანებულ ეზოს, ღია აუზს, სპორტულ მოედანს, დასასვენებელ სივრცეებს, ღია და დახურულ ავტოსადგომს. რივერთაუნის ტერიტორიაზე ასევე განთავსდება კაფე, სუპერმარკეტი და აფთიაქი.",
      itemTitles: [
        {
          title: "საბავშვო მოედანი"
        },
        {
          title: "საბავშვო მოედანი"
        },
        {
          title: "საბავშვო მოედანი"
        },
      ],
      image: "/parking.webp"
    },
    {
      mainTitle: "ინფრასტრუქტურა", 
      description: "საცხოვრებელი კომპლექსი მოიცავს 5 000 კვ.მ. გამწვანებულ ეზოს, ღია აუზს, სპორტულ მოედანს, დასასვენებელ სივრცეებს, ღია და დახურულ ავტოსადგომს. რივერთაუნის ტერიტორიაზე ასევე განთავსდება კაფე, სუპერმარკეტი და აფთიაქი.",
      itemTitles: [
        {
          title: "საბავშვო მოედანი"
        },
        {
          title: "საბავშვო მოედანი"
        },
        {
          title: "საბავშვო მოედანი"
        },
      ],
      image: "/001_post.webp"
    },
  ]

  return (
    <section data-theme="dark" className="cursor-pointer">
      <Link href="/project">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl">მიმდინარე პროექტი</h2>
            <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
            გორი თაუერსი სამი საცხოვრებელი ბლოკისგან შედგება. თითოეულ ბლოკს აქვს საკუთარი კეთილმოწყობილი ლობი, რომლებსაც ემსახურებათ კონსიერჟი. დაცული, იზოლირებული გამწვანებული ეზო 3500 კვ. მეტრზეა გაშლილი. შიდა და გარე საპარკინგე ადგილები. სასეირნო ბილიკებით, მოსასვენებელი სივცეებით, საბავშვო და სპორტული მოედნებით ისეა დაგეგმარებული, რომ  დღის ნებისმიერ მონაკვეთში დრო სასიამოვნოდ გაატაროთ და ქალაქის ცენტრში თავი მყუდროდ და კომფორტულად იგრძნოთ.
            </p>
            <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
            გორი თაუერსი გამოირჩევა მოდერნისტული დიზაინით. იდეალურ სახლს თქვენთვის ვაშენებთ ენერგოეფექტური, უმაღლესი ხარისის მასალებით. ჩვენთან სრულად არის დაცული თანამედროვე უსაფრთხოების ნორმები. 
            </p>
          </div>
        {
          data.map((item, index) => { 
            return(
              <div key={index}>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className={index==1 ? "lg:col-start-2" : ""}>
                    <h3 className="text-2xl font-bold tracki sm:text-3xl">{item.mainTitle}</h3>
                    <p className="mt-3 text-lg">{item.description}</p>
                    <div className="mt-12 space-y-12">
                      {
                        item.itemTitles.map((title, i) => {
                          return(
                            <div className="flex" key={i}>
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4 flex items-center">
                                <h4 className="text-lg font-medium leadi">{title.title}</h4>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className={index==1 ? "mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" : "mt-10 lg:mt-0"}>
                    <img src={item.image} alt="" className="mx-auto rounded-lg shadow-lg" />
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
