import Room from "../Models/Room.js";

export const createRoom = async (req, res) => {
    try {
        const { name, topic } = req.body;
        const user = req.user; // Attached by protect middleware

        const room = await Room.create({
            name,
            topic,
            createdBy: user._id
        });

        res.status(201).json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};