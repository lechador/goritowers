import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema({
    project_id: Number,
    block_id: Number, 
    block_name: String,
    ongoing: Boolean, 
    block_image: String, 
    block_image_big: String
})

export default mongoose.models.Block || mongoose.model('Block', BlockSchema);