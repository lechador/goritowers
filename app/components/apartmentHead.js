

export default function ApartmentHead({ project_name, block_id, floor_id, apartment_number }) {
  return (
    <div
        className="flex flex-col items-center justify-center py-4"
        data-theme="dark"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{project_name}</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row items-center md:mr-4">
            <span className="text-lg mr-1 text-orange-500">ბლოკი</span>
            <span className="text-4xl font-bold">{block_id}</span>
          </div>
          <div className="flex flex-row items-center md:mr-4">
            <span className="text-lg mr-1 text-orange-500">სართული</span>
            <span className="text-4xl font-bold">{floor_id}</span>
          </div>
          <div className="flex flex-row items-center md:mr-4">
            <span className="text-lg mr-1 text-orange-500">ბინა</span>
            <span className="text-4xl font-bold">{apartment_number}</span>
          </div>
        </div>
      </div>
  )
}
