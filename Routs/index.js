import express from "express";
import publicRoutes from "./publicRoutes.js";
import protectedRoutes from "./protectedRoutes.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.use("/", publicRoutes);
router.use("/", protect, protectedRoutes);

export default router;
