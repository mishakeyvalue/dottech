const express = require('express');
const router = express.Router();
const myLogger = require('../myLogger');

router.use(myLogger.middleware);

router.get('*', function(request, response) {
    response.sendfile('./public/index.html');
});

module.exports = router;