const { Router } = require('express');

module.exports = {
    InitRoute: (app) => {
        const router = Router()
        const utilHandler = require('../handler/util');

        app.get('/ping', utilHandler.PingHandler);
    },
};
