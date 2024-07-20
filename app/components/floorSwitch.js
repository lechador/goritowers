'use client'
import { useRouter } from "next/navigation";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

export default function FloorSwitch({floor, locale}) {
    const router = useRouter()
    const downFloor = () => { 
        if(floor>1){
            router.push(`/${locale}/project/1/${floor-1}`)
        }
    }
    const upFloor = () => { 
        if(floor<14){ 
            router.push(`/${locale}/project/1/${floor+1}`)
        }
    }
    return (
        <div className="w-full flex justify-around"> 
            <span className="cursor-pointer" onClick={downFloor}><BsArrowDownCircle size={30} /></span>
                <h2 className="text-3xl text-teal-500	font-bold">სართული {floor}</h2>
            <span className="cursor-pointer" onClick={upFloor}><BsArrowUpCircle size={30} /></span>
        </div>
    )
}
