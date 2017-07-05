const express = require('express');

let app = express();

// Configure port via params (or default)
var opts = require('optimist').options({
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

// Fire up Controllers
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT); console.log("App is listening on the port " + PORT);