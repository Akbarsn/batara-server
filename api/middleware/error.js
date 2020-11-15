/* eslint-disable no-unused-vars */
const { GeneralError } = require('../util/error');

const handleErrors = (err, _req, res, _next) => {
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: err.message,
    });
};

const handleNotFound = (_req, res, _next) => {
    return res.status(404).json({
        status: 'error',
        message: 'API Endpoint not found',
    });
};

module.exports = { handleErrors, handleNotFound };
