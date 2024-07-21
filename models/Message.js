import mongoose from "mongoose";

const messageSchema  = new mongoose.Schema({
    locale: String,
    messages: mongoose.Schema.Types.Mixed,
})

export default mongoose.models.Message || mongoose.model('Message', messageSchema);