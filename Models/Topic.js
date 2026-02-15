import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    validity: {
        type: Date,
        default: Date.now() + 7 * 24 * 60 * 60 * 1000
    }
}, { timestamps: true });

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;