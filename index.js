import express from 'express';
import routes from './src/routes/Routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import databaseUrl from './connection.js'

const app = express();
const PORT = 3000;

// mongoose connections
mongoose.Promise = global.Promise;
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes 
routes(app);

app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`)
})


app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));