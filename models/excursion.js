import mongoose from "mongoose";

const excursionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,
    },
    date:{
        type:String,
        required:true
    }
});

export default mongoose.model("excursion", excursionSchema);
