import express from "express";
import { getMe, deleteUser } from "../Controller/User.js";
import { RoomController } from "../Controller/Room.js";
import { TopicController } from "../Controller/Topic.js";
import { CommentController } from "../Controller/Comment.js";

const router = express.Router();

router.get("/user", getMe);
router.delete("/user/:id", deleteUser);
router.post("/create-room", RoomController.createRoom);
router.post("/create-topic", TopicController.createTopic)
router.post("/create-comment", CommentController.createComment)
router.get("/get-comments/:topicId", CommentController.getCommentsByTopic)

export default router;
