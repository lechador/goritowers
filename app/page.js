import dynamic from "next/dynamic"
import Faq from "./components/faq"
import Hero from "./components/hero"
import HomeOngoingProject from "./components/homeOngoingProject"
import LoanCalc from "./components/loanCalc"
import Partners from "./components/partners"

const ReviewSlider = dynamic(() => import("./components/reviewSlider"), {
  ssr: false
})

export const metadata = {
  title: 'გორითაუერსი',
  description: 'გორითაურსი',
}
export default function Home(){
  return (
      <> 
        <Hero />
        <HomeOngoingProject />
        <LoanCalc />
        <Faq />
      </>
  )
}