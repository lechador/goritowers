'use client'
import ComponentTitle from "./componentTitle";


export default function RequestCall({showTitle, theme}) {
  
  return (
    <div className="text-center py-10" data-theme={theme}>
        {
          showTitle ? <ComponentTitle title={"შეუკვეთე ზარი"} /> : null
        }
        
        <h3 className="my-8 text-lg">დაგვიტოვე ნომერი და პერსონალური მრჩეველი დაგიკავშირდება</h3> 
            <div className="flex flex-col items-center"> 
                <input type="text" placeholder="სახელი" className="input input-bordered w-full max-w-xs mb-4" />
                <input type="tel" placeholder="ტელეფონის ნომერი" className="input input-bordered w-full max-w-xs mb-4" />
                <select defaultValue={'მიზანი'} className="select select-bordered w-full max-w-xs mb-4">
                    <option disabled>მიზანი</option>
                    <option>ბინის შეძენა</option>
                    <option>სხვა</option>
                </select>
                <button className="btn bg-defaultOrange text-white tracking-wider">შეუკვეთე ზარი</button>
            </div>
    </div>
  )
}
