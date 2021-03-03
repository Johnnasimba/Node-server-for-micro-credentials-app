import {
    getCertificates,
    addNewFeedback} from '../controllers/controller'

const routes = (app) => {
    
// Certificates GET endpoint route
    app.route('/certificates')
        .get(getCertificates);

// Feedback POST endpoint route
    app.route('/feedback')
        .post(addNewFeedback);
}

export default routes;