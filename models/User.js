import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String, 
        required: [true, "must provide an email"],
        unique: [true, "must be unique"]
    }, 
    password: { 
        type: String, 
        required: [true, "must provide an password"]
    }
}, 
{
    timestamps: true,
})

export default mongoose.models.User || mongoose.model('User', UserSchema);