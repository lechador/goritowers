import axios from "axios";
import BlockCard from "./blockCard";
import ComponentTitle from "./componentTitle";


export default async function ChooseBlock() {
  const {data} = await axios.get(`${process.env.ENV == 'dev' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}/api/blocks`);
  const blocks = data.blocks
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