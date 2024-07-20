import Link from 'next/link';

export default function BlockCard({block, status, aptMax, aptSold, image, block_id, locale}) {
  return (
    status ? (
      <Link href={`/${locale}/project/${block_id}`}>
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full lg:mx-4 my-4 cursor-pointer">
          <figure><img src={image} alt="image" /></figure>
          <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{block} ბლოკი</h2>
              <p className="text-green-400 font-bold">მიმდინარე</p>
              <div className="card-actions">
                <span className="w-full flex justify-center text-xl text-pink-300">დარჩენილია {aptMax-aptSold} ბინა</span>
                <progress className="progress progress-success w-full" value={aptSold} max={aptMax}></progress>
              </div>
          </div>
        </div>
      </Link>
    ): 
    (
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full lg:mx-4 my-4 cursor-pointer">
          <figure><img src={image} alt="image" /></figure>
          <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{block} ბლოკი</h2>
              <p className="text-red-400 font-bold">დაგეგმილი</p>
              <div className="card-actions">
              </div>
          </div>
        </div>
    )
  )
}
