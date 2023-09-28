import connection from '@connection';
import { NUMBER, STRING } from 'sequelize';
import Message from './messages';

const Conversation = connection.define('conversations', {
    id: {
        type: NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: NUMBER
    },
    title: {
        type: STRING
    },
    type: {
        type: STRING
    },
    createdBy: {
        type: STRING
    }
});

Conversation.hasMany(Message, {
    foreignKey: 'conversationId',
    sourceKey: 'id'
});

export default Conversation;
