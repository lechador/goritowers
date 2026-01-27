'use client'
import { useRouter } from "next/navigation";
import { useState, useRef, Fragment } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { FaBed, FaRulerCombined, FaBuilding, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HeroSearch({locale}) {
    const t = useTranslations('Search')
    const router = useRouter()
    const modalRef = useRef(null);
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    
    // Areas
    const [minArea, setMinArea] = useState(50);
    const [maxArea, setMaxArea] = useState(100);
    
    // Bedrooms (1, 2, 3)
    // 0 -> 1 bedroom, 1 -> 2 bedrooms, ...
    const [bedrooms, setBedrooms] = useState(1);

    const fetchApartments = async (page) => {
        setLoading(true);
        try {
            const res = await axios.post("/api/apartments/search", {
                "min-area": minArea,
                "max-area": maxArea,
                "bedrooms": bedrooms,
                "page": page,
                "limit": itemsPerPage
            });
            setSearchData(res.data.apartments);
            setTotalItems(res.data.total);
            if(page === 1 && modalRef.current) {
                modalRef.current.showModal();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchApartments(1);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchApartments(pageNumber);
    };

    // Pagination Logic
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getThumbnailPath = (path) => {
        if (!path) return null;
        const parts = path.split('/');
        const filename = parts.pop();
        const directory = parts.join('/');
        return `${directory}/thumbnails/${filename}`;
    };

    return (
    <>
        <div className="card w-full max-w-sm bg-orange-500/95 backdrop-blur-sm shadow-2xl text-white">
            <div className="card-body p-6 gap-6">
                
                <form onSubmit={handleSearch} className="flex flex-col gap-6">
                    {/* Area Sliders */}
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label cursor-pointer pb-1">
                                <span className="label-text text-white font-semibold flex items-center gap-2">
                                    <FaRulerCombined /> {t('minArea')}
                                </span>
                                <span className="font-mono text-xl font-bold bg-white/20 px-2 rounded">{minArea} {t('unit')}</span>
                            </label>
                            <input 
                                type="range" 
                                min={30} 
                                max={100} 
                                value={minArea} 
                                onChange={(e) => setMinArea(parseInt(e.target.value))}
                                className="range range-xs range-warning bg-white/30 [--range-shdw:none]" 
                                step={1}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer pb-1">
                                <span className="label-text text-white font-semibold flex items-center gap-2">
                                    <FaRulerCombined /> {t('maxArea')}
                                </span>
                                <span className="font-mono text-xl font-bold bg-white/20 px-2 rounded">{maxArea} {t('unit')}</span>
                            </label>
                            <input 
                                type="range" 
                                min={50} 
                                max={200} 
                                value={maxArea} 
                                onChange={(e) => setMaxArea(parseInt(e.target.value))}
                                className="range range-xs range-warning bg-white/30 [--range-shdw:none]" 
                                step={1}
                            />
                        </div>
                    </div>

                    {/* Bedroom Selector */}
                    <div className="form-control">
                        <label className="label pt-0">
                            <span className="label-text text-white font-semibold flex items-center gap-2">
                                <FaBed /> {t('bedrooms')}
                            </span>
                        </label>
                        <div className="join w-full grid grid-cols-3">
                            {[1, 2, 3].map((num) => (
                                <input
                                    key={num}
                                    type="radio"
                                    name="bedrooms"
                                    className="join-item btn bg-white/20 border-white/30 text-white hover:bg-white/40 checked:bg-white checked:text-orange-600 checked:border-white transition-all text-lg"
                                    aria-label={String(num)}
                                    checked={bedrooms === num}
                                    onChange={() => setBedrooms(num)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Search Button */}
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="btn bg-white text-orange-600 border-none hover:bg-gray-100 w-full text-lg shadow-lg mt-2"
                    >
                        {loading ? <span className="loading loading-spinner"></span> : <><FaSearch /> {t('button')}</>}
                    </button>
                </form>
            </div>
        </div>

        {/* Results Modal */}
        <dialog ref={modalRef} id="results_modal" className="modal backdrop-blur-sm">
            <div className="modal-box w-11/12 max-w-6xl bg-base-100 p-0 overflow-hidden shadow-2xl rounded-2xl">
                {/* Modal Header */}
                <div className="bg-orange-600 p-4 flex justify-between items-center text-white sticky top-0 z-10">
                    <h3 className="font-bold text-2xl flex items-center gap-2">
                        <FaBuilding /> {t('Apartment')} ({totalItems})
                    </h3>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white text-lg">✕</button>
                    </form>
                </div>

                {/* Modal Content - Grid View */}
                <div className="p-6 bg-base-200/50 min-h-[50vh] flex flex-col justify-between">
                    {searchData.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-500 opacity-60">
                            <FaSearch className="text-6xl mb-4" />
                            <p className="text-xl">No apartments found</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                                {searchData.map((apt) => (
                                    <div 
                                        key={apt._id} 
                                        onClick={() => router.push(`/${locale}/project/${apt.block_id}/${apt.floor_id}/${apt._id}`)}
                                        className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden border border-base-200"
                                    >
                                        <figure className="relative h-48 bg-gray-100 overflow-hidden">
                                            {/* Fallback pattern or actual image if available */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-orange-200">
                                                <FaBuilding className="text-6xl" />
                                            </div>
                                            {apt.apartment_render_image && (
                                                <img 
                                                    src={getThumbnailPath(apt.apartment_render_image)} 
                                                    alt={apt.apartment_number}
                                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => {
                                                        // Fallback to original image if thumbnail missing
                                                        e.target.onerror = null; 
                                                        e.target.src = apt.apartment_render_image
                                                    }}
                                                />
                                            )}
                                            <div className="absolute top-2 right-2 badge badge-warning shadow-md font-bold">
                                                {apt.apartment_area} m²
                                            </div>
                                        </figure>
                                        <div className="card-body p-5">
                                            <h2 className="card-title text-xl text-orange-600">
                                                Apt {apt.apartment_number}
                                            </h2>
                                            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                                                <div className="flex flex-col">
                                                    <span className="text-xs uppercase opacity-70">{t('project')}</span>
                                                    <span className="font-semibold">{apt.project_name || 'Gori Towers'}</span>
                                                </div>
                                                <div className="flex flex-col text-right">
                                                    <span className="text-xs uppercase opacity-70">{t('floor')}</span>
                                                    <span className="font-semibold">{apt.floor_id}</span>
                                                </div>
                                            </div>
                                            <div className="card-actions justify-end mt-4">
                                                <button className="btn btn-sm btn-outline btn-warning w-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                    DETAILS
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="flex justify-center mt-4 pb-2">
                                    <div className="join shadow-md">
                                        <button 
                                            className="join-item btn bg-white hover:bg-orange-50 text-orange-600 border-none"
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        
                                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                                            .filter(num => {
                                                // Show first, last, current, and surrounding pages
                                                return num === 1 || 
                                                       num === totalPages || 
                                                       (num >= currentPage - 1 && num <= currentPage + 1);
                                            })
                                            .map((num, i, arr) => (
                                                <Fragment key={num}>
                                                    {i > 0 && arr[i-1] !== num - 1 && <button className="join-item btn btn-disabled bg-white text-gray-400">...</button>}
                                                    <button 
                                                        className={`join-item btn border-none ${currentPage === num ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-gray-600 hover:bg-orange-50'}`}
                                                        onClick={() => paginate(num)}
                                                    >
                                                        {num}
                                                    </button>
                                                </Fragment>
                                        ))}

                                        <button 
                                            className="join-item btn bg-white hover:bg-orange-50 text-orange-600 border-none"
                                            onClick={() => paginate(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>
  )
}
