import User from '@models/user';
import Route from './type';

const UserController: Route = {
    register: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res
                    .status(401)
                    .json({ error: 'Usuario no encontrado.' });
            }

            if (user.password !== password) {
                return res
                    .status(401)
                    .json({ error: 'Contraseña incorrecta.' });
            }

            res.json({ message: 'Inicio de sesión exitoso.', user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default UserController;
