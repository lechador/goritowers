import axios from "axios";
import BlockCard from "./blockCard";
import ComponentTitle from "./componentTitle";


export default async function ChooseBlock({locale, blockTranslation, onGoingTranslation, plannedTranslation, leftTranslation, aptTranslation, title}) {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? `https://goritowers.ge/` : 'http://localhost:3000'}/api/blocks`);
    const data = response.data.blocks
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