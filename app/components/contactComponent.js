
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactComponent() {
  return (
    <div className="flex justify-center"> 
    <div className="card w-96 bg-base-100 shadow-xl lg:absolute lg:top-52 lg:left-40" style={{zIndex: 1000}}>
        <h2 className="card-title bg-orange-400 text-white py-4 pl-4">საკონტაქტო ინფორმაცია</h2>
        <div className="card-body">
            <div className="flex gap-4 items-center my-2">
                <BsFillTelephoneForwardFill size={30} />
                <span className="font-bold text-xl">596 11 22 22</span>
            </div>
            <div className="flex gap-4 items-center my-2">
                <MdEmail size={30} />
                <span className="font-bold text-xl">welcome@goritowers.ge</span>
            </div>
            <div className="flex gap-4 items-center my-2">
                <FaLocationDot size={30} />
                <span className="font-bold text-xl">თამარ მეფის გამზირი N81, გორი, საქართველო</span>
            </div>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
    </div>
  )
}
