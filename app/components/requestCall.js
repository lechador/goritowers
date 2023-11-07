'use client'
import axios from "axios";
import ComponentTitle from "./componentTitle";
import { useRef } from "react";
import { toast } from "react-toastify";


export default function RequestCall({showTitle, theme}) {
  const nameRef = useRef('')
  const numberRef = useRef('')
  const reasonRef = useRef('')
  function handleSubmit(e) { 
    e.preventDefault()
    let name = nameRef.current.value
    let number = numberRef.current.value
    let reason = reasonRef.current.value
    axios.post('/api/send-email', {
      name, number, reason
    })
    nameRef.current.value = ''
    numberRef.current.value = ''
    reasonRef.current.value = 'მიზანი'
    toast.success('დაელოდეთ ზარს', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div className="text-center py-10" data-theme={theme}>
        {
          showTitle ? <ComponentTitle title={"შეუკვეთე ზარი"} /> : null
        }
        
        <h3 className="my-8 text-lg">დაგვიტოვე ნომერი და პერსონალური მრჩეველი დაგიკავშირდება</h3> 
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center"> 
                <input type="text" ref={nameRef} placeholder="სახელი" className="input input-bordered w-full max-w-xs mb-4" />
                <input type="tel" ref={numberRef} placeholder="ტელეფონის ნომერი" className="input input-bordered w-full max-w-xs mb-4" />
                <select defaultValue={'მიზანი'} ref={reasonRef} className="select select-bordered w-full max-w-xs mb-4">
                    <option disabled>მიზანი</option>
                    <option>ბინის შეძენა</option>
                    <option>სხვა</option>
                </select>
                <button type="submit" className="btn bg-defaultOrange text-white tracking-wider hover:bg-defaultOrange">შეუკვეთე ზარი</button>
            </div>
          </form>
    </div>
  )
}
