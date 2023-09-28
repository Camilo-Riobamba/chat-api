import Message from '@models/messages';
import Conversation from '@models/conversation';
import Route from './type';

const MessageController: Route = {
    createMessage: async (req, res) => {
        const { content, createdBy } = req.body;
        const { conversationId } = req.params;

        try {
            const conversation = await Conversation.findByPk(conversationId);

            if (!conversation) {
                return res
                    .status(404)
                    .json({ error: 'Conversación no encontrada.' });
            }

            const message = await Message.create({
                content,
                createdBy,
                ConversationId: conversationId
            });
            res.status(201).json(message);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

export default MessageController;
