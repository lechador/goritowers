
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactComponent({title,mobile,email,address}) {
  return (
    <div className="flex justify-center"> 
    <div className="card w-96 bg-base-100 shadow-xl lg:absolute lg:top-52 lg:left-40" style={{zIndex: 1000}}>
        <h2 className="card-title bg-orange-400 text-white py-4 pl-4">{title}</h2>
        <div className="card-body">
            <div className="flex gap-4 items-center my-2">
                <BsFillTelephoneForwardFill size={30} />
                <span className="font-bold text-xl">{mobile}</span>
            </div>
            <div className="flex gap-4 items-center my-2">
                <MdEmail size={30} />
                <span className="font-bold text-xl">{email}</span>
            </div>
            <div className="flex gap-4 items-center my-2">
                <FaLocationDot size={30} />
                <span className="font-bold text-xl">{address}</span>
            </div>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
    </div>
  )
}
