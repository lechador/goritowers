import dynamic from "next/dynamic"
import ContactComponent from "@/app/components/contactComponent"
import { useTranslations } from "next-intl"

export const metadata = {
    title: 'კონტაქტი - გორითაუერსი',
    description: 'გორითაურსი',
}
const LeafletMap = dynamic(() => import("@/app/components/leafletMap"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

export default function ContactPage() {
  const t = useTranslations('Contact')
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
