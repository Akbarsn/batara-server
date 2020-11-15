module.exports = {
    InitRoute: (app) => {
        const utilHandler = require('../handler/util');
        const authHandler = require('../handler/auth');

        app.get('/ping', utilHandler.PingHandler);
        app.post('/auth/register', authHandler.RegisterHandler);
        app.post('/auth/login', authHandler.LoginHandler);
    },
};
