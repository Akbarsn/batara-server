const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
    {
        title: String,
        language: String,
        mentor: String,
        duration: Number, //In Hours
        topics: [
            {
                id: Number,
                title: String,
                content: String,
                videoURI: String,
            },
        ],
        userJoined: { type: Number, default: 0 },
    },
    { timestamps: {} },
);

module.exports = mongoose.model('Course', CourseSchema);
