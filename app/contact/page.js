import dynamic from "next/dynamic"
import ContactComponent from "../components/contactComponent"

export const metadata = {
    title: 'კონტაქტი - გორითაუერსი',
    description: 'გორითაურსი',
}
const LeafletMap = dynamic(() => import("../components/leafletMap"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

export default function page() {
  return (
    <div>
      <ContactComponent />
      <LeafletMap position={[41.97550113493826, 44.122536530809825]} containerHeight='h-screen' />
    </div>
  )
}
