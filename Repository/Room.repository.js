import Room from "../Models/Room.js";

const createRoom = async (name, userid) => {
    try {
        const room = await Room.create({
            name,
            createdBy: userid
        });
        return room;
    } catch (error) {
        throw error;
    }
};

const getRoomById = async (roomid) => {
    try {
        const room = await Room.findById(roomid);
        return room;
    } catch (error) {
        throw error;
    }
};

const addTopicToRoom = async (roomid, topicid) => {
    try {
        const room = await Room.findById(roomid);
        if (!room) {
            throw new Error("Room not found");
        }
        room.topics.push(topicid);
        await room.save();
        return room;
    } catch (error) {
        throw error;
    }
};

export const RoomRepository = {
    createRoom,
    getRoomById,
    addTopicToRoom
};