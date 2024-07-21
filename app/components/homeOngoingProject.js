import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function HomeOngoingProject({locale}) {
  const t = useTranslations("ongoingProject")
  const data = [
    {
      description: t("first_desc"),
      title: t("first_title"),
      title2: t("first_title_2"),
      image: "/parking.webp"
    }, 
    {
      description: t("second_desc"),
      title: t("second_title"),
      title2: t("second_title_2"),
      image: "/images/26_result.webp"
    }, 
    {
      description: t("third_desc"),
      title: t("third_title"),
      title2: t("third_title_2"),
      image: "/images/17_result.webp"
    }, 
    {
      description: t("fourth_desc"),
      title: t("fourth_title"),
      title2: t("fourth_title_2"),
      image: "/images/23_result.webp"
    }, 
    {
      description: t("fifth_desc"),
      title: t("fifth_title"),
      title2: t("fifth_title_2"),
      image: "/images/14_result.webp"
    }
  ]

  return (
    <section data-theme="dark" className="cursor-pointer">
      <Link href={`/${locale}/project`}>
      <div className="container max-w-xl p-6 py-12 mx-auto md:space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
              {t("desc_1")}
            </p>
            <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
              {t("desc_2")}
            </p>
          </div>
          <h3 className="text-2xl font-bold text-center sm:text-3xl">{t("title")}</h3>
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
                              <div className="ml-4 flex items-stretch flex-col">
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
