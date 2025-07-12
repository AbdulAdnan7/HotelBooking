import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    price: Number,
    location: String,
    image: String,
    type: {type: String, default: 'Standard'},
}, {timestamps: true });

export default mongoose.model('Hotel', hotelSchema)