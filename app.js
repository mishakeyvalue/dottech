const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const myLogger = require('./myLogger');

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

app.use(myLogger.middleware);

// Fire up Controllers
app.get('/', (req, res) =>{
    res.render('index');
});

app.listen(PORT); console.log("App is listening on the port " + PORT);