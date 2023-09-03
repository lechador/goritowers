import Hero from "./components/hero"
import HomeOngoingProject from "./components/homeOngoingProject"
import LoanCalc from "./components/loanCalc"
import PaymentDetails from "./components/paymentDetails"
import TextComponent from "./components/textComponent"

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
        <PaymentDetails />
      </>
  )
}