'use client'
import RangeInput from "./rangeInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function HeroSearch({locale}) {
    const router = useRouter()
    const [searchData, setSearchData] = useState();
    const [minArea, setMinArea] = useState(50);
    const [maxArea, setMaxArea] = useState(100);
    const [checkedIndex, setCheckedIndex] = useState(0);

    const handleCheckboxChange = (index) => {
        console.log(index+1)
        if (index === checkedIndex) {
            return;
        }
        setCheckedIndex(index);
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const searchData = await axios.post("/api/apartments/search", {
                "min-area": minArea,
                "max-area": maxArea,
                "bedrooms": checkedIndex+1
            });
            setSearchData(searchData.data.apartments);
            window.my_modal_4.showModal();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    };

  return (
    <div className="card-body">
        <form onSubmit={handleSearch}>
            <div className="flex flex-row">
                <div>
                    <RangeInput
                        title="მინიმალური ფართი"
                        min={40}

                                            max={100} 
                                            color={"white"} 
                                            unit={'კვ.მ'} 
                                            setMinArea={setMinArea}
                                        />
                                        <RangeInput 
                                            title="მაქსიმალური ფართი" 
                                            min={70} 
                                            max={150} 
                                            color={"white"} 
                                            unit={'კვ.მ'} 
                                            setMaxArea={setMaxArea}
                                        />
                                    </div>
                                </div>

                                <div> 
                                    <h1 className="text-md text-white">საძინებლების რაოდენობა</h1>
                                    <div>
                                    
                                    <div className="form-control mx-10">
                                    {[1, 2, 3].map((value, index) => (
                                        <label key={index} className="label cursor-pointer">
                                        <span className="text-2xl text-white">{value}</span>
                                        <input
                                            type="checkbox"
                                            className="checkbox border-opacity-100"
                                            checked={index === checkedIndex}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        </label>
                                    ))}
                                    </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline text-2xl">ბინის ძებნა</button>
                            </form>
                            <dialog id="my_modal_4" className="modal" data-theme="dark">
                                <form method="dialog " className="modal-box modal-box w-11/12 max-w-5xl">
                                <div className="block md:flex md:justify-center">
                                    <table className="border-separate border-spacing-y-3">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4">პროექტი</th>
                                                <th className="py-2 px-4">სართული</th>
                                                <th className="py-2 px-4">ბინა</th>
                                                <th className="py-2 px-4">კვ.მ.</th>
                                                {/* <th className="py-2 px-4"></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchData && searchData.map((apartment) => (
                                                
                                                <tr
                                                    key={apartment._id} 
                                                    className="text-center cursor-pointer"
                                                    onClick={() => router.push(`/${locale}/project/${apartment.block_id}/${apartment.floor_id}/${apartment._id}`)}
                                                    data-theme="garden"
                                                >
                                                    <td className="px-4">{apartment.project_name}</td>
                                                    <td className="px-4">{apartment.floor_id}</td>
                                                    <td className="px-4">{apartment.apartment_number}</td>
                                                    <td className="px-4">{apartment.apartment_area}</td>
                                                    {/* <td className="px-4">
                                                        <img
                                                            src={apartment.apartment_render_image}
                                                            alt={`Apartment ${apartment.apartment_number}`}
                                                            className="object-cover"
                                                            width={100}
                                                        />
                                                    </td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                            </dialog>
                        </div>
  )
}
