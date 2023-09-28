import connection from '@connection';
import { NUMBER, STRING } from 'sequelize';
import Conversation from './conversation';
import Message from './messages';

const User = connection.define('users', {
    id: {
        type: NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: STRING
    },
    email: {
        type: STRING
    },
    password: {
        type: STRING
    },
    firstName: {
        type: STRING
    },
    lastName: {
        type: STRING
    }
});

User.hasMany(Message, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

User.hasMany(Conversation, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

export default User;
