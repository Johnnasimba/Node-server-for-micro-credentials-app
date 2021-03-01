import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FeedbackSchema = new Schema({
    name: {
        type: String,
        required : 'Enter your name'
    },
    email: {
        type: String,
        required : 'Enter your email'
    },
    feedback: {
        type: String,
        required : 'Give me some advice or any form of feedback'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});