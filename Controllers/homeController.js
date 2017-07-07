const bodyParser = require('body-parser');
const fs = require('fs');
const myLogger = require('../myLogger');

const pageService = require('../services/pageService');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    app.use(myLogger.middleware);
    
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/pages',(req,res)=>{
        pageService.getPage(function(err,pages){
            if(err) res.send(err);
            res.send(pages);
        })
    })

    app.get('/_log', myLogger._serveLogFile);
};