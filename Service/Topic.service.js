import { UserService } from "./User.service.js";
import { TopicRepository } from "../Repository/Topic.repository.js";
import { RoomService } from "./Rooms.service.js";
import mongoose from "mongoose";

const createTopic = async (name, roomid, userid) => {
    try {
        if (!name || !roomid || !userid) {
            throw new Error("Topic name, room id and user id are required");
        }
        typeof userid !== "string" && (userid = userid.toString());

        const user = await UserService.getUserById(userid);
        if (!user) {
            throw new Error("User not found");
        }
        const topic = await TopicRepository.createTopic(name, user?._id);
        if (topic) {
            await RoomService.addTopicToRoom(roomid, topic?._id.toString());
        }
        return topic;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getTopicById = async (topicId) => {
    try {
        if (!topicId) {
            throw new Error("Topic id is required");
        }
        console.log(`[TopicService] Fetching topic with ID: ${topicId}`);
        const topic = await TopicRepository.getTopicById(topicId);
        if (!topic) {
            console.log(`[TopicService] No topic found for ID: ${topicId}`);
        }
        return topic;
    } catch (error) {
        console.error(`[TopicService] Error fetching topic ${topicId}:`, error);
        throw error;
    }
}

export const TopicService = {
    createTopic,
    getTopicById
};