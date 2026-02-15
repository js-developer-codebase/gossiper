import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import Connection from "./db/Connection.js";
import authRoutes from "./Routs/index.js";
import { protect } from "./Middleware/authMiddleware.js";

dotenv.config();

const app = express();

const startServer = async () => {
    const isConnected = await Connection();

    if (!isConnected) {
        console.log("Database connection failed");
        process.exit(1);
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use("/api/v0", authRoutes);

    // Route 1: Authenticate user, if valid redirect to gossip, else redirect to login
    app.get("/auth-check", (req, res) => {
        const token = req.cookies.jwt;
        if (token) {
            try {
                jwt.verify(token, process.env.JWT_SECRET);
                return res.redirect("/gossip");
            } catch (error) {
                // Token invalid, fall through to redirect to login
            }
        }
        // Redirect to login if not valid
        res.status(302).json({
            message: "Redirecting to login...",
            redirectUrl: "/api/v0/login"
        });
    });

    // Protected gossip route
    app.get("/gossip", protect, (req, res) => {
        res.send("Welcome to the Gossip Route! You are authenticated.");
    });

    app.listen(process.env.SERVER_PORT || 3000, () => {
        console.log(`Server running on port ${process.env.SERVER_PORT || 3000}`);
    });
};

startServer();
