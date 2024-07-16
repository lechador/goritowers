import dynamic from "next/dynamic"
import ContactComponent from "../components/contactComponent"
import dbConnect from "@/lib/dbConnect"
import Setting from "@/models/Setting"

export const metadata = {
    title: 'კონტაქტი - გორითაუერსი',
    description: 'გორითაურსი',
}
const LeafletMap = dynamic(() => import("../components/leafletMap"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

export default async function page() {
  await dbConnect()
  const x_coordinate = await Setting.findById("669670ecb3a6f8bc5697c070")
  const y_coordinate = await Setting.findById("66967138b3a6f8bc5697c071")
  const mobile = await Setting.findById("66969585b3a6f8bc5697c072")
  const email = await Setting.findById("669695aab3a6f8bc5697c073")
  const address = await Setting.findById("669695d0b3a6f8bc5697c074")
  const x_val = x_coordinate.setting_value
  const y_val = y_coordinate.setting_value
  const mobile_val = mobile.setting_value
  const email_val = email.setting_value
  const address_val = address.setting_value

  return (
    <div>
      <ContactComponent 
        mobile={mobile_val}
        email={email_val}
        address={address_val}  
      />
      <LeafletMap position={[x_val, y_val]} containerHeight='h-screen' />
    </div>
  )
}
