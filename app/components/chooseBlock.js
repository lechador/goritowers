import BlockCard from "./blockCard";
import ComponentTitle from "./componentTitle";

const data = [
  {
    id: 1,
    block: "A",
    status: "მიმდინარე", 
    aptMax: 100, 
    aptSold: 12, 
    image: "/image_block.jpg"
  }, 
  {
    id: 2,
    block: "B",
    status: "მიმდინარე", 
    aptMax: 120, 
    aptSold: 77, 
    image: "/image_block_2.jpg"
  },
  {
    id: 3,
    block: "C",
    status: "მიმდინარე", 
    aptMax: 88, 
    aptSold: 44, 
    image: "/image_block.jpg"
  }
]

export default function ChooseBlock() {
  return (
      <div data-theme="garden" className="pt-2 pb-8">
        <ComponentTitle title="აირჩიე ბლოკი" />
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {data.map((item) => (
            <BlockCard key={item.id} block={item.block} status={item.status} aptMax={item.aptMax} aptSold={item.aptSold} image={item.image} />
          ))}
        </div>
      </div>  
  )
}
