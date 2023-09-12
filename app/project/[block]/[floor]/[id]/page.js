import ApartmentBody from "@/app/components/apartmentBody";
import ApartmentHead from "@/app/components/apartmentHead";
import axios from "axios";
import { notFound } from 'next/navigation'


export default async function page({ params }) {
  const apartmentData = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV=='production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000'}/api/apartments/${params.id}`);
  const apartment = apartmentData.data.apartment;
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
        apartment_price={apartment.apartment_price}
        apartment_area={apartment.apartment_area}
        living_area={apartment.living_area}
        balcony_area={apartment.balcony_area}
        apartment_render_image={apartment.apartment_render_image}
      />
    </>
  );
}
