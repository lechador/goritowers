import Hero from "./components/hero"
import HomeOngoingProject from "./components/homeOngoingProject"
import Header from "./components/header"
import Footer from "./components/footer"
import RequestCall from "./components/requestCall"


export const metadata = {
  title: 'გორითაუერსი',
  description: 'გორითაურსი',
}
export default function Home(){
  return (
      <> 
        <Header />
        <Hero />
        <HomeOngoingProject />
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer /> 
      </>
  )
}