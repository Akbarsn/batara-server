const route = require('./route');

const InitAndStart = () => {
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 5000;
    const DB_URI = process.env.DB_URI;

    require('./config/mongoDb').InitDB(DB_URI)

    require('./route').InitRoute(app);

    app.listen(PORT, () => {
        console.log(`Listening to ${PORT}`);
    });
};

module.exports = { InitAndStart };
