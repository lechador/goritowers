import mongoose from "mongoose";

const ApartmentSchema = new mongoose.Schema({
    project_id: Number,
    project_name: String, 
    block_id: Number,
    floor_id: Number, 
    apartment_number: Number,
    apartment_price: Number,
    apartment_area: Number,
    living_area: Number,
    balcony_area: Number,
    living_room_and_kitchen_area: Number, 
    toilet_area: Number,
    bedroom_area: Number, 
    second_bedroom_area: Number,
    apartment_render_image: String,
    is_sold: Boolean
})

export default mongoose.models.Apartment || mongoose.model('Apartment', ApartmentSchema)