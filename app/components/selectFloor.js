'use client'
import { useRouter } from "next/navigation"

export default function SelectFloor({floors, block}) {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center my-4">
        <select className="select w-full max-w-xs" defaultValue='აირჩიე სართული' onChange={(e) => router.push(`/project/${block}/${e.target.value}`)}>
            <option disabled>აირჩიე სართული</option>
            {floors.map((floor) => {
              return(
                <option 
                    key={floor.floor_id}
                >
                    {floor.floor_id}
                </option>
            )
            })}
        </select>
    </div>
  )
}
