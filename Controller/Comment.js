import { CommentService } from "../Service/Comment.js";

const createComment = async (req, res) => {
    try {
        const { topicId, content, isAnonymous } = req.body;
        const user = req.user;
        const newComment = await CommentService.createComment(user?._id, topicId, content, isAnonymous);
        res.status(201).json({ message: "Comment created successfully", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCommentsByTopic = async (req, res) => {
    try {
        const { topicId } = req.params;
        const comments = await CommentService.getCommentsByTopic(topicId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const CommentController = {
    createComment,
    getCommentsByTopic
};