const route = require('./route');

const InitAndStart = () => {
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const PORT = process.env.PORT || 5000;
    const DB_URI = process.env.DB_URI;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/public', express.static('./public'));

    app.options('*', cors());
    app.use(cors());

    require('./config/mongoDb').InitDB(DB_URI);
    require('./route').InitRoute(app);

    app.listen(PORT, () => {
        console.log(`Listening to ${PORT}`);
    });
};

module.exports = { InitAndStart };
