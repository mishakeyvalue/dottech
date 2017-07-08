const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let app = express();

var opts = require('optimist')
    .options({
        port: {
            demand: false,
            alias: 'p',
            description: 'port to listen to'
        },
    }).boolean('allow_discovery').argv;
let PORT;
if (opts.port) {
    PORT = opts.port;
} else PORT = 5555;

// configure my app
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'myIcon.png')));

// Fire up Controllers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('secret'));

const apiController = require('./controllers/apiController');
const homeController = require('./controllers/homeController');

app.use('/api', apiController);
app.use('/', homeController);

app.listen(PORT); console.log("App is listening on the port " + PORT);