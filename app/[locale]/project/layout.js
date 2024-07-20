import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import RequestCall from "@/app/components/requestCall"
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Layout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <>  
        <Header locale={locale}/>
        {children}
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer />
    </>
  )
}
