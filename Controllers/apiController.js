const express = require('express');
const router = express.Router();

const pageService = require('../services/pageService');

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function (req, res) {
    res.end('Welcome to the api zone!');
});

router.get('/pages', function (req, res) {
    pageService.getAll(function (err, pages) {
        if (err) res.send(500, err);
        else {
            res.send(pages);
        }
    });
});

router.post('/pages', function (req, res) {
    pageService.add(req.body.title,
        req.body.url,
        req.body.content,
        req.body.menuIndex,
        function (err, page) {
            if (err) res.send(501, err);
            else {
                res.send(page);

            }
        });
});



module.exports = router;