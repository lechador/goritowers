'use client'

import { useEffect, useState } from "react"
import axios from "axios"

export default function Test() {
  const [apartments, setApartments] = useState([])

  const getApartments = async () => { 
    const {data} = await axios.get('/api/admin')
    setApartments(data.apartments)
  }
  const handleStatusChange = async (id, currentState) => { 
    await axios.put('/api/admin', {
      aptId: id, 
      state: currentState
    })
    getApartments()
  }
  useEffect(() => { 
    getApartments()
  }, [])
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
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
            apartments.map((apt, index) => { 
              return(
                <tr key={index}>
                  <th>{apt.project_id}</th>
                  <td>{apt.block_id}</td>
                  <td>{apt.apartment_number}</td>
                  <td><input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={apt.is_sold ? "checked" : ""}
                        onChange={() => handleStatusChange(apt._id, apt.is_sold)} 
                      />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}