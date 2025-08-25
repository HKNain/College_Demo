import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: true,
    },
});

const Img = mongoose.model("Images", imgSchema);

export default Img;