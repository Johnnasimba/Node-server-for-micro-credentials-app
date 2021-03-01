import mongoose from 'mongoose';
import { FeedbackSchema } from '../models/models';

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export const addNewFeedback = (req, res) => {
    let newFeedback = new Feedback(req.body);

    newFeedback.save((err, Feedback) => {
        if (err) {
            res.send(err);
        }
        res.json(Feedback);
    });
}