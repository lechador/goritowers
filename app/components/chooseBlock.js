import BlockCard from "./blockCard";
import ComponentTitle from "./componentTitle";
import { getBlocks } from "@/lib/data";


export default async function ChooseBlock({locale, blockTranslation, onGoingTranslation, plannedTranslation, leftTranslation, aptTranslation, title}) {
    let data = await getBlocks();
    
    return (
      <div data-theme="garden" className="pt-2 pb-8">
        <ComponentTitle title={title} />
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {data && data.map((item) => (
            <BlockCard 
              locale={locale} 
              key={item._id} 
              block={item.block_name} 
              block_id={item.block_id} 
              status={item.ongoing} 
              aptMax={item.apartmentCount} 
              aptSold={item.soldApartmentCount} 
              image={item.block_image} 
              blockTranslation={blockTranslation}
              onGoingTranslation={onGoingTranslation}
              plannedTranslation={plannedTranslation}
              leftTranslation={leftTranslation}
              aptTranslation={aptTranslation}
            />
          ))}
        </div>
      </div>
    )
}