import User from "../Models/User.js";
const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createUser = async (name, email, password, phone, userType, rooms, isVerified) => {
    try {
        const user = await User.create({
            name,
            email,
            password,
            phone,
            userType,
            rooms,
            isVerified,
        });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const blockUser = async (id) => {
    try {
        const user = await User.findByIdAndUpdate(id, { isBlocked: true });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const unBlockUser = async (id) => {
    try {
        const user = await User.findByIdAndUpdate(id, { isBlocked: false });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const verifyUser = async (id) => {
    try {
        const user = await User.findByIdAndUpdate(id, { isVerified: true });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const unVerifyUser = async (id) => {
    try {
        const user = await User.findByIdAndUpdate(id, { isVerified: false });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const addRoomToUser = async (id, roomId) => {
    try {
        const user = await User.findByIdAndUpdate(id, { $push: { rooms: roomId } });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const removeRoomFromUser = async (id, roomId) => {
    try {
        const user = await User.findByIdAndUpdate(id, { $pull: { rooms: roomId } });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getAllowedRooms = async (id) => {
    try {
        const pipeLine = [
            {
                $match: {
                    _id: id
                }
            },
            {
                $lookup: {
                    from: "rooms",
                    localField: "rooms",
                    foreignField: "_id",
                    as: "rooms"
                }
            }
        ]
        const user = await User.aggregate(pipeLine);
        return user[0].rooms;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const UserRepository = { getUserById, createUser, blockUser, unBlockUser, verifyUser, unVerifyUser, addRoomToUser, removeRoomFromUser, getAllowedRooms };