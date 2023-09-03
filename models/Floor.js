import mongoose from "mongoose";

const FloorSchema = new mongoose.Schema({
    project_id: Number,
    block_id: Number,
    block_name: String,
    floor_id: Number,
    floor_image: String
})

export default mongoose.models.Floor || mongoose.model('Floor', FloorSchema);