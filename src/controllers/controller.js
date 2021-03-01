import mongoose from 'mongoose';
import { 
    CertificatesSchema,
    FeedbackSchema } from '../models/models';



// Get all Certificates
const Certificates = mongoose.model('Certificates', CertificatesSchema);

export const getCertificates = (req, res) => {
    Certificates.find({}, (err, certificate) => {
        if (err) {
            res.send(err);
        }
        res.json(certificate);
    });
}


// feedback POST endpoint
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