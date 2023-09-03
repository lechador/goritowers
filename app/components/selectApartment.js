'use client'
import { useRouter } from "next/navigation"

export default function SelectApartment({params, apartments}) {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center my-4">
        <select 
            className="select w-full max-w-xs" 
            defaultValue='აირჩიე ბინა' 
            onChange={(e) => router.push(`/project/${params.block}/${params.floor}/${e.target.value}`)}>
            <option disabled>აირჩიე ბინა</option>
            {apartments.map((apt) => {
              return(
                <option className={apt._id}
                    key={apt._id}
                    value={apt._id}
                >
                    ბინა {apt.apartment_number}
                </option>
            )
            })}
        </select>
    </div>
  )
}
