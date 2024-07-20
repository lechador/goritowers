import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import RequestCall from "@/app/components/requestCall"

export default function Layout({ children, params: { locale } }) {
  return (
    <>
        <Header locale={locale}/>
        {children}
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer />
    </>
  )
}
