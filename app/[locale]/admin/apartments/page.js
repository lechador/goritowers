'use client'

import { useEffect, useState, Fragment } from "react"
import axios from "axios"
import { FaSearch, FaFilter, FaBuilding, FaLayerGroup, FaDoorOpen, FaCheck, FaTimes, FaSpinner } from "react-icons/fa"

export default function AdminApartments() {
  const [apartments, setApartments] = useState([])
  const [filteredApartments, setFilteredApartments] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [apartmentsPerPage] = useState(15) // Reduced for better card height fit
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    project: "",
    block: "",
    apartment: "",
    isSold: ""
  })

  const getApartments = async () => {
    setLoading(true)
    try {
        const { data } = await axios.get('/api/aptsroute')
        setApartments(data.apartments)
        setFilteredApartments(data.apartments)
    } finally {
        setLoading(false)
    }
  }

  const handleStatusChange = async (id, currentState) => {
    // Optimistic update
    const updatedApts = apartments.map(apt => 
        apt._id === id ? { ...apt, is_sold: !currentState } : apt
    )
    setApartments(updatedApts)
    
    // In background
    try {
        await axios.put('/api/aptsroute', {
            aptId: id,
            state: currentState
        })
    } catch(e) {
        // Revert on error
        getApartments()
    }
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value
    })
  }

  const applyFilters = () => {
    let filtered = apartments
    if (filters.project) {
      filtered = filtered.filter(apt => apt.project_id.toString().includes(filters.project))
    }
    if (filters.block) {
      filtered = filtered.filter(apt => apt.block_id.toString().includes(filters.block))
    }
    if (filters.apartment) {
      filtered = filtered.filter(apt => apt.apartment_number.toString().includes(filters.apartment))
    }
    if (filters.isSold !== "") {
      filtered = filtered.filter(apt => apt.is_sold === (filters.isSold === "true"))
    }
    setFilteredApartments(filtered)
    setCurrentPage(1)
  }

  useEffect(() => {
    getApartments()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filters, apartments])

  const indexOfLastApartment = currentPage * apartmentsPerPage
  const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage
  const currentApartments = filteredApartments.slice(indexOfFirstApartment, indexOfLastApartment)
  const totalPages = Math.ceil(filteredApartments.length / apartmentsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-6">
        {/* Header & Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaBuilding className="text-orange-500" />
                ბინების მართვა
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <FaBuilding />
                    </span>
                    <input
                        type="text"
                        name="project"
                        placeholder="პროექტის ID..."
                        value={filters.project}
                        onChange={handleFilterChange}
                        className="input input-bordered w-full pl-10 bg-gray-50 focus:bg-white"
                    />
                </div>
                
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <FaLayerGroup />
                    </span>
                    <input
                        type="text"
                        name="block"
                        placeholder="ბლოკის ძიება..."
                        value={filters.block}
                        onChange={handleFilterChange}
                        className="input input-bordered w-full pl-10 bg-gray-50 focus:bg-white"
                    />
                </div>

                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <FaDoorOpen />
                    </span>
                    <input
                        type="text"
                        name="apartment"
                        placeholder="ბინის ნომერი..."
                        value={filters.apartment}
                        onChange={handleFilterChange}
                        className="input input-bordered w-full pl-10 bg-gray-50 focus:bg-white"
                    />
                </div>

                <div className="relative">
                    <select
                        name="isSold"
                        value={filters.isSold}
                        onChange={handleFilterChange}
                        className="select select-bordered w-full bg-gray-50 focus:bg-white"
                    >
                        <option value="">ყველა სტატუსი</option>
                        <option value="true">გაყიდული / მიუწვდომელი</option>
                        <option value="false">გასაყიდი</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {loading ? (
                <div className="p-20 flex justify-center items-center text-gray-500 gap-4">
                    <FaSpinner className="animate-spin text-4xl text-orange-500" />
                    <span>ბინები იტვირთება...</span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-50 text-gray-600 font-semibold uppercase text-xs tracking-wider">
                        <tr>
                        <th className="py-4">პროექტი</th>
                        <th>ბლოკი</th>
                        <th>ბინა</th>
                        <th>სართული</th>
                        <th>სტატუსი</th>
                        <th className="text-right">მოქმედება</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentApartments.length > 0 ? currentApartments.map((apt) => (
                        <tr key={apt._id} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none">
                            <td className="font-bold text-gray-700">{apt.project_name || apt.project_id}</td>
                            <td>
                                <div className="badge badge-ghost font-mono">{apt.block_id}</div>
                            </td>
                            <td className="font-mono text-lg">{apt.apartment_number}</td>
                            <td className="text-gray-500">{apt.floor_id}</td>
                            <td>
                                {apt.is_sold ? (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        <FaCheck className="text-[10px]" /> გაყიდული
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        <FaCheck className="text-[10px]" /> ხელმისაწვდომი
                                    </span>
                                )}
                            </td>
                            <td className="text-right">
                                <label className="cursor-pointer label justify-end gap-2">
                                <span className="label-text text-xs text-gray-400">{apt.is_sold ? 'Mark Available' : 'Mark Sold'}</span> 
                                <input
                                    type="checkbox"
                                    className="toggle toggle-success toggle-sm"
                                    checked={!apt.is_sold} // Toggle is ON if Available (not sold)
                                    onChange={() => handleStatusChange(apt._id, apt.is_sold)}
                                />
                                </label>
                            </td>
                        </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="text-center py-10 text-gray-400">
                                    No apartments found matching your filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            {!loading && totalPages > 1 && (
                <div className="p-4 border-t border-gray-100 flex justify-center">
                    <div className="join">
                        <button 
                            className="join-item btn btn-sm bg-white border-gray-200" 
                            disabled={currentPage === 1}
                            onClick={() => paginate(currentPage - 1)}
                        >
                            «
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                             .filter(num => num === 1 || num === totalPages || (num >= currentPage - 2 && num <= currentPage + 2))
                             .map((num, i, arr) => (
                             <Fragment key={num}>
                                {i > 0 && arr[i-1] !== num - 1 && <span className="join-item btn btn-sm btn-disabled bg-white border-transparent">...</span>}
                                <button
                                    onClick={() => paginate(num)}
                                    className={`join-item btn btn-sm ${currentPage === num ? 'btn-active bg-orange-500 text-white border-orange-500' : 'bg-white border-gray-200'}`}
                                >
                                    {num}
                                </button>
                             </Fragment>
                        ))}
                        <button 
                            className="join-item btn btn-sm bg-white border-gray-200"
                            disabled={currentPage === totalPages}
                            onClick={() => paginate(currentPage + 1)}
                        >
                            »
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
