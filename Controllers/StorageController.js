const storageService = require('../Models/StorageService');

const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {




    app.get('/', function(req, res) {

        storageService.GetAll(function(data) {
            res.render("index", { tasks: data });
        });
    });

    app.post('/', urlencodedParser, function(req, res) {

        storageService.Add({ task: req.body.body });

        res.redirect('/');
    });

    app.put("/:id", function(req, res) {
        storageService.MakeDone(req.params.id, function() {
            res.redirect('/');
        })
    });


    app.get('/api', function(req, res) {
        res.end("Yoy, Fred! Its an api!")
    });

};