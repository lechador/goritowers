'use client'
import { useRouter } from 'next/navigation'

export default function BlockCard({block, status, aptMax, aptSold, image, block_id}) {
  const router = useRouter();
  return (
    <div 
      className="card w-80 md:w-96 bg-base-100 shadow-xl image-full lg:mx-4 my-4 cursor-pointer"
      onClick={() => router.push(`/project/${block_id}`)}
    >
        <figure><img src={image} alt="image" /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{block} ბლოკი</h2>
            <p className="text-orange-400 font-bold">{status ? 'მიმდინარე' : 'დასრულებული'}</p>
            <div className="card-actions">
                <span className="w-full flex justify-center text-xl text-pink-300">დარჩენილია {aptMax-aptSold} ბინა</span>
                <progress className="progress progress-success w-full" value={aptSold} max={aptMax}></progress>
            </div>
        </div>
    </div>
  )
}
