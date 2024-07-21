import dynamic from 'next/dynamic'
import ComponentTitle from "./componentTitle";
import dbConnect from "@/lib/dbConnect"
import Setting from "@/models/Setting"
import { useTranslations } from 'next-intl';

const LeafletMap = dynamic(() => import("./leafletMap"), {
  loading: () => <p>loading...</p>,
  ssr: false
})
export default function LocationComponent() {
  const t = useTranslations("Location")
  return (
    <div data-theme="dark" className="py-6">
      <ComponentTitle title={t('title')} />
      <LeafletMap position={[41.9765, 44.1193]} containerHeight='h-96' />
    </div>
  )
}
