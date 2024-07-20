import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero"
import HomeOngoingProject from "../components/homeOngoingProject"
import RequestCall from "../components/requestCall"
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata = {
  title: 'გორითაუერსი',
  description: 'გორითაურსი',
}
export default function Home({ params: { locale } }){
  unstable_setRequestLocale(locale);
  return (
      <> 
        <Header locale={locale} />
        <Hero locale={locale} />
        <HomeOngoingProject locale={locale} />
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer locale={locale} /> 
      </>
  )
}