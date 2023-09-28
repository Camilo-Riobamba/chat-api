import Conversation from '@models/conversation';
import User from '@models/user';
import Route from './type';

const ConversationController: Route = {
    createPairConversation: async (req, res) => {
        const { title, createdBy, participantIds } = req.body;

        try {
            const conversation = await Conversation.create({
                title,
                type: 'pair',
                createdBy
            });

            // Agregar participantes a la conversación
            await conversation.addParticipants(participantIds);

            res.status(201).json(conversation);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createGroupConversation: async (req, res) => {
        const { title, createdBy, participantIds } = req.body;

        try {
            const conversation = await Conversation.create({
                title,
                type: 'group',
                createdBy
            });

            // Agregar participantes a la conversación
            await conversation.addParticipants(participantIds);

            res.status(201).json(conversation);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getUserConversations: async (req, res) => {
        const { userId } = req.params;

        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res
                    .status(404)
                    .json({ error: 'Usuario no encontrado.' });
            }

            const conversations = await user.getConversations();
            res.json(conversations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getConversation: async (req, res) => {
        const { conversationId } = req.params;

        try {
            const conversation = await Conversation.findByPk(conversationId, {
                include: [
                    { model: User, as: 'participants' },
                    { model: Message }
                ]
            });

            if (!conversation) {
                return res
                    .status(404)
                    .json({ error: 'Conversación no encontrada.' });
            }

            res.json(conversation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteConversation: async (req, res) => {
        const { conversationId } = req.params;

        try {
            const conversation = await Conversation.findByPk(conversationId);

            if (!conversation) {
                return res
                    .status(404)
                    .json({ error: 'Conversación no encontrada.' });
            }

            await conversation.destroy();
            res.json({ message: 'Conversación eliminada con éxito.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default ConversationController;
