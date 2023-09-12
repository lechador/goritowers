import BlockCard from "./blockCard";
import ComponentTitle from "./componentTitle";


export default function ChooseBlock({data}) {
  return (
    <div data-theme="garden" className="pt-2 pb-8">
      <ComponentTitle title="აირჩიე ბლოკი" />
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {data && data.map((item) => (
          <BlockCard key={item._id} block={item.block_name} block_id={item.block_id} status={item.ongoing} aptMax={item.apartmentCount} aptSold={item.soldApartmentCount} image={item.block_image} />
        ))}
      </div>
    </div>
  )
}