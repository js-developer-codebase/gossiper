import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
        required: true
    },
    isAnonymous: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;