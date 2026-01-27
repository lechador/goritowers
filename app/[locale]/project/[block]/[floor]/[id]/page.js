import ApartmentBody from "@/app/components/apartmentBody";
import ApartmentHead from "@/app/components/apartmentHead";
import { notFound } from 'next/navigation'
import {setRequestLocale} from 'next-intl/server';
import { getApartmentData } from "@/lib/data";


export default async function AptHome({ params }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const apartment = await getApartmentData(id);
  if(!apartment) {
    notFound()
  }
  
  return (
    <>
      <ApartmentHead 
        project_name={apartment.project_name}
        block_id={apartment.block_id}
        floor_id={apartment.floor_id}
        apartment_number={apartment.apartment_number} 
      />
      <ApartmentBody 
        apartment_area={apartment.apartment_area}
        living_area={apartment.living_area}
        balcony_area={apartment.balcony_area}
        apartment_render_image={apartment.apartment_render_image}
        living_room_and_kitchen_area={apartment.living_room_and_kitchen_area}
        toilet_area={apartment.toilet_area}
        bedroom_area={apartment.bedroom_area}
        second_bedroom_area={apartment.second_bedroom_area}
        third_bedroom_area={apartment.third_bedroom_area}
      />
    </>
  );
}
