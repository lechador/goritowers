import ContactComponent from "@/app/components/contactComponent"
import { getTranslations } from "next-intl/server"
import {setRequestLocale} from 'next-intl/server';
import LeafletMap from "@/app/components/DynamicLeafletMap";

export const metadata = {
    title: 'კონტაქტი - გორითაუერსი',
    description: 'გორითაურსი',
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'Contact'})
  return (
    <div>
      <ContactComponent 
        title={t('title')}
        mobile={t('phone')}
        email={t('email')}
        address={t('address')}
      />
      <LeafletMap position={[41.9765, 44.1193]} containerHeight='h-screen' />
    </div>
  )
}
