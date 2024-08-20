'use client'
import RangeInput from "./rangeInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";

export default function HeroSearch({locale}) {
    const t = useTranslations('Search')
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
            window.my_modal_2.showModal();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    };

  return (
    <div className="card-body">
        <form onSubmit={handleSearch}>
            <div className="flex flex-row">
                <div className="w-full">
                    <RangeInput
                        title={t('minArea')}
                        min={40}

                                            max={100} 
                                            color={"white"} 
                                            unit={t('unit')} 
                                            setMinArea={setMinArea}
                                        />
                                        <RangeInput 
                                            title={t('maxArea')} 
                                            min={70} 
                                            max={150} 
                                            color={"white"} 
                                            unit={t('unit')} 
                                            setMaxArea={setMaxArea}
                                        />
                                    </div>
                                </div>

                                <div> 
                                    <h1 className="text-md text-white">{t('bedrooms')}</h1>
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
                                <button className="btn btn-outline text-2xl">{t('button')}</button>
                            </form>
                            <dialog id="my_modal_2" className="modal" data-theme="dark">
                                
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <table className="border-separate border-spacing-y-3 w-full">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4">{t('project')}</th>
                                                <th className="py-2 px-4">{t('floor')}</th>
                                                <th className="py-2 px-4">{t('Apartment')}</th>
                                                <th className="py-2 px-4">{t('unit')}</th>
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
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
  )
}
