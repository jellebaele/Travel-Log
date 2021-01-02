const express = require('express');
// Morgan is a locker that automatically locks all requests and will print this in the terminal
// Is morgan middleware, will show request with ipaddress
const morgan = require('morgan');
// Helmet will add or remove some info on the headers. E.g. "X-Powered-By: Express" --> Makes
// a site vulnerable for hacking since hackers see express is known. This will secure the app a little more
const helmet = require('helmet')
// Add cross origin resource header to acces from other locations
const cors = require('cors');
// Add mongoose
const mongoose = require('mongoose');
// To store variables in 'proces.env.VARIABLE': npm install dotenv
// When done, create a file called '.env' and declare the preferred values.
require('dotenv').config();

const middlewares = require('./middlewares')


const app = express();

// Connect database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});

app.use(morgan('common'));
app.use(helmet());
// Allow only requests from a specific site
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.port || 1337;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})