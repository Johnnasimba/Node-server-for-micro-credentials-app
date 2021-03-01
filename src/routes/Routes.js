import {addNewFeedback} from '../controllers/controller'

const routes = (app) => {
    app.route('/certificates')
        .get((req, res) => res.send('All certificates acquired successfully'));


    app.route('/feedback')
        .post(addNewFeedback);
}

export default routes;