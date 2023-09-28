import connection from '@connection';
import { NUMBER } from 'sequelize';
import Conversation from './conversation';
import User from './user';

const ConversationUsers = connection.define('conversationUsers', {
    id: {
        type: NUMBER,
        primaryKey: true,
        autoIncrement: true
    }
});

User.belongsToMany(Conversation, {
    through: 'UserConversation',
    as: 'conversations'
});
Conversation.belongsToMany(User, {
    through: 'UserConversation',
    as: 'participants'
});

export default ConversationUsers;
