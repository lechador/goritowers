import dynamic from 'next/dynamic'
import ComponentTitle from "./componentTitle";
const LeafletMap = dynamic(() => import("./leafletMap"), {
  loading: () => <p>loading...</p>,
  ssr: false
})
export default function LocationComponent() {
  return (
    <div data-theme="dark" className="py-6">
      <ComponentTitle title="მდებარეობა" />
      <LeafletMap position={[41.97550113493826, 44.122536530809825]} containerHeight='h-96' />
    </div>
  )
}
