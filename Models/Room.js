import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    topic: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

export default Room;