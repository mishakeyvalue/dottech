const express = require('express');
const shelveItController = require('./controllers/shelveItController');

const app = express();

// // setting up views folder
// app.set('views', path.join(__dirname, 'views'));

// setting up template engine
app.set('view engine', 'ejs');

// serving assets files
app.use('/assets', function(req, res, next) {
    console.log("assets were asked: " + req.url)
    express.static('public/assets')(req, res, next);
});

// fire controllers
shelveItController(app);


// listen to the port
app.listen(3000);
console.log('Listening to the port 3000..');