import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Certificates Schema
export const CertificatesSchema = mongoose.Schema({
    title: {
        type: String,
        required : 'Enter certificate title'
    },
    courseUrl: {
        type: String,
        required : 'Enter url of the courses for this certificate'
    },
    category: {
        type: String,
        required : 'Under what category of web development is this certificate? eg back-end'
    },
    date: {
        type: String,
        required : 'Enter date of completion of the certificate'
    },
    courseHours: {
        type: Number,
        required : 'Under the number of hours it takes to complete this course as provided by the learning institute'
    },
    topics: {
        type: [],
        required : 'Enter main topics covered in this course'
    },
    pdfUrl: {
        type: String,
        required : 'enter Certificate url'
    }
}, {
    collection: 'certificates'
})


// Feedback Schema
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
}, {
    collection: 'feedback'
});