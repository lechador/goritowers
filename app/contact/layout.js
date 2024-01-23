import Header from "../components/header"
import Footer from "../components/footer"
import RequestCall from "../components/requestCall"

export default function Layout({children}) {
  return (
    <>
        <Header />
        {children}
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer />
    </>
  )
}
