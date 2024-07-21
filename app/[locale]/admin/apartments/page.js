'use client'

import { useEffect, useState } from "react"
import axios from "axios"

export default function AdminApartments() {
  const [apartments, setApartments] = useState([])
  const [filteredApartments, setFilteredApartments] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [apartmentsPerPage] = useState(30)
  const [filters, setFilters] = useState({
    project: "",
    block: "",
    apartment: "",
    isSold: ""
  })

  const getApartments = async () => {
    const { data } = await axios.get('/api/aptsroute')
    setApartments(data.apartments)
    setFilteredApartments(data.apartments)
  }

  const handleStatusChange = async (id, currentState) => {
    await axios.put('/api/aptsroute', {
      aptId: id,
      state: currentState
    })
    getApartments()
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          name="project"
          placeholder="პროექტი"
          value={filters.project}
          onChange={handleFilterChange}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="block"
          placeholder="ბლოკი"
          value={filters.block}
          onChange={handleFilterChange}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="apartment"
          placeholder="ბინა"
          value={filters.apartment}
          onChange={handleFilterChange}
          className="input input-bordered w-full max-w-xs"
        />
        <select
          name="isSold"
          value={filters.isSold}
          onChange={handleFilterChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">ყველა</option>
          <option value="true">გაყიდული</option>
          <option value="false">გასაყიდი</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>პროექტი</th>
              <th>ბლოკი</th>
              <th>ბინა</th>
              <th>გაყიდულია?</th>
            </tr>
          </thead>
          <tbody>
            {
              currentApartments.map((apt, index) => (
                <tr key={index}>
                  <th>{apt.project_id}</th>
                  <td>{apt.block_id}</td>
                  <td>{apt.apartment_number}</td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={apt.is_sold ? "checked" : ""}
                      onChange={() => handleStatusChange(apt._id, apt.is_sold)}
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {
          Array.from({ length: Math.ceil(filteredApartments.length / apartmentsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`btn mx-1 ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline'}`}
            >
              {i + 1}
            </button>
          ))
        }
      </div>
    </div>
  )
}
