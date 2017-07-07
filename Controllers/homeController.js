const express = require('express');
const router = express.Router();

const fs = require('fs');
const myLogger = require('../myLogger');


router.use(myLogger.middleware);

router.get('*', function(request, response) {
    response.sendfile('./public/index.html');
});

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