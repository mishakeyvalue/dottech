const express = require('express');
const router = express.Router();

const pageService = require('../services/pageService');

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', function(req, res){
    res.end('Welcome to the api zone!');
});

router.get('/pages', function(req,res){
    pageService.getAll(function(err, pages){
        if (err) res.send(500, err);
        res.send(pages);
    });
});

router.post('/pages', function(req, res){
    
});



module.exports = router;