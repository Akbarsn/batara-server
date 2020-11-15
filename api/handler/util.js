module.exports = {
    PingHandler: (req, res) => {
        res.json({
            message: 'Pong',
        });
    },
};
