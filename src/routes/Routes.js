

const routes = (app) => {
    app.route('/certificates')
        .get((req, res) => res.send('All certificates acquired successfully'));


    app.route('/feedback')
        .post((req, res) => res.send('You have received some feedback'));
}

export default routes;