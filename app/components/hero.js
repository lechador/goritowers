'use client'
import axios from "axios";
import RangeInput from "./rangeInput";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter()
    const [minPrice, setMinPrice] = useState(50000);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [minArea, setMinArea] = useState(50);
    const [maxArea, setMaxArea] = useState(60);
    const [searchData, setSearchData] = useState();
    const handleSearch = async (e) => {
        e.preventDefault();

        console.log("Min Price:", minPrice);
        console.log("Max Price:", maxPrice);
        console.log("Min Area:", minArea);
        console.log("Max Area:", maxArea);

        try {
            const searchData = await axios.post("/api/apartments/search", {
                "min-price": minPrice,
                "max-price": maxPrice,
                "min-area": minArea,
                "max-area": maxArea
            });
           
            setSearchData(searchData.data.apartments);
            window.my_modal_4.showModal();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    };
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/hero.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <div className="card glass">
                        <div className="card-body">
                            <form onSubmit={handleSearch}>
                                <div className="flex flex-row"> 
                                    <div className="mr-10">
                                        <RangeInput 
                                            title="მინიმალური ფასი" 
                                            min={35000} 
                                            max={500000} 
                                            color={"orange-950"} 
                                            unit={'ლ'} 
                                            setMinPrice={setMinPrice}
                                        />
                                        <RangeInput 
                                            title="მაქსიმალური ფასი" 
                                            min={30000} 
                                            max={500000} 
                                            color={"orange-950"} 
                                            unit={'ლ'} 
                                            setMaxPrice={setMaxPrice}
                                        />
                                    </div>
                                    <div> 
                                        <RangeInput 
                                            title="მინიმალური ფართი" 
                                            min={35} 
                                            max={150} 
                                            color={"green-900"} 
                                            unit={'კვ.მ'} 
                                            setMinArea={setMinArea}
                                        />
                                        <RangeInput 
                                            title="მაქსიმალური ფართი" 
                                            min={50} 
                                            max={250} 
                                            color={"green-900"} 
                                            unit={'კვ.მ'} 
                                            setMaxArea={setMaxArea}
                                        />
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
                                                <th className="py-2 px-4">ბლოკი</th>
                                                <th className="py-2 px-4">სართული</th>
                                                <th className="py-2 px-4">ბინა</th>
                                                <th className="py-2 px-4">ფასი</th>
                                                <th className="py-2 px-4">კვ.მ.</th>
                                                <th className="py-2 px-4"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchData && searchData.map((apartment) => (
                                                
                                                <tr
                                                    key={apartment._id} 
                                                    className="text-center cursor-pointer"
                                                    onClick={() => router.push(`/project/${apartment.block_id}/${apartment.floor_id}/${apartment._id}`)}
                                                    data-theme="garden"
                                                >
                                                    <td className="px-4">{apartment.project_name}</td>
                                                    <td className="px-4">{apartment.block_id}</td>
                                                    <td className="px-4">{apartment.floor_id}</td>
                                                    <td className="px-4">{apartment.apartment_number}</td>
                                                    <td className="px-4">{apartment.apartment_price}</td>
                                                    <td className="px-4">{apartment.apartment_area}</td>
                                                    <td className="px-4">
                                                        <img
                                                            src={apartment.apartment_render_image}
                                                            alt={`Apartment ${apartment.apartment_number}`}
                                                            className="object-cover"
                                                            width={100}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                    <div className="modal-action">
                                        <button className="btn">დახურვა</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
