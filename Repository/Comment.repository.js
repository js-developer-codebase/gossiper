import Comment from "../Models/Comment.js";
import mongoose from "mongoose";

const createComment = async (userId, topicId, content, isAnonymous) => {
    try {
        const newComment = await Comment.create({
            user: userId,
            topic: topicId,
            content,
            isAnonymous
        });
        return newComment;
    } catch (error) {
        throw error;
    }
}

const getCommentsByTopic = async (topicId) => {
    try {
        const comments = await Comment.aggregate([
            { $match: { topic: new mongoose.Types.ObjectId(topicId) } },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetails"
                }
            },
            { $unwind: "$userDetails" },
            { $sort: { createdAt: 1 } },
            {
                $project: {
                    _id: 0,
                    comment: "$content",
                    isanynomus: "$isAnonymous",
                    user: {
                        $cond: {
                            if: "$isAnonymous",
                            then: "Anonymous",
                            else: "$userDetails.name"
                        }
                    },
                    usermail: {
                        $cond: {
                            if: "$isAnonymous",
                            then: "Anonymous",
                            else: "$userDetails.email"
                        }
                    }
                }
            }
        ]);
        return comments;
    } catch (error) {
        throw error;
    }
}

export const CommentRepository = {
    createComment,
    getCommentsByTopic
};