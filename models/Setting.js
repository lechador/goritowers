import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
    setting_name: String, 
    setting_value: String
})

export default mongoose.models.Setting || mongoose.model('Setting', SettingsSchema);