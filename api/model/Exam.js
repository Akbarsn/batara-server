const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    courseID: mongoose.Schema.Types.ObjectId,
    questions: [
        {
            id: Number,
            question: String,
            answers: [
                {
                    id: Number,
                    answer: String,
                },
            ],
            correctAnswerID: Number,
        },
    ],
});

module.exports = mongoose.model('Exam', ExamSchema);
