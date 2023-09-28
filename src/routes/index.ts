import ConversationController from '@controllers/conversationController';
import MessageController from '@controllers/messageController';
import UserController from '@controllers/userController';
import { Router } from 'express';

const router = Router();
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/users', UserController.getAllUsers);
router.post(
    '/conversations/pair',
    ConversationController.createPairConversation
);
router.post(
    '/conversations/group',
    ConversationController.createGroupConversation
);
router.get(
    '/conversations/user/:userId',
    ConversationController.getUserConversations
);
router.get(
    '/conversations/:conversationId',
    ConversationController.getConversation
);
router.post(
    '/conversations/:conversationId/messages',
    MessageController.createMessage
);
router.delete(
    '/conversations/:conversationId',
    ConversationController.deleteConversation
);

export default router;
