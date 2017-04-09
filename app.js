const express = require('express');
const StorageController = require('./Controllers/StorageController');

let app = express();
// configure my app
app.set('view engine', 'ejs');
app.use('/assets', function(req, res, next) {
    console.log("assets were asked: " + req.url)
    express.static('public/assets')(req, res, next);
});


// Fire up Controllers
StorageController(app);

app.listen(3000);