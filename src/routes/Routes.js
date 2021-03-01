import {
    getCertificates,
    addNewFeedback} from '../controllers/controller'

const routes = (app) => {
    app.route('/certificates')
        .get(getCertificates);


    app.route('/feedback')
        .post(addNewFeedback);
}

export default routes;