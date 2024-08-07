'use client'
import { useRouter } from "next/navigation"

export default function SelectApartment({params, apartments, locale, chooseTr, aptTr}) {
    const router = useRouter()

    // Sort apartments by apartment_number
    const sortedApartments = [...apartments].sort((a, b) => a.apartment_number - b.apartment_number);

    return (
        <div className="flex flex-col items-center my-4">
            <select
                className="select w-full max-w-xs"
                defaultValue={chooseTr}
                onChange={(e) => router.push(`/${locale}/project/${params.block}/${params.floor}/${e.target.value}`)}
            >
                <option disabled>{chooseTr}</option>
                {sortedApartments.map((apt) => (
                    <option
                        className={apt._id}
                        key={apt._id}
                        value={apt._id}
                    >
                        {aptTr} {apt.apartment_number}
                    </option>
                ))}
            </select>
        </div>
    )
}
