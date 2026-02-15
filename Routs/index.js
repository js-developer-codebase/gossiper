import express from "express";
import { register, login, getMe, deleteUser } from "../Controller/User.js";
import { createRoom } from "../Controller/Room.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/user", protect, getMe);
router.delete("/user/:id", protect, deleteUser);
router.post("/room", protect, createRoom);

export default router;
