const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const fs = require('fs');
const myLogger = require('../myLogger');

const pageService = require('../services/pageService');

let urlencodedParser = bodyParser.urlencoded({ extended: false });


router.use(myLogger.middleware);

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/pages', (req, res) => {
    pageService.getPage(function (err, pages) {
        if (err) res.send(err);
        res.send(pages);
    })
})

router.get('/_log', myLogger._serveLogFile);


module.exports = router;