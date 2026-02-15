import mongoose from "mongoose";

const userTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["ADMIN", "USER"],
        required: true
    },
    allowedTasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AllowedTask"
    }]
});

const UserType = mongoose.model("UserType", userTypeSchema);

export default UserType;