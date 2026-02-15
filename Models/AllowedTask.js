import mongoose from "mongoose";

const allowedTaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

const AllowedTask = mongoose.model("AllowedTask", allowedTaskSchema);

export default AllowedTask;