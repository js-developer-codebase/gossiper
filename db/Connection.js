import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME
        });
        console.log("Database connected");
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default Connection;
