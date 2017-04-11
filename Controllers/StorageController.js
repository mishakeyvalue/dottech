const storageService = require('../Models/StorageService');

const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {




    app.get('/', function(req, res) {

        storageService.GetAll(function(data) {
            res.render("index", { taskCollectionViewModel: data });
        });
    });

    app.post('/', urlencodedParser, function(req, res) {

        storageService.Add({ task: req.body.body });

        res.redirect('/');
    });

    app.delete('/', urlencodedParser, function(req, res) {

        storageService.Add({ task: req.body.body });

        res.redirect('/');
    });

    app.put("/do/:id", function(req, res) {
        storageService.MakeDone(req.params.id, function() {
            res.sendStatus(200)
        })
    });

    app.put("/undo/:id", function(req, res) {
        storageService.MakeUndone(req.params.id, function() {
            res.sendStatus(200)
        })
    });


    app.get('/api', function(req, res) {
        res.end("Yoy, Fred! Its an api!")
    });

};