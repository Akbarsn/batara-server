module.exports = {
    InitDB: (dbURI) => {
        const mongoose = require('mongoose');

        mongoose
            .connect(dbURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('DB Connected');
            })
            .catch((err) => {
                console.log('DB Error\n', err);
            });
    },
};
