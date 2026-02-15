import { RoomService } from "../Service/Rooms.service.js";

export const createRoom = async (req, res) => {
    try {
        const { name } = req.body;
        const user = req.user;

        const room = await RoomService.createRoom(name, user._id);

        res.status(201).json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export const RoomController = {
    createRoom
};
