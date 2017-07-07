const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.end('Welcome to the api zone!');
});

module.exports = router;