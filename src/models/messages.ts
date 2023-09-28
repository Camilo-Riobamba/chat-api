import connection from '@connection';
import { NUMBER, STRING } from 'sequelize';

const Message = connection.define('messages', {
    id: {
        type: NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: NUMBER
    },
    conversationId: {
        type: NUMBER
    },
    content: {
        type: STRING
    },
    createdBy: {
        type: STRING
    }
});

export default Message;
