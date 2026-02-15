import { UserRepository } from "../Repository/User.repository.js";
import mongoose from "mongoose";

const getUserById = async (userid) => {
    try {
        if (!userid) {
            throw new Error("User ID is required");
        }
        const userId = new mongoose.Types.ObjectId(userid);
        const user = await UserRepository.getUserById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const UserService = { getUserById };