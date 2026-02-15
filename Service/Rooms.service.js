import { UserService } from "./User.service.js";
import { RoomRepository } from "../Repository/Room.repository.js";
import { TopicRepository } from "../Repository/Topic.repository.js";
import mongoose from "mongoose";

const createRoom = async (name, userid) => {
    try {
        if (!name || !userid) {
            throw new Error("Room name and user id are required");
        }
        typeof userid !== "string" && (userid = userid.toString());

        const user = await UserService.getUserById(userid);
        if (!user) {
            throw new Error("User not found");
        }
        const room = await RoomRepository.createRoom(name, user?._id);

        return room;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const addTopicToRoom = async (roomid, topicid) => {
    try {
        if (!roomid || !topicid) {
            throw new Error("Room id and topic id are required");
        }
        roomid = new mongoose.Types.ObjectId(roomid);
        topicid = new mongoose.Types.ObjectId(topicid);
        const room = await RoomRepository.getRoomById(roomid);
        if (!room) {
            throw new Error("Room not found");
        }
        const topic = await TopicRepository.getTopicById(topicid);
        if (!topic) {
            throw new Error("Topic not found");
        }
        const topicToRoom = await RoomRepository.addTopicToRoom(roomid, topicid);

        return topicToRoom;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const RoomService = {
    createRoom,
    addTopicToRoom
};
