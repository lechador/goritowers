import dynamic from 'next/dynamic'
import ComponentTitle from "./componentTitle";
import dbConnect from "@/lib/dbConnect"
import Setting from "@/models/Setting"

const LeafletMap = dynamic(() => import("./leafletMap"), {
  loading: () => <p>loading...</p>,
  ssr: false
})
export default async function LocationComponent() {
  await dbConnect()
  const x_coordinate = await Setting.findById("669670ecb3a6f8bc5697c070")
  const y_coordinate = await Setting.findById("66967138b3a6f8bc5697c071")
  const x_val = x_coordinate.setting_value
  const y_val = y_coordinate.setting_value
  return (
    <div data-theme="dark" className="py-6">
      <ComponentTitle title="მდებარეობა" />
      <LeafletMap position={[x_val, y_val]} containerHeight='h-96' />
    </div>
  )
}
