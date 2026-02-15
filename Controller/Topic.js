import { TopicService } from "../Service/Topic.service.js";

const createTopic = async (req, res) => {
    try {
        const { name, roomid } = req.body;
        const user = req.user;
        const topic = await TopicService.createTopic(name, roomid, user._id);
        res.status(201).json(topic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export const TopicController = {
    createTopic
};