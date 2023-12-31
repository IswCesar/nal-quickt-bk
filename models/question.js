const { Schema, model } = require('mongoose');

const QuestionSchema = Schema({
    test: {
        type: Schema.Types.ObjectId,
        ref: "Test",
        required: true,
    },
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
    },
    optionB: {
        type: String,
    },
    optionC: {
        type: String,
    },
    optionD: {
        type: String,
    },
    correctAnswer: {
        type: String,
        required: true
    }
})

QuestionSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model("Question", QuestionSchema);