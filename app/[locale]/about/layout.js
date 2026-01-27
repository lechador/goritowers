import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import RequestCall from "@/app/components/requestCall"
import {setRequestLocale} from 'next-intl/server';

export default async function Layout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
        <Header locale={locale}/>
        {children}
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer />
    </>
  )
}
