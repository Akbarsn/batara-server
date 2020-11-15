require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
    res.json({
        message: 'Pong',
    });
});

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
