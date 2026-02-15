import Topic from "../Models/Topic.js";

const createTopic = async (name, userid) => {
    try {
        const topic = await Topic.create({
            name,
            createdBy: userid
        });
        return topic;
    } catch (error) {
        throw error;
    }
};

const getTopicById = async (topicid) => {
    try {
        const topic = await Topic.findById(topicid);
        return topic;
    } catch (error) {
        console.error(`[TopicRepository] DB Error:`, error);
        throw error;
    }
};

export const TopicRepository = {
    createTopic,
    getTopicById
};