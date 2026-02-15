import { CommentRepository } from "../Repository/Comment.repository.js";
import { TopicService } from "./Topic.service.js";
import { UserService } from "./User.service.js";

const createComment = async (userId, topicId, content, isAnonymous) => {
    try {
        if (!userId || !topicId || !content) {
            throw new Error("All fields are required");
        }
        const topic = await TopicService.getTopicById(topicId);
        if (!topic) {
            throw new Error("Topic not found");
        }
        const user = await UserService.getUserById(userId.toString());
        if (!user) {
            throw new Error("User not found");
        }
        const newComment = await CommentRepository.createComment(user?._id, topic?._id, content, isAnonymous);
        return newComment;
    } catch (error) {
        throw error;
    }
}

const getCommentsByTopic = async (topicId) => {
    try {
        if (!topicId) {
            throw new Error("Topic id is required");
        }
        const comments = await CommentRepository.getCommentsByTopic(topicId);
        return comments;
    } catch (error) {
        throw error;
    }
}

export const CommentService = {
    createComment,
    getCommentsByTopic
};