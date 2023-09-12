'use client'
import axios from "axios";
import BlockCard from "./blockCard";
import ComponentTitle from "./componentTitle";
import { useEffect, useState } from "react";


export default function ChooseBlock() {
  const [blocks, setBlocks] = useState([])
  const fetchData = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? `https://goritowers.vercel.app/` : 'http://localhost:3000'}/api/blocks`);
    const data = response.data.blocks
    setBlocks(data)
  }
  useEffect(() => {
    fetchData()
    console.log(process.env.NEXT_PUBLIC_VERCEL_ENV)
    console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  }, [])
  return (
    <div data-theme="garden" className="pt-2 pb-8">
      <ComponentTitle title="აირჩიე ბლოკი" />
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {blocks && blocks.map((item) => (
          <BlockCard key={item._id} block={item.block_name} block_id={item.block_id} status={item.ongoing} aptMax={item.apartmentCount} aptSold={item.soldApartmentCount} image={item.block_image} />
        ))}
      </div>
    </div>
  )
}