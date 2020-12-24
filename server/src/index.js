const express = require('express');
// Morgan is a locker that automatically locks all requests and will print this in the terminal
// Is morgan middleware, will show request with ipaddress
const morgan = require('morgan');
// Helmet will add or remove some info on the headers. E.g. "X-Powered-By: Express" --> Makes
// a site vulnerable for hacking since hackers see express is known. This will secure the app a little more
const helmet = require('helmet')
// Add cross origin resource header to acces from other locations
const cors = require('cors');

const middlewares = require('./middlewares')

const app = express();
app.use(morgan('common'));
app.use(helmet());
// Allow only requests from a specific site
app.use(cors({
    origin: 'http://localhost:3000'
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