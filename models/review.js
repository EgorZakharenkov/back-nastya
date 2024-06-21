import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,

    },
});

export default mongoose.model("review", reviewSchema);
