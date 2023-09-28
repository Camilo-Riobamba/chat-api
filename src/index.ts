import e from 'express';
import bodyParser from 'body-parser';

import routes from '@routes';
import connection from '@connection';

const app = e();

app.use(bodyParser.json());
app.use(routes);

try {
    connection.authenticate();
    connection.sync();

    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
} catch (e) {
    console.log('Something was wrong');
}
